Ext.define("PenavicoMobile.controller.plan.EventMedia" , {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			event: "planEventWrap" ,				
			eventMedia: "planEventMedia" ,
			btnAddMedia: "planEventMedia button[action=addmedia]" , 
			mediaList: "planEventMedia dataview"
		},
		control: {
			"toolbar[itemId=mediabar] button[action=audio]" :{
				tap: "getMedia"
			} , 
			"toolbar[itemId=mediabar] button[action=picture]" :{
				tap: "showSheet"
			} , 
			"toolbar[itemId=mediabar] button[action=video]" :{
				tap: "showSheet"
			} , 
			mediaList: {
				itemtap: "onMediaTap"
			}
		}
	} , 

	//showsheet
	showSheet: function(btn){
		var me = this;

		if (!this.sheets) this.sheets = {};
		var action = btn.config.action;
		var sheet = this.sheets[action];
		if (!sheet){
			var btns = [];
			var txt = "";
			switch (action){
				case "picture":
					btns = [
						{text:"拍摄照片" , ui:"confirm" , handler:function(btn){
							this.getpicture();
							btn.up("actionsheet").hide()
						} , scope:this}
					]
					txt = "相册";
					break;
				case "video":
					btns = [
						{text:"拍摄视频" , ui:"confirm" , handler:function(btn){
							this.getvideo();
							btn.up("actionsheet").hide()
						} , scope:this}
					]
					txt = "手机相册";
					break;
				case "audio":
					btns=[
						{text:"录制音频" , ui:"confirm" , handler:function(btn){
							this.getaudio();
							btn.up("actionsheet").hide()
						} , scope:this}
					]
					txt = "手机文件";
					break;		
			}
			btns.push({text:"从"+txt+"中获取" , handler:function(btn){
				this.getLocalFile(action);
				btn.up("actionsheet").hide()
			} , scope:this});

			btns.push({text:"取消" , ui:"dark" , handler:function(btn){
				btn.up("actionsheet").hide()
			}})
			sheet = this.sheets[action] = Ext.create("Ext.ActionSheet" , {items: btns});
			Ext.Viewport.add(sheet);
		}
		sheet.show();

		//this["get"+action]();	
	} , 

	//获取本地文件
	getLocalFile: function(type){
		console.log(navigator)
		var me = this;
		alert("获取本地文件");
		try{
		//获取照片
		navigator.camera.getPicture(
			function(uri){
				me.getFileToUpload(uri , type);
			} , 
			me._getpicture, 
			function(){
				alert('本地获取文件失败: ' + message);
				return;
			}, {
				sourceType: Camera.PictureSourceType.PHOTOLIBRARY , 
				MediaType: type == "video" ? Camera.MediaType.VIDEO : Camera.MediaType.PICTURE , 
				destinationType: Camera.DestinationType.FILE_URI
			}
		);
		}catch(e){
			alert("获取本地文件错误:"+e.message)
		}
	} , 

	//捕获媒体文件
	getMedia: function(btn){
		var action = Ext.isString(btn) ? btn : btn.config.action;
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
				try{
					me.uploadFile(mediaFiles[i] , "audio"); 
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
		navigator.device.capture.captureAudio(captureSuccess, captureError);
	} , 

	//摄像
	getvideo: function(){
		var me = this;

		// 采集操作成功完成后的回调函数
		function captureSuccess(mediaFiles) { 
			var i, len; 
			for (i = 0, len = mediaFiles.length; i < len; i += 1) { 
				try{
					me.uploadFile(mediaFiles[i] , "video"); 
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
		alert("摄像")
		try{
		navigator.device.capture.captureVideo(captureSuccess, captureError); 
		}catch(e){
			alert("摄像失败:"+e.message)
		}
	} , 
	
	getpicture: function(){
		var me = this;
		alert("拍照")
		try{
		//获取照片
		navigator.camera.getPicture(
			function(uri){
				me.getFileToUpload(uri , "picture");
			} , 
			//me._getpicture, 
			function(){
				alert('获取照片失败: ' + message);
				return;
			}, {
				quality: 50,
				destinationType: Camera.DestinationType.FILE_URI  ,
				sourceType: Camera.PictureSourceType.CAMERA  , 
				targetWidth: 1000 , 
				targetHeight: 1000 , 
				saveToPhotoAlbum: true
			}
		); 
		}catch(e){
			alert("获取照片失败:"+e.message);
		}
	} , 
	
	//将URI转换为fullpath上传
	getFileToUpload: function(uri , type){
			var me = this;		
			window.resolveLocalFileSystemURI(uri, function(file){
				alert("转换URI:"+file.name+"--"+file.fullPath);
				try{
				me.uploadFile(file , type);			
				}catch(e){
					alert("上传错误:"+e.message);
				}
			},function(evt){
				alert("转换URI错误:"+evt.target.error.code);				
			});
	} , 

    //上传文件
    uploadFile: function(file , type) {
		var me = this;

		me.getEvent().setMasked({ xtype: 'loadmask'  , message:"上传文件,请稍候..."});		

		var GC = this.getApplication().GC;
		var wspath = GC.wspath;

        var	ft = new FileTransfer() , 
				path = file.fullPath , 
				name = file.name , 
				opt = new FileUploadOptions();

		opt.fileName = name;
		opt.fileKey = "file";
		opt.mimeType = "text/plain";
		opt.params = {
			value1: "isvalue1" , 
			value2: "isvalue2"
		}

		var store = this.getMediaList().getStore();

		ft.upload(
			path,
			encodeURI(wspath+"test.ashx"),
			function(result) {
				me.getEvent().setMasked(false);		
				var ss = [
					"上传成功:"+result.responseCode , 
					"大小:"+result.bytesSent , 
					"返回:"+result.response
				]
				alert(ss.join("\n"));
				store.insert(0 , {type:type , url:path})
			},
			function(error) {
				me.getEvent().setMasked(false);
				var es = [
					"Error uploading:" , 
					"path: "+path , 
					"code: "+error.code , 
					"source: "+error.source , 
					"target: "+error.target , 
					"status: "+error.http_status
				]
				alert(es.join("\n"));
			},
			opt
		);
	} , 
		
	//点击媒体显示
	onMediaTap: function(dv , ix , target , record , e){
		var player = Ext.getCmp("mediaplayer");
		if (!player){
			player = Ext.create("PenavicoMobile.view.mediaplayer.Player" , {
				id: "mediaplayer"
			})
			Ext.Viewport.add(player);
		}
		player.setMedia(record);
		player.setPrevPanel(this.getEvent());
		Ext.Viewport.setActiveItem(player);
		return;
	

		if (!this.mediaOverlay) this.mediaOverlay = {};
		var type = record.get("type");
		var overlay = this.mediaOverlay[type];
		if (!overlay){

			overlay = Ext.create("Ext.Panel" , {
				modal: true,
				hideOnMaskTap: true,
				hidden: true,
				layout:"card" , 
				scrollable: true,
				width:"90%" , 
				height:"90%" , 
				style:"text-align:center" , 
				centered:true , 
				showAnimation: {type:"popIn" , duration: 250 , easing: "ease-out"} , 
				hideAnimation: {type:"popOut" , duration: 250 , easing: "ease-out"}			
			});

			this.mediaOverlay[type] = overlay;
			//overlay.add({xtype:"image" , src:record.get("url")});
			overlay.setHtml("<img src='"+record.get("url")+"'>");
			Ext.Viewport.add(overlay);

		}
		//overlay.setSrc(record.get("url"));
		overlay.show();
	}
	
})