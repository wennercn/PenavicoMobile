Ext.define("PenavicoMobile.view.mediaplayer.Video" , {
	extend:"Ext.Container" , 
	config:{
		scrollable: false , 
		layout: {
			type : 'vbox',
			pack : 'center',
			align: 'stretch'
		},		
		style:"text-align:center" , 
		items:[{
				xtype : 'video',
				enableControls: true , 
				loop: true , 
				flex:1
		}]
	} , 
	initialize: function(){
		this.add([
			{xtype:"titlebar" , title:"播放视频" , docked:"top" , items:[
				{xtype:"button" , ui:"back" , text:"返回" , handler:function(){
					this.fireEvent("back")
				} , scope:this}	
			]} , 
			{xtype:"toolbar" , docked:"bottom" , items:[
				{ text: '点击播放',  flex:1 , xtype: 'button', handler: function() {
					var container = this.getParent().getParent(),
					video = container.down('video');
					video.toggle();
					this.setText(video.isPlaying() ? '点击暂停' : '点击播放');
				}}
			]}
		])
	} , 
	setVideo: function(media){
		if (!media) return;
		var el = 	this.down("video");
		/*
		window.plugins.videoPlayer.play("http://path.to.my/video.mp4");
		window.plugins.videoPlayer.play("file:///path/to/my/video.mp4");
		window.plugins.videoPlayer.play("file:///android_asset/www/path/to/my/video.mp4");
		*/
		alert("视频地址:"+media.get("url"));
		alert(window.plugins.videoPlayer.play);

		try{
			window.plugins.videoPlayer.play(media.get("url"));
			return;
		}catch(e){
			alert(e.message);
		}

		el.setUrl(media.get("url"));
		el.play();
		if (el.isPlaying()){
			this.down("toolbar button").setText("点击暂停");
		}
	}
})