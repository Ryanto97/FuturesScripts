var globalFormContext;

function getFormcontext(executionContext) {
    // Delcare FormContext on load
    globalFormContext =  executionContext.getFormContext();  
    console.log("Form Context: "); // Xrm.Page() for debugtab

    ShowhidePerpAddress();

}



function ShowhidePerpAddress() {

    var incidentGUID = globalFormContext.data.entity.getId(); ;


    if (incidentGUID !== null && incidentGUID.length > 0) {
        // Extract the GUID of the selected Contact (string format)
        incidentGUID = incidentGUID.replace('{', '').replace('}', '').toLowerCase();
    }


    Xrm.WebApi.retrieveRecord("incident", incidentGUID , "?$select=_fhg_allegedperpetrator_value&$expand=fhg_AllegedPerpetrator($select=address1_composite)").then(
        function success(result) {
            console.log(result);
            // Columns
            var incidentid = result["incidentid"]; // Guid
            var fhg_allegedperpetrator = result["_fhg_allegedperpetrator_value"]; // Lookup
            var fhg_allegedperpetrator_formatted = result["_fhg_allegedperpetrator_value@OData.Community.Display.V1.FormattedValue"];
            var fhg_allegedperpetrator_lookuplogicalname = result["_fhg_allegedperpetrator_value@Microsoft.Dynamics.CRM.lookuplogicalname"];
    
            // Many To One Relationships
            if (result.hasOwnProperty("fhg_AllegedPerpetrator") && result["fhg_AllegedPerpetrator"] !== null) {
                var fhg_AllegedPerpetrator_address1_composite = result["fhg_AllegedPerpetrator"]["address1_composite"]; // Multiline Text

                formContext.getAttribute("fhg_alledgeperpetratoraddress").setValue(fhg_AllegedPerpetrator_address1_composite)
            }


        },
        function(error) {
            console.log(error.message);
        }
    );


}