sap.ui.define([
	'DemoEmp/controller/BaseController'
], function (BaseController) {
	"use strict";
	
	return BaseController.extend("DemoEmp.controller.EmpList", {
		onInit: function() {
			
		},
		onPress: function(oEvent) {
			this._showDetail(oEvent.getSource());
		},
		_showDetail: function(oItem) {
			this.getRouter().navTo("EmpDet", {
				empId: oItem.getBindingContext().getProperty("Empno")
			})
		}
	})
})