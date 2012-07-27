Ext.define("PenavicoMobile.view.mediaplayer.Player" , {
	extend:"Ext.Container" , 
	scrollable:true , 
	config: {			
		layout:"card"
	} , 
	
	setMedia: function(media){
		this.media = media;
		var type = media.get("type");
		var fn = Ext.bind(this["play"+type] , this);
		if (fn){
			fn();
		}
	} , 
	
	//查看图片
	playpicture: function(){
		var me = this;
		var media = this.media;
		var p = me.ppicture;
		if (!p){
			p = me.ppicture = Ext.create("PenavicoMobile.view.mediaplayer.Picture" , {
				PARENT: this , 
				listeners:{
					back: this.backToPlayer , 
					scope: this
				}
			});
			me.add(p);
		}
		p.setPicture(media);
		me.setActiveItem(p);	
	} , 

	//播放音频
	playaudio: function(){
		var me = this;
		var media = this.media;
		var p = me.paudio;
		if (!p){
			p = me.paudio = Ext.create("PenavicoMobile.view.mediaplayer.Audio" , {
				PARENT: this , 
				listeners:{
					back: this.backToPlayer , 
					scope: this
				}
			});
			me.add(p);
		}
		p.setAudio(media);
		me.setActiveItem(p);	
	} , 
	
	//播放视频
	playvideo: function(){
		var me = this;
		var media = this.media;
		var p = me.pvideo;
		if (!p){
			p = me.pvideo = Ext.create("PenavicoMobile.view.mediaplayer.Video" , {
				PARENT: this , 
				listeners:{
					back: this.backToPlayer , 
					scope: this
				}
			});
			me.add(p);
		}
		p.setVideo(media);
		me.setActiveItem(p);	
	} , 
	

	setPrevPanel: function(panel){
		this.prevpanel = panel;
	} , 
	
	backToPlayer: function(){
		Ext.Viewport.getLayout().setAnimation({type: 'slide', direction: 'right'});
		Ext.Viewport.setActiveItem(this.prevpanel);
		Ext.Viewport.getLayout().setAnimation({type: 'slide', direction: 'left'});	
	} , 

	local_the_img: function( img_url , img_obj , after_loaded){
		var me = this;
	 
		//处理开始
		//var img_url = img_url;
		//var img_obj = img_obj;
	 
		var url_md5 = md5(img_url);
		//var file_name = url_md5.substr(-2,2);
		var file_name = "cache_images";
	 
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFSSuccess, onError);
	 
		//文件系统回调函数
		function onFSSuccess(fileSystem){
		  //取本机图像
		  fileSystem.root.getFile(file_name+"/"+url_md5+".jpg",null,
		  //如果有，直接拿出来显示
		  function(FileEntry){
	 
			after_loaded.call(self,img_obj,FileEntry.toURI());
			//$(img_obj).attr('src',FileEntry.toURI());
		  },
		  //无的话，下载落来再显示
		  function(){
	 
			  fileSystem.root.getDirectory(file_name,{create:true},gotDir,onError);
		  });
		}
	 
		function gotDir(DATADIR){
		  var ft = new FileTransfer();
		  var dlPath = DATADIR.fullPath + "/" + url_md5 + ".jpg";
	 
		  ft.download(img_url, dlPath, 
		  function(e){
		 
			after_loaded.call(self,img_obj,e.fullPath);
			//$(img_obj).attr('src',e.fullPath);
		  }, 
		  function(e){
			 
			console.log("ERROR");
			console.log(JSON.stringify(e));
	 
		  });
		}
	 
		function onError(e)
		{
		  console.log("ERROR");
		  console.log(JSON.stringify(e));
		}
	   
	}
})