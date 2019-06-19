
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("ui5con.controller.Home", {

		onInit: function () {
			this.count = 4;
			this.url = "https://services.odata.org/V2/Northwind/Northwind.svc/Products({count})?$select=ProductName,QuantityPerUnit,UnitPrice,UnitsInStock&$format=json";
		},

		onRefresh: function (oEvent) {
			var url = this.url.replace("{count}", this.count++);
			this.getView().byId("table").setBusy(true);
			$.ajax({
				url: url,
				type: "GET",
				contentType: "application/json",
				url: url,
				async: true,
				success: function (result) {
					var table = this.getView().byId("table");
					var oNewTableRow = new sap.m.ColumnListItem();
					oNewTableRow.addCell(new sap.m.Text({ text: result.d.ProductName }));
					oNewTableRow.addCell(new sap.m.Text({ text: result.d.QuantityPerUnit }));
					oNewTableRow.addCell(new sap.m.Text({ text: "$" + (+result.d.UnitPrice).toFixed(2) }));
					oNewTableRow.addCell(new sap.m.Text({ text: result.d.UnitsInStock }));
					table.addItem(oNewTableRow);
					table.setBusy(false);
				}.bind(this),
				error: function () {
					console.log("Something went wrong while fetching the data!");
				}
			});

		}

	});
});