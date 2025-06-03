if (typeof (BlacklightCase) === "undefined") {
    BlacklightCase = function () { };
}

BlacklightCase.TableNames =
{
    fhg_occupancy: "fhg_occupancy",
    fhg_tenancy: "fhg_tenancy",
    fhg_property: "fhg_property",
};


BlacklightCase.Tabs =
{
    general: "general",
    caseRelationships: "CASERELATIONSHIP_TAB",
    kb: "AssociatedKnowledgeBaseRecords",
    sla: "Enhanced_SLA_Details_Tab",
    details: "ADDITIONALDETAILS_TAB",
    social: "SOCIALDETAILS_TAB",
    articals: "KBARTICLE_TAB",
    estateInspections: "tab_estateinspection",
    lockedComplaint: "tab_lockedcomplaint",
    LockedComplaintV2: "tab_lockedcomplaintv2",
    relatedContacts: "tab_relatedcontacts",
    asbactionplans: "tab_asbactionplans",
    lockedASB: "tab_lockedasb",
    asbRiskAssesment: "tab_13",
    lockedHSE: "tab_HSE",
    actionPlans: "tab_action_plan",
    lockedMultiAgencySupport: "tab_locked_multi_agency_support_case",
    locked_safeguarding: "tab_safeguarding",
    lockedDA: "tab_domestic_abuse",
    lockedSupportedHousingCase: "tab_locked_supported_housing_case",
    abandonedInspection: "tab_abandoned_inspection",
    clutter_scale_record: "tab_22",
    management_transfer_form: "tab_26",
    direct_lets_form: "tab_27",
    ReportingData: "tab_reporting_data",
    InvestigationForm: "tab_investigation_form",
    HomeVisits: "tab_home_visits",
    CompensationDetermination: "tab_compensation_determination",
    LearningRecommendations: "tab_learning_recommendations",

};

BlacklightCase.Sections =
{
    general:
    {
        general_section_caseresolution: "general_section_caseresolution",
        general_section_propbeds: "general_section_propbeds"
    },
    relatedContacts:
    {
        tab_contacts_section_otherpeople: "tab_contacts_section_otherpeople",
        tab_contacts_section_allegedPerps: "tab_contacts_section_allegedPerps",
        tab_section_additionalcustomers: "tab_section_additionalcustomers",
        tab_relatedcontacts_mx: "tab_relatedcontacts_mx",
        tab_relatedcontacts_household: "tab_contacts_section_household_members"
    },
    Complaints: {
        stage1: "tab_28_section_1",
        stage2: "tab_reporting_data_section_2",
        ombudsman: "tab_reporting_data_section_3"

    }

};


