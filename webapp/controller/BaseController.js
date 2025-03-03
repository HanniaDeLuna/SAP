sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/thirdparty/jquery",
    "sap/base/Log",
    "sap/ui/util/Storage"
], function (Controller, History, UIComponent, JSONModel, jQuery, Log, Storage) {
    "use strict";

    return Controller.extend("com.inv.sapfioriwebinversion.controller.BaseController", {

        onInit: function () { 
            console.log("BaseController cargado");
        },

        getRouter: function () {
            return UIComponent.getRouterFor(this);
        },

        onNavBack: function () {
            let oHistory = History.getInstance();
            let sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                this.getRouter().navTo("RouteMain", {}, true);
            }
        }
    });
});
