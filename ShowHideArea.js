var formContext;

function showHideAreaOnload(executionContext) {
    //Delcare FormContext on load
    formContext =  executionContext.getFormContext();  
    console.log("Form Context: "); // Xrm.Page() for debugtab
    //Call function onload
    showAreafield();

    //Add onchange event to show area field 
    formContext.getAttribute("subjectid").addOnChange(showAreafield);

    //Make sure my code show on save of record
    formContext.data.entity.addOnSave(showAreafield);
}

function showAreafield() {
    
    //Display Area On change when subject contains data 
    formContext.getControl("fhg_area").setVisible(true);
   // formContext.getAttribute("fhg_area").setRequiredLevel("requried");

}

