ï»¿if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

Blacklight.PropertyGarden = function() {

    var init = function () {
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.PropertyGarden.Category, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.PropertyGarden.Area, true, true); // add Area RT 02/04
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.PropertyGarden.ReportedOnDate, true, true);
        Blacklight.SetVisible(BlacklightCase.Fields.PropertyGarden.RequiresContactUpdates, true);

        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.CustomerRisk.AllegedPerpetrator, true, true);

        Blacklight.FormContext.getAttribute(BlacklightCase.Fields.CustomerRisk.AllegedPerpetrator).addOnChange(Blacklight.OnAllegedPerpetratorChangedProp);
        Blacklight.SetVisible("fhg_onbehalfofcustomer", true);
        Blacklight.SetLable("fhg_onbehalfofcustomer", "Reported By");
        Blacklight.AddOnChangeHandler(BlacklightCase.Fields.PropertyGarden.RequiresContactUpdates,
            Blacklight.ShowReasonForNoContact);
        Blacklight.AddOnChangeHandler(BlacklightCase.Fields.PropertyGarden.Property,
            Blacklight.FindTenacyByProperty);
        Blacklight.ShowReasonForNoContact();
        Blacklight.ShowCourtPack();
var hasTenancy = Blacklight.CheckValueNotEmpty(BlacklightCase.Fields.PropertyGarden.APTenancy);

        Blacklight.SetVisible(BlacklightCase.Fields.PropertyGarden.APTenancy, hasTenancy);
        var hasProperty = Blacklight.CheckValueNotEmpty(BlacklightCase.Fields.PropertyGarden.APProperty);

        Blacklight.SetVisible(BlacklightCase.Fields.PropertyGarden.APProperty, hasProperty);
        if (Blacklight.GetFormType() !== Blacklight.FormTypes.Create) {
            Blacklight.ShowHideTab(BlacklightCase.Tabs.actionPlans, true);
        }
        else {
            Blacklight.ShowHideTab(BlacklightCase.Tabs.actionPlans, false);
        }
    };

    Blacklight.ShowReasonForNoContact = function() {
        var value = Blacklight.GetValue(BlacklightCase.Fields.PropertyGarden.RequiresContactUpdates);

        if (value )
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.PropertyGarden.ReasonForNoContact, value !== 100000000, value !== 100000000);
    }

    Blacklight.OnAllegedPerpetratorChangedProp = function () {

        var customerId = Blacklight.GetValueLookupID(BlacklightCase.Fields.CustomerRisk.AllegedPerpetrator);
        if (customerId) {
            Blacklight.Common.GetTenancyPropertyOccupancy(customerId, Blacklight.OccupancySearchCompletedResults);
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.PropertyGarden.APProperty, true, true);
        }
    }

    Blacklight.FindTenacyByProperty = function () {
        var property = Blacklight.GetValue(BlacklightCase.Fields.PropertyGarden.APProperty);
        if (property !== null) {
            var id = property[0].id.replace(/[{}]/g, "");

            Xrm.WebApi.online
                .retrieveMultipleRecords("fhg_tenancy", "?$select=fhg_name,fhg_tenancyid&$filter=_fhg_property_value eq " + id + " and  fhg_terminated eq null")
                .then(
                    function success(results) {

                        if (results.entities.length > 0) {
                            var tenancy = results.entities[0];
                            var tenancyId = tenancy["fhg_tenancyid"].replace(/[{}]/g, "");
                            var tenancyName = tenancy["fhg_name"];
                            Blacklight.SetLookupValue(BlacklightCase.Fields.PropertyGarden.APTenancy,
                                tenancyId,
                                tenancyName,
                                "fhg_tenancy");
                            Blacklight.SetVisible(BlacklightCase.Fields.PropertyGarden.APTenancy, true);
                        }
                    },
                    function(error) {
                       console.log(error.message);
                    }
                );
        }
    }
    return {
        Init: init
    };
}();