BlacklightCase.Fields =
{
    Common:
    {
        Title: "title",
        CaseNumber: "ticketnumber",
        Subject: "subjectid",
        Customer: "customerid",
        Origin: "caseorigincode",
        Status: "statecode",
        StatusReason: "statuscode",
        Description: "description",
        TimeOnCase: "fhg_timespentoncase"
    },
    Mapped:
    {
        OnBehalfOf: "fhg_onbehalfofcustomer",
        ReportedBy: "fhg_reportedby",
        Tenant1: "fhg_tenant1",
        Tenant2: "fhg_tenant2",
        EventOccuredAgainst: "fhg_whotheeventoccurredagainst",
        PersonInjured: "fhg_personinjured",
        AllegedPerpetrator: "fhg_allegedperpetrator",
        nameofdeceased: "fhg_nameofdeceased",
        personclaimingtosuccess: "fhg_personclaimingtosuccess",
        whosmovingout: "fhg_whosmovingout",
        whosstaying: "fhg_whosstaying",
        unauthorisedoccupier: "fhg_unauthorisedoccupier",
        multiagencysupportwho: "fhg_multiagencysupportwho",
        safeguardingwho: "fhg_safeguardingwho",
    },
    Resolution:
    {
        CaseClosureReason: "fhg_caseclosurereason",
        CaseClosureSubReason: "fhg_subclosurereason",
        ResolveCase: "fhg_resolvecase",
        CaseResolutionNotes: "fhg_caseresolutionnotes",
        Status: "statecode",
        StatusReason: "statuscode",
        ClosureAmount: "fhg_closureamount",
        ClosureDate: "fhg_closuredate",
        DaysToComplete: "fhg_daystocomplete",
        CalendarDays: "fhg_calendardaystocomplete",
        ClosedWithActivities: "fhg_closedwithopenactivities",
        CustomerFeedback: "fhg_customerfeedback"

    },
    GeneralCaseCreator:
    {
        Category: "fhg_category",
        SubCategory: "fhg_subcategory",
        AssignToTeam: "fhg_assigntoteam",
        RepairsTrade: "fhg_repairstrade",
        OnBehalfOf: "fhg_onbehalfofcustomer",
        Area:"fhg_area"
    },
    HomeSurvey:
    {
        ReportedBy: "fhg_reportedby",
        Property: "fhg_property",
        PotentialAppointmentDate: "fhg_potentialappointmentdate",
        AppointmentDate: "fhg_appointmentdate",
        AppointmentTime: "fhg_appointmenttime",
        Surveyor: "fhg_surveyor",
        CompletedBy: "fhg_completedby",
        JobID: "fhg_jobid",
        GrantedAccessForSurvey: "fhg_grantedaccessforsurvey1",
        JobCompletedOn: "fhg_jobcompletedon",
        Tenant1: "fhg_tenant1",
        Tenant2: "fhg_tenant2",
        Phones: "fhg_tenantphonenumbers"
    },
    Complaints:
    {
        Subject: "subjectid",
        ReportedBy: "fhg_reportedby",
        Origin: "caseorigincode",
        Description: "description",
        PrimaryCategory: "fhg_complaintprimarycategory",
        SecondaryCategories: "fhg_complaintsecondarycategory",
        Contractor: "fhg_contractor",
        IncidentDate: "fhg_incidentdate",
        ReportedOnDate: "fhg_reportedondate",
        Stage: "fhg_stage",
        IsMpCouncillor: "fhg_ismpcouncillor",
        AboutTeam: "fhg_complaintaboutteam",
        Area: "fhg_area",
        Outcome: "fhg_customerdesiredoutcome",
        PreferredContactMethod: "fhg_preferredcontactmethodforcomplaintprogres",
        ProgressUpdate: "fhg_mobileemailforprogressupdates",
        ContactFromComplaintsOfficer: "fhg_preferredtelephonenumberforcontact",
        FormalAcknowledgementSent: "fhg_formalacknowledgementsent",
        DaysStage1: "fhg_daysonstage1",
        CompensationStage1: "fhg_compensationatstage1",
        CustomerRequestedStage1: "fhg_customerrequestedstage1escalatedate",
        CustomerRequestedStage2: "fhg_customerrequestedstage2escalatedate",
        DaysStage2: "fhg_daysonstage2",
        CompensationStage2: "fhg_compensationatstage2",
        EscalationOmbudsmanDate: "fhg_escalationtoombudsmandate",
        OmbudsmanRoute: "fhg_ombudsmanroute",
        DaysOmbudsmanStage: "fhg_daysonombudsmanstage",
        CompensationOmbudsman: "fhg_compensationatombudsman",
        Tenancy: "fhg_tenancy",
        LockComplaint: "fhg_lockcomplaintcase",
        LockComplaintV2: "fhg_lockcomplaintcasev2",
        LockedComplaintCase: "fhg_lockedcomplaintcase",
        LockedComplaintCaseV2: "fhg_lockedcomplaintcasev2",
        ComplaintsAgainstTeam2: "fhg_complaintagainstteam2",
        ComplaintsAgainstTeam3: "fhg_complaintagainstteam3",
        ComplaintsAgainstTeam4: "fhg_complaintagainstteam4",
        ComplaintsAgainstTeam5: "fhg_complaintagainstteam5",
        DamgeCauseBy: "fhg_damagecausedby",
        TypeOfDamage: "fhg_typeofdamage",
        UpdateBySms: "fhg_updatebysms",

    },
    ReportingData: {
        fhg_stage1daystoacknowledge: "fhg_stage1daystoacknowledge",
        fhg_stage1customerhappytoclose: "fhg_stage1customerhappytoclose",
        fhg_stage1customernothappytoclosereason: "fhg_stage1customernothappytoclosereason",
        fhg_stage1extended: "fhg_stage1extended",
        fhg_stage1reasonforextending: "fhg_stage1reasonforextending",
        fhg_stage1extendingreasonteam1: "fhg_stage1extendingreasonteam1",
        fhg_stage1extendingreasonteam2: "fhg_stage1extendingreasonteam2",
        fhg_stage1extendingreasonteam3: "fhg_stage1extendingreasonteam3",
        fhg_stage1extendingreasonteam4: "fhg_stage1extendingreasonteam4",
        fhg_stage1extendingreasonteam5: "fhg_stage1extendingreasonteam5",
        fhg_stage1closurereason: "fhg_stage1closurereason",
        fhg_stage1closuresubreason: "fhg_stage1closuresubreason",
        fhg_stage1closuredate: "fhg_stage1closuredate",
        fhg_stage1daystoclose: "fhg_stage1daystoclose",
        fhg_stage2formalacknowledgementsent: "fhg_stage2formalacknowledgementsent",
        fhg_stage2daystoacknowledge: "fhg_stage2daystoacknowledge",
        fhg_stage2customerhappytoclose: "fhg_stage2customerhappytoclose",
        fhg_stage2customernothappytoclosereason: "fhg_stage2customernothappytoclosereason",
        fhg_stage2extended: "fhg_stage2extended",
        fhg_stage2reasonforextending: "fhg_stage2reasonforextending",
        fhg_stage2extendingreasonteam1: "fhg_stage2extendingreasonteam1",
        fhg_stage2extendingreasonteam2: "fhg_stage2extendingreasonteam2",
        fhg_stage2extendingreasonteam3: "fhg_stage2extendingreasonteam3",
        fhg_stage2extendingreasonteam4: "fhg_stage2extendingreasonteam4",
        fhg_stage2extendingreasonteam5: "fhg_stage2extendingreasonteam5",
        fhg_stage2closurereason: "fhg_stage2closurereason",
        fhg_stage2closuresubreason: "fhg_stage2closuresubreason",
        fhg_stage2closuredate: "fhg_stage2closuredate",
        fhg_stage2daystoclose: "fhg_stage2daystoclose",
        fhg_preombudsmanclosurereason: "fhg_preombudsmanclosurereason",
        fhg_preombudsmanclosuredate: "fhg_preombudsmanclosuredate",
        fhg_ombudsmanclosurereason: "fhg_ombudsmanclosurereason",
        fhg_ombudsmanclosuredate: "fhg_ombudsmanclosuredate"
    },
    EstateInspection:
    {
        EstateInspectionArea: "fhg_estateinspectionarea",
        Area: "fhg_area"
    },
    AdditionalFields:
    {
        parentcaseid: "parentcaseid",
    },
    EstateManagement:
    {
        Location: "fhg_estatemanagementlocation",
        Street: "fhg_street",
        Property: "fhg_property",
        Block: "fhg_block",
        PrimaryCategory: "fhg_estatemanagementprimarycategory",
        ReportedOnDate: "fhg_reportedondate",
        RequireFormalContact: "fhg_doesnotrequireformalcontact",
        ReasonForNoContact: "fhg_reasonfornoformalcontact",
        ReportedToEmergencyServices: "fhg_hasitbeenreportedtoemergencyservices",
        ReportedToLocalAuthority: "fhg_hasitbeenreportedtothelocalauthority",
        Area: "fhg_area"
    },
    PermissionRequest:
    {
        fhg_property: "fhg_property",
        fhg_tenancy: "fhg_tenancy",
        fhg_alteration: "fhg_alteration",
        fhg_alterationgroup: "fhg_alterationgroup",
        fhg_onbehalfofcustomer: "fhg_onbehalfofcustomer",
        
    },
    Tenancy:
    {
        fhg_property: "fhg_property",
        fhg_tenancy: "fhg_tenancy",
        fhg_occupancy: "fhg_occupancy"
    },
    HSE:
    {
        Category: "fhg_hsecategory",
        ImpactedParty: "fhg_impactedparty",
        IncidentDateTime: "fhg_incidentdatetime",
        LocationOfIncident: "fhg_locationofincident",
        AddressOfLocation: "fhg_addressoflocation",
        LocationDetails: "fhg_locationdetails",
        Witness1: "fhg_witness1nameandcontactdetails",
        Witness2: "fhg_witness2nameandcontactdetails",
        WitnessDetails: "fhg_additionalwitnessdetails",
        EventOccuredAgainst: "fhg_whotheeventoccurredagainst",
        NumberOfPerson: "fhg_numberofpersonsinjuredifapplicable",
        NameOfPerson: "fhg_namesofpersonsinjuredifapplicable",
        PersonInjured: "fhg_personinjured",
        FuturesTeam: "fhg_futuresteam",
        TypeOfAccident: "fhg_typeofaccident",
        NatureOfInjury: "fhg_natureofinjurycondition",
        InjuryCondition: "fhg_injuryconditiontext",
        PartOfBody: "fhg_partofbodyaffected",
        PartOfBodyText: "fhg_partofbodytext",
        DidTheyReturnToWork: "fhg_didtheyreturntowork1",
        WhatTimeDidTheyFinsih: "fhg_ifnowhattimedidtheyfinishwork",
        SentToHospital: "fhg_personsenttohospital",
        FirstAidGiven: "fhg_wasfirstaidgiven",
        NameOfFirstAider: "fhg_nameoffirstaider",
        RiddorCategory: "fhg_riddorcategory",
        IncidentCauses: "fhg_incidentcauses",
        PreventativeMeasures: "fhg_preventativemeasuresadditionalinformation",
        LockedHSE: "fhg_lockedhsecase",
        LockedHSEFlag: "fhg_lockedhsecasebool"
    },
    ASB:
    {
        Subject: "subjectid",
        ReportedBy: "fhg_reportedby",
        Origin: "caseorigincode",
        Description: "description",
        PrimaryCategory: "fhg_asbprimarycategory",
        SecondaryCategories: "fhg_asbsecondarycategory",
        IncidentDate: "fhg_incidentdate",
        ReportedOnDate: "fhg_reportedondate",
        ReasonForNoContact: "fhg_reasonfornoformalcontact",
        RequireFormalContact: "fhg_doesnotrequireformalcontact",
        AllegedPerpetrator: "fhg_allegedperpetrator",
        Area: "fhg_area",
        LockASB: "fhg_lockedasbcase",
        ASBLockedCase: "fhg_asblockedcase"
    },
    MX:
    {
        Subject: "subjectid",
        ReportedBy: "fhg_reportedby",
        Origin: "caseorigincode",
        Description: "description",
        IncomingCustomerName: "fhg_nonfhgincomingcustomername",
        IncomingCustomerLandlord: "fhg_nonfhgincomingcustomerlandlord",
        IncomingCustomerAddress: "fhg_nonfhgincomingcustomeraddress",
        IncomingCustomerPhone: "fhg_nonfhgincomingcustomerphone",
        IncomingCustomerEmail: "fhg_nonfhgincomingcustomeremail",
        OtherIndividuals: "fhg_otherindividualsinvolvedinchain",
        Decision: "fhg_mxdecision",
        ReasonForDecision: "fhg_reasonfordecline",
        ConditionalApprovalReasons: "fhg_mxconditionalapprovalreasons",
        DateMXApplicationReceived: "fhg_datemxapplicationreceived",
        DaysRemaining: "fhg_daysremaininguntildeadline",
        MXDecisionComplete: "fhg_mxdecisioncomplete",
        DaysTaken: "fhg_daysmutualexchangedecisiontook",
        DateWillTakePlace: "fhg_datemutualexchangewilltakeplace",
        ReasonForMoving: "fhg_reasonsformoving",
        Area: "fhg_area"
    },
    NoAccess: {
        Category: "fhg_noaccesscategory",
        AnniversaryDate: "fhg_anniversarydate",
        Area: "fhg_area"
    },
    Other: {
        Area: "fhg_area",
        CategoryOther: "fhg_categoryother"

    },
    Abandoned: {
        AbandonedCategory: "fhg_abandonedcategory",
        Area: "fhg_area",
        ContactDetailsAddress: "fhg_contactdetailsaddress",
        ContactDetailsEmail: "fhg_contactdetailsemail",
        ContactDetailsName: "fhg_contactdetailsname",
        ContactDetailsPhone: "fhg_contactdetailsphone",
        CustomerLastSeen: "fhg_customerlastseen",
        NewAddressIfKnown: "fhg_newaddressifknown",
        ReasonForNoVisitsRequired: "fhg_reasonfornovisitsrequired",
        VisitsRequired: "fhg_visitsrequired",
        Property: "fhg_property",
    },
    Vehicles: {
        RegistrationNumber: "fhg_registrationnumber",
        Area: "fhg_area"
    },
    Survivorship: {
        NameOfDeceased: "fhg_nameofdeceased",
        DateDeceased: "fhg_datedeceased",
        Area: "fhg_area"
    },
    DeathIntestate: {
        DateDeceased: "fhg_datedeceased",
        Area: "fhg_area"
    },
    PermissionRequestTenancy: {
        PermissionRequestTenancyCategory: "fhg_permissionrequesttenancycategory",
        Area: "fhg_area"
    },
    CustomerNameChange: {

    },
    BoundaryIssue: {
        Property: "fhg_property",
        AddressOfBoundaryQuery: "fhg_addressofboundaryquery",
        Area: "fhg_area"
    },
    PetsAnimals: {
        PetsAnimalsCategory: "fhg_petsanimalscategory",
        RequiresContactUpdates: "fhg_requirescontactupdates",
        ReasonForNoContact: "fhg_reasonfornocontact",
        Property: "fhg_property",
        Area: "fhg_area"
    },
    SubLet: {
        Property: "fhg_property",
        Area: "fhg_area"
    },
    Succession: {
        HouseholdMembers: "fhg_householdmembers",
        IfSoWherePrevious: "fhg_ifsowhereprevious",
        HaveYouPreviouslyBeenATenant: "fhg_haveyoupreviouslybeenatenant",
        IfSoWhere: "fhg_ifsowhere",
        TenancyElsewhere: "fhg_tenancyelsewhere",
        LengthOfTimeResidentAtThisAddress: "fhg_lengthoftimeresidentatthisaddress",
        RelationshipToDeceased: "fhg_relationshiptodeceased",
        PersonClaimingToSuccess: "fhg_personclaimingtosuccess",
        NameOfDeceased: "fhg_nameofdeceased",
        DateDeceased: "fhg_datedeceased",
        CurrentHousehold: "general_section_14",
        Area: "fhg_area"
    },
    JointToSole: {
        WhoIsMovingOut: "fhg_whosmovingout",
        WhoIsStaying: "fhg_whosstaying",
        HouseholdMembers: "fhg_householdmembers",
        Area: "fhg_area"
    },
    Assignment: {
        WhoIsMovingOut: "fhg_whosmovingout",
        ProposedNewTenant: "fhg_whosstaying",
        ReasonForApplication: "fhg_reasonforapplication",
        HouseholdMembers: "fhg_householdmembers",
        Area: "fhg_area"
    },
    Overcrowding: {
        SendEmailToCustomer: "fhg_sendemailtocustomer",
        Area: "fhg_area"
    },
    UseAndOccupation: {
        UnauthorisedOccupier: "fhg_unauthorisedoccupier",
        ReportedOnDate: "fhg_reportedondate",
        Area: "fhg_area"
    },
    DirectLet: {
        Area: "fhg_area",
    },
    MultiAgencySupport: {
        Who: "fhg_multiagencysupportwho",
        Category: "fhg_multiagencysupportcategory",
        Type: "fhg_multiagencysupporttype",
        ReferralReference: "fhg_multiagencysupportreferralreference",
        LockCase: "fhg_lockmultiagencysupportcase",
        Area: "fhg_area"
    },
    Hoarding: {
        Risk: "fhg_risk",
        Area: "fhg_area"
    },
    Safeguarding: {
        Category: "fhg_safeguardingcategory",
        ChildType: "fhg_childtype",
        AdultType: "fhg_adulttype",
        ReferralReference: "fhg_referralreference",
        Who: "fhg_safeguardingwho",
        LockedCase: "fhg_islockedsafeguarding",
        LockedCaseRef: "fhg_lockedsafeguardingcase",
        Area: "fhg_area"
    },
    ManagementTransfer: {
        Area: "fhg_area",
    },
    PropertyGarden: {
        Category: "fhg_propertygardencategory",
        RequiresContactUpdates: "fhg_requirescontactupdates",
        Property: "fhg_property",
        ReasonForNoContact: "fhg_reasonfornocontact",
        ReportedOnDate: "fhg_reportedondate",
        APTenancy: "fhg_aptenancy",
        APProperty: "fhg_approperty",
        Area: "fhg_area"
    },
    PropertyFireFlood: {
        Category: "fhg_propertyfirefloodcategory",
        Property: "fhg_property",
        Block: "fhg_block",
        ReportedOnDate: "fhg_reportedondate",
        PropertyBlock: "fhg_propertyblock",
        Area: "fhg_area"
    },
    CustomerRisk:
    {
        Subject: "subjectid",
        ReportedBy: "fhg_reportedby",
        Origin: "caseorigincode",
        Description: "description",
        PrimaryCategory: "fhg_customerriskprimarycategory",
        SecondaryCategories: "fhg_customerrisksecondarycategory",
        IncidentDate: "fhg_incidentdate",
        ReportedOnDate: "fhg_reportedondate",
        AllegedPerpetrator: "fhg_allegedperpetrator",
        SecondaryCategoriesAsString: "fhg_customerrisksecondarycategoryasstring"
    },
    DomesticAbuse: {
        PrimaryCategory: "fhg_daprimarycategory",
        SecondaryCategories: "fhg_dasecondarycategories",
        AllegedPerpetrator: "fhg_allegedperpetrator",
        IncidentDate: "fhg_incidentdate",
        ReportedOnDate: "fhg_reportedondate",
        HowAndWhenToContact: "fhg_howandwhentocontact",
        LockedCase: "fhg_lockeddomesticabusecase",
        IsLockedCase: "fhg_dalockedcase",
        Area: "fhg_area"
    },
    SupportedHousing: {
        Subject: "subjectid",
        ReportedBy: "fhg_reportedby",
        Origin: "caseorigincode",
        Category: "fhg_category",
        SubCategory: "fhg_subcategory",
        Description: "description",
        RegisteredwithDoctor: "fhg_registeredwithdoctor1",
        CurrentSupportAgencies: "fhg_currentsupportedhousingagenciesmo",
        OtherAgencies: "fhg_otheragencies",
        AllegedPerpetrator: "fhg_allegedperpetrator",
        LockSupportedHousingCase: "fhg_locksupportedhousingcase",
        LockedSupportedHousingCase: "fhg_lockedsupportedhousingcase"
    },
    BeepAssist: {
        Category: "fhg_category",
        SubCategory: "fhg_subcategory",
        AssignToTeam: "fhg_assigntoteam",
        RepairsTrade: "fhg_repairstrade",
        OnBehalfOf: "fhg_onbehalfofcustomer",
        Area:"fhg_area"
    }
};

