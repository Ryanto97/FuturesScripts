if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}
// Independent Living
Blacklight.IndependentLiving = function ()
{
    var init = function ()
    {
        debugger
        var subject = Blacklight.GetSubjectName(BlacklightCase.Fields.Common.Subject);
        Blacklight.SetVisible(BlacklightCase.Fields.IndependentLiving.CategoryIndependentLiving, true);
        Blacklight.SetMandatory(BlacklightCase.Fields.IndependentLiving.CategoryIndependentLiving, true);
        Blacklight.SetVisible(BlacklightCase.Fields.IndependentLiving.ReferredBy, true);
        Blacklight.SetMandatory(BlacklightCase.Fields.IndependentLiving.ReferredBy, true);

    };

       return {
        Init: init,
    }
}();
    //Beep Assist
    Blacklight.BeepAssist = function ()
{
    var init = function ()
    {
        debugger
        var subject = Blacklight.GetSubjectName(BlacklightCase.Fields.Common.Subject);
        Blacklight.SetVisible(BlacklightCase.Fields.BeepAssist.ReferredBy, true);
        Blacklight.SetMandatory(BlacklightCase.Fields.BeepAssist.ReferredBy, true);
        //Blacklight.SetVisible(BlacklightCase.Fields.BeepAssist.FutherReferral, true);
        //Blacklight.SetMandatory(BlacklightCase.Fields.BeepAssist.FutherReferral, true);
        Blacklight.SetVisible(BlacklightCase.Fields.BeepAssist.ReferralReason, true);
        Blacklight.SetMandatory(BlacklightCase.Fields.BeepAssist.ReferralReason, true);

    };

    return {
        Init: init,
    };

}();


