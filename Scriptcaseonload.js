if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

function OnLoad(executionContext) {
    // Hide all fields and tabs
    debugger;
    var formTabs = BlacklightCase.GetTabs();
    var fieldsToSHow = BlacklightCase.GetFields(BlacklightCase.Fields.Common);

    var formContext = executionContext.getFormContext();
    Blacklight.SetFormContext(formContext);
   
    formTabs.forEach(function (tabId)
    {
        var listOfFields = Blacklight.GetAllFields(tabId);
        if (listOfFields) {
            listOfFields.forEach(function (field) {
                Blacklight.SetVisible(field, false);
                Blacklight.SetMandatory(field, false);
            });

            if (tabId !== BlacklightCase.Tabs.general) {
                Blacklight.ShowHideTab(tabId, false);
            }
        }
    });
    
    fieldsToSHow.forEach(field => {
        Blacklight.SetVisible(field, true);
        if (field !== BlacklightCase.Fields.Common.CaseNumber) {
            Blacklight.SetMandatory(field, true);
        }
        
    });
    ClearMappedFields();
   // Phase2();
    RemoveOldComplaints();
    setFieldsOnUpdate();
    checkSubject();
    
    Blacklight.CaseResolution.Init();
    showPropertyAndTenancy();
    formContext.getAttribute(BlacklightCase.Fields.Common.Customer).addOnChange(OnCustomerChanged);
    formContext.getAttribute(BlacklightCase.Fields.CustomerRisk.SecondaryCategories).addOnChange(customerRiskSecondaryCategoriesOnChange);
    //Blacklight.SharePoint();
    Warning(Blacklight.GetValueLookupID(BlacklightCase.Fields.Common.Customer))


    var customerID = Blacklight.GetValueLookupID(BlacklightCase.Fields.Common.Customer)
    if (customerID) {
        if (Blacklight.IsNewForm()) {
            Blacklight.Common.GetTenancyPropertyOccupancy(customerID, OccupancySearchCompleted);
        }
    }

    var hasProperty = Blacklight.CheckValueNotEmpty(BlacklightCase.Fields.Tenancy.fhg_property);
    var hasTenancy = Blacklight.CheckValueNotEmpty(BlacklightCase.Fields.Tenancy.fhg_tenancy);

    var subject = Blacklight.GetValueLookupID(BlacklightCase.Fields.Common.Subject);
    if (!subject || 
        subject.replace(/[{}]/g, "").toLowerCase() !== BlacklightCase.subjects.SharedOwnership) {
        Blacklight.SetVisible(BlacklightCase.Fields.Tenancy.fhg_property, hasProperty);
        Blacklight.SetVisible(BlacklightCase.Fields.Tenancy.fhg_tenancy, hasTenancy);
    }

    function RemoveOldComplaints() {
        var subjectControl = Xrm.Page.getControl("subjectid");
        if (subjectControl) {
            subjectControl.addPreSearch(function () {
                subjectControl.addCustomFilter(
                    "<filter type='and'>" +
                    "<condition attribute='subjectid' operator='ne' value='" + BlacklightCase.subjects.Complaint + "' />" +
                    "<condition attribute='isleaf' operator='eq' value='1' />" +
                    "</filter>",
                    "subject"
                );
            });
        }
    }
     function hideAllFields() {
        
        var subjectHeadings = BlacklightCase.GetFields(BlacklightCase.Fields);
        subjectHeadings.forEach(field => {
            Blacklight.SetVisible(field, false);

        });
        fieldsToSHow.forEach(field => {
            Blacklight.SetVisible(field, true);
            if (field !== BlacklightCase.Fields.Common.CaseNumber) {
                Blacklight.SetMandatory(field, true);
            }

        });
    }

    function ClearMappedFields() {

        var formType = Blacklight.GetFormType();
        if (formType != 1) return;

        var autoFieldsToRemove = BlacklightCase.GetFields(BlacklightCase.Fields.Mapped);

        autoFieldsToRemove.forEach(field => {
            var value = Blacklight.GetValueLookupID(field);
            if (value) {
                Blacklight.ClearFieldValue(field);
            }
        });
    }

    function Warning(id) {
    
        if (id) {
            Blacklight.CheckMarkers(id);
        }
    }

           
    function OnCustomerChanged() {
        debugger;
        var subject = Blacklight.GetValueLookupID(BlacklightCase.Fields.Common.Subject);
        if (subject) {
            if (subject !== BlacklightCase.subjects.Neighbourhoods.TenancyManagement.Survivorship) {
              var customerID = Blacklight.GetValueLookupID(BlacklightCase.Fields.Common.Customer);
                if (customerID) {
                    Blacklight.MarkerReset();
                    Warning(customerID);
                    var subject = Blacklight.GetValueLookupID(BlacklightCase.Fields.Common.Subject);
                    if (subject) {
                        if (subject.replace(/[{}]/g, "").toLowerCase() === BlacklightCase.subjects.Neighbourhoods.TenancyManagement.DirectLet) {
                            return;
                        }
                    }
                    Blacklight.Common.GetTenancyPropertyOccupancy(customerID, OccupancySearchCompleted);
                    Blacklight.CheckContactEmail(customerID);
                }
                
            }
            
            getCustomerAddress();
        }
    }

    function OccupancySearchCompleted(results)
    {
        var subject = Blacklight.GetValueLookupID(BlacklightCase.Fields.Common.Subject);

        if (subject) {
            if (subject.replace(/[{}]/g, "").toLowerCase() === BlacklightCase.subjects.Neighbourhoods.TenancyManagement.DirectLet) {
                return;
            }
        }
        if (results)
        {
            if (results.HasOccupancy)
                Blacklight.SetLookupValue(BlacklightCase.Fields.Tenancy.fhg_occupancy, results.OccupancyID, results.OccupancyName, BlacklightCase.TableNames.fhg_occupancy);
            else
                Blacklight.ClearFieldValue(BlacklightCase.Fields.Tenancy.fhg_occupancy);

            if (results.HasTenancy)
                Blacklight.SetLookupValue(BlacklightCase.Fields.Tenancy.fhg_tenancy, results.TenancyID, results.TenancyName, BlacklightCase.TableNames.fhg_tenancy);
            else
                Blacklight.ClearFieldValue(BlacklightCase.Fields.Tenancy.fhg_tenancy);

            if (results.HasProperty)
                Blacklight.SetLookupValue(BlacklightCase.Fields.Tenancy.fhg_property, results.PropertyID, results.PropertyName, BlacklightCase.TableNames.fhg_property);
            else
                Blacklight.ClearFieldValue(BlacklightCase.Fields.Tenancy.fhg_property);


            Blacklight.SetVisible(BlacklightCase.Fields.Tenancy.fhg_tenancy, results.HasTenancy);
            Blacklight.SetVisible(BlacklightCase.Fields.Tenancy.fhg_property, results.HasProperty);
        }
    }

    function showPropertyAndTenancy() {
        var subject = Blacklight.GetValueLookupID(BlacklightCase.Fields.Common.Subject);

        if (subject) {
            if (subject.replace(/[{}]/g, "").toLowerCase() === BlacklightCase.subjects.Neighbourhoods.TenancyManagement.DirectLet ||
                subject.replace(/[{}]/g, "").toLowerCase() === BlacklightCase.subjects.SharedOwnership) {
                return;
            }
        }
        var tenancy = Blacklight.HasValue(BlacklightCase.Fields.Tenancy.fhg_tenancy);
        if (tenancy) {
            Blacklight.SetVisible(BlacklightCase.Fields.Tenancy.fhg_tenancy, true);
        } else {
            Blacklight.SetVisible(BlacklightCase.Fields.Tenancy.fhg_tenancy, false);
        }
        var property = Blacklight.HasValue(BlacklightCase.Fields.Tenancy.fhg_property);
        if (property) {
            Blacklight.SetVisible(BlacklightCase.Fields.Tenancy.fhg_property, true);
        } else {
            Blacklight.SetVisible(BlacklightCase.Fields.Tenancy.fhg_property, false);
        }
       
    }

    function setFieldsOnUpdate()
    {
        formContext.getAttribute(BlacklightCase.Fields.Common.Subject).addOnChange(checkSubject);
        formContext.getAttribute(BlacklightCase.Fields.Resolution.ResolveCase).addOnChange(Blacklight.CaseResolution.Init);
    }
       

    function customerRiskSecondaryCategoriesOnChange() {
        var secondaryCategoriesAsString = Blacklight.GetMultiOptionSetText(BlacklightCase.Fields.CustomerRisk.SecondaryCategories);
        Blacklight.SetValue(BlacklightCase.Fields.CustomerRisk.SecondaryCategoriesAsString, secondaryCategoriesAsString);
    }

    function getCustomerAddress() {
        //fhg_customeraddress
        //address1_composite
        var customerID = Blacklight.GetValueLookupID(BlacklightCase.Fields.Common.Customer);
        if (customerID) {
            var id = customerID.replace(/[{}]/g, "");
          Xrm.WebApi.online.retrieveRecord("contact", id, "?$select=address1_composite").then(
                function success(result) {
                    var address1_composite = result["address1_composite"];
                    if (address1_composite) {
                        debugger;
                        var currentAddress = Blacklight.GetValue("fhg_customeraddress");
                        if (!currentAddress || currentAddress !== address1_composite) {
                            Blacklight.SetValue("fhg_customeraddress", address1_composite);
                        }
                    }
                },
                function (error) {
                    Xrm.Utility.alertDialog(error.message);
                }
            );
        }
    }

    function Phase2() {
        var phase2 = Blacklight.UserHasRoleAssigned("e4cc1566-4105-ef11-9f8a-6045bdd07cab");
       
        var phase2Items = [
            BlacklightCase.subjects.Neighbourhoods.TenancyManagement.Abandoned,
            BlacklightCase.subjects.Neighbourhoods.TenancyManagement.NoAccess,
            BlacklightCase.subjects.Neighbourhoods.TenancyManagement.Assignment,
            BlacklightCase.subjects.Neighbourhoods.TenancyManagement.BoundaryIssue,
            BlacklightCase.subjects.CustomerNameChange,
            BlacklightCase.subjects.CustomerRisk,
            BlacklightCase.subjects.Neighbourhoods.TenancyManagement.DeathIntestate,
            BlacklightCase.subjects.Neighbourhoods.TenancyManagement.DirectLet,
            BlacklightCase.subjects.Neighbourhoods.TenancyManagement.DomesticAbuse,
            BlacklightCase.subjects.Neighbourhoods.TenancyManagement.Hoarding,
            BlacklightCase.subjects.Neighbourhoods.TenancyManagement.JointToSole,
            BlacklightCase.subjects.Neighbourhoods.TenancyManagement.ManagementTransfer,
            BlacklightCase.subjects.Neighbourhoods.MX,
            BlacklightCase.subjects.Neighbourhoods.TenancyManagement.MultiAgencySupport,
            BlacklightCase.subjects.Neighbourhoods.TenancyManagement.Other,
            BlacklightCase.subjects.Neighbourhoods.TenancyManagement.Overcrowding,
            BlacklightCase.subjects.Neighbourhoods.TenancyManagement.PermissionRequestTenancy,
            BlacklightCase.subjects.Neighbourhoods.TenancyManagement.PropertyGarden,
            BlacklightCase.subjects.Neighbourhoods.TenancyManagement.PropertyFireFlood,
            BlacklightCase.subjects.Neighbourhoods.TenancyManagement.PetsAnimals,
            BlacklightCase.subjects.Neighbourhoods.TenancyManagement.Safeguarding,
            BlacklightCase.subjects.Neighbourhoods.TenancyManagement.SubLet,
            BlacklightCase.subjects.Neighbourhoods.TenancyManagement.Succession,
            BlacklightCase.subjects.Neighbourhoods.TenancyManagement.Survivorship,
            BlacklightCase.subjects.Neighbourhoods.TenancyManagement.UseAndOccupation,
            BlacklightCase.subjects.Neighbourhoods.TenancyManagement.Vehicles,
            BlacklightCase.subjects.SupportedHousing
        ];
        if (!phase2) {



            var control = Xrm.Page.getControl("subjectid");
            if (control) {
                var fetchXml = "<fetch version='1.0' output-format='xml-platform' mapping='logical'>" +
                    "<entity name='subject'>" +
                    "<attribute name='subjectid' />" +
                    "<attribute name='title' />" +
                    "<filter type='and'>";
                fetchXml += filterArray(phase2Items);
                fetchXml += "</condition>" +
                    "</filter>" +
                    "</entity>" +
                    "</fetch>";

                control.addCustomView(
                    "{00000000-0000-0000-0000-000000000001}", // A GUID for the custom view
                    "subject", // Entity Name
                    "Filtered Subjects", // View display name
                    fetchXml, // FetchXML
                    "", // Layout XML (define columns to display)
                    true  // Set as default view
                );
            }
        }
    
    }

    function filterArray(array) {
        var filterToReturn = "<condition attribute='title' operator='not-in'>";
        
        for (let i = 0; i < array.length; i++) {
            filterToReturn += "<value>" + array[i] + "</value>";
        }
        filterToReturn += "</condition>";
        return filterToReturn;
    }
    function checkSubject()
    {
        debugger;
        var subject = Blacklight.GetValueLookupID(BlacklightCase.Fields.Common.Subject);
       
        hideAllFields();
        if (subject) {
            subject = subject.replace(/[{}]/g, "").toLowerCase();
          
            debugger;
            if (Blacklight.GetFormType() === Blacklight.FormTypes.Create) {
                var customerID = Blacklight.GetValueLookupID(BlacklightCase.Fields.Common.Customer);
                if (customerID) {
                    Blacklight.CheckContactEmail(customerID);
                }
            }

            switch (subject) {
                case BlacklightCase.subjects.General:
                    Blacklight.GeneralCaseCreator.Init();
                    break;
                case BlacklightCase.subjects.HomeSurvey:
                    Blacklight.HomeSurveyCase.Init();
                    break;
                case BlacklightCase.subjects.Complaint:
                    Blacklight.Complaint.Init();
                    break;
                case BlacklightCase.subjects.Neighbourhoods.EstateInspection:
                    Blacklight.EstateInspection.Init();
                    break;
                case BlacklightCase.subjects.PermissionRequest:
                    //formContext.getAttribute(BlacklightCase.Fields.Common.Customer).removeOnChange(OnCustomerChanged);
                    Blacklight.PermissionRequests.Init();
                    break;
                case BlacklightCase.subjects.Neighbourhoods.EstateManagement:
                    Blacklight.EstateManagment.Init();
                    break;
                case BlacklightCase.subjects.HSE:
                    Blacklight.HSE.Init();
                    break;
                case BlacklightCase.subjects.Neighbourhoods.ASB:
                    Blacklight.ASB.Init();
                    break;
                case BlacklightCase.subjects.Neighbourhoods.MX:
                    Blacklight.MX.Init();
                    break;
                case BlacklightCase.subjects.Neighbourhoods.TenancyManagement.NoAccess:
                    Blacklight.NoAccessCase.Init();
                    break;
                case BlacklightCase.subjects.Neighbourhoods.TenancyManagement.Other:
                    Blacklight.OtherCase.Init();
                    break;
                case BlacklightCase.subjects.Neighbourhoods.TenancyManagement.Abandoned:
                    Blacklight.Abandoned.Init();
                    break;
                case BlacklightCase.subjects.Neighbourhoods.TenancyManagement.Vehicles:
                    Blacklight.VehiclesCase.Init();
                    break;
                case BlacklightCase.subjects.Neighbourhoods.TenancyManagement.DeathIntestate:
                    Blacklight.DeathIntestateCase.Init();
                    break;
                case BlacklightCase.subjects.Neighbourhoods.TenancyManagement.Survivorship:
                    formContext.getAttribute(BlacklightCase.Fields.Common.Customer).removeOnChange(OnCustomerChanged);
                    Blacklight.Survivorship.Init();
                    break;
                case BlacklightCase.subjects.Neighbourhoods.TenancyManagement.PermissionRequestTenancy:
                    Blacklight.PermissionRequestTenancy.Init();
                    break;
                case BlacklightCase.subjects.CustomerNameChange:
                    //Blacklight.CustomerNameChange.Init();
                    break;
                case BlacklightCase.subjects.Neighbourhoods.TenancyManagement.BoundaryIssue:
                    Blacklight.BoundaryIssue.Init();
                    break;
                case BlacklightCase.subjects.Neighbourhoods.TenancyManagement.PetsAnimals:
                    Blacklight.PetsAnimals.Init();
                    break;
                case BlacklightCase.subjects.Neighbourhoods.TenancyManagement.SubLet:
                    Blacklight.SubLet.Init();
                    break;
                case BlacklightCase.subjects.Neighbourhoods.TenancyManagement.Succession:
                    formContext.getAttribute(BlacklightCase.Fields.Common.Customer).removeOnChange(OnCustomerChanged);
                    Blacklight.Succession.Init();
                    break;
                case BlacklightCase.subjects.Neighbourhoods.TenancyManagement.JointToSole:
                    formContext.getAttribute(BlacklightCase.Fields.Common.Customer).removeOnChange(OnCustomerChanged);
                    Blacklight.JointToSole.Init();
                    break;
                case BlacklightCase.subjects.Neighbourhoods.TenancyManagement.Assignment:
                    formContext.getAttribute(BlacklightCase.Fields.Common.Customer).removeOnChange(OnCustomerChanged);
                    Blacklight.Assignment.Init();
                    break;
                case BlacklightCase.subjects.Neighbourhoods.TenancyManagement.Overcrowding:
                    Blacklight.Overcrowding.Init();
                    break;
                case BlacklightCase.subjects.Neighbourhoods.TenancyManagement.UseAndOccupation:
                    Blacklight.UseAndOccupation.Init();
                    break;
                case BlacklightCase.subjects.Neighbourhoods.TenancyManagement.DirectLet:
                    Blacklight.DirectLet.Init();
                    break;
                case BlacklightCase.subjects.Neighbourhoods.TenancyManagement.MultiAgencySupport:
                    Blacklight.MultiAgencySupport.Init();
                    break;
                case BlacklightCase.subjects.Neighbourhoods.TenancyManagement.Hoarding:
                    Blacklight.Hoarding.Init();
                    break;
                case BlacklightCase.subjects.Neighbourhoods.TenancyManagement.Safeguarding:
                    Blacklight.Safeguarding.Init();
                    break;
                case BlacklightCase.subjects.Neighbourhoods.TenancyManagement.ManagementTransfer:
                    Blacklight.ManagementTransfer.Init();
                    break;
                case BlacklightCase.subjects.Neighbourhoods.TenancyManagement.PropertyGarden:
                    Blacklight.PropertyGarden.Init();
                    break;
                case BlacklightCase.subjects.Neighbourhoods.TenancyManagement.PropertyFireFlood:
                    Blacklight.PropertyFireFlood.Init();
                    break;
                case BlacklightCase.subjects.Neighbourhoods.TenancyManagement.DomesticAbuse:
                    Blacklight.DomesticAbuse.Init();
                    break;
                case BlacklightCase.subjects.CustomerRisk:
                    formContext.getAttribute(BlacklightCase.Fields.Common.Customer).removeOnChange(OnCustomerChanged);
                    Blacklight.CustomerRisk.Init();
                    break;
                case BlacklightCase.subjects.SupportedHousing:
                    Blacklight.SupportedHousing.Init();
                    break;
                case BlacklightCase.subjects.ComplaintNew:
                    Blacklight.ComplaintNew.Init();
                    break;
                case BlacklightCase.subjects.SharedOwnership:
                    Blacklight.SharedOwnership.Init();
                    break;
               case BlacklightCase.subjects.BeepAssist:
                    Blacklight.BeepAssist.Init();
                    break;
                case BlacklightCase.subjects.IndependentLiving:
                    Blacklight.IndependentLiving.Init();
                    break;
                default:
                    break;
            }
        }
    } 
}