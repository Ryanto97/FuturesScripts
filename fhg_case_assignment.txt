ï»¿if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

Blacklight.Assignment = function() {

    var init = function() {

        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Assignment.WhoIsMovingOut, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Assignment.ProposedNewTenant, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Assignment.Area, true, true) // Add Aread 01/04/2025 RT
        Blacklight.SetLable(BlacklightCase.Fields.Assignment.ProposedNewTenant, "Proposed new tenant");
        Blacklight.FormContext.getAttribute(BlacklightCase.Fields.Common.Customer).addOnChange(Blacklight.OnWhoIsMovingOutChanged);
        Blacklight.SetVisible(BlacklightCase.Fields.Assignment.ReasonForApplication, true);
        Blacklight.SetVisible("fhg_onbehalfofcustomer", true);
        Blacklight.SetLable("fhg_onbehalfofcustomer", "Reported By");
        Blacklight.SetVisible(BlacklightCase.Fields.Assignment.HouseholdMembers, true);
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

        var customerId = Blacklight.GetValueLookupID(BlacklightCase.Fields.Common.Customer);
        if (customerId) {
            Blacklight.Common.GetTenancyPropertyOccupancy(customerId, Blacklight.OccupancySearchCompletedResults);
        }
    }

    return {
        Init: init
    };
}();