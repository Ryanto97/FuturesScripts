if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

Blacklight.BeepAssist = function ()
{
    var init = function ()
    {
        debugger
        var subject = Blacklight.GetSubjectName(BlacklightCase.Fields.Common.Subject);
        Blacklight.SetVisible(BlacklightCase.Fields.BeepAssist.Category, true);
        Blacklight.SetMandatory(BlacklightCase.Fields.BeepAssist.Category, true);
        Blacklight.SetVisible(BlacklightCase.Fields.BeepAssist.SubCategory, true);
        Blacklight.SetVisible(BlacklightCase.Fields.BeepAssist.RepairsTrade, true);
        Blacklight.SetMandatory(BlacklightCase.Fields.BeepAssist.SubCategory, true);
        //Blacklight.SetLable(BlacklightCase.Fields.Common.Customer, "Customer");
        Blacklight.SetVisible(BlacklightCase.Fields.BeepAssist.OnBehalfOf, true);
        Blacklight.SetLable(BlacklightCase.Fields.BeepAssist.OnBehalfOf, "Reported By");
        Blacklight.SetVisible(BlacklightCase.Fields.BeepAssist.AssignToTeam, true);
        Blacklight.SetMandatory(BlacklightCase.Fields.BeepAssist.AssignToTeam, true);
        
        

    };

    return {
        Init: init,
    };

}();


