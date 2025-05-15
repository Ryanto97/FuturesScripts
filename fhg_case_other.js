if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

Blacklight.OtherCase = function() {

    var init = function () {
        debugger;
        Blacklight.ShowCourtPack();
        Blacklight.SetVisible("fhg_onbehalfofcustomer", true);
        Blacklight.SetLable("fhg_onbehalfofcustomer", "Reported By");
        Blacklight.SetVisible(BlacklightCase.Fields.Other.CategoryOther, true);
        Blacklight.SetMandatory(BlacklightCase.Fields.Other.CategoryOther, true);

        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Other.Area, true, true); // add Area RT 02/04/2025
        



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



