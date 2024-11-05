var formContext;

function showHideOnload(executionContext) {
    //Delcare FormContext on load
    formContext =  executionContext.getFormContext();  
    console.log("Form Context: "); // Xrm.Page() for debugtab

    showhidePOC();

    //Add onchange event to show POC field 
    formContext.getAttribute("subjectid").addOnChange(showhidePOC);

    //Make sure my code show on save of record
    formContext.data.entity.addOnSave(showhidePOC);

}


//Show hide Person of concern
function showhidePOC() {
    // get lookup details
    var subjectLookup = formContext.getAttribute("subjectid").getValue();

    if (subjectLookup) {
        var subjectId = subjectLookup[0].id;

        var subjectName = subjectLookup[0].name;

        var subjectEntityType = subjectLookup[0].entityType;


        console.log(subjectId,subjectName,subjectEntityType);
        
    }
    

    if (subjectName == "Domestic Abuse") {

        formContext.getControl("fhg_multiagencysupportwho").setVisible(true);
        formContext.getAttribute("fhg_multiagencysupportwho").setRequiredLevel("requried");

    } else {


        formContext.getControl("fhg_multiagencysupportwho").setVisible(false);
        formContext.getAttribute("fhg_multiagencysupportwho").setRequiredLevel("none");

    }

    
}

