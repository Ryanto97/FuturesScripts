ï»¿if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

Blacklight.PermissionRequestTenancy = function () {

    var init = function () {
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.PermissionRequestTenancy.PermissionRequestTenancyCategory, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.PermissionRequestTenancy.Area, true, true);
        Blacklight.SetVisible("fhg_onbehalfofcustomer", true);
        Blacklight.SetLable("fhg_onbehalfofcustomer", "Reported By");
        Blacklight.ShowCourtPack();
    };

    return {
        Init: init
    };
}();