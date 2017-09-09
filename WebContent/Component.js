sap.ui.define([
	'sap/ui/core/UIComponent'
],function(UIComponent) {
	'use strict';
	return UIComponent.extend('DemoEmp.Component', {
		metadata: {
			manifest: "json"
		},
		
		init: function(){
			debugger;
			UIComponent.prototype.init.apply(this, arguments);
			this.getRouter().initialize();
		}
		
	})
})