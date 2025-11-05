 // JavaScript source code
if (typeof (Futures) === "undefined") {
    Futures = function () { };
}

Futures.OptionSetToHide = {
    ASB:{
        Primary: {
            Field: "fhg_asbprimarycategory",
            Options: [100000011,100000002,100000004,100000008,100000009,100000012,100000015,100000000,993780002] // 100000007 Hate Related incident removed
        },
        Secondary:{
            Field: "fhg_asbsecondarycategory",
            Options: [100000011,100000002,100000004,100000008,100000009,100000012,100000015,100000000,993780002] // 100000007 Hate Related incident removed
        }
    },
    Complaints:{
        Primary: {
            Field: "fhg_complaintsecondarycategory",
            Options: [100000011]
           
        },
        Secondary:{
            Field: "fhg_stage",
            Options: [100000000]

    },
    },
    Hse:{
        Primary: {
            Field: "fhg_hsecategory",
            Options: [100000007]
        },
        Secondary:{ // Impactedparty 
            Field: "fhg_impactedparty",
            Options: [100000003,100000005]// Team Memeber & Work experience
        }
    },
    EstateManagement:{
        Primary: {
            Field: "fhg_estatemanagementprimarycategory",
            Options: [100000017] // Property/Garden
        },
        Secondary:{
            Field: "fhg_estatemanagementlocation",
            Options: [100000000] // Property
        }
    }
};

function FuturesOnload(executionContext){
        "use strict"; debugger;
        
        var formContext = executionContext.getFormContext();
        Blacklight.SetFormContext(formContext);
  
        lockedCase(formContext);
      
        filterOptionsWithSwitch();
        formContext.getAttribute("subjectid").addOnChange(filterOptionsWithSwitch);

        //showhideFurtherReferralDetails();
        formContext.getAttribute("fhg_referredby").addOnChange(showhideFurtherReferralDetails);

        //showhideotherReferralDetails();
        formContext.getAttribute("fhg_referredby").addOnChange(showhideotherReferralDetails);

        //disable hyperlinks for restricted roles
        disableHyperlinksForRestrictedRoles();

        for (var category in Futures.OptionSetToHide) {
            var categoryItem = Futures.OptionSetToHide[category];
            for (var subCategory in categoryItem) {
                var subCategoryItem = categoryItem[subCategory];
                var field = subCategoryItem.Field;
                var options = subCategoryItem.Options;
                var control = formContext.getControl(field);

                if (control !== null) {
                    options.forEach(function(option) {
                        control.removeOption(option);
                    });
                }
            }
        }


        // disable Subject if not new record
        formContext.getControl("subjectid").setDisabled(Xrm.Page.ui.getFormType() != 1);  
        //disable incident Date and Reported on date if not a new record 
        formContext.getControl("fhg_incidentdate").setDisabled(Xrm.Page.ui.getFormType() != 1);  
        formContext.getControl("fhg_reportedondate").setDisabled(Xrm.Page.ui.getFormType() != 1);  
      


 
    //var OptionSetSwitchLibrary = (function () {
    function filterOptionsWithSwitch(executionContext) {
        var subject = Blacklight.GetSubjectName(BlacklightCase.Fields.Common.Subject);
        var itemAttr = formContext.getAttribute("fhg_referredby");
        var itemControl = formContext.getControl("fhg_referredby");

        if (!subject) {
        itemAttr.setValue(null); // Clear the subject if not set
        return;
        }
        console.log("Subject is set to: " + subject);
        // If subject is not set, do not filter options
        var allOptions = itemAttr.getOptions();

        // Define allowed values based on category using switch
        var allowedValues = [100000000,100000001,100000002,100000003,100000004,100000005,100000006,100000007,100000008,100000009,100000010,100000011,100000012,100000013,100000014,100000015,100000016,100000017];
        // Use switch statement to determine allowed values based on subject
        // Note: Replace the empty arrays with actual allowed values for each subject
        switch (subject) {
            case "Independent Living" : //Independent Living
                console.log("Independent Living subject selected");
                allowedValues = [100000000,100000001,100000002,100000003,100000004,100000005];
                break;
            case "Beep Assist" : // Beep Assist
                console.log("Beep Assist subject selected");
                allowedValues = [100000000,100000003,100000006,100000007,100000008,100000009,100000010,100000011,100000012,100000013,100000014,100000015,100000016,100000017]; 
                break;
            default:
                allowedValues = [];
        }

        // Clear and re-add only allowed options
        itemControl.clearOptions();
        allOptions.forEach(function (option) {
            if (allowedValues.includes(option.value)) {
                itemControl.addOption(option);
            }
        });
        
    }

    return {    
        filterOptionsWithSwitch: filterOptionsWithSwitch
    };

    function showhideFurtherReferralDetails(executionContext) {

        // Show or hide the "Further Referral Details" field based on the selected "Referred By" option
        var referredBy = formContext.getAttribute("fhg_referredby").getValue();
        var subject = Blacklight.GetSubjectName(BlacklightCase.Fields.Common.Subject);
        // check if referred by is one of the specified values
         if (subject == "Beep Assist" && (referredBy == 100000009 || referredBy == 100000010 || referredBy == 100000012 || referredBy == 100000014 || referredBy == 100000015 || referredBy == 100000005)) {
        formContext.getControl("fhg_furtherreferralsdetails").setVisible(true);
        } else {
        formContext.getControl("fhg_furtherreferralsdetails").setVisible(false);
        }
   
    }
    
    function showhideotherReferralDetails(executionContext) {
        // Show or hide the "Other Referral Details" field based on the selected "Referred By" option
        var referredBy = formContext.getAttribute("fhg_referredby").getValue();
        if (referredBy == 100000005) { // Other Referral
            formContext.getControl("fhg_otherreferralreason").setVisible(true);
        } else {
            formContext.getControl("fhg_otherreferralreason").setVisible(false);
        }
    }
    

};

