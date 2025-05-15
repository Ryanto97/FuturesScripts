ï»¿if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

Blacklight.NoAccessCase = function() {

    var init = function() {

        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.NoAccess.Category, true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.NoAccess.Area, true, true); // RT// Add area 02/04/2025
        Blacklight.SetVisible(BlacklightCase.Fields.NoAccess.AnniversaryDate, true);
        Blacklight.ShowCourtPack();
    };
  
    return {
        Init: init
    };
}();