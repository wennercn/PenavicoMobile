Ext.define('PenavicoMobile.controller.plan.List', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			list: "plans"
		},
		control: {
			list:{
				selectionchange: function(st , rs){
					this.getList().down("toolbar button[action=progress]").setDisabled(rs.length == 0);
					this.getList().down("toolbar button[action=event]").setDisabled(rs.length == 0);
					/*
					Ext.each(this.getList().down("toolbar").items.items , function(n){
						n.setDisabled(rs.length == 0)
					})
					*/
				}
			} , 
			"plans toolbar button" : {
				tap: "onPlanButtonTap"
			}
		}
	} , 

	onPlanButtonTap: function(btn , e){
		var rs = this.getList().getSelection();
		if (rs.length == 0) return;
		var record = rs[0];
		var cls = "PenavicoMobile.view."+btn.config.cls;
		var itemId= cls.split(".").join("_");
		var view = Ext.getCmp(itemId);
		if (!view) {
			view = Ext.create(cls , {
				id: itemId
			});	
			Ext.Viewport.add(view);
		}
		if (view.setPlan) view.setPlan(record);
		Ext.Viewport.setActiveItem(view)	
	}
});