BlacklightCase.ClosureReason =
{
    EntityName: "fhg_caseclosurereason",
    ViewName: "Active Case Closure Reasons",
    ClosureFetchXml:
        "<fetch version=\"1.0\" output-format=\"xml-platform\" mapping=\"logical\" distinct=\"false\"><entity name=\"fhg_caseclosurereason\">attribute name=\"fhg_caseclosurereasonid\" /><attribute name=\"fhg_name\" /><attribute name=\"createdon\" /><order attribute=\"fhg_name\" descending=\"false\" /><filter type=\"and\"><condition attribute=\"fhg_subjectname\" operator=\"like\" value=\"%{0}%\" /></filter></entity></fetch>",
    ClosureLayoutXml:
        '<grid name="fhg_caseclosurereasons" object="10463" jump="fhg_name" select="1" icon="1" preview="0"><row name="fhg_caseclosurereason" id="fhg_caseclosurereasonid"><cell name="fhg_name" width="300" /><cell name="fhg_subject" width="100" /><cell name="fhg_parent" width="239" /><cell name="createdon" width="125" /></row></grid>'
};

BlacklightCase.ComplaintClosureReason =
{
    EntityName: "fhg_caseclosurereason",
    ViewName: "Active Case Closure Reasons",
    ClosureFetchXmlEOD:
        "<fetch version=\"1.0\" output-format=\"xml-platform\" mapping=\"logical\" distinct=\"false\"><entity name=\"fhg_caseclosurereason\">attribute name=\"fhg_caseclosurereasonid\" /><attribute name=\"fhg_name\" /><attribute name=\"createdon\" /><order attribute=\"fhg_name\" descending=\"false\" /><filter type=\"and\"><condition attribute=\"statecode\" operator=\"eq\" value=\"0\" /><condition attribute=\"fhg_subjectname\" operator=\"like\" value=\"%{0}%\" /> <condition attribute=\"fhg_complaintstage\" operator=\"contain-values\"><value>100000000</value></condition></filter></entity></fetch>",
    ClosureFetchXmlStage1:
        "<fetch version=\"1.0\" output-format=\"xml-platform\" mapping=\"logical\" distinct=\"false\"><entity name=\"fhg_caseclosurereason\">attribute name=\"fhg_caseclosurereasonid\" /><attribute name=\"fhg_name\" /><attribute name=\"createdon\" /><order attribute=\"fhg_name\" descending=\"false\" /><filter type=\"and\"><condition attribute=\"statecode\" operator=\"eq\" value=\"0\" /><condition attribute=\"fhg_subjectname\" operator=\"like\" value=\"%{0}%\" /><condition attribute=\"fhg_complaintstage\" operator=\"contain-values\"><value>100000001</value></condition></filter></entity></fetch>",
    ClosureFetchXmlStage2:
        "<fetch version=\"1.0\" output-format=\"xml-platform\" mapping=\"logical\" distinct=\"false\"><entity name=\"fhg_caseclosurereason\">attribute name=\"fhg_caseclosurereasonid\" /><attribute name=\"fhg_name\" /><attribute name=\"createdon\" /><order attribute=\"fhg_name\" descending=\"false\" /><filter type=\"and\"><condition attribute=\"statecode\" operator=\"eq\" value=\"0\" /><condition attribute=\"fhg_subjectname\" operator=\"like\" value=\"%{0}%\" /><condition attribute=\"fhg_complaintstage\" operator=\"contain-values\"><value>100000002</value></condition></filter></entity></fetch>",
    ClosureFetchXmlOmbud:
        "<fetch version=\"1.0\" output-format=\"xml-platform\" mapping=\"logical\" distinct=\"false\"><entity name=\"fhg_caseclosurereason\">attribute name=\"fhg_caseclosurereasonid\" /><attribute name=\"fhg_name\" /><attribute name=\"createdon\" /><order attribute=\"fhg_name\" descending=\"false\" /><filter type=\"and\"><condition attribute=\"statecode\" operator=\"eq\" value=\"0\" /><condition attribute=\"fhg_subjectname\" operator=\"like\" value=\"%{0}%\" /><condition attribute=\"fhg_complaintstage\" operator=\"contain-values\"><value>100000003</value></condition></filter></entity></fetch>",
    ClosureFetchXmlPreOmbud:
        "<fetch version=\"1.0\" output-format=\"xml-platform\" mapping=\"logical\" distinct=\"false\"><entity name=\"fhg_caseclosurereason\">attribute name=\"fhg_caseclosurereasonid\" /><attribute name=\"fhg_name\" /><attribute name=\"createdon\" /><order attribute=\"fhg_name\" descending=\"false\" /><filter type=\"and\"><condition attribute=\"statecode\" operator=\"eq\" value=\"0\" /><condition attribute=\"fhg_subjectname\" operator=\"like\" value=\"%{0}%\" /><condition attribute=\"fhg_complaintstage\" operator=\"contain-values\"><value>100000004</value></condition></filter></entity></fetch>",

    ClosureLayoutXml:
        '<grid name="fhg_caseclosurereasons" object="10463" jump="fhg_name" select="1" icon="1" preview="0"><row name="fhg_caseclosurereason" id="fhg_caseclosurereasonid"><cell name="fhg_name" width="300" /><cell name="fhg_subject" width="100" /><cell name="fhg_parent" width="239" /><cell name="createdon" width="125" /></row></grid>'
};

