
function setEmailFontOnLoad(executionContext) {
    var formContext = executionContext.getFormContext();
    if (formContext.data.entity.getEntityName() !== "email") return;

    var attr = formContext.getAttribute("description");
    if (!attr) return;

    var html = attr.getValue() || "<p><br/></p>";
    var style = "font-family:Arial, Helvetica, sans-serif; font-size:12pt;";
    var wrapped = `<div data-email-font-enforced="onload" style="${style}">${html}</div>`;

    attr.setValue(wrapped);

   // alert(attr.getValue() + "font and size"); // For debugging purposes

    console.log(attr.getValue()); // For debugging purposes
}




function setEmailFontAndSize(executionContext) {
    var formContext = executionContext.getFormContext();
    var emailBody = formContext.getAttribute("description");

    if (emailBody) {
        var htmlContent = `
            <style>
                body, .ck-content {
                    font-family: Arial, Helvetica, sans-serif !important;
                    font-size: 12pt !important;
                }
            </style>
            <div class="ck-content" data-wrapper="true" dir="ltr">
                <p>Type your email content here...</p>
            </div>`;
        emailBody.setValue(htmlContent);
    }
}
