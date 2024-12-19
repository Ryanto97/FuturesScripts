
function updateTimeStamp(executionContext) {

    var formContext = executionContext.getFormContext();
   

    const date = new Date();
    console.log(date);
    formContext.getAttribute("fhg_lastupdatedby").setValue(date);

}