
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("ui5con.controller.Home", {

		// onInit: function(){
		// 	this.count = 4;
		// 	this.url = "https://services.odata.org/V2/Northwind/Northwind.svc/Products({count})?$select=ProductName,QuantityPerUnit,UnitPrice,UnitsInStock&$format=json";
		// },

		onRefresh: function (oEvent) {
			// var url = this.url.replace("{count}", this.count++);

			// $.ajax({url: url,
			// 	type: "GET",
			// 	contentType: "application/json",
			// 	url: "https://services.odata.org/V2/Northwind/Northwind.svc/Products?$format=json",
			// 	dataType: "jsonp",
			// 	async: false,
			// 	success: function(result){
			// 		debugger;
			// 	},
			// 	error: function(){
			// 		debugger;
			// 	}
			// });
			

			var table = this.getView().byId("table");
			var oNewTableRow = new sap.m.ColumnListItem();
			oNewTableRow.addCell(new sap.m.Text({ text: "Chef Anton's Cajun Seasoning" }));
			oNewTableRow.addCell(new sap.m.Text({ text: "48 - 6 oz jars" }));
			oNewTableRow.addCell(new sap.m.Text({ text: "$22.00" }));
			oNewTableRow.addCell(new sap.m.Text({ text: "53" }));
			table.setBusy(true);
			setTimeout(function () { 
				table.addItem(oNewTableRow);
				table.setBusy(false);
			}, 2000);
		}

	});
});