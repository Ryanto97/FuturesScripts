if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

Blacklight.MX = function () {
    var init = function () {

        //Blacklight.SetLable(BlacklightCase.Fields.Common.Customer, "Reported By");
        //Blacklight.SetVisible(BlacklightCase.Fields.MX.IncomingCustomerName, true);
        //Blacklight.SetVisible(BlacklightCase.Fields.MX.IncomingCustomerLandlord, true);
        //Blacklight.SetVisible(BlacklightCase.Fields.MX.IncomingCustomerAddress, true);
        //Blacklight.SetVisible(BlacklightCase.Fields.MX.IncomingCustomerPhone, true);
        //Blacklight.SetVisible(BlacklightCase.Fields.MX.IncomingCustomerEmail, true);
        //Blacklight.SetVisible(BlacklightCase.Fields.MX.OtherIndividuals, true); 
        Blacklight.ShowHideTab(BlacklightCase.Tabs.relatedContacts, true);
        Blacklight.ShowHideSection(BlacklightCase.Tabs.relatedContacts, BlacklightCase.Sections.relatedContacts.tab_relatedcontacts_mx, true);
        Blacklight.ShowHideSection(BlacklightCase.Tabs.relatedContacts, BlacklightCase.Sections.relatedContacts.tab_section_additionalcustomers, false);
        Blacklight.SetVisible(BlacklightCase.Fields.MX.DateWillTakePlace, true);
        //Add Area to MX RT-20/03/2025
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.MX.Area, true,true);

        if (Blacklight.GetFormType() !== Blacklight.FormTypes.Create) {
            
            Blacklight.SetVisible(BlacklightCase.Fields.MX.ReasonForMoving, true);
        }
        var isNotAllowed = Blacklight.GetValue("fhg_mxnotallowed");

        if (isNotAllowed) {
            Blacklight.FormContext.ui.setFormNotification("Mutual Exchange cannot proceed - invalid tenancy type", "WARNING", "MXNotAllowed");
        } else {
            Blacklight.FormContext.ui.clearFormNotification("MXNotAllowed");
        }
        var decision = Blacklight.GetValue(BlacklightCase.Fields.MX.Decision);
        var approvalReasons = Blacklight.GetValue(BlacklightCase.Fields.MX.ConditionalApprovalReasons);
        var reasonDecision = Blacklight.GetValue(BlacklightCase.Fields.MX.ReasonForDecision);
        Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.MX.Decision, decision !== null, false, true);
        Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.MX.ConditionalApprovalReasons, approvalReasons !== null, false, true);
        Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.MX.ReasonForDecision, reasonDecision !== null, false, true);

        Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.MX.DaysRemaining, Blacklight.GetValue(BlacklightCase.Fields.MX.DateMXApplicationReceived) !== null, false, true);
        //fhg_mxdecisioncomplete
        Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.MX.DaysTaken, Blacklight.GetValue(BlacklightCase.Fields.MX.MXDecisionComplete), false, true);
    };

    return {
        Init: init
    };
}();