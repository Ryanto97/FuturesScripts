ï»¿if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

Blacklight.ManagementTransfer = function() {

    var init = function() {
        var isNotCreate = Blacklight.GetFormType() !== Blacklight.FormTypes.Create;
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.ManagementTransfer.Area, true, true); // Add area RT 02/04/2025
        Blacklight.ShowHideTab(BlacklightCase.Tabs.management_transfer_form, isNotCreate);
    };
  
    return {
        Init: init
    };
}();