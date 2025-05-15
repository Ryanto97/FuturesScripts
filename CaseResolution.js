if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

Blacklight.CaseResolution = function () {

    var onClosoureReasonChange = function ()
    {
        if (Blacklight.IsNotOffline && Blacklight.HasValue(BlacklightCase.Fields.Resolution.CaseClosureReason))
        {
            Xrm.WebApi.online.retrieveMultipleRecords("fhg_caseclosurereason", "?$select=fhg_caseclosurereasonid,fhg_name,createdon&$filter=(_fhg_parent_value eq " + Blacklight.GetValueLookupID(BlacklightCase.Fields.Resolution.CaseClosureReason) + ")&$orderby=fhg_name asc").then(
                function success(results)
                {
                    var hasSubClosureReasons = results.entities.length > 0;
                    Blacklight.SetVisible(BlacklightCase.Fields.Resolution.CaseClosureSubReason, hasSubClosureReasons);
                },
                function (error)
                {
                    Xrm.Utility.alertDialog(error.message);
                }
            );
        }
        else
        {
            Blacklight.ClearFieldValue(BlacklightCase.Fields.Resolution.CaseClosureSubReason);
            Blacklight.SetVisible(BlacklightCase.Fields.Resolution.CaseClosureSubReason, false);
        }
    }

    var init = function () {
       

        if (Blacklight.IsNewForm())
        {
            Blacklight.ShowHideSection(BlacklightCase.Tabs.general, BlacklightCase.Sections.general.general_section_caseresolution, false);
            return;
        }

        var hideRemarksForSubject = ["Complaint", "Home Survey"];
        var status = Blacklight.GetValue("statecode");
        var subject = Blacklight.GetSubjectName(BlacklightCase.Fields.Common.Subject);
        // If its active, display fields accordingly
        if (status === 0)
        {
            Blacklight.SetVisible(BlacklightCase.Fields.Common.Status, false);
            Blacklight.SetVisible(BlacklightCase.Fields.Common.StatusReason, false);
            Blacklight.SetVisible(BlacklightCase.Fields.Resolution.ResolveCase, true); 
            
            if (Blacklight.CheckValueNotEmpty(BlacklightCase.Fields.Resolution.ResolveCase)
                && Blacklight.GetValue(BlacklightCase.Fields.Resolution.ResolveCase)) {
                Blacklight.SetVisible(BlacklightCase.Fields.Resolution.CaseClosureReason, true);
                Blacklight.SetVisible(BlacklightCase.Fields.Resolution.CaseClosureSubReason, false);
                Blacklight.SetVisible(BlacklightCase.Fields.Resolution.CaseResolutionNotes, true);
                Blacklight.SetVisible(BlacklightCase.Fields.Resolution.ClosureDate, true);
                Blacklight.SetVisible(BlacklightCase.Fields.Resolution.DaysToComplete, true);
                Blacklight.SetVisible(BlacklightCase.Fields.Resolution.CalendarDays, false);
                Blacklight.SetVisible(BlacklightCase.Fields.Resolution.ClosedWithActivities, false);
                Blacklight.SetMandatory(BlacklightCase.Fields.Resolution.CaseClosureReason, true);
                //Blacklight.SetMandatory(BlacklightCase.Fields.Resolution.CaseClosureSubReason, true);
                //Blacklight.SetMandatory(BlacklightCase.Fields.Resolution.CaseResolutionNotes, true);

                Blacklight.AddOnChangeHandler(BlacklightCase.Fields.Resolution.CaseClosureReason, onClosoureReasonChange);

                if (hideRemarksForSubject.includes(subject)) {
                    Blacklight.SetVisible(BlacklightCase.Fields.Resolution.CaseResolutionNotes, false);
                    Blacklight.SetMandatory(BlacklightCase.Fields.Resolution.CaseResolutionNotes, false);
                }

                if (subject === "Complaint") {
                    
                    var complaintStage = Blacklight.GetValue(BlacklightCase.Fields.Complaints.Stage);
                    var fetchXml = BlacklightCase.ClosureReason.ClosureFetchXml.replace(/{(\d+)}/g, subject);
                    if (complaintStage !== null) {

                        if (complaintStage === 100000000) {
                            fetchXml = BlacklightCase.ComplaintClosureReason.ClosureFetchXmlEOD.replace(/{(\d+)}/g, subject);
                        } else if (complaintStage === 100000001) {
                            fetchXml = BlacklightCase.ComplaintClosureReason.ClosureFetchXmlStage1.replace(/{(\d+)}/g, subject);
                        } else if (complaintStage === 100000002) {
                            fetchXml = BlacklightCase.ComplaintClosureReason.ClosureFetchXmlStage2.replace(/{(\d+)}/g, subject);
                        } else if (complaintStage === 100000003) {
                            fetchXml = BlacklightCase.ComplaintClosureReason.ClosureFetchXmlOmbud.replace(/{(\d+)}/g, subject);
                        }
                    }
                    Blacklight.SetCustomView(BlacklightCase.ClosureReason.EntityName,
                        BlacklightCase.ClosureReason.ViewName,
                        fetchXml,
                        BlacklightCase.ClosureReason.ClosureLayoutXml,
                        BlacklightCase.Fields.Resolution.CaseClosureReason);
                } else {

                //Show field if Subject is ASB only. RT - 13/03/2025
                if (subject === "ASB") {
                    Blacklight.SetVisible(BlacklightCase.Fields.Resolution.CustomerFeedback, true);
                    Blacklight.SetMandatory(BlacklightCase.Fields.Resolution.CustomerFeedback, true);
                } 
                }
                
            }
            else {
                Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Resolution.CaseClosureReason, false, false);
                Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Resolution.CaseClosureSubReason, false, false);
                Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Resolution.CaseResolutionNotes, false, false);
                Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Resolution.ClosureAmount, false, false);
                Blacklight.SetVisible(BlacklightCase.Fields.Resolution.ClosureDate, false);
                Blacklight.SetVisible(BlacklightCase.Fields.Resolution.DaysToComplete, false);
                Blacklight.SetVisible(BlacklightCase.Fields.Resolution.CalendarDays, false);
                Blacklight.SetVisible(BlacklightCase.Fields.Resolution.ClosedWithActivities, false);
                //hide new field if not ASB - RT 13/03/2025
                Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Resolution.CustomerFeedback, false, false);
            }
        }
        //If its already resolved, display the resolution
        else if (status === 1)
        {
            Blacklight.SetVisible(BlacklightCase.Fields.Common.Status, true);
            Blacklight.SetVisible(BlacklightCase.Fields.Resolution.ResolveCase, false);
            Blacklight.SetVisible(BlacklightCase.Fields.Resolution.CaseClosureReason, true);
            Blacklight.SetVisible(BlacklightCase.Fields.Resolution.ClosureDate, true);
            Blacklight.SetVisible(BlacklightCase.Fields.Resolution.DaysToComplete, true);
            Blacklight.SetVisible(BlacklightCase.Fields.Resolution.CalendarDays, false);
            Blacklight.SetVisible(BlacklightCase.Fields.Resolution.ClosedWithActivities, true);
            if (Blacklight.HasValue(BlacklightCase.Fields.Resolution.CaseClosureSubReason))
                Blacklight.SetVisible(BlacklightCase.Fields.Resolution.CaseClosureSubReason, true);

            if (Blacklight.HasValue(BlacklightCase.Fields.Resolution.CaseResolutionNotes))
                Blacklight.SetVisible(BlacklightCase.Fields.Resolution.CaseResolutionNotes, true);
        }
        // If its cancelled, display the cancelled status
        else if (status === 2)
        {
            Blacklight.SetVisible(BlacklightCase.Fields.Resolution.ResolveCase, false);
            Blacklight.SetVisible(BlacklightCase.Fields.Common.Status, true);
            Blacklight.SetVisible(BlacklightCase.Fields.Common.StatusReason, true);
            Blacklight.SetVisible(BlacklightCase.Fields.Resolution.ClosureDate, false);
            Blacklight.SetVisible(BlacklightCase.Fields.Resolution.DaysToComplete, false);
            Blacklight.SetVisible(BlacklightCase.Fields.Resolution.CalendarDays, false);
            Blacklight.SetVisible(BlacklightCase.Fields.Resolution.CaseClosureReason, false);
            Blacklight.SetVisible(BlacklightCase.Fields.Resolution.CaseClosureSubReason, false);
            Blacklight.SetVisible(BlacklightCase.Fields.Resolution.CaseResolutionNotes, false);
            Blacklight.SetVisible(BlacklightCase.Fields.Resolution.ClosedWithActivities, false);
        }

    };

    return {
        Init: init
    };

}();