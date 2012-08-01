//作业进度信息
Ext.define("PenavicoMobile.view.plan.Progress" ,{
	extend:"Ext.form.Panel" , 
	xtype:"planProgress" , 
	config: {
		layout: 'vbox',
		items: [
			{xtype:"titlebar" , docked:"top" , title:"作业进度" , items:[
				{ui:'back', text: '返回' , align:"left" , action:"back2planlist"}
			]} , 
			{
				xtype: 'fieldset',
				layout:"vbox" , 
				defaults:{ style:"font-size:16px" , height:120} , 
				items: [
					{xtype: 'textareafield',label: '计划进度',name: '作业进度_计划进度'},
					{xtype: 'textareafield',label: '实际进度',name: '作业进度_实际进度'} ,
					{xtype: 'textfield',label: 'ETD',name: 'ETD_ETD' , height:30} ,
					{xtype: 'textareafield',label: '备注',name: '作业进度_备注'}					
				]
			},
			{xtype: 'button', text: '保存信息' , action:"save" , ui: 'confirm'}
		] 
	} , 
	setPlan: function(plan){
		this.plan = plan;
		this.down("titlebar").setTitle(plan.get("shipname")+" 作业进度");
	}
});