//突发事件
Ext.define("PenavicoMobile.view.plan.EventWrap" ,{
	extend:"Ext.tab.Panel" , 
	xtype:"planEventWrap" ,
	config:{	
		tabBarPosition: 'bottom',
		items: [
			{xtype:"titlebar" , docked:"top" , title:"突发事件 事件信息" , items:[
				{ui:'back', text: '返回' , align:"left" , action:"back2planlist"} , 
				{text:"添加附件" , align:"right" , iconCls:"action" , iconMask:true , hidden:true , action:"addmedia"}
			]} , 
			{xtype:"planEventForm" , title:"事件信息" , iconCls:"star" , itemId:"eventform"} ,
			{xtype:"planEventMedia" , title:"附件列表" , iconCls:"bookmarks" , itemId:"eventmedia"}	
		] , 
		listeners: {
			activeitemchange: function(tab , nv){
				//this.down("button[action=addmedia]").setHidden(nv.config.itemId == "eventform")
			}
		}
	} , 
	setPlan: function(plan){
		this.plan = plan;
		this.fireEvent("setplan" , plan);
		this.setActiveItem(0);
		this.down("titlebar").setTitle(plan.get("shipname")+" 突发事件");
	}
});