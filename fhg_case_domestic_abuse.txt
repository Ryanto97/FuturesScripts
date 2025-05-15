ï»¿if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

Blacklight.DomesticAbuse = function() {

    var init = function () {
        
        var isLockedCase = Blacklight.GetValue(BlacklightCase.Fields.DomesticAbuse.LockedCase);
        Blacklight.SetVisible("fhg_onbehalfofcustomer", true);
        Blacklight.SetLable("fhg_onbehalfofcustomer", "Reported By");
        Blacklight.SetFieldReadOnly(BlacklightCase.Fields.DomesticAbuse.LockedCase);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.DomesticAbuse.Area, true, true);// add Area RT 01/04/2025
        
        if (!isLockedCase) {
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.DomesticAbuse.PrimaryCategory, true, true);
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.DomesticAbuse.AllegedPerpetrator, true, false);
            //Blacklight.SetVisible(BlacklightCase.Fields.DomesticAbuse.SecondaryCategories, true);
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.DomesticAbuse.HowAndWhenToContact, true, true);
        } else {
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.DomesticAbuse.PrimaryCategory, false, false);
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.DomesticAbuse.AllegedPerpetrator, false, false);
            //Blacklight.SetVisible(BlacklightCase.Fields.DomesticAbuse.SecondaryCategories, false);
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.DomesticAbuse.HowAndWhenToContact, false, false);
        }
        
        Blacklight.SetVisible(BlacklightCase.Fields.DomesticAbuse.IncidentDate, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.DomesticAbuse.ReportedOnDate, true, true);
                
        Blacklight.ShowCourtPack();
        if (Blacklight.GetFormType() !== Blacklight.FormTypes.Create) {
            Blacklight.IsLockedDomesticAbuseCase();
        }
    };

    Blacklight.IsLockedDomesticAbuseCase = function () {
        var locked = Blacklight.GetValue(BlacklightCase.Fields.DomesticAbuse.LockedCase);
        var hasLockedRole = Blacklight.UserHasRoleAssigned("ebf16a2c-067d-ec11-8d21-6045bd0e62ad");
        var showLockedTab = false;
        if (locked != null && hasLockedRole) {
            showLockedTab = true;
        }
        var showField = false;
        if (locked) {
            showField = true;
        }
        Blacklight.ShowHideTab(BlacklightCase.Tabs.lockedDA, showLockedTab);
        Blacklight.SetVisible(BlacklightCase.Fields.DomesticAbuse.LockedCase, showField);
    }
  
    return {
        Init: init
    };
}();