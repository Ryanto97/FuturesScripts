if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

Blacklight.ComplaintNew = function () {

    var init = function () {
        //Blacklight.SetLable(BlacklightCase.Fields.Common.Customer, "Reported By");
        Blacklight.FormContext.getAttribute(BlacklightCase.Fields.Common.Customer).addOnChange(Blacklight.FindTenacy);
        Blacklight.FormContext.getAttribute(BlacklightCase.Fields.Complaints.PrimaryCategory).addOnChange(Blacklight.IsContractorNew);
        Blacklight.FormContext.getAttribute(BlacklightCase.Fields.Complaints.SecondaryCategories).addOnChange(Blacklight.ShowDamage);
        Blacklight.FormContext.getAttribute(BlacklightCase.Fields.Complaints.DamgeCauseBy).addOnChange(Blacklight.ContractorSelected);
        Blacklight.FormContext.getAttribute(BlacklightCase.Fields.Complaints.LockComplaintV2).addOnChange(Blacklight.IsLockedComplaintV2);
        Blacklight.AddOnChangeHandler(BlacklightCase.Fields.Complaints.IsMpCouncillor, Blacklight.isMpCouncillor);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.Subject, true, true);
       
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.Origin, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.Description, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.PrimaryCategory, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.SecondaryCategories, true, false);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.IncidentDate, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.ReportedOnDate, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.Stage, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.IsMpCouncillor, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.AboutTeam, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.Area, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.Outcome, true, true);
        Blacklight.SetVisible(BlacklightCase.Fields.Complaints.PreferredContactMethod, true);
        Blacklight.SetVisible(BlacklightCase.Fields.Complaints.ProgressUpdate, true);
        Blacklight.SetVisible(BlacklightCase.Fields.Complaints.DamgeCauseBy, true);
        Blacklight.SetVisible(BlacklightCase.Fields.Complaints.UpdateBySms, true);
        Blacklight.SetVisible(BlacklightCase.Fields.Complaints.TypeOfDamage, true);
        Blacklight.SetVisible("fhg_onbehalfofcustomer", true);
        Blacklight.SetLable("fhg_onbehalfofcustomer", "Reported By");
        Blacklight.SetVisible(BlacklightCase.Fields.Complaints.ContactFromComplaintsOfficer, true);
        
        Blacklight.SetVisible(BlacklightCase.Fields.Complaints.Tenancy, Blacklight.CheckValueNotEmpty(BlacklightCase.Fields.Complaints.Tenancy));
        Blacklight.SetVisible(BlacklightCase.Fields.Complaints.Contractor, Blacklight.CheckValueNotEmpty(BlacklightCase.Fields.Complaints.Contractor));
        Blacklight.AddOnChangeHandler(BlacklightCase.Fields.Complaints.AboutTeam, Blacklight.ShowTeam2);
        Blacklight.AddOnChangeHandler(BlacklightCase.Fields.Complaints.ComplaintsAgainstTeam2, Blacklight.ShowTeam3);
        Blacklight.AddOnChangeHandler(BlacklightCase.Fields.Complaints.ComplaintsAgainstTeam3, Blacklight.ShowTeam4);
        Blacklight.AddOnChangeHandler(BlacklightCase.Fields.Complaints.ComplaintsAgainstTeam4, Blacklight.ShowTeam5);
        Blacklight.AddOnChangeHandler(BlacklightCase.Fields.Complaints.IsMpCouncillor, Blacklight.MakeReportedByMandatory);

        var team1 = Blacklight.GetValue(BlacklightCase.Fields.Complaints.AboutTeam);
        if (team1) {
            Blacklight.SetVisible(BlacklightCase.Fields.Complaints.ComplaintsAgainstTeam2, true);
        }

        var team2 = Blacklight.GetValue(BlacklightCase.Fields.Complaints.ComplaintsAgainstTeam2);
        if (team2) {
            Blacklight.SetVisible(BlacklightCase.Fields.Complaints.ComplaintsAgainstTeam2, true);
            Blacklight.SetVisible(BlacklightCase.Fields.Complaints.ComplaintsAgainstTeam3, true);
        }
        var team3 = Blacklight.GetValue(BlacklightCase.Fields.Complaints.ComplaintsAgainstTeam3);
        if (team3) {
            Blacklight.SetVisible(BlacklightCase.Fields.Complaints.ComplaintsAgainstTeam3, true);
            Blacklight.SetVisible(BlacklightCase.Fields.Complaints.ComplaintsAgainstTeam4, true);
        }
        var team4 = Blacklight.GetValue(BlacklightCase.Fields.Complaints.ComplaintsAgainstTeam4);
        if (team4) {
            Blacklight.SetVisible(BlacklightCase.Fields.Complaints.ComplaintsAgainstTeam4, true);
            Blacklight.SetVisible(BlacklightCase.Fields.Complaints.ComplaintsAgainstTeam5, true);
        }
        var team5 = Blacklight.GetValue(BlacklightCase.Fields.Complaints.ComplaintsAgainstTeam5);
        if (team5) {
            Blacklight.SetVisible(BlacklightCase.Fields.Complaints.ComplaintsAgainstTeam5, true);
        }
        if (Blacklight.GetFormType() !== Blacklight.FormTypes.Create) {
            Blacklight.SetVisible(BlacklightCase.Fields.Complaints.LockComplaintV2, true);
            Blacklight.IsLockedComplaintV2();
            Blacklight.ShowHideTab(BlacklightCase.Tabs.ReportingData, true);
            Blacklight.ShowHideSection(BlacklightCase.Tabs.ReportingData, BlacklightCase.Sections.Complaints.stage1, true);
            Blacklight.ShowHideSection(BlacklightCase.Tabs.ReportingData, BlacklightCase.Sections.Complaints.stage2, true);
            Blacklight.ShowHideSection(BlacklightCase.Tabs.ReportingData, BlacklightCase.Sections.Complaints.ombudsman, true);
            var reportingFields = BlacklightCase.GetFields(BlacklightCase.Fields.ReportingData);
            reportingFields.forEach(field => {
                Blacklight.SetVisible(field, true);
            });
            //Blacklight.ShowHideTab(BlacklightCase.Tabs.HomeVisits, true);
            //Blacklight.ShowHideTab(BlacklightCase.Tabs.InvestigationForm, true);
            //Blacklight.ShowHideTab(BlacklightCase.Tabs.CompensationDetermination, true);
            //Blacklight.ShowHideTab(BlacklightCase.Tabs.LearningRecommendations, true);
            //general_section_tracking_data
            Blacklight.ShowHideSection(BlacklightCase.Tabs.general, "general_section_tracking_data", true);

        }
        Blacklight.ShowComplaintPack();
        Blacklight.Email();
        Blacklight.ShowDamage();
        // Sustainability Onload // On change
        Blacklight.Sustainability();
        Blacklight.FormContext.getAttribute(BlacklightCase.Fields.Complaints.AboutTeam).addOnChange(Blacklight.Sustainability);
        Blacklight.FormContext.getAttribute(BlacklightCase.Fields.Complaints.ComplaintsAgainstTeam2).addOnChange(Blacklight.Sustainability);
        Blacklight.FormContext.getAttribute(BlacklightCase.Fields.Complaints.ComplaintsAgainstTeam3).addOnChange(Blacklight.Sustainability);
        Blacklight.FormContext.getAttribute(BlacklightCase.Fields.Complaints.ComplaintsAgainstTeam4).addOnChange(Blacklight.Sustainability);
        Blacklight.FormContext.getAttribute(BlacklightCase.Fields.Complaints.ComplaintsAgainstTeam5).addOnChange(Blacklight.Sustainability);
    };

    Blacklight.FilterSecondaryCat = function () {
        debugger;
        var formContext = Blacklight.FormContext; // Ensure consistency in accessing form context

        var primaryCategoryControl = formContext.getControl(BlacklightCase.Fields.Complaints.PrimaryCategory);
        var secondaryCategoryControl = formContext.getControl(BlacklightCase.Fields.Complaints.SecondaryCategories);

        if (!primaryCategoryControl || !secondaryCategoryControl) return;

        var primaryCategoryValue = Blacklight.GetValue(BlacklightCase.Fields.Complaints.PrimaryCategory);

        // Step 1: Get all options from Primary Category (since it's the same list)
        var allOptions = primaryCategoryControl.getOptions();

        // Step 2: Clear existing options in Secondary Category
        secondaryCategoryControl.clearOptions();

        // Step 3: Re-add all options (reset the list)
        allOptions.forEach(function (option) {
            secondaryCategoryControl.addOption(option);
        });

        // Step 4: Remove the selected Primary Category option from Secondary Category
        if (primaryCategoryValue !== null) {
            secondaryCategoryControl.removeOption(primaryCategoryValue);
           
        }
        Blacklight.ShowDamage();
    };


    Blacklight.Sustainability = function () {
        var complaintAboutTeam = Blacklight.GetValueLookupName(BlacklightCase.Fields.Complaints.AboutTeam);
        var complaintAboutTeam2 = Blacklight.GetValueLookupName(BlacklightCase.Fields.Complaints.ComplaintsAgainstTeam2);
        var complaintAboutTeam3 = Blacklight.GetValueLookupName(BlacklightCase.Fields.Complaints.ComplaintsAgainstTeam3);
        var complaintAboutTeam4 = Blacklight.GetValueLookupName(BlacklightCase.Fields.Complaints.ComplaintsAgainstTeam4);
        var complaintAboutTeam5 = Blacklight.GetValueLookupName(BlacklightCase.Fields.Complaints.ComplaintsAgainstTeam5);
        console.log("Complaint About Team: " + complaintAboutTeam);

        if (complaintAboutTeam === "Sustainability"|| complaintAboutTeam2 === "Sustainability" || complaintAboutTeam3 === "Sustainability" || complaintAboutTeam4 === "Sustainability" || complaintAboutTeam5 === "Sustainability") {
            Blacklight.SetVisible(BlacklightCase.Fields.Complaints.Sustainability, true);
            
        } else {
            Blacklight.SetVisible(BlacklightCase.Fields.Complaints.Sustainability, false);
            Blacklight.SetValue(BlacklightCase.Fields.Complaints.Sustainability, null);
        }

    }

    Blacklight.MakeReportedByMandatory = function () {
        var isMpCouncillor = Blacklight.GetValue(BlacklightCase.Fields.Complaints.IsMpCouncillor);
        if (isMpCouncillor) {
            Blacklight.SetMandatory("fhg_onbehalfofcustomer", isMpCouncillor === true);
        } else {
            Blacklight.SetMandatory("fhg_onbehalfofcustomer", false);
        }
    }

    Blacklight.Email = function () {
        var emailId = Blacklight.GetValue("fhg_emailidtoopen");
        if (emailId && emailId.length > 5) {
            Xrm.WebApi.retrieveRecord("email", emailId, "?$select=statecode,statuscode,fhg_opened").then(
                function success(result) {
                    console.log(result);
                    // Columns
                    var activityid = result["activityid"]; // Guid
                    var statecode = result["statecode"]; // State
                    var isOpened = result["fhg_opened"];

                    var statecode_formatted = result["statecode@OData.Community.Display.V1.FormattedValue"];
                    var statuscode = result["statuscode"]; // Status
                    var statuscode_formatted = result["statuscode@OData.Community.Display.V1.FormattedValue"];
                    if (statuscode && statuscode === 1 && !isOpened) {
                        Blacklight.OpenRecord("email", emailId);
                    }
                },
                function (error) {
                    console.log(error.message);
                }
            );
            
        }
    }

    Blacklight.ShowDamage = function () {
        var category = Blacklight.GetValue(BlacklightCase.Fields.Complaints.PrimaryCategory);
        var secCategory = Blacklight.GetValue(BlacklightCase.Fields.Complaints.SecondaryCategories);
        
        var show = false;
        if (category !== null && category === 100000004) {
            show = true;
        }
        if (secCategory !== null && secCategory.includes(100000004)) {
            show = true;
        }
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.TypeOfDamage, show, show);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.DamgeCauseBy, show, show);
    }
    Blacklight.ShowTeam2 = function () {
        var hasTeam = Blacklight.GetValue(BlacklightCase.Fields.Complaints.AboutTeam);
        var showTeam = false;
        if (hasTeam)
            showTeam = true;
        Blacklight.SetVisible(BlacklightCase.Fields.Complaints.ComplaintsAgainstTeam2, showTeam);
    }

    Blacklight.ShowTeam3 = function () {
        var hasTeam = Blacklight.GetValue(BlacklightCase.Fields.Complaints.ComplaintsAgainstTeam2);
        var showTeam = false;
        if (hasTeam)
            showTeam = true;
        Blacklight.SetVisible(BlacklightCase.Fields.Complaints.ComplaintsAgainstTeam3, showTeam);
    }

    Blacklight.ShowTeam4 = function () {
        var hasTeam = Blacklight.GetValue(BlacklightCase.Fields.Complaints.ComplaintsAgainstTeam3);
        var showTeam = false;
        if (hasTeam)
            showTeam = true;
        Blacklight.SetVisible(BlacklightCase.Fields.Complaints.ComplaintsAgainstTeam4, showTeam);
    }

    Blacklight.ShowTeam5 = function () {
        var hasTeam = Blacklight.GetValue(BlacklightCase.Fields.Complaints.ComplaintsAgainstTeam4);
        var showTeam = false;
        if (hasTeam)
            showTeam = true;
        Blacklight.SetVisible(BlacklightCase.Fields.Complaints.ComplaintsAgainstTeam5, showTeam);
    }

    Blacklight.ContractorSelected = function () {
        var causedBy = Blacklight.GetValue(BlacklightCase.Fields.Complaints.DamgeCauseBy);
        var isAContractor = false;
        var typeOfDamage = false;
        var showOther = false;
        if (causedBy !== null)
        {
            if (causedBy === 100000000) {
                isAContractor = true;
            }
            if (causedBy === 100000005) {
                showOther = true;
            }
            typeOfDamage = true;
        }
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.Contractor, isAContractor, isAContractor);
        //Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.TypeOfDamage, typeOfDamage, typeOfDamage);
        Blacklight.SetVisibleAndMandatory("fhg_other", showOther, showOther);
    }

    Blacklight.IsContractorNew = function() {
       
        var category = Blacklight.GetValue(BlacklightCase.Fields.Complaints.PrimaryCategory);
        var isContractor = false;

        if (category !== null && category === 100000011) {
            isContractor = true;
        }

        Blacklight.SetVisible(BlacklightCase.Fields.Complaints.Contractor, isContractor);
        Blacklight.SetMandatory(BlacklightCase.Fields.Complaints.Contractor, isContractor);
        Blacklight.FilterSecondaryCat();
        
    }

    Blacklight.isMpCouncillor = function () {
        var isMpOrCouncillor = Blacklight.GetValue(BlacklightCase.Fields.Complaints.IsMpCouncillor);

        Blacklight.SetMandatory(BlacklightCase.Fields.Complaints.ReportedBy, isMpOrCouncillor);
        
    }

    Blacklight.IsLockedComplaintV2 = function() {
        var locked = Blacklight.GetValue(BlacklightCase.Fields.Complaints.LockComplaintV2);
        var hasLockedRole = Blacklight.UserHasRoleAssigned("e6fa94e0-8952-ec11-8f8e-000d3ad55b72");
        var showLockedTab = false;
        if (locked != null && hasLockedRole) {
            showLockedTab = true;
        }
        var showField = true;
        if (locked) {
            showField = false;
        }
        Blacklight.ShowHideTab(BlacklightCase.Tabs.LockedComplaintV2, showLockedTab);
        Blacklight.SetFieldReadOnly(BlacklightCase.Fields.Complaints.LockComplaintV2, locked);
        Blacklight.SetVisible(BlacklightCase.Fields.Complaints.LockedComplaintCaseV2, locked);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.PrimaryCategory, showField, showField);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.SecondaryCategories, showField, false);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.IsMpCouncillor, showField, false);
        //Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.AboutTeam, showField, false);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.DamgeCauseBy, showField, false);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.Contractor, showField, false);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.TypeOfDamage, showField, false);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.UpdateBySms, showField, false);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.Complaints.Outcome, showField, false);
        Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.Complaints.FormalAcknowledgementSent, showField, false, true);
        Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.Complaints.DaysStage1, showField, false, true);
        Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.Complaints.CompensationStage1, showField, false, true);
        //Blacklight.SetVisibleMandatoryAndReadOnly(BlacklightCase.Fields.Complaints.CustomerRequestedStage1, showField, false, true);
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
      
        Blacklight.ShowHideTab("tab_investigation_form", showField);
        Blacklight.ShowHideTab("tab_home_visits", showField);
        Blacklight.ShowHideTab("tab_compensation_determination", showField);
        Blacklight.ShowHideTab("tab_learning_recommendations", showField);

     
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