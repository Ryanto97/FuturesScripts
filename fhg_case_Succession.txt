if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

Blacklight.Succession = function () {

    var init = function () {
        Blacklight.SetLable(BlacklightCase.Fields.Common.Customer, "Reported By");
      
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Succession.NameOfDeceased, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Succession.DateDeceased, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Succession.PersonClaimingToSuccess, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Succession.RelationshipToDeceased, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Succession.Area, true, true); // add area RT 02/04/2025
        Blacklight.SetVisible(BlacklightCase.Fields.Succession.LengthOfTimeResidentAtThisAddress, true);
        Blacklight.SetVisible(BlacklightCase.Fields.Succession.TenancyElsewhere, true);
        
        Blacklight.SetVisible(BlacklightCase.Fields.Succession.HaveYouPreviouslyBeenATenant, true);
        
        Blacklight.SetVisible(BlacklightCase.Fields.Succession.HouseholdMembers, true);

        Blacklight.FormContext.getAttribute(BlacklightCase.Fields.Succession.TenancyElsewhere).addOnChange(Blacklight.ShowWhatIfTenancy);
        Blacklight.FormContext.getAttribute(BlacklightCase.Fields.Succession.HaveYouPreviouslyBeenATenant).addOnChange(Blacklight.ShowWhatIfPrevious);
        Blacklight.ShowHideSection(BlacklightCase.Tabs.general, BlacklightCase.Fields.Succession.CurrentHousehold, true);
        var isNotCreate = Blacklight.GetFormType() !== Blacklight.FormTypes.Create;
        
        Blacklight.ShowHideTab(BlacklightCase.Tabs.actionPlans, isNotCreate);

        Blacklight.FormContext.getAttribute(BlacklightCase.Fields.Succession.NameOfDeceased).addOnChange(Blacklight.OnNameOfDeceasedChanged);
        Blacklight.ShowCourtPack();
    };

    Blacklight.OnNameOfDeceasedChanged = function () {

        var customerId = Blacklight.GetValueLookupID(BlacklightCase.Fields.Succession.NameOfDeceased);
        if (customerId) {
            Blacklight.Common.GetTenancyPropertyOccupancy(customerId, Blacklight.OccupancySearchCompletedResults);
        }
    }

   Blacklight.ShowWhatIfTenancy = function() {

        var value = Blacklight.GetValue(BlacklightCase.Fields.Succession.TenancyElsewhere);
        if (value) {
            Blacklight.SetVisible(BlacklightCase.Fields.Succession.IfSoWhere, value === 100000001);
        } else {
            Blacklight.SetVisible(BlacklightCase.Fields.Succession.IfSoWhere, false);
        }
        
    }

    Blacklight.ShowWhatIfPrevious = function() {

        var value = Blacklight.GetValue(BlacklightCase.Fields.Succession.HaveYouPreviouslyBeenATenant);
        if (value) {
            Blacklight.SetVisible(BlacklightCase.Fields.Succession.IfSoWherePrevious, value === 100000001);
        } else {
            Blacklight.SetVisible(BlacklightCase.Fields.Succession.IfSoWherePrevious, false);
        }
        
    }

    return {
        Init: init
    };
}();