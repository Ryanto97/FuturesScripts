function getCategoryName(executionContext) {
    // Get the form context from the execution context
    var formContext = executionContext.getFormContext();  
    // Get the value of the lookup field "fhg_category"
    var Lookup = formContext.getAttribute("fhg_category").getValue();
    
    // check lookup Value to get the name of the selected category
    if (Lookup) {
        var CategoryName = Lookup[0].name;
        console.log(CategoryName); // Repairs
    } 

// Show or hide the job number field based on the selected category
switch(CategoryName) {
    case "Repairs":
        formContext.getControl("fhg_jobnumber").setVisible(true);
        break;
    case "Assets Compliance and Health & Safety":
        formContext.getControl("fhg_jobnumber").setVisible(true);
        break;
    case "Development Aftersales":
        formContext.getControl("fhg_jobnumber").setVisible(true);
        break;
    case "Adaptions":
        formContext.getControl("fhg_jobnumber").setVisible(true);
        break;
    case "Assets":
        formContext.getControl("fhg_jobnumber").setVisible(true);
        break;
    default:
        formContext.getControl("fhg_jobnumber").setVisible(false);
        break;

}
}


