Ext.define("PenavicoMobile.view.Tasks" , {
	xtype:"tasks" , 
	extend: "Ext.List" , 
	config: {
		store: "Tasks" , 
		itemTpl: '<div>{star_name}</div>',
		disclosure: true,
		grouped: true,
		items:[
			{
				xtype: 'titlebar',
				title: "我的任务" , 
				docked: 'top', 
				items: [
					{ui:'back', text: '返回' , align:"left" , action:"back"},
					{ui:'confirm', text: '事项确认' , align:"right" , disabled:true , action:"confirm"} , 
					{ui:'gray' , iconMask:true , iconCls:"refresh", align:"right"}
				]
			}
		]
	} , 
    //indexBar: true,
    onItemDisclosure: function(record, item, index, e) {
        e.stopEvent();
        Ext.Msg.confirm('确认信息', '要确认完成' + record.get('star_name')+" 么?");
    }
});