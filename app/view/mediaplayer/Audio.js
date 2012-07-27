Ext.define("PenavicoMobile.view.mediaplayer.Audio" , {
	extend:"Ext.Container" , 
	config:{
		scrollable: false , 
		padding: 10 , 
		layout: {
			type : 'vbox',
			pack : 'center',
			align: 'stretch'
		},		
		style:"text-align:center" , 
		items:[{
				xtype : 'audio',
				margin:"10 0"
		}]
	} , 
	initialize: function(){
		this.add([
			{xtype:"titlebar" , title:"播放音频" , docked:"top" , items:[
				{xtype:"button" , ui:"back" , text:"返回" , handler:function(){
					this.fireEvent("back")
				} , scope:this}	
			]} , 
			{ text: '点击播放',  xtype: 'button', handler: function() {
				var container = this.getParent().getParent(),
				audio = container.down('audio');
				audio.toggle();
				this.setText(audio.isPlaying() ? '点击暂停' : '点击播放');
			}}
		])
	} , 
	setAudio: function(media){
		if (!media) return;
		this.down("audio").setUrl(media.get("url"));
	}
})