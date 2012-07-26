//突发事件
Ext.define("PenavicoMobile.view.plan.EventForm" ,{
	extend:"Ext.form.Panel" , 
	xtype:"planEventForm" ,
	config: {
		layout: 'vbox',
		items: [
				{xtype: 'fieldset',  defaults:{ style:"font-size:16px" , height:100} , 
					items: [
					{xtype: 'textareafield',label: '情况描述',name: '情况描述'},
					{xtype: 'textareafield',label: '处理结果',name: '处理结果' },
					{xtype: 'textareafield',label: '备注',name: '备注'}					
				]},

				{xtype: 'button', text: '保存信息' , action:"save" , ui: 'confirm'}
		] ,
	} , 
	setPlan: function(plan){
		this.plan = plan;
		//this.down("titlebar").setTitle(plan.get("shipname")+" 突发事件");
	}
});
