//事项确认
Ext.define("PenavicoMobile.view.TaskConfirm" ,{
	extend:"Ext.form.Panel" , 
	xtype:"taskconfirm" , 
	config: {
		iconCls: 'user',
		layout: 'vbox',
		items: [
			{xtype:"titlebar" , docked:"top" , title:"事项确认" , items: [
				{ui:'back', text: '返回' , align:"left" , action:"back"}
			]} , 
			{
				xtype: 'fieldset',
				//instructions: '请输入用户名密码!',
				items: [
					{xtype: 'selectfield',label: '确认状态',name: 'uname' , required: true, options:[
						{text:"已完成" , value:"已完成"} , 
						{text:"未完成" , value:"未完成"}
					] ,autoCapitalize: false},
					{xtype: 'textareafield',label: '备注',name: 'upass' , allowBlank:false}					
				]
			},
			{xtype: 'button', text: '确认' , ui: 'confirm' , action:"save"}
		] 
	}
});