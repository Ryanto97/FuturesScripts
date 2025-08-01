if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

Blacklight.FormContext = {};


Blacklight.SetFormContext = function (context) {
    this.FormContext = context;
};

Blacklight.SharePointUrls = {
    DropOfCase: "035ad769-73db-ec11-bb3c-002248430d24",
    DropOfContact: "9638175d-73db-ec11-bb3c-002248430d24",
    DropOfProperty: "7de4f94a-73db-ec11-bb3c-002248430d24",
    DropOfTenancy: "ccb6ff3e-73db-ec11-bb3c-002248430d24",
    SearchCase: "949c0327-73db-ec11-bb3c-002248430d24",
    SearchContact: "a3e3cd1a-73db-ec11-bb3c-002248430d24",
    SearchProperty: "723ca861-6cdb-ec11-bb3c-002248430d24",
    SearchTenancy: "2651d379-6cdb-ec11-bb3c-002248430d24",
    UploadingDocument: "70412c8c-6cdb-ec11-bb3c-002248430d24"
}

Blacklight.OpenRecord = function (entityName, recordId) {
    var entityFormOptions = {
        entityName: entityName,
        entityId: recordId
    };

    Xrm.Navigation.openForm(entityFormOptions).then(
        function (success) {
            console.log("Record opened successfully.");
        },
        function (error) {
            console.log("Error opening record: " + error.message);
        }
    );
};

Blacklight.FormTypes =
{
    Undefined: 0,
    Create: 1,
    Update: 2,
    ReadOnly: 3,
    Disabled: 4,
    BulkEdit: 6
};

Blacklight.IsNotOffline = function () {
    return !Xrm.Utility.getGlobalContext().client.isOffline();
}
Blacklight.GetFormType = function () {
    return this.FormContext.ui.getFormType();
}

Blacklight.IsNewForm = function () {
    return this.FormContext.ui.getFormType() === Blacklight.FormTypes.Create;
}

Blacklight.GetFields = function (fields) {
    var array = [];
    for (const [key, val] of Object.entries(fields)) {
        if (typeof val === 'object') {
            for (const [key, value] of Object.entries(val)) {
                array.push(value);
            }
        }
        else {
            array.push(val);
        }
    }

    return array;
}

Blacklight.AddNotification = function(field, notification, level, id)
{
   
    this.FormContext.ui.setFormNotification(notification, level,id);
}

Blacklight.ClearNotification = function (fieldid) {

    this.FormContext.ui.clearFormNotification(notification);
}


Blacklight.SharePoint = function () {
    return;
    if (Blacklight.IsNotOffline) {

        var id = Blacklight.GetEntityId();
        Blacklight.GetEnviromentalVariable(Blacklight.SharePointUrls.UploadingDocument, "tab_upload_sharepoint", "IFRAME_upload_sharepoint_case");
        Blacklight.ShowSharePointFrames("tab_upload_sharepoint");
        var entityName = Blacklight.GetEntityName();
        if (entityName) {
            var ref = "";
            var urlSource = "";
            switch (entityName) {
                case "incident":
                    return;
                    ref = id;
                    urlSource = Blacklight.SharePointUrls.SearchCase;
                    break;
                case "fhg_property":
                    ref = Blacklight.GetValue("fhg_sequencenumber");
                    urlSource = Blacklight.SharePointUrls.SearchProperty;
                    break;
                case "contact":
                    ref = Blacklight.GetValue("fhg_orchardpersonnumber");
                    urlSource = Blacklight.SharePointUrls.SearchContact;
                    break;
                case "fhg_tenancy":
                    ref = Blacklight.GetValue("fhg_tenancynumber");
                    urlSource = Blacklight.SharePointUrls.SearchTenancy;
                    break;
                default:
            }
            Blacklight.GetEnviromentalVariable(urlSource, "tab_view_sharepoint", "IFRAME_view_sharepoint_Case", ref);
            Blacklight.ShowSharePointFrames("tab_view_sharepoint");
        }
    }
}

