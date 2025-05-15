ï»¿if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

Blacklight.Overcrowding = function() {

    var init = function () {
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Overcrowding.SendEmailToCustomer, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Overcrowding.Area, true, true);// add area field rt 02/04
        Blacklight.ShowHideSection(BlacklightCase.Tabs.general, BlacklightCase.Sections.general.general_section_propbeds, true);
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