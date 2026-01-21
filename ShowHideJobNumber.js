function handleCategoryAndSubcategory(executionContext) {
    var formContext = executionContext.getFormContext();

    // Get category and subcategory values
    var categoryLookup = formContext.getAttribute("fhg_category")?.getValue();
    var subCategoryLookup = formContext.getAttribute("fhg_subcategory")?.getValue();

    var categoryName = categoryLookup ? categoryLookup[0].name : null;
    var subCategoryName = subCategoryLookup ? subCategoryLookup[0].name : null;

    console.log("Category:", categoryName);
    console.log("Subcategory:", subCategoryName);

    // Arrays for visibility logic
    var visibleCategories = [
        "Repairs",
        "Assets Compliance and Health & Safety",
        "Development Aftersales",
        "Adaptions",
        "Assets",
        "Decants"
    ];

    var visibleSubCategories = [
        "Repairs",
        "Assets"
    ];

    // Determine visibility
    var showJobNumber = visibleCategories.includes(categoryName) || visibleSubCategories.includes(subCategoryName);

    formContext.getControl("fhg_jobnumber").setVisible(showJobNumber);
}
