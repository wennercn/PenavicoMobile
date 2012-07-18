//登录
Ext.define("PenavicoMobile.view.Login" ,{
	extend:"Ext.form.Panel" , 
	xtype:"login" , 
	config: {
		iconCls: 'user',
		layout: 'vbox',
		items: [
			{xtype:"titlebar" , docked:"top" , title:"用户登录" , items:[
				{ui:'back', text: '返回' , align:"left" , action:"back2home"}
			]} , 
			{
				xtype: 'fieldset',
				instructions: '请输入用户名密码!',
				items: [
					{xtype: 'textfield',label: '用户名',name: 'u_name' , allowBlank:false},
					{xtype: 'passwordfield',label: '密码',name: 'u_pass' , allowBlank:false}					
				]
			},
			{xtype: 'button', text: '登录' , itemId:"login" , ui: 'confirm'}
		] 
	}
});