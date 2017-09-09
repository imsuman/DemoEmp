sap.ui.define(['DemoEmp/controller/BaseController'], 
		function(BaseController) {
	'use strict';

	return BaseController.extend("DemoEmp.controller.EmpDet",{
     onInit: function() {
    	 debugger;
    	 this.getRouter().getRoute('EmpDet').attachPatternMatched(this._onObjectMatched, this);
     },
     _onObjectMatched: function(oEvent){
    	 var sEmpId = oEvent.getParameter("arguments").empId;
    	 this.getModel().metadataLoaded().then(function() {
    		 var sObjectPath = this.getModel().createKey("ET_EMP_LISTSet", {
    			 Empno: sEmpId
    		 });
    		 this._bindView("/" + sObjectPath);
    	 }.bind(this))
    	 
     },
     _bindView: function(sObjectPath){
    	 var ODataModel = this.getModel();
    	 
    	 this.getView().bindElement({
    		 path: sObjectPath,
    	     events:{
    	    	 change: this._onBindingChange.bind(this),
    	    	 dataRequested: function(Odata) {
    	    		 debugger;
    	    		 ODataModel.metadataLoaded.then(function(){
    	    			 
    	    		 });
    	    	 },
    	    	 dataReceived: function(oData) {
    	    		 debugger;
    	    	 }
    	     }	 
    	 });
     },
     _onBindingChange: function(oEvent){
    	debugger; 
     }
	})
})