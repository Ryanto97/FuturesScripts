ï»¿if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

Blacklight.BoundaryIssue = function() {

    var init = function () {
        Blacklight.SetVisible(BlacklightCase.Fields.BoundaryIssue.AddressOfBoundaryQuery, true);
        Blacklight.SetVisible(BlacklightCase.Fields.BoundaryIssue.Property, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Area, true,true);//add area - RT 01/04/2025
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
  
    return {
        Init: init
    };
}();