function setcontext_onload(executionContext) {
	var formcontext = executionContext.getFormContext();

	AlertIfMedicalIsYes(formcontext);
    deceasedCustomer(formcontext);
}


function AlertIfMedicalIsYes(formcontext) { 

	var isMedical = formcontext.getAttribute("fhg_medicalneed").getValue();
	var medicalNeed =  formcontext.getAttribute("fhg_medicalneed").getText();
	var message = "There is a medical need on the account: " + medicalNeed + " please see Communication Preferences and Medical Needs"; 
	

	if (isMedical) { 
	//pop up alert
	alert("WARNING: This Contact has a medical on it");
	//banner
	formcontext.ui.setFormNotification(message, "WARNING",null);
	}
}


function deceasedCustomer(formcontext) { 

	var deceasedCustomer = formcontext.getAttribute("fhg_datedeceased").getValue();
	var message = "NOTE: This Customer is Deceased"; 
	

	if (deceasedCustomer === null ) { 
	
        console.log("The Date field is empty")

	} else {
        // Show banner
	    formcontext.ui.setFormNotification(message, "WARNING",null);
        
    }
}


//This is a code test