BlacklightCase.Categories = {
    EntityName: "fhg_category",
    ViewName: "Active Categories",
    FetchXml: '<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false"><entity name="fhg_category"><attribute name="fhg_categoryid" /><attribute name="fhg_name" /><attribute name="createdon" /><order attribute="fhg_name" descending="false" /><filter type="and"><condition attribute="fhg_subjectname" operator="like" value="%{0}%" /></filter></entity></fetch>',
    LayoutXml: '<grid name="resultset" object="10405" jump="fhg_name" select="1" icon="1" preview="1"><row name="result" id="fhg_categoryid"><cell name="fhg_name" width="300" /><cell name="createdon" width="125" /></row></grid>'
};
BlacklightCase.ReportedByComplaint = {
    EntityName: "contact",
    ViewName: "Active Contacts",
    FetchXml: '<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false"><entity name="contact"><attribute name="fullname" /><attribute name="telephone1" /><attribute name="contactid" /><order attribute="fullname" descending="false" /></entity></fetch>',
    LayoutXml: '<grid name="resultset" object="2" jump="fullname" select="1" icon="1" preview="1"><row name="result" id="contactid"><cell name="fullname" width="300" /><cell name="emailaddress1" width="150" /><cell name="parentcustomerid" width="150" /><cell name="telephone1" width="125" /></row></grid>'

};
BlacklightCase.NoAccessClosureReason = {
    ID: '{f386b2e9-be25-ec11-b6e6-000d3ad65e67}',
    Name: "No Access"
};

