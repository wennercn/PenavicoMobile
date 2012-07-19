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
					{xtype: 'selectfield',label: '确认状态',name: 'plan_status' , required: true, options:[
						{text:"已完成" , value:"已完成"} , 
						{text:"未完成" , value:"未完成"}
					] ,autoCapitalize: false , value:"已完成"},
					{xtype: 'textareafield',label: '备注',name: 'memo' , allowBlank:false}					
				]
			},
			{xtype: 'button', text: '确认' , ui: 'confirm' , action:"save"}
		] 
	} , 
	setTask: function(task){
		this.task = task;			
		this.reset();
		var finish_time = Ext.Date.parse(this.task.get("finish_time") , "Y-m-d H:i:s");
		if (finish_time < PenavicoMobile.globolConfig.ServerDate) {
			var sel = this.down("selectfield");
			sel.setOptions([
				{text:"超时完成" , value:"超时完成"} , 
				{text:"未完成" , value:"未完成"}
			]);
			sel.setValue("超时完成");
		}
	}
});