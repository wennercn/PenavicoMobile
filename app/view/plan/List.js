Ext.define("PenavicoMobile.view.plan.List" , {
	xtype:"plans" , 
	extend: "Ext.List" , 
	config: {
		store: "Plans" , 
		itemTpl: '<div>{shipname} ({voyage})<p style="font:normal 14px arial;padding-top:5px;color:#999">{etb} ~ {etd}</p></div>',
		//disclosure: true,
		//grouped: true,
		items:[
			{xtype: 'titlebar',title: "我的船舶" , docked: 'top', items: [
				{ui:'back', text: '返回' , align:"left" , action:"back2home"},
				//{ui:'confirm', text: '事项确认' , align:"right" , disabled:true , action:"confirm"} , 
				{ui:'gray' , iconMask:true , iconCls:"refresh", text:"刷新" , align:"right" , action:"refresh"}
			]} , 
			{xtype: 'toolbar', docked: 'bottom', layout:{type:"hbox" , pack:"center"} , items: [
				{text: '工作事项' , disabled:true , action:"task" , cls:"plan.Tasks"} ,
				{text: '作业进度' , disabled:true , action:"progress" , cls:"plan.Progress"} ,
				{text: '突发事件' , disabled:true , action:"event" , cls:"plan.EventWrap"} ,
				{text: '货物信息' , disabled:true , action:"product" , cls:"plan.Products"} ,
			]}
		]
	} , 
	initialize: function() {
		this.getStore().load();
		this.callParent();
	} 
});