sap.ui.define([
	'DemoEmp/controller/BaseController'
], function (BaseController) {
	"use strict";
	
	return BaseController.extend("DemoEmp.controller.EmpList", {
		onInit: function() {
			var oList = this.byId('idProductsTable');
			var d1 = new Date('2018-01-04');
			var d2 = new Date('2018-01-18');
//			var oFilter = [new sap.ui.model.Filter("Empno",sap.ui.model.FilterOperator.EQ, 1),new sap.ui.model.Filter("Mob", sap.ui.model.FilterOperator.EQ, "")]
			var oFilter = [new sap.ui.model.Filter("Empno",sap.ui.model.FilterOperator.BT, d1, d2),
				           new sap.ui.model.Filter("Empno",sap.ui.model.FilterOperator.EQ, 1),
				           new sap.ui.model.Filter("Mob", sap.ui.model.FilterOperator.EQ, ""),
				           new sap.ui.model.Filter("Mob", sap.ui.model.FilterOperator.Contains, "S"),
				           new sap.ui.model.Filter("Mob", sap.ui.model.FilterOperator.EndsWith, "A"),
				           new sap.ui.model.Filter("Mob", sap.ui.model.FilterOperator.StartsWith, "g"),
						   new sap.ui.model.Filter("Dob",sap.ui.model.FilterOperator.BT, d1, d2)];
			this._oItemTemplate = this.byId('columnListItem').clone();
//			oList.bindItems({
//				path: "/ET_EMP_LISTSet",
//				template: this._oItemTemplate,
//				filters: oFilter
//			});
/*			oList.bindItems({
			path: "/ET_EMP_LISTSet",
			template: this._oItemTemplate,
			filters: oFilter
		});*/
			this.getOwnerComponent().getModel().read("/ET_EMP_LISTSet", {success: this.fnSuccessItemClick.bind(this), error: this.fnErrorItemClick.bind(this)});	
		},
		onPress: function(oEvent) {
			this._showDetail(oEvent.getSource());
		},
		_showDetail: function(oItem) {
			this.getRouter().navTo("EmpDet", {
				empId: oItem.getBindingContext().getProperty("Empno")
			})
		},
		onAdd: function(oEvent) {
			this.getRouter().navTo("EmpCre", {
				
			})
		},
		fnSuccessItemClick: function(oData, oResponse){
			debugger;
			console.log(oData);
			console.log(oResponse);
		},
		fnErrorItemClick: function(oError){
			debugger;
			console.log(oError)
		}
	})
})