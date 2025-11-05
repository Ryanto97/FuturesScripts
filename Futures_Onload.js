if (typeof (Futures) === "undefined") {
    Futures = function () { };
}

Futures.OnLoad(executionContext)
{
    var formContext = executionContext.getFormContext();
    Blacklight.SetFormContext(formContext);

    //Fiter options based on subject call
    Futures.filterOptionsWithSwitch(formContext);
    formContext.getAttribute(BlacklightCase.Fields.Common.Subject).addOnChange(Futures.filterOptionsWithSwitch(formContext));

    // disable fields if not new record, formType !=1
    Futures.setFieldDisabled(formContext,"subjectid");
    Futures.setFieldDisabled(formContext,"fhg_incidentdate");
    Futures.setFieldDisabled(formContext,"fhg_reportedondate");
    

}

 
