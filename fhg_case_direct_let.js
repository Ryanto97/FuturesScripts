ï»¿if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

Blacklight.DirectLet = function() {

    var init = function () {
        Blacklight.SetVisibleAndMandatory("fhg_property", true, true);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.DirectLet.Area, true, true);
        var isNotCreate = Blacklight.GetFormType() !== Blacklight.FormTypes.Create;
        Blacklight.ShowHideTab(BlacklightCase.Tabs.direct_lets_form, isNotCreate);
    };
  
    return {
        Init: init
    };
}();