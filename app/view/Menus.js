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
				{name: '船舶列表' , icon:"ships.png" , view:"plan.List"},
				//{name: '作业进度测试' , icon:"gps.png" , view:"plan.Progress"},
				//{name: '突发事件测试' , icon:"gps.png" , view:"plan.Event"},
				{name: '切换用户' , icon:"gps.png" , view:"Login"} , 
				{name:"PG测试" , icon:"ships.png" , view:"PhoneGap"}
			]
		},
		itemTpl: '<div class="menu"><img src="res/icons/{icon}"><p><span>{name}</span></p></div>'
	}
});