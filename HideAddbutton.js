var formcontext = executionContext.getFormContext();

//Hide Add button on Sub grid
function disableSubgridAddButton() {
    var showButton = true;
    var contactForm = "34088aa8-222f-41f9-a06e-8af6ffc1cd99"; 
    var caseForm = "4a63c8d1-6c1e-48ec-9db4-3e6c7155334c";
    var currentForm = formcontext.ui.formSelector.getCurrentItem().getId().toLowerCase();


   

    if(caseForm === currentForm || contactForm === currentForm) {
        showButton = false;
        
        return showButton;
        
    }

}

<parameters>
<IsInlineNewEnabled>false</IsInlineNewEnabled>
</parameters>