Blacklight.SetIframeSource = function (tabName, iFrame, source, refNumber) {

    var url = source;
    if (refNumber) {
        url += refNumber;
    }

    // var tabObj = this.FormContext.ui.tabs.get(tabName);
    var iFrameControl = this.FormContext.getControl(iFrame);
    if (iFrameControl) {

        iFrameControl.setSrc(url);

        console.log(iFrameControl.getSrc());
    }

}

Blacklight.ShowSharePointFrames = function (tabName) {
    var isNewForm = Blacklight.IsNewForm();
    Blacklight.ShowHideTab(tabName, !isNewForm);
}

Blacklight.GetEnviromentalVariable = function (variableId, tabName, iFrame, refNumber) {
    Xrm.WebApi.online.retrieveRecord("fhg_sharepointurl", variableId, "?$select=fhg_url").then(
        function success(result) {
            var url = result["fhg_url"];
            Blacklight.SetIframeSource(tabName, iFrame, url, refNumber);
        },
        function (error) {
            console.log(error.message);
        }
    );
}

Blacklight.CaseOrigin =
{
    ChatBot: 100000000,
    Email: 2,
    FaceToFace: 100000002,
    Staff: 100000001,
    MyAccount: 100000003,
    Phone: 1,
    PostLetter: 700610000,
    SMS: 3986,
    SocialMedia: 2483,
    WebsiteForm: 3
};

Blacklight.SetFormContext = function (context) {
    this.FormContext = context;
};

Blacklight.SetCustomView = function (entityName, viewDisplayName, fetchXml, layoutXml, fieldName) {

    this.FormContext.getControl(fieldName).addCustomView('{00000000-0000-0000-0000-000000000001}',
        entityName,
        viewDisplayName,
        fetchXml,
        layoutXml,
        true);
}
Blacklight.SetVisible = function (fieldName, isVisible, value) {
    try {
        var control = this.FormContext.getControl(fieldName);
        if (control) {
            control.setVisible(isVisible);
        }
    } catch (e) {
        alert("Field name: " + fieldName + " Error: " + e);
    }
};

Blacklight.SetValue = function (fieldName, value) {
    try {
        if (value == undefined)
            value = null;

        var control = this.FormContext.getControl(fieldName);

        if (control) {
            this.FormContext.getAttribute(fieldName).setValue(value);
        }

    } catch (e) {
        alert("Field name: " + fieldName + " Error: " + e);
    }
};

Blacklight.UserHasRoleAssigned = function (roleId) {
    try {
        var currentUserRoles = Xrm.Utility.getGlobalContext().userSettings.securityRoles;
        for (var i = 0; i < currentUserRoles.length; i++) {
            var userRoleId = currentUserRoles[i];
            if (userRoleId == roleId) {
                return true;
            }
        }

        return false;
    }

    catch (e) {
        var alertStrings = { confirmButtonLabel: "OK", text: "An error occured when trying to check user's security role : " + e.Message, title: "Failed to check user's security role" };
        var alertOptions = { height: 120, width: 260 };

        Xrm.Navigation.openAlertDialog(alertStrings, alertOptions).then(
            function success(result) {
                console.log(e.Message);
            },
            function (error) {
                console.log(error.message);
            }
        );
        alert("Field name: " + fieldName + " Error: " + e);
    }
};

Blacklight.NewSetVisible = function (fieldName, isVisible) {
    try {
        var control = this.FormContext.getControl(fieldName);
        if (control) {
            control.setVisible(isVisible);
        }

    } catch (e) {
        alert("Field name: " + fieldName + " Error: " + e);
    }
}

Blacklight.SetVisibleAllInstances = function (fieldName, isVisible) {
    try {
        this.FormContext.getAttribute(fieldName).controls.forEach(function (control, i) { control.setVisible(isVisible); });

    } catch (e) {
        console.error("error hiding field :" + e.message);
    }
};

