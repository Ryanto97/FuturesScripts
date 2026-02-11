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

        // show or hide the "Other Referral Details" field based on the selected "Referred By" option
        Blacklight.FormContext.getAttribute(BlacklightCase.Fields.IndependentLiving.ReferredBy).addOnChange(Futures.showhideotherReferralDetails);

    }; 

    Futures.showhideFurtherReferralDetails = function () {
        var referredBy = Blacklight.GetValue(BlacklightCase.Fields.Common.ReferredBy);

        if (referredBy == 100000005) {
            // If it is, show the "Further Referral Details" field
            Blacklight.setVisible("fhg_otherreferralreason",true);

        }else {
            // Else Hide the "Further Referral Details" field
            Blacklight.setVisible("fhg_otherreferralreason",false);
        }
        
    }
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
        Blacklight.SetVisible(BlacklightCase.Fields.BeepAssist.ReferralReason, true);
        Blacklight.SetMandatory(BlacklightCase.Fields.BeepAssist.ReferralReason, true);


        // Show or hide the "Further Referral Details" field based on the selected "Referred By" option
         Blacklight.FormContext.getAttribute(BlacklightCase.Fields.BeepAssist.ReferredBy).addOnChange(Futures.showhideFurtherReferralDetails);
    };


    Futures.showhideFurtherReferralDetails = function () {
        // Show or hide the "Further Referral Details" field based on the selected "Referred By" option
        var referredBy = Blacklight.GetValue(BlacklightCase.Fields.Common.ReferredBy);
        var allowedValues = [100000009, 100000010, 100000012, 100000014, 100000015, 100000005];
        // check if referred by is one of the specified values
         if (allowedValues.includes(referredBy)) {
            // If it is, show the "Further Referral Details" field
            Blacklight.SetVisible("fhg_furtherreferralsdetails", true);
        } else {
            // Else Hide the "Further Referral Details" field
            Blacklight.setVisible("fhg_furtherreferralsdetails", false);
        }
    }


    return {
        Init: init,
    };

}();

//Current ver
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




