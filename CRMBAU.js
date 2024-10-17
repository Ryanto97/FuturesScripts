var globalFormContext;

function crmBau_Onload(executionContext) {
    // Delcare FormContext on load
    globalFormContext =  executionContext.getFormContext();  
    console.log("Form Context: "); // Xrm.Page() for debugtab

    hideSections(globalFormContext);
}



//hide Sections onload
function hideSections(globalFormContext) {

// Create variables for the tab an section's
var tab=globalFormContext.ui.tabs.get("General");
var devsection = tab.sections.get("Development_Section1");
var bugsection = tab.sections.get("Bugfix_section2");
var datasection = tab.sections.get("Data_Section6");

//only show sections
var generalInfoSection = tab.sections.get("GeneralInfo_section_7");
var issueSection = tab.sections.get("issue_section_9");
var statusSection = tab.sections.get("Status_section_8");

// Hide a section
devsection.setVisible(false); 
bugsection.setVisible(false); 
datasection.setVisible(false); 


// Show a section
generalInfoSection.setVisible(true);
issueSection.setVisible(true);
statusSection.setVisible(true);
}

/****************************ON CHANGE EVENTS**************************************************/

//On Change function development
function setSectionVisibleDevelopment(globalFormContext) {
    // Get the lookup value
    var lookupValue = globalFormContext.getAttribute("fhg_CRMTicketType").getValue();

    if (lookupValue && lookupValue.length > 0 ) {
        // Retrieve the name from the lookup value
        var lookupName = lookupValue.name;
        
        console.log("Lookup Name: " + lookupName);

         if (lookupName == "Development") {

            // Set the section visible
            globalFormContext.ui.tabs.get("General").sections.get("Development_Section1").setVisible(true);
            
         } else {

            // Set the section not visible  
            globalFormContext.ui.tabs.get("General").sections.get("Development_Section1").setVisible(false);

         }

    } else {
        console.log("No lookup value found.");
    }
}




//On Change function bug Fix
function setSectionVisibleBugFix(globalFormContext) {
    // Get the lookup value
    var lookupValue = globalFormContext.getAttribute("fhg_CRMTicketType").getValue();
    
    if (lookupValue && lookupValue.length > 0 ) {
        // Retrieve the name from the lookup value
        var lookupName = lookupValue.name;
       
        
        console.log("Lookup Name: " + lookupName);

        if (lookupName == "Bug Fix") {

            // Set the section visible
            globalFormContext.ui.tabs.get("General").sections.get("Bugfix_section2").setVisible(true);

        } else {
            // Set the section not visible 
            globalFormContext.ui.tabs.get("General").sections.get("Bugfix_section2").setVisible(false); 

        }

    } else {
        console.log("No lookup value found.");
    }
}




//On Change function Data investigation
function setSectionVisibleDateFix(globalFormContext) {
    // Get the lookup value
    var lookupValue = globalFormContext.getAttribute("fhg_CRMTicketType").getValue();
    
    if (lookupValue && lookupValue.length > 0 ) {
        // Retrieve the name from the lookup value
        var lookupName = lookupValue.name;
       
        
        console.log("Lookup Name: " + lookupName);

        if (lookupName == "Data Investigation") {

            // Set the section visible
            globalFormContext.ui.tabs.get("General").sections.get("Data_Section6").setVisible(true);

        } else {
            // Set the section not visible 
            globalFormContext.ui.tabs.get("General").sections.get("Data_Section6").setVisible(false); 

        }

    } else {
        console.log("No lookup value found.");
    }
}