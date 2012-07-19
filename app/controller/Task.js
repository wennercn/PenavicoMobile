Ext.define('PenavicoMobile.controller.Task', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			home: 'home',

			tasks: "tasks" , 
			//btntaskback: "tasks button[action=back]"	 , 
			btntaskrefresh: "tasks button[action=refresh]" , 
			btntaskconfirm: "tasks button[action=confirm]" ,
			
			taskconfirm: "taskconfirm"
		},
		control: {
			tasks: {
				selectionchange: function(st , rs){
					this.getBtntaskconfirm().setDisabled(rs.length == 0);
				}
			} , 

			btntaskrefresh: {
				tap: function(){
					this.getTasks().getStore().load();
				}
			} , 

			btntaskconfirm: {
				tap: "showConfirm"
			} , 

			"taskconfirm button[action=back]": {
				tap: "backToList"
			} , 

			"taskconfirm button[action=save]"	: {
				tap: "completeTask"		
			}

		}
	} , 
	
	//返回到任务列表
	backToList: function(){
		Ext.Viewport.getLayout().setAnimation({type: 'slide', direction: 'right'});
		Ext.Viewport.setActiveItem(this.getTasks());
		Ext.Viewport.getLayout().setAnimation({type: 'slide', direction: 'left'});	
	} , 

	//显示确认PANEL
	showConfirm: function(){
		var rs = this.getTasks().getSelection();
		if (rs.length == 0) return;
		var record = rs[0];
		var cls = "PenavicoMobile.view.TaskConfirm";
		var itemId= cls.split(".").join("_");
		var view = Ext.getCmp(itemId);
		if (!view) {
			view = Ext.create(cls , {
				id: itemId
			});	
			Ext.Viewport.add(view);
		}
		view.setTask(record);
		Ext.Viewport.setActiveItem(view)	
	} , 

	//确认完成事项
	completeTask: function(){

		var GC = this.getApplication().GC;
		var wspath = GC.wspath;

		var form = this.getTaskconfirm();
		var task = form.task;

		var vs = form.getValues();
		if (vs.plan_status != "已完成" && Ext.isEmpty(vs.memo)) {
			Ext.Msg.alert('错误', '请填写备注信息!');
			return;
		}
		Ext.apply(vs , {
			pss_id: task.get("pss_id") , 
			plan_id: task.get("plan_id") , 
			finish_time:task.get("finish_time") , 
			plan_time:task.get("plan_time")
		});
		
		var xml = $json2xml(vs , "form");

		var pa = {};
		pa.data = escape("<data>"+xml+"</data>");

		//保存
		form.setMasked({ xtype: 'loadmask'  , message:"确认事项..."});			
		Ext.Ajax.request({
			url: wspath+'task.asmx/CompleteTask',
			params: pa , 
			success: this._completeTask , 
			failure: function(data){
				Ext.Msg.alert("错误" , data.responseText);
				form.setMasked(false);
			} , 
			scope: this		
		})

	} , 
	_completeTask: function(data){
		var bd = $back(data);
		var form = this.getTaskconfirm()
		form.setMasked(false);
		if (!bd.isok) {
			Ext.Msg.alert("错误" , bd.getErrorInfo());
			return
		}	
		Ext.Msg.alert("成功" , "信息保存成功" , function(){
			this.getTasks().getStore()	.remove(form.task);
			this.backToList();				
		} , this);

	}
});
