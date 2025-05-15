ï»¿if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

Blacklight.SubLet = function() {

    var init = function () {
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.SubLet.Property, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.SubLet.Area, true, true);
        Blacklight.SetVisible("fhg_onbehalfofcustomer", true);
        Blacklight.SetLable("fhg_onbehalfofcustomer", "Reported By");
        Blacklight.ShowCourtPack();
    };
  
    return {
        Init: init
    };
}();