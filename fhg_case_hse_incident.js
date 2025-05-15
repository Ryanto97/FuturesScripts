if (typeof (Blacklight) === "undefined") {
    Blacklight = function () { };
}



Blacklight.HSE = function () {
    var locationOfIncident = {
        CustomerProperty: 100000000,
        DaventryDepot: 100000001,
        FHGcommunalarea_external: 100000002,
        FHGcommunalarea_Internal: 100000003,
        FHGCommunityCentre: 100000004,
        FuturesHouse: 100000005,
        IndependentLivingScheme: 100000006,
        LeabrooksDepot: 100000007,
        Limehouse_NewDevelopmentsite: 100000008,
        NonFHGlocation: 100000009,
        TDP_ConnaughtCourt: 100000010,
        TDP_MountbattenHouse: 100000011,
        TDP_TheRopewalk: 100000012,
        TDP_WarwickCourt: 100000013,
        TDP_SaxonHouse: 100000014
    }

    var natureOfInjury = {
        Abrasions: 100000000,
        Amputation: 100000001,
        BitesSting: 100000002,
        Burns: 100000003,
        Concussions: 100000004,
        Contusion_Bruise: 100000005,
        ElectricShock: 100000006,
        Fracture: 100000007,
        Inflammation_Swelling: 100000008,
        Laceration_Cut: 100000009,
        Pain_Soreness: 100000010,
        Sprain_Strain: 100000011,
        StabWoundsFromSharpObjects: 100000012,
        Unconsciousness: 100000013,
        OtherInjury_condition: 100000014,
        PleaseSpecifyOtherInjury: 100000015
    }

    var partOfBodyAffected = {
        Ankles: 100000000,
        ArmsIncludingElbows: 100000001,
        Back: 100000002,
        Chest: 100000003,
        Eyes: 100000004,
        Face: 100000005,
        FingersAndThumbs: 100000006,
        Foot: 100000007,
        Hands: 100000008,
        Head: 100000009,
        Knees: 100000010,
        Legs: 100000011,
        Neck: 100000012,
        Shoulders: 100000013,
        Toes: 100000014,
        Wrists: 100000015,
        OtherpartofBody: 100000016,
        PleaseSpecifyOtherPartOfBody: 100000017
    }

    var category = {
        Accident_Person: 100000000,
        Accident_Vehicle: 100000001,
        Environmental: 100000002,
        ReportableDisease: 100000003,
        DangerousOccurrence: 100000004,
        ReportableFlammableGasIncident: 100000005,
        ReportableDangerousGasFitting: 100000006
    }

    var init = function () {

        Blacklight.FormContext.getAttribute(BlacklightCase.Fields.HSE.Category).addOnChange(Blacklight.Catergory);
        Blacklight.FormContext.getAttribute(BlacklightCase.Fields.HSE.NatureOfInjury).addOnChange(Blacklight.NatureOfInjury);
        Blacklight.FormContext.getAttribute(BlacklightCase.Fields.HSE.PartOfBody).addOnChange(Blacklight.PartOfBody);
        Blacklight.FormContext.getAttribute(BlacklightCase.Fields.HSE.LocationOfIncident).addOnChange(Blacklight.LocationOfIncident);
        //Blacklight.SetLable(BlacklightCase.Fields.Common.Customer, "Reported By");
        var isNotLockedCase = !Blacklight.HasValue(BlacklightCase.Fields.HSE.LockedHSE);
        

       
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.Category, true, isNotLockedCase);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.ImpactedParty, true, isNotLockedCase);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.IncidentDateTime, true, isNotLockedCase);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.LocationOfIncident, true, isNotLockedCase);
        Blacklight.LocationOfIncident();
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.LocationDetails, true, false);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.Witness1, true, false);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.Witness2, true, false);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.WitnessDetails, true, false);
        Blacklight.IsLockedHSE();
        Blacklight.SetVisible(BlacklightCase.Fields.HSE.LockedHSEFlag, true); //
        if (Blacklight.GetFormType() !== Blacklight.FormTypes.Create) {
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.RiddorCategory, true, false);
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.IncidentCauses, true, false);
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.PreventativeMeasures, true, false);
            Blacklight.Catergory();
        }

    };

    Blacklight.LocationOfIncident = function() {

        var value = Blacklight.GetValue(BlacklightCase.Fields.HSE.LocationOfIncident);
        if (value) {

            if (value === locationOfIncident.FHGCommunityCentre ||
                value === locationOfIncident.FHGcommunalarea_Internal ||
                value === locationOfIncident.FHGcommunalarea_external ||
                value === locationOfIncident.Limehouse_NewDevelopmentsite ||
                value === locationOfIncident.NonFHGlocation) {
                Blacklight.SetMandatory(BlacklightCase.Fields.HSE.AddressOfLocation, true);
            } else {
                Blacklight.SetMandatory(BlacklightCase.Fields.HSE.AddressOfLocation, false);
            }
        } else {
            Blacklight.SetMandatory(BlacklightCase.Fields.HSE.AddressOfLocation, false);
        }
    }

    Blacklight.IsLockedHSE = function () {

       var isLockedCase = Blacklight.HasValue(BlacklightCase.Fields.HSE.LockedHSE) != null;
       var hasLockedRole = Blacklight.UserHasRoleAssigned("1326a721-0b7d-ec11-8d21-6045bd0e62ad");
       var fieldsToHide = BlacklightCase.GetFields(BlacklightCase.Fields.HSE);
        //  27/02/2025 -FHG RT defaulting all HSE cases to yes\\
       //Blacklight.SetValue(BlacklightCase.Fields.HSE.LockedHSEFlag, isLockedCase) 
        
        var showLockedTab = false;

        if (isLockedCase && hasLockedRole) {
            showLockedTab = true;
        }
        if (isLockedCase) {
            fieldsToHide.forEach(field => {
                Blacklight.SetVisibleAndMandatory(field, false,false);
            });
        }
        Blacklight.ShowHideTab(BlacklightCase.Tabs.lockedHSE, showLockedTab);
    }

    Blacklight.Catergory = function () {

        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.NumberOfPerson, false, false);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.NameOfPerson, false, false);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.PersonInjured, false, false);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.FuturesTeam, false, false);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.TypeOfAccident, false, false);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.NatureOfInjury, false, false);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.PartOfBody, false, false);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.DidTheyReturnToWork, false, false);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.WhatTimeDidTheyFinsih, false, false);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.SentToHospital, false, false);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.FirstAidGiven, false, false);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.NameOfFirstAider, false, false);
        Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.EventOccuredAgainst, false, false);

        var value = Blacklight.GetValue(BlacklightCase.Fields.HSE.Category);

        if (value && value === category.Accident_Vehicle) {
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.NumberOfPerson, true, false);
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.NameOfPerson, true, false);
        }

        if (value && value === category.Accident_Person) {
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.PersonInjured, true, true);
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.FuturesTeam, true, false);
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.TypeOfAccident, true, true);
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.NatureOfInjury, true, true);
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.PartOfBody, true, true);
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.DidTheyReturnToWork, true, true);
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.WhatTimeDidTheyFinsih, true, false);
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.SentToHospital, true, true);
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.FirstAidGiven, true, true);
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.NameOfFirstAider, true, false);
        }

        if (value && value !== category.Accident_Vehicle && value !== category.Accident_Person) {
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.EventOccuredAgainst, true, true);
        }

    } 

    Blacklight.NatureOfInjury = function() {
        var value = Blacklight.GetValue(BlacklightCase.Fields.HSE.NatureOfInjury);
        if (value && value.length > 0) {
            var show = value.includes(natureOfInjury.PleaseSpecifyOtherInjury);
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.InjuryCondition, show, show);
        } else {
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.InjuryCondition, false, false);
        }
    } 

    Blacklight.PartOfBody = function () {
        var value = Blacklight.GetValue(BlacklightCase.Fields.HSE.PartOfBody);
        if (value && value.length > 0) {
            var show = value.includes(partOfBodyAffected.OtherpartofBody);
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.PartOfBodyText, show, show);
        } else {
            Blacklight.SetVisibleAndMandatory(BlacklightCase.Fields.HSE.PartOfBodyText, false, false);
        }
    }

    return {
        Init: init
    };
}();