Blacklight.GetFormType = function () {
    return this.FormContext.ui.getFormType();
}

Blacklight.SetFieldsVisibility = function (fields, isVisible) {
    fields.forEach(function (name) {
        Blacklight.SetVisible(name, isVisible);
    });
};

Blacklight.SetMandatory = function (fieldName, isMandatory) {
    try {
        var attribute = this.FormContext.getAttribute(fieldName);

        if (attribute) {
            attribute.setRequiredLevel(isMandatory ? "required" : "none");
        }
    } catch (e) {
        alert("Field name: " + fieldName + " Error: " + e);
    }

};

Blacklight.SetVisibleAndMandatory = function (fieldName, isVisible, isMandatory) {

    Blacklight.SetVisible(fieldName, isVisible);
    Blacklight.SetMandatory(fieldName, isMandatory);
}

Blacklight.SetVisibleMandatoryAndReadOnly = function (fieldName, isVisible, isMandatory, isReadOnly) {
    Blacklight.SetMandatory(fieldName, isMandatory);
    Blacklight.SetVisible(fieldName, isVisible);
    Blacklight.SetFieldReadOnly(fieldName, isReadOnly);
}


Blacklight.ShowHideTab = function (tabName, flag) {
    var tab = this.FormContext.ui.tabs.get(tabName);
    if (tab) {
        tab.setVisible(flag);
    }
};

Blacklight.ShowHideSection = function (tabName, sectionName, flag) {
    this.FormContext.ui.tabs.get(tabName).sections.get(sectionName).setVisible(flag);
};

Blacklight.ShowHideControl = function (controlName, showControl) {
    try {
        this.FormContext.getControl(controlName).setVisible(showControl);
    } catch (e) {
        console.error("Failed to show/hide " + controlName + " Error message : " + e.message);
    }
};

Blacklight.CheckFieldCondition = function (question) {
    var result = false;

    var attributeValue = this.FormContext.getAttribute(question.attributeName).getValue();

    if (attributeValue || attributeValue === 0 || attributeValue === false) {
        if (question.conditionValue.length > 0)
            question.conditionValue.forEach(function (value) {
                if (attributeValue === value) {
                    result = true;
                    return;
                }
            });
        else if (attributeValue === question.conditionValue) {
            result = true;
        }
    }

    return result;
};

Blacklight.GetSubjectName = function (subjectName) {
    var value = this.FormContext.getAttribute(subjectName).getValue();

    if (value) {
        var subjectValueName = value[0].name;
        if (!subjectValueName)
            subjectValueName = value;

        return subjectValueName;
    }
    return null;
}
Blacklight.CheckIfFieldContainsValue = function (name, field) {
    var result = false;
    var value = this.FormContext.getAttribute(field).getValue();
    if (value) {
        result = value.includes(name);
    }

    return result;
};

Blacklight.CheckSubjectName = function (name, subjectName) {
    var result = false;
    var value = this.FormContext.getAttribute(subjectName).getValue();
    if (value) {
        var subjectValueName = value[0].name;

        if (!subjectValueName)
            subjectValueName = value;

        if (subjectValueName === name)
            result = true;
    }

    return result;
};

Blacklight.CheckSubjectEqualsAnyOfList = function (subjects, subjectName) {
    var subjectValue = this.FormContext.getAttribute(subjectName).getValue();
    var isEqual = false;
    if (subjectValue) {
        subjects.forEach(function (subject) {
            if (subjectValue === subject) {
                isEqual = true;
                return;
            }
        });
    }
    return isEqual;
};

Blacklight.CheckContainSubjectName = function (name, subjectName) {
    var result = false;
    var value = this.FormContext.getAttribute(subjectName).getValue();
    if (value) {
        var subjectValueName = value[0].name;

        if (!subjectValueName)
            subjectValueName = value;

        if (subjectValueName.indexOf(name) >= 0)
            result = true;
    }

    return result;
};

