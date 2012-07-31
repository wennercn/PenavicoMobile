Ext.define('PenavicoMobile.controller.plan.WorkInfo', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			list: "plans" , 

			progress: "planProgress" , 
			btnSaveProgress: "planProgress button[action=save]" , 

			event: "planEventWrap" , 

			eventForm: "planEventForm" , 
			btnSaveEvent: "planEventForm button[action=save]" ,
			
			eventMedia: "planEventMedia" ,
			btnAddMedia: "planEventMedia button[action=addmedia]" , 
			
			mediaView: "planEventMedia dataview"

		},
		control: {
			progress:{
				activate: "loadProgress"
			} , 
			btnSaveProgress: {
				tap: "saveProgress"
			} , 
			event: {
				setplan: function(plan){
					this.getEventForm().setPlan(plan);
					this.getEventMedia().setPlan(plan);
				} , 
				activate: "loadEvent"
			} , 
			btnSaveEvent: {
				tap: "saveEvent"
			} , 
			"button[action=back2planlist]": {
				tap: "backToList"
			}
		}
	} , 
	
	//返回船舶列表
	backToList: function(){
		Ext.Viewport.getLayout().setAnimation({type: 'slide', direction: 'right'});
		Ext.Viewport.setActiveItem(this.getList());
		Ext.Viewport.getLayout().setAnimation({type: 'slide', direction: 'left'});		
	} , 

	loadWorkInfo: function(){
	
	} , 


	//读取作业进度
	loadProgress: function(){
		var GC = this.getApplication().GC;
		var wspath = GC.wspath;

		var form = this.getProgress();
		form.setMasked({ xtype: 'loadmask'  , message:"读取作业进度..."});		
		var plan = form.plan;
		Ext.Ajax.request({
			url: wspath+"workinfo.asmx/GetWorkInfo" , 
			params: {id: plan.get("plan_id")} , 
			success: function(data){
				var bd = $back(data);
				if (!bd.isok) {
					Ext.Msg.alert("错误" , bd.getErrorInfo());
					form.setMasked(false);
				}
				form._xml = Ext.query("workinfo RowSet R" , bd.data)
				var rs = Ext.query("workinfo RowSet R[p_type='作业进度']" , bd.data);
				var vs = {};
				Ext.each(rs , function(n){
					vs[n.getAttribute("project_name")] = n.getAttribute("project_cont");
				});
				form.setValues(vs);
				form.setMasked(false);
			} , 
			failure: function(data){
				Ext.Msg.alert("错误" , data.responseText);
				form.setMasked(false);
			} , 
			scope:this		
		})

	
	} , 

	//保存作业进度
	saveProgress: function(){

		var GC = this.getApplication().GC;
		var wspath = GC.wspath;

		var form = this.getProgress();
		var vs = form.getValues();
		var isempty = true;
		for (var key in vs) {
			if (!Ext.isEmpty(vs[key])) isempty = false;
		}
		if (isempty){
			Ext.Msg.alert('错误', '请填写作业进度信息!');
			return;
		}		

		//plan_id , project_name , project_cont , p_type		
		//生成传递的数据
		var plan = form.plan;
		var pa = {};
		pa.ptype = "作业进度";
		pa.plan_id = plan.get("plan_id");
		var rs = [];
		Ext.iterate(vs , function(key , value){
			rs.push({
				plan_id: pa.plan_id , 
				p_type: pa.ptype , 
				project_name: key , 
				project_cont: value
			});
		})		
			
		//获取其他的，不变，一起获取
		Ext.each(form._xml , function(n){
			console.log(n)
			if (n.getAttribute("p_type") != pa.ptype){
				rs.push({
					plan_id: pa.plan_id , 
					p_type: n.getAttribute("p_type") , 
					project_name: n.getAttribute("project_name") , 
					project_cont: n.getAttribute("project_cont") || ""
				});
			}		
		})
		var xml = $json2xml(rs , "form");
		pa.data = escape("<data>"+xml+"</data>");
		
		//保存
		form.setMasked({ xtype: 'loadmask'  , message:"保存作业进度..."});			
		Ext.Ajax.request({
			url: wspath+'workinfo.asmx/SaveWorkInfo',
			params: pa , 
			success: this._saveProgress , 
			failure: function(data){
				Ext.Msg.alert("错误" , data.responseText);
				form.setMasked(false);
			} , 
			scope: this		
		})		
	} , 
	_saveProgress: function(data){
		var bd = $back(data);
		this.getProgress().setMasked(false);
		if (!bd.isok) {
			Ext.Msg.alert("错误" , bd.getErrorInfo());
			return;
		}	
		Ext.Msg.alert("成功" , "信息保存成功" , this.backToList , this);
	} , 

	//读取突发事件
	loadEvent: function(){
		var GC = this.getApplication().GC;
		var wspath = GC.wspath;

				//获取FORM
		var form = this.getEventForm();
		form.setMasked({ xtype: 'loadmask'  , message:"读取突发事件信息..."});

		//获取多媒体附件
		var media = this.getEventMedia();
		var mediaview = this.getMediaView();
		media.setMasked({ xtype: 'loadmask'  , message:"读取突发事件附件..."});	
		//var plan = media.plan;
		//media.setMasked(false);
		mediaview.getStore().removeAll()

		var plan = form.plan;
		Ext.Ajax.request({
			url: wspath+"workinfo.asmx/GetWorkInfo" , 
			params: {id: plan.get("plan_id")} , 
			success: function(data){
				var bd = $back(data);
				if (!bd.isok) {
					Ext.Msg.alert("错误" , bd.getErrorInfo());
					form.setMasked(false);
				}
				form._xml = Ext.query("workinfo RowSet R" , bd.data);
				//form
				var rs = Ext.query("workinfo RowSet R[p_type='突发事件']" , bd.data);
				var vs = {};
				Ext.each(rs , function(n){
					vs[n.getAttribute("project_name")] = n.getAttribute("project_cont");
				});
				form.setValues(vs);
				form.setMasked(false);

				//附件
				var ms = Ext.query("media RowSet R" , bd.data);
				//if (ms.length !="0"){
					var btn_media = this.getEvent().getTabBar().getItems().items[1];
					btn_media.setBadgeText(ms.length)
				//}
				var ts = [];
				Ext.each(ms , function(n){
					var tmp = {};
					for (var i = 0 ; i<n.attributes.length ; i++ ){
						tmp[n.attributes[i].name] = n.attributes[i].value;
					}
					tmp.url = wspath.replace("ws\/mobile\/" , "") + "docs\/uploadfiles\/events\/" + tmp.file_name;
					ts.push(tmp);
				});
				media.setMasked(false);
				mediaview.getStore().setData(ts);
			} , 
			failure: function(data){
				Ext.Msg.alert("错误" , data.responseText);
				form.setMasked(false);
			} , 
			scope:this		
		})

		

	
	} , 

	//保存突发事件
	saveEvent: function(){

		var GC = this.getApplication().GC;
		var wspath = GC.wspath;

		var form = this.getEventForm();
		var vs = form.getValues();
		var isempty = true;
		for (var key in vs) {
			if (!Ext.isEmpty(vs[key])) isempty = false;
		}
		if (isempty){
			Ext.Msg.alert('错误', '请填写突发事件信息!');
			return;
		}		

		//plan_id , project_name , project_cont , p_type		
		//生成传递的数据
		var plan = form.plan;
		var pa = {};
		pa.ptype = "突发事件";
		pa.plan_id = plan.get("plan_id");
		var rs = [];
		Ext.iterate(vs , function(key , value){
			rs.push({
				plan_id: pa.plan_id , 
				p_type: pa.ptype , 
				project_name: key , 
				project_cont: value
			});
		})
		
		//获取其他的，不变，一起获取
		Ext.each(form._xml , function(n){
			console.log(n)
			if (n.getAttribute("p_type") != pa.ptype){
				rs.push({
					plan_id: pa.plan_id , 
					p_type: n.getAttribute("p_type") , 
					project_name: n.getAttribute("project_name") , 
					project_cont: n.getAttribute("project_cont") || ""
				});
			}		
		})

		var xml = $json2xml(rs , "form");
		pa.data = escape("<data>"+xml+"</data>");
		
		//保存
		form.setMasked({ xtype: 'loadmask'  , message:"保存突发事件..."});			
		Ext.Ajax.request({
			url: wspath+'workinfo.asmx/SaveWorkInfo',
			params: pa , 
			success: this._saveEvent , 
			failure: function(data){
				Ext.Msg.alert("错误" , data.responseText);
				form.setMasked(false);
			} , 
			scope: this		
		})
	} , 
	_saveEvent: function(data){
		var bd = $back(data);
		this.getEvent().setMasked(false);
		if (!bd.isok) {
			Ext.Msg.alert("错误" , bd.getErrorInfo());
			return;
		}	
		Ext.Msg.alert("成功" , "信息保存成功" , this.backToList , this);
	}
});
