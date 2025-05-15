ï»¿if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

Blacklight.MultiAgencySupport = function () {

    var init = function () {
        Blacklight.ShowCourtPack();
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.MultiAgencySupport.Who, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.MultiAgencySupport.Category, true, true);
        Blacklight.SetVisible(BlacklightCase.Fields.MultiAgencySupport.ReferralReference, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.MultiAgencySupport.LockCase, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.MultiAgencySupport.Area, true, true); // Add area RT 02/04/2025
        Blacklight.SetVisible("fhg_onbehalfofcustomer", true);
        Blacklight.SetLable("fhg_onbehalfofcustomer", "Reported By");
        if (Blacklight.GetFormType() !== Blacklight.FormTypes.Create) {
            Blacklight.IsLockedMultiAgencySupport();
        } else {
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.MultiAgencySupport.Type, true, true);
        }
    };

    Blacklight.IsLockedMultiAgencySupport = function () {
        var locked = Blacklight.GetValue(BlacklightCase.Fields.MultiAgencySupport.LockCase);

        var hasLockedRole = Blacklight.UserHasRoleAssigned("ebf16a2c-067d-ec11-8d21-6045bd0e62ad");
        var showLockedTab = false;
        if (locked != null && hasLockedRole) {
            showLockedTab = true;
        }

        Blacklight.ShowHideTab(BlacklightCase.Tabs.lockedMultiAgencySupport, showLockedTab);

        Blacklight.SetFieldReadOnly(BlacklightCase.Fields.MultiAgencySupport.LockCase, locked);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.MultiAgencySupport.Type, false, false);
    }

    return {
        Init: init
    };
}();