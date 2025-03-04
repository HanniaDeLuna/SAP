sap.ui.define([
    "com.inv.sapfioriwebinversion.controller.BaseController.js",
    "sap/ui/model/json/JSONModel"
], function (BaseController, JSONModel) {
    "use strict";

    return BaseController.extend("com.inv.sapfioriwebinversion.controller.salesforecast.SalesForecast", {

        onInit: function () {
            var oModel = new JSONModel();
            
            // Cargar JSON de manera segura
            oModel.loadData("resources/salesforecast.json", null, false);

            oModel.attachRequestCompleted(function (oEvent) {
                if (oEvent.getParameter("success")) {
                    console.log("Modelo de salesforecast cargado con éxito.");
                } else {
                    console.error("Error al cargar salesforecast.json.");
                }
            });

            this.getView().setModel(oModel, "salesForecastModel");
        },

        onMenuButtonPress: function () {
            let toolPage = this.byId("IdToolPage1SalesForecast");
            if (toolPage) {
                toolPage.setSideExpanded(!toolPage.getSideExpanded());
            } else {
                console.warn("IdToolPage1SalesForecast no encontrado.");
            }
        },

        onAvatarPress: function () {
            console.log("Avatar pressed");
            let oMyAvatar = this.getView().byId("IdAvatar1SalesForecast");

            if (!oMyAvatar) {
                console.warn("IdAvatar1SalesForecast no encontrado.");
                return;
            }

            oMyAvatar.setActive(!oMyAvatar.getActive());

            // Verificar si ya existe un popover antes de crear uno nuevo
            if (!this._oPopover) {
                this._oPopover = new sap.m.Popover({
                    title: "Opciones",
                    placement: sap.m.PlacementType.Bottom,
                    afterClose: function () {
                        oMyAvatar.setActive(false);
                    },
                    content: new sap.m.List({
                        items: [
                            new sap.m.StandardListItem({
                                title: "Cerrar sesión",
                                icon: "sap-icon://log",
                                type: sap.m.ListType.Active,
                                press: function () {
                                    this.clearSession();
                                    this._oPopover.close();
                                    oMyAvatar.setActive(false);
                                    this.getRouter().navTo("RouteLogin", {}, true);
                                }.bind(this)
                            })
                        ]
                    })
                });
            }

            this._oPopover.openBy(oMyAvatar);
        }
    });
});