Blacklight.SetLable = function (name, label) {
    if (label) {
        this.FormContext.getControl(name).setLabel(label);
    }
};

Blacklight.Question = (function () {
    var question = function (attributeName, fieldName, conditionValue) {
        this.attributeName = attributeName;
        this.fieldName = fieldName;
        this.conditionValue = conditionValue;
    };
    return question;
})();

Blacklight.UpdateFieldValueIfEmpty = function (fieldName, data) {
    if (!this.FormContext.getAttribute(fieldName).getValue())
        this.FormContext.getAttribute(fieldName).setValue(data);
};

Blacklight.GetAttributesNames = function (attributes) {
    var attributesNames = [];
    if (attributes) {
        attributes.forEach(function (attribute) {
            var attributeName = attribute.getName();
            if (attributeName) {
                attributesNames.push(attributeName);
            }
        });
    }
    return attributesNames;
};

Blacklight.LockUnlockFieldsInSection = function (tabName, sectionName, flag) {
    var tab = this.FormContext.ui.tabs.get(tabName);
    if (tab) {
        var section = tab.sections.get(sectionName);
        if (section) {
            section.controls.forEach(function (control, controlIndex) {
                var attribute = control.getAttribute();
                if (attribute != null) {
                    control.setDisabled(flag);
                }
            });
        }
    }
};

Blacklight.SetFieldReadOnly = function (fieldName, flag) {
    var control = this.FormContext.getControl(fieldName);
    if (control) {
        control.setDisabled(flag);
    }
};

Blacklight.CheckValueNotEmpty = function (fieldName) {
    var flag = false;
    var attribute = this.FormContext.getAttribute(fieldName);
    if (attribute) {
        var value = attribute.getValue();
        if (value || value === 0 || value === false)
            flag = true;
    }

    return flag;
};

Blacklight.GetValue = function (fieldName) {
    var value = null;;
    var attribute = this.FormContext.getAttribute(fieldName);
    if (attribute) {
        value = attribute.getValue();
    }

    return value;
};

Blacklight.GetValueLookupID = function (fieldName) {
    var value = null;
    var attribute = this.FormContext.getAttribute(fieldName);
    if (attribute && attribute.getValue()) {
        value = attribute.getValue()[0].id;
    }

    return value;
};

Blacklight.AddOnChangeHandler = function (fieldName, handlerFunction) {
    this.FormContext.getAttribute(fieldName).addOnChange(handlerFunction);
}

Blacklight.GetValueLookupName = function (fieldName) {
    var value = null;
    var attribute = this.FormContext.getAttribute(fieldName);
    if (attribute && attribute.getValue()) {
        value = attribute.getValue()[0].name;
    }

    return value;
};

Blacklight.HasValue = function (fieldName) {
    var attribute = this.FormContext.getAttribute(fieldName);
    return attribute && attribute.getValue();
};



Blacklight.ClearFieldValue = function (fieldName) {
    var attribute = this.FormContext.getAttribute(fieldName);
    if (attribute) {
        attribute.setValue(null);
    }
};

Blacklight.SetOptionSetValue = function (fieldName, value) {
    var attribute = this.FormContext.getAttribute(fieldName);
    if (attribute) {
        attribute.setValue(value);
    }
};

Blacklight.IsFieldOnFrom = function (fieldName) {
    var attribute = this.FormContext.getAttribute(fieldName);
    if (attribute) {
        return true;
    }
    return false;
};


Blacklight.SetLookupValue = function (fieldName, id, name, entityType) {
    if (fieldName != null) {
        var lookupValue = new Array();
        lookupValue[0] = new Object();
        lookupValue[0].id = id;
        lookupValue[0].name = name;
        lookupValue[0].entityType = entityType;
        this.FormContext.getAttribute(fieldName).setValue(lookupValue);
    }
}

