Ext.define('PenavicoMobile.controller.Common', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			home: "home"
		},
		control: {
			"button[action=back2home]" : {
				tap: "backToHome"
			}
		}
	} ,
	
	backToHome: function(){
		Ext.Viewport.getLayout().setAnimation({type: 'slide', direction: 'right'});
		Ext.Viewport.setActiveItem(this.getHome());
		Ext.Viewport.getLayout().setAnimation({type: 'slide', direction: 'left'});	
	}
	
});
