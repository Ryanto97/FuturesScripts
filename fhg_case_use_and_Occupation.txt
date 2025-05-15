ï»¿if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

Blacklight.UseAndOccupation = function() {

    var init = function () {
        Blacklight.SetVisible(BlacklightCase.Fields.UseAndOccupation.UnauthorisedOccupier, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.UseAndOccupation.ReportedOnDate, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.UseAndOccupation.Area, true, true);// Add Area 03/04/2025 RT
        Blacklight.SetVisible("fhg_onbehalfofcustomer", true);
        Blacklight.SetLable("fhg_onbehalfofcustomer", "Reported By");
        Blacklight.ShowCourtPack();
        //debugger;
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