Blacklight.ParseDate = function (date) {
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();

    return yyyy + "-" + mm + "-" + dd;
}

Blacklight.GetEntityById = function (id, fields, entity) {
    id = Blacklight.TrimId(id);
    if (Blacklight.IsNotOffline) {
        Xrm.WebApi.online.retrieveRecord(entity, id, "?$select=" + fields).then(
            function success(result) {
                return result;
            },
            function (error) {
                console.log(error.message);
            }
        );
    }

}

Blacklight.TrimId = function (id) {
    return id.replace(/[{}]/g, "");
}

Blacklight.GetEntityName = function () {
    var entityName = this.FormContext._entityName;
    return entityName;
}

Blacklight.GetEntityId = function () {
    var entityId = this.FormContext.data.entity.getId();
    return Blacklight.TrimId(entityId);
}
Blacklight.GetEntitsByFilter = function (fields, filter, entity) {
    if (Blacklight.IsNotOffline) {
        Xrm.WebApi.online.retrieveMultipleRecords(entity, id, "?$select=" + fields.join() + "&$filter=" + filter).then(
            function success(result) {
                if (result.entities.length >= 1) {
                    return result;
                }
                return null;
            },
            function (error) {
                console.log(error.message);
            }
        );
    }

}

Blacklight.GetOptionSetText = function (fieldName) {
    var value = null;;
    var optionSetField = this.FormContext.getAttribute(fieldName);
    if (optionSetField) {
        value = optionSetField.getText();
    }

    return value;
}

Blacklight.GetMultiOptionSetText = function (name) {
    var control = this.FormContext.getAttribute(name);
    if (control) {
        var textToReturn = "";
        var controlText = control.getText();
        if (controlText) {
            for (var i = 0; i < controlText.length; i++) {
                textToReturn += controlText[i] + "; ";
            }
        } else {
            textToReturn = controlText;
        }
        return textToReturn;
    }
    return null;
}

Blacklight.GetAllFields = function (tabId) {
    var fieldList = new Array();

    var tab = this.FormContext.ui.tabs.get(tabId);
    if (tab) {
        tab.sections.forEach(function (section, sectionIndex) {
            section.controls.forEach(function (control, controlIndex) {
                switch (control.getControlType()) {
                    case "standard":
                    case "lookup":
                    case "optionset":
                        var attribute = control.getAttribute();

                        if (attribute != null) {
                            fieldList.push(attribute.getName());
                        }
                        break;
                }
            });
        });
        return fieldList;
    }

    return null;
}

Blacklight.HideAllFieldsInSection = function (tabid, sectionId) {
    var section = this.FormContext.ui.tabs.get(tabid).sections.get(sectionId);
    section.controls.forEach(function (control, controlIndex) {
        switch (control.getControlType()) {
            case "standard":
            case "lookup":
            case "optionset":
                var attribute = control.getAttribute();
                if (attribute != null) {
                    Blacklight.SetVisible(attribute.getName(), false);
                    Blacklight.SetMandatory(attribute.getName(), false);
                }
                break;
        }
    });
}

Blacklight.GetObjectValuesAsArray = function (object) {

    var array = [];

    for (const [key, value] of Object.entries(object)) {
        array.push(value);
    }

    return array;
}

Blacklight.MarkerWaring = 0;

Blacklight.MarkerIncrement = function () {
    Blacklight.MarkerWaring++;
}
Blacklight.MarkerReset = function () {
    Blacklight.MarkerWaring = 0;
}

Blacklight.CheckTenancy = function (id) {
    if (Blacklight.MarkerWaring > 0) return;
    console.log("CheckTenancy")
    Xrm.WebApi.online.retrieveMultipleRecords("fhg_occupancy", "?$select=_fhg_tenancy_value&$filter=_fhg_person_value eq " + id + " and  fhg_enddate eq null").then(
        function success(results) {
            for (var i = 0; i < results.entities.length; i++) {
                var _fhg_tenancy_value = results.entities[i]["_fhg_tenancy_value"];
                Blacklight.GetOccupants(_fhg_tenancy_value);
            }
        },
        function (error) {
            Xrm.Utility.alertDialog("CheckTenancy:" + error.message);
        });
}


