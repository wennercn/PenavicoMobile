//突发事件
Ext.define("PenavicoMobile.view.plan.Event" ,{
	extend:"Ext.form.Panel" , 
	xtype:"planEvent" ,
	config: {
		layout: 'vbox',
		items: [
				{xtype:"titlebar" , docked:"top" , title:"突发事件" , items:[
					{ui:'back', text: '返回' , align:"left" , action:"back2planlist"}
				]} , 
				{xtype: 'fieldset', title:"事件信息" , defaults:{ style:"font-size:16px" , height:80} , 
					items: [
					{xtype: 'textareafield',label: '情况描述',name: '情况描述'},
					{xtype: 'textareafield',label: '处理结果',name: '处理结果' },
					{xtype: 'textareafield',label: '备注',name: '备注'}					
				]},
				{xtype: 'container', margin:"10 0" , title:"多媒体附件 <span style='color:#ccc;font-size:14px'>点击按钮添加附件</span>", items: [
					{xtype:"container" , layout:"hbox" , items:[
						{xtype:"panel" , html:"多媒体附件" , cls:"x-form-fieldset-title" , flex:1} , 
						{xtype: 'toolbar', itemId:"mediabar" , layout:{type:"hbox" , align:"middle"} , style:{"border":0 , "background":"none"} , defaults:{xtype:"button" , margin:"0 10 0 0" , ui:"gray" , flex:1} , items:[
							{xtype:"button" , text:"录音" , action:"audio"} , 
							{xtype:"button" , text:"视频" , action:"video"} , 
							{xtype:"button" , text:"照片" , margin:0  , action:"picture"}
						]}
					]} , 
					Ext.create('Ext.List', {
						scrollable:false , 	
						ui:"round" ,
						cls:"mediacontainer" , 
						//style:"border: 1px solid #DDD;background: white;padding: 0;-webkit-border-radius: 0.4em;border-radius: 0.4em;overflow: hidden;" , 
						store: {
							fields: ['name', 'age'],
							data: [
								{name: 'Jamie',  age: 100},
								{name: 'Rob',   age: 21},
								{name: 'Tommy', age: 24},
								{name: 'Jacky', age: 24},
								{name: 'Ed',   age: 26}
							]
						},
						itemTpl: '<div>{name} is {age} years old</div>'
					})
				]},
				{xtype: 'button', text: '保存信息' , action:"save" , ui: 'confirm'}
		] ,
	} , 
	setPlan: function(plan){
		this.plan = plan;
		this.down("titlebar").setTitle(plan.get("shipname")+" 突发事件");
	}
});