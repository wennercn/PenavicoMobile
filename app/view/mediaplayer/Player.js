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
	}
})