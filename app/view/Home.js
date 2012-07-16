Ext.define('PenavicoMobile.view.Home', {
	extend: 'Ext.Container',
	xtype: 'home',
	config: {	
		layout:"fit" , 
		items: [
			{xtype:"titlebar" , docked:"top" , title:"天津外代移动平台"} , 
			{xtype:"menus"}
		]
	}
});