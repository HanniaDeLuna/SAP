sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"], function(Controller, JSONModel) {
    "use strict";
    
    return Controller.extend("com.inv.sapfioriwebinversion.controller.Main", {
        onInit: function() {
            console.log("Controlador Main cargado");

            // Cargar el modelo desde el JSON local
            var oModel = new JSONModel("resources/salesforecast.json");
            this.getView().setModel(oModel, "data");
        }
    });
});
