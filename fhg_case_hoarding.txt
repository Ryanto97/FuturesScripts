ï»¿if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

Blacklight.Hoarding = function() {

    var init = function() {

        var isNotCreate = Blacklight.GetFormType() !== Blacklight.FormTypes.Create;
        Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.Hoarding.Risk, isNotCreate, !isNotCreate, isNotCreate);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Hoarding.Area, true, true); // Add area RT 01/04/2025
        Blacklight.ShowHideTab(BlacklightCase.Tabs.actionPlans, isNotCreate);
        Blacklight.SetVisible("fhg_onbehalfofcustomer", true);
        Blacklight.SetLable("fhg_onbehalfofcustomer", "Reported By");
        Blacklight.ShowCourtPack();
        Blacklight.ShowHideTab(BlacklightCase.Tabs.clutter_scale_record, Blacklight.GetFormType() !== Blacklight.FormTypes.Create);
    };

    
    return {
        Init: init
    };
}();