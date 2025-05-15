ï»¿if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

Blacklight.DeathIntestateCase = function() {

    var init = function () {
        debugger;
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.DeathIntestate.DateDeceased, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.DeathIntestate.Area, true, true); // add Area RT 01/04/2025
        Blacklight.SetVisible("fhg_onbehalfofcustomer", true);
        Blacklight.SetLable("fhg_onbehalfofcustomer", "Reported By");
        Blacklight.ShowCourtPack();
    };
  
    return {
        Init: init
    };
}();

