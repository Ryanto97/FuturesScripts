

function showHide3rdPartyTicketNumber(executionContext) {
    // Declare formContext
     var formContext = executionContext.getFormContext();
    
    //check CRM logged to for either blacklight or manifest value
    const thirdParty = formContext.getAttribute("fhg_crmloggedto").getValue();

    if(thirdParty == 100000000) { // Manifest

        formContext.getControl("fhg_rdpartyticketnumber").setDisabled(false);
        formContext.getControl("fhg_rdpartyticketnumber").setLabel("Manifest Ticket Number")

    } else if (thirdParty == 100000001){ // Blacklight

        formContext.getControl("fhg_rdpartyticketnumber").setDisabled(false);
        formContext.getControl("fhg_rdpartyticketnumber").setLabel("Blacklight Ticket Number");

    } else{
        //lock field on change 
        formContext.getControl("fhg_rdpartyticketnumber").setDisabled(true);
        formContext.getControl("fhg_rdpartyticketnumber").setLabel("3rd Party Ticket Number");

    }

}