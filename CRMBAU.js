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
//hide third party field on load
globalFormContext.getControl("fhg_rdpartyticketnumber").setDisabled(true);

//only show sections
var generalInfoSection = tab.sections.get("GeneralInfo_section_7");
var issueSection = tab.sections.get("issue_section_9");
var statusSection = tab.sections.get("Status_section_8");

// Show a section
generalInfoSection.setVisible(true);
issueSection.setVisible(true);
statusSection.setVisible(true);

}
/*****************************************************************/
