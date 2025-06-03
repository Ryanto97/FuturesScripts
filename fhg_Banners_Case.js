var formcontext;

function setMedicalNeed_onload(executionContext) {
    formcontext = executionContext.getFormContext();
    var contactId = formcontext.getAttribute("customerid").getValue();
    var contactGUID = null;

 
    if (contactId !== null && contactId.length > 0) {
        // Extract the GUID of the selected Contact (string format)
        contactGUID = contactId[0].id.replace('{', '').replace('}', '');
    }

    
 
    if (contactGUID) {
        // Retrieve the contact record
        Xrm.WebApi.retrieveMultipleRecords("contact", "?$filter=contactid eq '" + contactGUID + "'&$select=fhg_medicalneed").then(
            function success(results) {
                console.log(results);
                if (results.entities.length > 0) {
                    var contactRecord = results.entities[0];
                    var medNeed = contactRecord["fhg_medicalneed@OData.Community.Display.V1.FormattedValue"];
                    if (medNeed) {
                        var message = "There is a medical need on the account: " + medNeed + ", please see Communication Preferences and Medical Needs";
                        // Banner notification
                     formcontext.ui.setFormNotification(message, "WARNING", null);
                    }
                }
            },
            function(error) {
                console.log(error.message);
            }
        );
    }
}


    

function medicalNeed_OnChange(executionContext) {
    formcontext = executionContext.getFormContext();

    //Add onchange event  
    formcontext.getAttribute("customerid").addOnChange(setMedicalNeed_onload);


}