sap.ui.define([
    "sap/ui/core/mvc/XMLView"
],
function(XMLView) {
    "use strict";

    XMLView.create({
        viewName: "ui5con.view.Home"
    }).then(function(oView) {
        oView.placeAt("content");
    });

});