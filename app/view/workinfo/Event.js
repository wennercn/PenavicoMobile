//作业进度信息
Ext.define("PenavicoMobile.view.workinfo.Event" ,{
	extend:"Ext.form.Panel" , 
	xtype:"workinfoEvent" ,
	config: {
		layout: 'vbox',
		items: [
				{xtype:"titlebar" , docked:"top" , title:"马士基九龙 突发事件" , items:[
					{ui:'back', text: '返回' , align:"left" , action:"back2workinfolist"}
				]} , 

				{xtype: 'fieldset', title:"事件信息" , items: [
						{xtype: 'textfield',label: '情况描述',name: '情况描述'},
						{xtype: 'textfield',label: '处理结果',name: '处理结果'}		,
						{xtype: 'textareafield',label: '备注',name: '备注'}					
				]},
				{xtype: 'fieldset', title:"多媒体附件", items: [
				]},
				{xtype: 'button', text: '保存信息' , action:"save" , ui: 'confirm'}
		] ,
	} , 
	initialize: function(){
		var me = this;
		alert(111111)
		this.callParent();
	} , 
	setPlan: function(plan){
		this.plan = plan;
	}
});