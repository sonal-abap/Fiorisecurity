sap.ui.define([
	"sap/ui/model/json/JSONModel"
	],
	function(JSONModel){
		return {
			createModel:function(filePath) {
				var oModel = new sap.ui.model.json.JSONModel();
				
				oModel.loadData(filePath);
				
				return oModel;
			},
			
			resourceModel: function(){
				//var oResource = new sap.ui.model.resource.ResourceModel();
				
				//oResource.getResourceBundle("i18n/i18n.properties");
				
				var oResource = new sap.ui.model.resource.ResourceModel({
					bundleUrl: "i18n/i18n.properties"
				});
				
				return oResource;
				
			}
			
		};
		
	});