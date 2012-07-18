Ext.define("PenavicoMobile.view.Tasks" , {
	xtype:"tasks" , 
	extend: "Ext.List" , 
	config: {
		store: "Tasks" , 
		itemTpl: '<div>{start_name}<p style="font:normal 14px arial;padding-top:5px;color:#999">{plan_time} ~ {finish_time}</p></div>',
		//disclosure: true,
		grouped: true,
		items:[
			{xtype: 'titlebar',title: "我的任务" , docked: 'top', items: [
				{ui:'back', text: '返回' , align:"left" , action:"back2home"},
				//{ui:'confirm', text: '事项确认' , align:"right" , disabled:true , action:"confirm"} , 
				{ui:'gray' , iconMask:true , iconCls:"refresh", align:"right" , action:"refresh"}
			]} , 
			{xtype: 'titlebar', docked: 'bottom', items: [
				//{ui:'back', text: '返回' , align:"left" , action:"back"},
				{ui:'confirm', text: '事项确认' , align:"right" , disabled:true , action:"confirm"} ,
				//{ui:'gray' , iconMask:true , iconCls:"refresh", align:"right"}
			]}
		]
	} , 
	initialize: function() {
		this.getStore().load();
		this.callParent();
	} 
});