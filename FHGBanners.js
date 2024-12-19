var formcontext;

function setcontext_onload(executionContext) {
	formcontext = executionContext.getFormContext();

	AlertIfMedicalIsYes();
       deceasedCustomer();

	    //Add onchange event to show banner if medical field 
		formcontext.getAttribute("fhg_medicalneed").addOnChange(AlertIfMedicalIsYes);

}


function AlertIfMedicalIsYes() { 

	

	var isMedical = formcontext.getAttribute("fhg_medicalneed").getValue();
	var medicalNeed =  formcontext.getAttribute("fhg_medicalneed").getText();
	var message = "There is a medical need on the account: " + medicalNeed + ". Please see Communication Preferences and Medical Needs"; 
	

	if (isMedical !== null) {  // not eq null

		if(isMedical[0] !== 100000006){// No medical Need

			//pop up alert
			alert("WARNING: This Contact has a medical on it");
			//banner
			formcontext.ui.setFormNotification(message, "WARNING","medicalid");

		}
	} else if (isMedical == null) {

		formcontext.ui.clearFormNotification("medicalid")


	}
}


function deceasedCustomer() { 

	var deceasedCustomer = formcontext.getAttribute("fhg_datedeceased").getValue();
	var message = "NOTE: Customer Is deceased"; 
	

	if (deceasedCustomer === null ) { 
	
        console.log("The Date field is empty")

	} else {
        // Show banner
	    formcontext.ui.setFormNotification(message, "WARNING",null);
        
    }
}