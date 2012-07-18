//作业进度信息
Ext.define("PenavicoMobile.view.workinfo.Progress" ,{
	extend:"Ext.form.Panel" , 
	xtype:"workinfoProgress" , 
	config: {
		iconCls: 'user',
		layout: 'vbox',
		items: [
			{xtype:"titlebar" , docked:"top" , title:"马士基九龙 作业进度" , items:[
				{ui:'back', text: '返回' , align:"left" , action:"back2workinfolist"}
			]} , 
			{
				xtype: 'fieldset',
				items: [
					{xtype: 'textfield',label: '计划进度',name: '计划进度'},
					{xtype: 'textfield',label: '实际进度',name: '实际进度'}		,
					{xtype: 'textareafield',label: '备注',name: '备注'}					
				]
			},
			{xtype: 'button', text: '保存信息' , action:"save" , ui: 'confirm'}
		] 
	} , 
	setPlan: function(plan){
		this.plan = plan;
	}
});