function lockedCase(formContext) {
    
    var formType = formContext.ui.getFormType(); 
    var userId = Xrm.Utility.getGlobalContext().userSettings.userId.toLowerCase();

    var allowedUsers = [
        "{8df3fece-ea2a-ee11-9965-002248c7284e}", // Leanne
        "{52d6d963-fe1e-ee11-9967-002248c72853}", // Manjit
        "{efda6c93-6b57-ec11-8f8f-000d3a0cefa1}"  // Stephanie
        //"{3887a00f-cb98-ee11-be37-6045bd0c1749}" //Shubham
    ];

    var lockedCaseId = "CAS-85482-W5V3B5"; //"CAS-160018-Y3F3D1";
    var caseId = formContext.getAttribute("ticketnumber")?.getValue();

    var pageInput = {
        pageType: "entitylist",
        entityName: "incident"
    };

   
    if (caseId === lockedCaseId && formType !== 1) {
        if (!allowedUsers.includes(userId)) {
            var alertStrings = { text: "You are not authorized to view this case." };
            var alertOptions = { height: 120, width: 260 };

            Xrm.Navigation.openAlertDialog(alertStrings, alertOptions).then(
                function () {
                    Xrm.Navigation.navigateTo(pageInput);
                },
                function (error) {
                    console.error("Alert dialog failed: ", error);
                }
            );

            return; 
        }
    }
    
};

    //disable hyperlinks for restricted roles for subcategory field
function disableHyperlinksForRestrictedRoles(formContext) {
    var restrictedRoles = ["FHG - Basic User"];
    var targetFieldName = "fhg_subcategory";

    var userRolesCollection = Xrm.Utility.getGlobalContext().userSettings.roles;
    var userRoles = [];

    userRolesCollection.forEach(function (role) {
        userRoles.push(role.name);
    });

    var isRestricted = userRoles.some(function (roleName) {
        return restrictedRoles.includes(roleName);
    });

    if (isRestricted) {
        setTimeout(function () {
            var fieldControl = formContext.getControl(targetFieldName);
            if (fieldControl) {
                // This targets the actual hyperlink inside the lookup control
                var linkElement = fieldControl.getControlType() === "lookup" 
                    ? fieldControl._control?.getElement()?.querySelector("a") 
                    : null;

                if (linkElement) {
                    linkElement.removeAttribute("href");
                    linkElement.style.pointerEvents = "none";
                    linkElement.style.color = "black";
                    linkElement.style.textDecoration = "none";
                }
            }
        }, 3000);
    }
};




 