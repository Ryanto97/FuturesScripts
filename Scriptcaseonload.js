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
      
};