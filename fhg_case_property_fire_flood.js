ï»¿if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

Blacklight.PropertyFireFlood = function() {

    var init = function () {
        Blacklight.SetVisible("fhg_onbehalfofcustomer", true);
        Blacklight.SetLable("fhg_onbehalfofcustomer", "Reported By");

        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.PropertyFireFlood.Category, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.PropertyFireFlood.Area, true, true); // add area rt 03/04/2025
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.PropertyFireFlood.PropertyBlock, true, true);
        Blacklight.AddOnChangeHandler(BlacklightCase.Fields.PropertyFireFlood.PropertyBlock,
            Blacklight.IsPropertyOrBlock);
        Blacklight.AddOnChangeHandler(BlacklightCase.Fields.PropertyFireFlood.Property,
            Blacklight.FindTenacyByPropertyFireFlood);
        
        Blacklight.ShowCourtPack();
        var hasTenancy = Blacklight.HasValue(BlacklightCase.Fields.Complaints.Tenancy);

        Blacklight.SetVisible(BlacklightCase.Fields.Complaints.Tenancy, hasTenancy);

        if (Blacklight.GetFormType() !== Blacklight.FormTypes.Create) {
            Blacklight.ShowHideTab(BlacklightCase.Tabs.actionPlans, true);
        }
        else {
            Blacklight.ShowHideTab(BlacklightCase.Tabs.actionPlans, false);
        }
    };


    Blacklight.IsPropertyOrBlock = function() {
        var value = Blacklight.GetValue(BlacklightCase.Fields.PropertyFireFlood.PropertyBlock);
        if (value) {
            if (value === 100000000) {
                Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.PropertyFireFlood.Property, true, true);
                Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.PropertyFireFlood.Block, false, false);
            } else {
                Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.PropertyFireFlood.Block, true, true);
                Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.PropertyFireFlood.Property, false, false);
            }
        }
    }

    Blacklight.FindTenacyByPropertyFireFlood = function () {
        var property = Blacklight.GetValue(BlacklightCase.Fields.PropertyFireFlood.Property);
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
                            Blacklight.SetLookupValue(BlacklightCase.Fields.Complaints.Tenancy,
                                tenancyId,
                                tenancyName,
                                "fhg_tenancy");
                            Blacklight.SetVisible(BlacklightCase.Fields.Complaints.Tenancy, true);
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