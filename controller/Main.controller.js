sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"acc/fiori/model/models"
], function (Controller, Model) {
	"use strict";

	return Controller.extend("acc.fiori.controller.Main", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf acc.fiori.view.Main
		 */
		onInit: function () {
			
			debugger;
			var oModel = Model.createModel("model/mockData/empData.json");
			
			sap.ui.getCore().setModel(oModel);
			
			
		//var oResource = Model.resourceModel();
			
			sap.ui.getCore().setModel(Model.resourceModel(),"i18n");
			
		},
		
		onPress: function(){
			alert("you have sucessfully submitted forms");
		},
		onRowSelect: function(oEvent) {
			debugger;
				var sPath = oEvent.getParameter("rowContext").sPath;
				var oSimple = this.getView().byId("idSimple");
				oSimple.bindElement(sPath);
			}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf acc.fiori.view.Main
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf acc.fiori.view.Main
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf acc.fiori.view.Main
		 */
		//	onExit: function() {
		//
		//	}

	});

});