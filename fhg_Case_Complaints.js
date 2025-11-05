if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

Blacklight.Complaint = function () {

    var init = function () {
       // Blacklight.SetLable(BlacklightCase.Fields.Common.Customer, "Customer /Affected Person");
        Blacklight.FormContext.getAttribute(BlacklightCase.Fields.Common.Customer).addOnChange(Blacklight.FindTenacy);
        Blacklight.FormContext.getAttribute(BlacklightCase.Fields.Complaints.PrimaryCategory).addOnChange(Blacklight.IsContractor);
        Blacklight.FormContext.getAttribute(BlacklightCase.Fields.Complaints.LockComplaint).addOnChange(Blacklight.IsLockedComplaint);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.Subject, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.Origin, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.Description, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.PrimaryCategory, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.SecondaryCategories, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.IncidentDate, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.ReportedOnDate, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.Stage, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.IsMpCouncillor, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.AboutTeam, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.Area, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.Outcome, true, true);
        Blacklight.SetVisible(BlacklightCase.Fields.Complaints.PreferredContactMethod, true);
        Blacklight.SetVisible(BlacklightCase.Fields.Complaints.ProgressUpdate, true);
        Blacklight.SetVisible(BlacklightCase.Fields.Complaints.ContactFromComplaintsOfficer, true);
        Blacklight.SetVisible("fhg_onbehalfofcustomer", true);
        Blacklight.SetLable("fhg_onbehalfofcustomer", "Reported By");

        
        Blacklight.SetVisible(BlacklightCase.Fields.Complaints.Tenancy, Blacklight.CheckValueNotEmpty(BlacklightCase.Fields.Complaints.Tenancy));
        Blacklight.SetVisible(BlacklightCase.Fields.Complaints.Contractor, Blacklight.CheckValueNotEmpty(BlacklightCase.Fields.Complaints.Contractor));

        if (Blacklight.GetFormType() !== Blacklight.FormTypes.Create) {
            Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.Complaints.FormalAcknowledgementSent, true, false, true);
            Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.Complaints.DaysStage1, true, false, true);
            Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.Complaints.CompensationStage1, true, false, true);
            Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.Complaints.CustomerRequestedStage2, true, false, true);
            Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.Complaints.DaysStage2, true, false, true);
            Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.Complaints.CompensationStage2, true, false, true);
            Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.Complaints.EscalationOmbudsmanDate, true, false, true);
            Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.Complaints.OmbudsmanRoute, true, false, true);
            Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.Complaints.DaysOmbudsmanStage, true, false, true);
            Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.Complaints.CompensationOmbudsman, true, false, true);
            Blacklight.SetVisible(BlacklightCase.Fields.Complaints.LockComplaint, true);
            Blacklight.IsLockedComplaint();




        }
        
    };

    Blacklight.IsContractor = function() {
       
        var category = Blacklight.GetValue(BlacklightCase.Fields.Complaints.PrimaryCategory);
        var isContractor = false;

        if (category !== null && category === 100000011) {
            isContractor = true;
        }

        Blacklight.SetVisible(BlacklightCase.Fields.Complaints.Contractor, isContractor);
        Blacklight.SetMandatory(BlacklightCase.Fields.Complaints.Contractor, isContractor);
    }

    Blacklight.IsLockedComplaint = function() {
        var locked = Blacklight.GetValue(BlacklightCase.Fields.Complaints.LockComplaint);
        var hasLockedRole = Blacklight.UserHasRoleAssigned("e6fa94e0-8952-ec11-8f8e-000d3ad55b72");
        var showLockedTab = false;
        if (locked != null && hasLockedRole) {
            showLockedTab = true;
        }
        var showField = true;
        if (locked) {
            showField = false;
        }
        Blacklight.ShowHideTab(BlacklightCase.Tabs.lockedComplaint, showLockedTab);
        Blacklight.SetFieldReadOnly(BlacklightCase.Fields.Complaints.LockComplaint, locked);
        Blacklight.SetVisible(BlacklightCase.Fields.Complaints.LockedComplaintCase, locked);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.PrimaryCategory, showField, showField);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.SecondaryCategories, showField, showField);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.IsMpCouncillor, showField, false);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.AboutTeam, showField, false);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.Outcome, showField, false);

        Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.Complaints.FormalAcknowledgementSent, showField, false, true);
        Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.Complaints.DaysStage1, showField, false, true);
        Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.Complaints.CompensationStage1, showField, false, true);
        Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.Complaints.CustomerRequestedStage1, showField, false, true);
        Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.Complaints.CustomerRequestedStage2, showField, false, true);
        Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.Complaints.DaysStage2, showField, false, true);
        Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.Complaints.CompensationStage2, showField, false, true);
        Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.Complaints.EscalationOmbudsmanDate, showField, false, true);
        Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.Complaints.OmbudsmanRoute, showField, false, true);
        Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.Complaints.DaysOmbudsmanStage, showField, false, true);
        Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.Complaints.CompensationOmbudsman, showField, false, true);

        Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.Complaints.PreferredContactMethod, showField, false, true);
        Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.Complaints.ProgressUpdate, showField, false, true);
        Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.Complaints.ContactFromComplaintsOfficer, showField, false, true);
    }

    Blacklight.FindTenacy = function () {
        var reportedBy = Blacklight.GetValue(BlacklightCase.Fields.Common.Customer);
        if (Blacklight.IsNotOffline && reportedBy !== null) {
            var id = reportedBy[0].id.replace(/[{}]/g, "");
            Xrm.WebApi.online.retrieveMultipleRecords("fhg_occupancy", "?$expand=fhg_Tenancy($select=fhg_name,fhg_tenancyid)&$filter=_fhg_person_value eq " + id + " and  fhg_enddate eq null").then(
                function success(results) {
                    if (results.entities.length > 0) {
                        var occupancy = results.entities[0];
                        var tenancy = occupancy["fhg_Tenancy"];
                        if (tenancy !== null) {
                            var tenancyId = tenancy["fhg_tenancyid"].replace(/[{}]/g, "");
                            var tenancyName = tenancy["fhg_name"];
                            Blacklight.SetLookupValue(BlacklightCase.Fields.Complaints.Tenancy,
                                tenancyId,
                                tenancyName,
                                "fhg_tenancy");
                            Blacklight.SetVisible(BlacklightCase.Fields.Complaints.Tenancy, true);
                        }
                    }
            },
            function (error) {
                Xrm.Utility.alertDialog(error.message);
            }
            );
        }
    }
    return {
        Init: init
    };
}();