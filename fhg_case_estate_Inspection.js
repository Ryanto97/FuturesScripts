if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

Blacklight.EstateInspection = function () {
    var init = function () {
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.EstateInspection.EstateInspectionArea, true, true);
        //Add Area to MX RT-20/03/2025
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.EstateInspection.Area, true,true);



        if (!Blacklight.IsNewForm())
        {
            // If there is a parent case, display the field
            if (Blacklight.GetValue(BlacklightCase.Fields.AdditionalFields.parentcaseid))
                Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.AdditionalFields.parentcaseid, true, true, false);
                
           // Blacklight.SetLable(BlacklightCase.Fields.Common.Customer, "Reported By");
            Blacklight.ShowHideTab(BlacklightCase.Tabs.estateInspections, true);

        }
    };
    return {
        Init: init,
    };
}();