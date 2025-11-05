if (typeof (Futures) === "undefined") {
    Futures = function () { };
}



// Case 1: New Form => on load subject is null
// Case 2: Saved Form
// Case 3: On remove of subject 
// Case 4: On change on subject
Futures.filterOptionsWithSwitch = function(formContext) {
        var subject = Blacklight.GetSubjectName(BlacklightCase.Fields.Common.Subject);
        const fieldsAndOptionsToShow = Futures.FieldsAndOptionSetToShow[subject];

        if (fieldsAndOptionsToShow !== undefined)
        {
            fieldsAndOptionsToShow.forEach(function(singleFieldAndOptions){
                setFieldNull(formContext,  singleFieldAndOptions.Field)
                showOptionInField(formContext, singleFieldAndOptions.Field, singleFieldAndOptions.Options); 
            })
        }
        
    }
