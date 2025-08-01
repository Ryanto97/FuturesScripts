if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

Blacklight.SupportedHousing = function () {

    var init = function () {

        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.SupportedHousing.Category, true, true);
        Blacklight.SetVisible(BlacklightCase.Fields.SupportedHousing.SubCategory, true);
        Blacklight.SetVisible(BlacklightCase.Fields.SupportedHousing.RegisteredwithDoctor, true);
        Blacklight.SetVisible(BlacklightCase.Fields.SupportedHousing.CurrentSupportAgencies, true);
        Blacklight.FormContext.getAttribute(BlacklightCase.Fields.SupportedHousing.CurrentSupportAgencies).addOnChange(Blacklight.ChangeOther);
        Blacklight.ChangeOther();
        Blacklight.SetVisible("fhg_onbehalfofcustomer", true);
        Blacklight.SetLable("fhg_onbehalfofcustomer", "Reported By");
        //TODO: Current Support Agencies, may impact on Other Agencies
        //Blacklight.SetVisible(BlacklightCase.Fields.SupportedHousing.OtherAgencies, true);
        Blacklight.SetVisible(BlacklightCase.Fields.SupportedHousing.AllegedPerpetrator, true);
        Blacklight.SetVisible(BlacklightCase.Fields.SupportedHousing.LockSupportedHousingCase, true);
 
        Blacklight.SetFieldReadOnly(BlacklightCase.Fields.SupportedHousing.LockSupportedHousingCase, Blacklight.LockSupportedHousingCaseReadOnlyState());

        if (Blacklight.GetFormType() !== Blacklight.FormTypes.Create) {
            Blacklight.IsLockedSupportedHousing();
        } else {
            Blacklight.ShowHideTab(BlacklightCase.Tabs.lockedSupportedHousingCase, false);
        }

        Blacklight.FormContext.getAttribute(BlacklightCase.Fields.SupportedHousing.Category).addOnChange(Blacklight.HideSubCategory);
    };
    Blacklight.ChangeOther = function () {
        debugger;
        //100000017 = Other
        var name = Blacklight.CheckIfFieldContainsValue(100000017,BlacklightCase.Fields.SupportedHousing.CurrentSupportAgencies);
        Blacklight.SetVisible(BlacklightCase.Fields.SupportedHousing.OtherAgencies, name);
    }
    Blacklight.IsLockedSupportedHousing = function () {
        let isCaseLocked = Blacklight.GetValue(BlacklightCase.Fields.SupportedHousing.LockSupportedHousingCase);
        let supportedHousingRole = "a5066d3b-e3f2-ec11-bb3c-00224842884a"
        let canUserViewLockedCase = Blacklight.UserHasRoleAssigned(supportedHousingRole);

        var showLockedTab = false;
        if (isCaseLocked != null && canUserViewLockedCase) {
            showLockedTab = true;
        }
        
        Blacklight.ShowHideTab(BlacklightCase.Tabs.lockedSupportedHousingCase, showLockedTab);
        //Appears on tab
        Blacklight.SetVisible(BlacklightCase.Fields.SupportedHousing.LockedSupportedHousingCase, true);
    }

    Blacklight.LockSupportedHousingCaseReadOnlyState = function () {
        let isCaseLocked = Blacklight.GetValue(BlacklightCase.Fields.SupportedHousing.LockSupportedHousingCase);
        return (isCaseLocked && Blacklight.GetFormType() !== Blacklight.FormTypes.Create);
    }


    Blacklight.HideSubCategory = function () {
        // Get the name of the selected category
        var category = Blacklight.GetValueLookupName(BlacklightCase.Fields.SupportedHousing.Category);
        console.log("Category: " + category);
        // Check if the category is "Repairs"
        if (category === "Repair") {
            // If it is, hide the subcategory field
            Blacklight.SetVisible(BlacklightCase.Fields.SupportedHousing.SubCategory, false);
        } else {
            // Otherwise, show the subcategory field
            Blacklight.SetVisible(BlacklightCase.Fields.SupportedHousing.SubCategory, true);

        }

    }


    return {
        Init: init
    };


}();