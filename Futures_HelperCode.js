if (typeof (Futures) === "undefined") {
    Futures = function () { };
}




Futures.setFieldNull = function(formContext, fieldName){
    var itemAttr = formContext.getAttribute(fieldName);
    itemAttr.setValue(null);
}

Futures.showOptionInField = function(formContext, fieldName, fieldOptions){
    var itemControl = formContext.getControl(fieldName);
    itemControl.clearOptions();
    fieldOptions.forEach(function (option) {itemControl.addOption(option);});
}

Futures.setFieldDisabled = function(formContext,fieldName){
    var itemControl = formContext.getControl(fieldName);
    itemControl.setDisabled(formContext.ui.getFormType() != 1);

}

Futures.ShowHideFieldBasedOnValues = function (fieldname,allowedValues) {
        var referredByValue = Blacklight.GetValue(fieldname);
        if (referredByValue && allowedValues.includes(referredByValue)){
            // If the value is in the allowed values, set the field to visible
            Blacklight.SetVisible(fieldname, true);
        } else {
            Blacklight.SetVisible(fieldname, false);
        }
 
    }
Futures.ShowHideFieldBasedOnValuesWithLookup = function (fieldname, LookupValueName) {
        var referredByValue = Blacklight.GetValueLookupName(fieldname);
        if (referredByValue && LookupValueName.includes[referredByValue]){
            // If the value is in the allowed values, set the field to visible
            Blacklight.SetVisible(fieldname, true);
        } else {
            Blacklight.SetVisible(fieldname, false);
        }
}
