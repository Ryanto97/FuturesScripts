ï»¿if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

Blacklight.PetsAnimals = function() {

    var init = function () {
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.PetsAnimals.PetsAnimalsCategory, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.PetsAnimals.RequiresContactUpdates, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.PetsAnimals.Property, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.PetsAnimals.Area, true, true); // Add field RT 02/04
        Blacklight.FormContext.getAttribute(BlacklightCase.Fields.PetsAnimals.RequiresContactUpdates).addOnChange(Blacklight.OnRequiresContactChange);
        Blacklight.SetVisible("fhg_onbehalfofcustomer", true);
        Blacklight.SetLable("fhg_onbehalfofcustomer", "Reported By");
        Blacklight.ShowCourtPack();
        if (Blacklight.GetFormType() !== Blacklight.FormTypes.Create) {
            // Show the related contact tab
            Blacklight.ShowHideTab(BlacklightCase.Tabs.actionPlans, true);
        }
        else {
            Blacklight.ShowHideTab(BlacklightCase.Tabs.actionPlans, false);
        }
    };
    Blacklight.OnRequiresContactChange = function () {
        debugger;
        var value = Blacklight.GetValue(BlacklightCase.Fields.PetsAnimals.RequiresContactUpdates);
        console.log("Value = " + value);
        if (value)
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.PetsAnimals.ReasonForNoContact, value === 100000001, value === 100000001);

    }
    return {
        Init: init
    };
}();
