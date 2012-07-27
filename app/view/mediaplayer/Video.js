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
					audio = container.down('video');
					audio.toggle();
					this.setText(audio.isPlaying() ? '点击暂停' : '点击播放');
				}}
			]}
		])
	} , 
	setVideo: function(media){
		if (!media) return;
		this.down("video").setUrl("http://10.128.60.49/penavico/ws/mobile/temp/VIDEO0012.3gp");
	}
})