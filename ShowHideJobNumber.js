if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

function getCategoryName(executionContext) {
    var formContext = executionContext.getFormContext();
    Blacklight.SetFormContext(formContext);

    complanceOrRepairs();
}

function complanceOrRepairs() {
    var Lookup = formContext.getAttribute("fhg_category").getValue();


    if (Lookup) {
        var CategoryName = Lookup[0].name;
        console.log(CategoryName); // Repairs
    } 

    if (CategoryName == "Repairs") {

        formContext.getControl("fhg_jobnumber").setVisible(true);
    } else {
        formContext.getControl("fhg_jobnumber").setVisible(false);

    } 


    switch(CategoryName) {
        case "Repairs":
            formContext.getControl("fhg_jobnumber").setVisible(true);
            break;
        case "Assets":
            formContext.getControl("fhg_jobnumber").setVisible(true);
    }

    


}


