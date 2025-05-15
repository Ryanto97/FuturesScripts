ï»¿if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

Blacklight.Abandoned = function() {

    var init = function () {
        debugger;

        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Abandoned.AbandonedCategory, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Abandoned.Area, true, true); // Add area Field RT 01/04/2025
        Blacklight.SetVisible(BlacklightCase.Fields.Abandoned.ContactDetailsAddress, true);
        Blacklight.SetVisible(BlacklightCase.Fields.Abandoned.ContactDetailsEmail, true);
        Blacklight.SetVisible("fhg_onbehalfofcustomer", true);
        Blacklight.SetLable("fhg_onbehalfofcustomer", "Reported By");

        Blacklight.SetVisible(BlacklightCase.Fields.Abandoned.ContactDetailsName, true);
        Blacklight.SetVisible(BlacklightCase.Fields.Abandoned.ContactDetailsPhone, true);
        Blacklight.SetVisible(BlacklightCase.Fields.Abandoned.CustomerLastSeen, true);
        Blacklight.SetVisible(BlacklightCase.Fields.Abandoned.NewAddressIfKnown, true);
        Blacklight.SetVisible(BlacklightCase.Fields.Abandoned.ReasonForNoVisitsRequired, true);
        Blacklight.SetVisible(BlacklightCase.Fields.Abandoned.VisitsRequired, true);

        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Abandoned.Property, true, true);
        Blacklight.ShowHideTab(BlacklightCase.Tabs.actionPlans, Blacklight.GetFormType() !== Blacklight.FormTypes.Create);
        Blacklight.ShowHideTab(BlacklightCase.Tabs.abandonedInspection, Blacklight.GetFormType() !== Blacklight.FormTypes.Create);
        Blacklight.ShowCourtPack();
    };
  
    return {
        Init: init
    };
}();