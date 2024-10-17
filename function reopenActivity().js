function reopenActivity() {
 
    var activityName = Xrm.Page.data.entity.getEntityName();
 
    var activityId = Xrm.Page.data.entity.getId().replace('{', '').replace('}', '');
 
 
    var entity = {};
 
    entity.statuscode = 1;
 
    entity.statecode = 0;
 
 
    Xrm.WebApi.online.updateRecord(activityName, activityId, entity).then(
 
        function success(result) {
 
            var updatedEntityId = result.id;
 
            Xrm.Page.data.refresh();
 
        },
 
        function (error) {
 
            Xrm.Utility.alertDialog(error.message);
 
        }
 
    );
 
}