BlacklightCase.subjects = {
    General: "4b2bcd0b-2f16-ec11-b6e6-002248412841",
    BeepAssist: "9b1aa1b0-0a37-f011-8c4d-0022483ec9ba",
    HomeSurvey: "24689177-2f16-ec11-b6e6-002248412841",
    Complaint: "d3711032-2f16-ec11-b6e6-002248412841",
    ComplaintNew: "1dc5dc33-50a3-ef11-8a69-7c1e5202b170",
    PermissionRequest: "bedb897d-2f16-ec11-b6e6-002248412841",
    Neighbourhoods: {
        EstateInspection: "bee76b71-2f16-ec11-b6e6-002248412841",
        EstateManagement: "c19b4365-2f16-ec11-b6e6-002248412841",
        ASB: "e6e69457-2f16-ec11-b6e6-002248412841",
        MX: "d48a736b-2f16-ec11-b6e6-002248412841",
        TenancyManagement: {
            NoAccess: "5a0022cc-98aa-ec11-9840-6045bd10052b",
            Other: "c7890cd1-b9aa-ec11-9840-6045bd10052b",
            Abandoned: "d1a15b62-40ac-ec11-9840-6045bd10052b",
            Vehicles: "af54d8b8-97ae-ec11-983f-0022484349f5",
            Survivorship: "457f2667-5faf-ec11-983f-0022484349f5",
            PermissionRequestTenancy: "61f4512c-2cb0-ec11-983f-0022484349f5",
            DeathIntestate: "a929ee43-65af-ec11-983f-00224843471a",
            BoundaryIssue: "594fa659-f0b3-ec11-983f-6045bd0f08f1",
            PetsAnimals: "b0824473-15b4-ec11-983f-6045bd0f08f1",
            SubLet: "d4365d51-ccb4-ec11-983f-6045bd0f08f1",
            Succession: "175bf783-56b6-ec11-983f-6045bd0f08f1",
            JointToSole: "ae11a344-5bba-ec11-983f-6045bd0ff653",
            Assignment: "f31cc8da-34bb-ec11-983f-6045bd0ff653",
            Overcrowding: "1f207f74-8fc0-ec11-983e-002248438e67",
            UseAndOccupation: "7bf4c17f-27c2-ec11-983e-6045bd0f7bab",
            DirectLet: "0b8414d6-80c4-ec11-a7b5-6045bd0fa694",
            MultiAgencySupport: "40b74f71-87c4-ec11-a7b5-6045bd0fa760",
            Hoarding: "8ac8ebe8-5ccc-ec11-a7b6-6045bd110cb9",
            Safeguarding: "03d39308-4ad0-ec11-a7b5-6045bd0fce89",
            ManagementTransfer: "2dd4b088-4ecc-ec11-a7b6-6045bd110fb6",
            PropertyGarden: "ee2e09ff-57d7-ec11-a7b5-6045bd100fbd",
            PropertyFireFlood: "bfce96b7-2ed8-ec11-bb3c-6045bd0ff62b",
            DomesticAbuse: "dfa2c84b-13e0-ec11-bb3d-002248412d5b"
        }
    },
    HSE: "aa788644-2f16-ec11-b6e6-002248412841",
    CustomerNameChange: "156eb746-ddb0-ec11-983f-0022484349f5",
    CustomerRisk: "51d54f38-f8df-ec11-bb3d-002248412d5b",
    SupportedHousing: "2f7b17bd-16eb-ec11-bb3c-002248400ff9"
};


BlacklightCase.GetTabs = function () {
    var array = [];
    for (const [key, value] of Object.entries(BlacklightCase.Tabs)) {
        array.push(value);
    }
    return array;
};

BlacklightCase.GetFields = function (fields) {
    var array = [];
    for (const [key, val] of Object.entries(fields)) {
        if (typeof val === 'object') {
            for (const [key, value] of Object.entries(val)) {
                array.push(value);
            }
        }
        else {
            array.push(val);
        }
    }

    return array;
}

BlacklightCase.SubjectsWithAutoEmail = [
    BlacklightCase.subjects.HomeSurvey,
    BlacklightCase.subjects.Complaint,
    BlacklightCase.subjects.ComplaintNew,
    BlacklightCase.subjects.PermissionRequest,
    BlacklightCase.subjects.Neighbourhoods.EstateManagement,
    BlacklightCase.subjects.Neighbourhoods.ASB,
    BlacklightCase.subjects.Neighbourhoods.MX,
    BlacklightCase.subjects.HSE
];