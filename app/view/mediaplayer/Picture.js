Ext.define("PenavicoMobile.view.mediaplayer.Picture" , {
	extend:"Ext.Panel" , 
	config:{
		scrollable: {
			direction: 'both',
			directionLock: false
		},
		style:"text-align:center"
	} , 
	initialize: function(){
		this.add(
			{xtype:"titlebar" , title:"查看图片" , docked:"top" , items:[
				{xtype:"button" , ui:"back" , text:"返回" , handler:function(){
					this.fireEvent("back")
				} , scope:this}	
			]}
		)
	} , 
	setPicture: function(media){
		if (!media) return;
		this.setHtml("<img src='"+media.get("url")+"'/>");
		//this.down("image").setSrc(media.get("url"));
	}
})