Blacklight.GetOccupants = function (id) {
    if (Blacklight.MarkerWaring > 0) return;
    console.log("GetOccupants")
    Xrm.WebApi.online.retrieveMultipleRecords("fhg_occupancy", "?$select=_fhg_person_value&$filter=_fhg_tenancy_value eq " + id + " and  fhg_enddate eq null").then(
        function success(results) {
            for (var i = 0; i < results.entities.length; i++) {
                var _fhg_person_value = results.entities[i]["_fhg_person_value"];
                Blacklight.CheckMarkersOnly(_fhg_person_value);
            }
        },
        function (error) {
            console.log(error.message);
            Xrm.Utility.alertDialog("GetOccupants:" + error.message);
        }
    );
}

Blacklight.GetTenancyFromProperty = function (id) {
    if (Blacklight.MarkerWaring > 0) return;
    console.log("GetTenancyFromProperty")
    Xrm.WebApi.online.retrieveMultipleRecords("fhg_tenancy", "?$select=fhg_tenancyid&$filter=_fhg_property_value eq " + id + " and  fhg_terminated eq null").then(
        function success(results) {
            for (var i = 0; i < results.entities.length; i++) {
                var fhg_tenancyid = results.entities[i]["fhg_tenancyid"];
                Blacklight.GetOccupants(fhg_tenancyid);
            }
        },
        function (error) {
            Xrm.Utility.alertDialog("GetTenancyFromProperty:" + error.message);
        }
    );
}

Blacklight.CheckMarkersOnly = function (id) {
    if (Blacklight.MarkerWaring > 0) return;
    console.log("CheckMarkers")
    Xrm.WebApi.online.retrieveMultipleRecords("fhg_userdefinablecharacteristic", "?$select=fhg_name&$filter=_fhg_person_value eq " + id + " and  (fhg_validto eq null or fhg_validto gt " + Blacklight.ParseDate(new Date()) + ")").then(
        function success(results) {
            if (Blacklight.MarkerWaring > 0) return;
            if (results.entities.length > 0) {
                var alertStrings = { confirmButtonLabel: "Yes", text: "There are risks associated with this contact and/or tenancy, please check", title: "Warning Markers" };
                var alertOptions = { height: 120, width: 260 };
                Xrm.Navigation.openAlertDialog(alertStrings, alertOptions);
                Blacklight.MarkerIncrement();
            }
        },
        function (error) {
            Xrm.Utility.alertDialog("CheckMarkers:" + error.message);
        }
    );

}

Blacklight.CheckMarkers = function (id) {
    if (Blacklight.MarkerWaring > 0) return;
    console.log("CheckMarkers")
    Xrm.WebApi.online.retrieveMultipleRecords("fhg_userdefinablecharacteristic", "?$select=fhg_name&$filter=_fhg_person_value eq " + id + " and  (fhg_validto eq null or fhg_validto gt " + Blacklight.ParseDate(new Date()) + ")").then(
        function success(results) {
            if (Blacklight.MarkerWaring > 0) return;
            if (results.entities.length > 0) {
                var alertStrings = { confirmButtonLabel: "Yes", text: "There are risks associated with this contact and/or tenancy, please check", title: "Warning Markers" };
                var alertOptions = { height: 120, width: 260 };
                Xrm.Navigation.openAlertDialog(alertStrings, alertOptions);
                Blacklight.MarkerIncrement();
            } else {
                if (Blacklight.MarkerWaring < 1)
                    Blacklight.CheckTenancy(id);
            }
        },
        function (error) {
            Xrm.Utility.alertDialog("CheckMarkers:" + error.message);
        }
    );



}