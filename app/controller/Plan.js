Ext.define('PenavicoMobile.controller.Plan', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			list: "plans"
		},
		control: {
			list:{
				//itemtap:"onPlanTap"
			}
		}
	} , 

	onPlanTap: function(){
		var cls = "PenavicoMobile.view."+record.get("view");
		var itemId= cls.split(".").join("_");
		var view = Ext.getCmp(itemId);
		if (!view) {
			view = Ext.create(cls , {
				id: itemId
			});			
			Ext.Viewport.add(view);
		}
		Ext.Viewport.setActiveItem(view)
	
	}
});
