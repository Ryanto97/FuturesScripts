ï»¿if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

Blacklight.VehiclesCase = function() {

    var init = function() {
        Blacklight.SetVisible(BlacklightCase.Fields.Vehicles.RegistrationNumber, true);
        //add area 01/04 RT 
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Vehicles.Area, true,true);
        Blacklight.SetVisible("fhg_onbehalfofcustomer", true);
        Blacklight.SetLable("fhg_onbehalfofcustomer", "Reported By");
        Blacklight.ShowCourtPack();
        debugger;
        if (Blacklight.GetFormType() !== Blacklight.FormTypes.Create) {
            // Show the related contact tab
            Blacklight.ShowHideTab(BlacklightCase.Tabs.actionPlans, true);
        }
        else {
            Blacklight.ShowHideTab(BlacklightCase.Tabs.actionPlans, false);
        }
    };
  
    return {
        Init: init
    };
}();