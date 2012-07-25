Ext.define('PenavicoMobile.controller.plan.WorkInfo', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			list: "plans" , 

			progress: "planProgress" , 
			btnSaveProgress: "planProgress button[action=save]" , 

			event: "planEvent" , 
			btnSaveEvent: "planEvent button[action=save]" , 
			eventMedia: "planEvent list"

		},
		control: {
			progress:{
				activate: "loadProgress"
			} , 
			btnSaveProgress: {
				tap: "saveProgress"
			} , 
			event: {
				activate: "loadEvent"
			} , 
			btnSaveEvent: {
				tap: "saveEvent"
			} , 
			"button[action=back2planlist]": {
				tap: "backToList"
			} , 
			"toolbar[itemId=mediabar] button" :{
				tap: "getMedia"
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
				var rs = Ext.query("RowSet R[p_type='作业进度']" , bd.data);
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
		var form = this.getEvent();
		form.setMasked({ xtype: 'loadmask'  , message:"读取突发事件..."});		
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
				var rs = Ext.query("RowSet R[p_type='突发事件']" , bd.data);
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

	//保存突发事件
	saveEvent: function(){

		var GC = this.getApplication().GC;
		var wspath = GC.wspath;

		var form = this.getEvent();
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
	} , 


	getMedia: function(btn){
		var action = btn.config.action;
		this["get"+action]();	
	} , 


	//录音
	getaudio: function(){
		var me = this;
		// capture callback
		var captureSuccess = function(mediaFiles) {
			var i, path, len;
			for (i = 0, len = mediaFiles.length; i < len; i += 1) {
				path = mediaFiles[i].fullPath;
				alert(mediaFiles[i].fullPath);
				try{
					me.uploadFile(mediaFiles[i]); 
				}catch(e){
					alert(e.message);
				}
				// do something interesting with the file
			}
		};

		// capture error callback
		var captureError = function(error) {
			navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
		};

		// start audio capture
		navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});
	} , 
	//
	getvideo: function(){
		var me = this;

		// 采集操作成功完成后的回调函数
		function captureSuccess(mediaFiles) { 
			var i, len; 
			for (i = 0, len = mediaFiles.length; i < len; i += 1) { 
				alert(mediaFiles[i].fullPath);
				try{
					me.uploadFile(mediaFiles[i]); 
				}catch(e){
					alert(e.message);
				}
			}        
		} 

		// 采集操作出错后的回调函数 
		function captureError(error) { 
			var msg = 'An error occurred during capture: ' + error.code; 
			navigator.notification.alert(msg, null, 'Uh oh!'); 
		} 
		navigator.device.capture.captureVideo(captureSuccess, captureError, {limit: 2}); 

	} , 
	//
	getpicture: function(){
		var store = this.getEventMedia().getStore();
		var _uri = "";

		navigator.camera.getPicture(
			onSuccess, 
			onFail, 
			{
				quality: 50,
				destinationType: Camera.DestinationType.FILE_URI , 
				allowEdit: true , 
				targetWidth: 1000 , 
				targetHeight: 1000 , 
				EncodingType: Camera.EncodingType.PNG , 
				MediaType: Camera.MediaType.ALLMEDIA , 
				saveToPhotoAlbum: true
			}
		); 
		
		
		function onSuccess(uri) {
			alert(uri+"/n开始测试上传");
			_uri = uri;
			try{
				var options = new FileUploadOptions();
				options.fileKey="file";
				options.fileName=uri.substr(uri.lastIndexOf('/')+1);
				options.mimeType="text/plain";
			}catch(e){
				alert("错误啦:"+e.message);
			}
			alert(options.fileName);
			alert(uri);

			try{
				var params = new Object();
				params.value1 = "test";
				params.value2 = "param";
				options.params = params;
			}catch(e){
				alert(e.message);
			}
			try{
				var ft = new FileTransfer();
				alert("开始上传啦");
				ft.upload(uri, encodeURI("http://192.168.0.110/freesailingadmin/test.ashx"), win, fail, options);
			}catch(e){
				alert("错误3:"+e.message);
			}
		}

		function onFail(message) {
			alert('Failed because: ' + message);
		}


		var win = function(r) {
			alert("Code = " + r.responseCode);
			alert("Response = " + r.response);
			alert("Sent = " + r.bytesSent);
			store.add({type:"picture" , url:_uri})
		}

		var fail = function(error) {
			alert("An error has occurred: Code = " + error.code);
			alert("upload error source " + error.source);
			alert("upload error target " + error.target);
		}


	} , 

    // Upload files to server
    uploadFile: function(mediaFile) {
        var ft = new FileTransfer(),
            path = mediaFile.fullPath,
            name = mediaFile.name;

        ft.upload(path,
            "http://192.168.0.110/freesailingadmin/test.ashx",
            function(result) {
                alert('Upload success: ' + result.responseCode);
                alert(result.bytesSent + ' bytes sent');
            },
            function(error) {
				alert('Error uploading file ' + path + ': ' + error.code);
            },
            {fileName: name });   
    }

});
