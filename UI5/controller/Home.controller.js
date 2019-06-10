    
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("ui5con.controller.Home", {

        onInit: function(){
            var oData = {
                count: 0
            };
            var counterModel = new JSONModel(oData);
            this.getView().setModel(counterModel, "counterModel");
        },

        onClick: function(oEvent){
            var counterModel = this.getView().getModel("counterModel");
            var count = counterModel.getProperty("/count");
            this.getView().getModel("counterModel").setProperty("/",{count: count + 1});
        }

	});
});