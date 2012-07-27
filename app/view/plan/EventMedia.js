Ext.define('PenavicoMobile.view.plan.EventMedia', {
	extend: 'Ext.Container',
	xtype: 'planEventMedia',
	config: {	
		layout:"fit" , 
		items: [
			{xtype: 'toolbar', docked:"top" , itemId:"mediabar" , layout:{type:"hbox" , align:"middle"} , style:{"border":0 , "background":"none"} , defaults:{xtype:"button" , margin:"0 10 0 0" , ui:"gray" , flex:1} , items:[
				{xtype:"button" , text:"录音" , action:"audio"} , 
				{xtype:"button" , text:"视频" , action:"video"} , 
				{xtype:"button" , text:"照片" , margin:0  , action:"picture"}
			]} , 

			Ext.create('Ext.DataView', {
				inline: true , 
				pressedCls: "media_pressed" , 
				selectedCls:"media_selected" , 
				//ui:"round" ,
				cls:"mediacontainer" , 
				//style:"border: 1px solid #DDD;background-color:white;padding: 0;-webkit-border-radius: 0.4em;border-radius: 0.4em;overflow: hidden;" , 
				store: {
					fields: ['type', 'url' , 'create_time'],
					data: [
						{type: 'audio',  url:"http://10.128.60.49/penavico/ws/mobile/temp/%E8%AF%AD%E9%9F%B30001.amr" , create_time:"2012-11-12"} , 
						{type: 'video',  url:"http://10.128.60.49/penavico/ws/mobile/temp/BigBuck.m4v" , create_time:"2012-11-12"} , 
						{type: 'picture',  url:"http://10.128.60.49/docs/st/examples/carousel/resources/photos/Food/1.jpg" , create_time:"2012-11-12"}
					]
				},
				itemTpl:new Ext.XTemplate(
					'<tpl for=".">',
					'<div class="mediaitemwrap"> ',
						'<tpl switch="type">',
							'<tpl case="audio">',
								'<div class="mediaitem {type}"></div>' , 
							'<tpl case="video">',
								'<div class="mediaitem {type}"></div>' , 
							'<tpl default>',
								'<div class="mediaitem {type}" style="background-image:url({url})"></div>' , 
						'</tpl>',
					'</div>' , 
					'</tpl>'
				)
				//itemTpl: '<div class="mediaitemwrap"><div class="mediaitem {type}" style="background-image:url({url})"></div></div>'
			})
		]
	} , 
	setPlan: function(plan){
		this.plan = plan;
		//this.down("titlebar").setTitle(plan.get("shipname")+" 突发事件");
	}
});