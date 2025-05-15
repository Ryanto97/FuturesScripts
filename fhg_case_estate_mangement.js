if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}



Blacklight.EstateManagment = function () {

    var estateLocation = {
        Property: 100000000,
        Block: 100000001,
        Street: 100000002
    }
    var init = function () {
        Blacklight.FormContext.getAttribute(BlacklightCase.Fields.EstateManagement.Location).addOnChange(Blacklight.Location);
        Blacklight.FormContext.getAttribute(BlacklightCase.Fields.EstateManagement.RequireFormalContact).addOnChange(Blacklight.FormalContact);
        Blacklight.FormContext.getAttribute(BlacklightCase.Fields.Common.Customer).addOnChange(Blacklight.GetTenancyResidence);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.EstateManagement.Location, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.EstateManagement.PrimaryCategory, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.EstateManagement.RequireFormalContact, true, false);
        
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.EstateManagement.ReportedToEmergencyServices, true, false);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.EstateManagement.ReportedToLocalAuthority, true, false);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.EstateManagement.ReportedOnDate, true, true);
        //add area to Estatemanagement RT - 20/03/2025
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.EstateManagement.Area, true, true);
        Blacklight.ShowHideTab(BlacklightCase.Tabs.relatedContacts, true);
        Blacklight.FormalContact();

    };
    Blacklight.FormalContact = function() {
        var formalContact = Blacklight.GetValue(BlacklightCase.Fields.EstateManagement.RequireFormalContact);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.EstateManagement.ReasonForNoContact, formalContact, formalContact);
    }

    Blacklight.Location = function() {
        var location = Blacklight.GetValue(BlacklightCase.Fields.EstateManagement.Location);

        if (location === estateLocation.Property) {
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.EstateManagement.Property, true, true);
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.EstateManagement.Block, false, false);
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.EstateManagement.Street, false, false);
        } else if (location === estateLocation.Block) {
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.EstateManagement.Property, false, false);
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.EstateManagement.Block, true, true);
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.EstateManagement.Street, false, false);
        } else if (location === estateLocation.Street) {
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.EstateManagement.Property, false, false);
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.EstateManagement.Block, false, false);
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.EstateManagement.Street, true, true);
        }
    };

   

    return {
        Init: init
    };
}();
