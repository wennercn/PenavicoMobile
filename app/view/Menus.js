Ext.define('PenavicoMobile.view.Menus', {
	extend: 'Ext.dataview.DataView',
	xtype: 'menus',
	config: {	
		ui:"light" , 
		title:"首页" , 
		pressedCls: "menu_pressed" , 
		selectedCls:"menu_selected" , 
		iconCls: 'home',
		cls: 'home',
		padding:"18 0 0 18" , 
		store: {
			fields: ['name', 'icon' , 'view'],
			data: [
				{name: '我的任务' , icon:"tasks.png" , view:"Tasks"},
				{name: '船舶列表' , icon:"ships.png" , view:"Menus"},
				{name: 'GPS定位' , icon:"gps.png" , view:"GPS"},
				{name: '切换用户' , icon:"gps.png" , view:"Login"}
			]
		},
		itemTpl: '<div class="menu"><img src="res/icons/{icon}"><p><span>{name}</span></p></div>'
	}
});