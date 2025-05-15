ï»¿if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}

Blacklight.GeneralCaseCreator = function ()
{
    var init = function ()
    {
        var subject = Blacklight.GetSubjectName(BlacklightCase.Fields.Common.Subject);
        Blacklight.SetVisible(BlacklightCase.Fields.GeneralCaseCreator.Category, true);
        Blacklight.SetMandatory(BlacklightCase.Fields.GeneralCaseCreator.Category, true);
        Blacklight.SetVisible(BlacklightCase.Fields.GeneralCaseCreator.SubCategory, true);
        Blacklight.SetVisible(BlacklightCase.Fields.GeneralCaseCreator.RepairsTrade, true);
        Blacklight.SetMandatory(BlacklightCase.Fields.GeneralCaseCreator.SubCategory, true);
        //Blacklight.SetLable(BlacklightCase.Fields.Common.Customer, "Customer");
        Blacklight.SetVisible(BlacklightCase.Fields.GeneralCaseCreator.OnBehalfOf, true);
        Blacklight.SetLable(BlacklightCase.Fields.GeneralCaseCreator.OnBehalfOf, "Reported By");
        Blacklight.SetVisible(BlacklightCase.Fields.GeneralCaseCreator.AssignToTeam, true);
        Blacklight.SetMandatory(BlacklightCase.Fields.GeneralCaseCreator.AssignToTeam, true);

        var category =  Blacklight.GetValueLookupName(BlacklightCase.Fields.GeneralCaseCreator.Category);

        if (category == "Compliance No Access") {

            Blacklight.SetVisible(BlacklightCase.Fields.GeneralCaseCreator.Area, true);
            Blacklight.SetMandatory(BlacklightCase.Fields.GeneralCaseCreator.Area, true);
        }

    };

    return {
        Init: init,
    };

}();
