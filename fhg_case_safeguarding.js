ï»¿
if (typeof (Blacklight) === "undefined") {
	Blacklight = function () { };
}
Blacklight.Safeguarding = function () {
	var init = function () {
		Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Safeguarding.Who, true, true);
		Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Safeguarding.Category, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Safeguarding.Area, true, true); // add Area RT 02/04/2025
		Blacklight.SetVisible(BlacklightCase.Fields.Safeguarding.ReferralReference, true);
		Blacklight.FormContext.getAttribute(BlacklightCase.Fields.Safeguarding.Category).addOnChange(Blacklight.ChangeType);
		Blacklight.SetVisible("fhg_onbehalfofcustomer", true);
		Blacklight.SetLable("fhg_onbehalfofcustomer", "Reported By");
		Blacklight.ShowCourtPack();
		if (Blacklight.GetFormType() !== Blacklight.FormTypes.Create) {
			Blacklight.IsLockedSafeguardingCase();
		}
		//Blacklight.ShowHideTab(BlacklightCase.Tabs.locked_safeguarding, Blacklight.GetFormType() !== Blacklight.FormTypes.Create);
		//Blacklight.SetVisible(BlacklightCase.Fields.Safeguarding.LockedCaseRef, Blacklight.GetFormType() !== Blacklight.FormTypes.Create);
	};
	Blacklight.IsLockedSafeguardingCase = function () {
		var locked = Blacklight.GetValue(BlacklightCase.Fields.Safeguarding.LockedCaseRef);
		var hasLockedRole = Blacklight.UserHasRoleAssigned("ebf16a2c-067d-ec11-8d21-6045bd0e62ad");
		var showLockedTab = false;
		if (locked != null && hasLockedRole) {
			showLockedTab = true;
		}
		var showField = false;
		if (locked) {
			showField = true;
		}
		Blacklight.ShowHideTab(BlacklightCase.Tabs.locked_safeguarding, showLockedTab);
		Blacklight.SetVisible(BlacklightCase.Fields.Safeguarding.LockedCaseRef, showField)
	}
	Blacklight.ChangeType = function () {
		var typeSelected = Blacklight.GetValue(BlacklightCase.Fields.Safeguarding.Category);
		if (typeSelected) {
			if (typeSelected === 100000000) {
				Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Safeguarding.AdultType, true, true);
				Blacklight.SetVisible(BlacklightCase.Fields.Safeguarding.ChildType, false);
			}
			else if (typeSelected === 100000001) {
				Blacklight.SetVisible(BlacklightCase.Fields.Safeguarding.AdultType, false);
				Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Safeguarding.ChildType, true, true);
			}
			else {
				Blacklight.SetVisible(BlacklightCase.Fields.Safeguarding.AdultType, false);
				Blacklight.SetVisible(BlacklightCase.Fields.Safeguarding.ChildType, false);
			}
		}
	}
	return {
		Init: init
	};
}();