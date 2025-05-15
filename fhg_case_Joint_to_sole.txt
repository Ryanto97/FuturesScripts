ï»¿if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

Blacklight.JointToSole = function() {

    var init = function() {

        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.JointToSole.WhoIsMovingOut, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.JointToSole.WhoIsStaying, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.JointToSole.Area, true, true); // Add area RT 01/04/2025
        Blacklight.SetVisible(BlacklightCase.Fields.JointToSole.HouseholdMembers, true);
        Blacklight.SetVisible("fhg_onbehalfofcustomer", true);
        Blacklight.SetLable("fhg_onbehalfofcustomer", "Reported By");
        Blacklight.FormContext.getAttribute(BlacklightCase.Fields.JointToSole.WhoIsMovingOut).addOnChange(Blacklight.OnWhoIsMovingOutChanged);
        if (Blacklight.GetFormType() !== Blacklight.FormTypes.Create) {
            Blacklight.ShowHideTab(BlacklightCase.Tabs.relatedContacts, true);
            Blacklight.ShowHideSection(BlacklightCase.Tabs.relatedContacts, BlacklightCase.Sections.relatedContacts.tab_section_additionalcustomers, false);
            Blacklight.ShowHideSection(BlacklightCase.Tabs.relatedContacts, BlacklightCase.Sections.relatedContacts.tab_relatedcontacts_household, true);
        }
        else {
            Blacklight.ShowHideTab(BlacklightCase.Tabs.relatedContacts, false);
        }

    };

    Blacklight.OnWhoIsMovingOutChanged = function () {

        var customerId = Blacklight.GetValueLookupID(BlacklightCase.Fields.JointToSole.WhoIsMovingOut);
        if (customerId) {
            Blacklight.Common.GetTenancyPropertyOccupancy(customerId, Blacklight.OccupancySearchCompletedResults);
        }
    }
    return {
        Init: init
    };
}();