Ext.application({
    name: 'Sencha',
	phoneStartupScreen:"images/a.png" , 
    launch: function() {
		
		//首页
		this.home =	 Ext.create("Ext.Panel" , {
			 title: '首页',
			 iconCls: 'home',
			 cls: 'home',
			 html: [
				 '<img height=260 src="resources/images/logo.png" />',
				 '<h1>欢迎您进入<br><br>天津外代业务滚动互动平台</h1><br />',
				 "<p></p>",
				 '<h2>当前版本: 2.0.1</h2>'
			 ].join("")
		 });
	
		this.home = Ext.create('Ext.DataView', {
			title:"首页" , 
			fullscreen: true,
			iconCls: 'home',
			cls: 'home',
			padding:"18 0 0 18" , 
			store: {
				fields: ['name', 'age'],
				data: [
					{name: '我的任务',  age: 100},
					{name: '船舶查看',   age: 21},
					{name: 'Tommy', age: 24},
					{name: 'Jacky', age: 24},
					{name: 'Ed',   age: 26}
				]
			},
			itemTpl: '<div style="float:left;width:96px;height:100px;background:#0265dc;margin:0 18px 18px 0">{name} <br> {age}</div>' , 
			listeners: {
				itemtap: function(){
					
				} , 
				scope:this
			}
		});



		//任务列表
		Ext.define('Contact', {
			extend: 'Ext.data.Model',
			config: {
				fields: [
					'shipname', 
					'star_name' , 
					'voyage' , 
					'etb' , 
					{name:'groupname' , convert:function(v , r){return r.get("shipname") +" "+ r.get("voyage") +"  ("+r.get("etb")+")"}}
				]
			}
		});

		var store = Ext.create('Ext.data.Store', {
		   model: 'Contact',
		   sorters: 'star_name',
		   groupField: "groupname" ,
		   data: [
				{shipname:"马士基索菲亚" , star_name:"阅档工作" , voyage:"1011/1012" , etb:"06-12 1200"} , 
				{shipname:"马士基索菲亚" , star_name:"进港单据准备" , voyage:"1011/1012" , etb:"06-12 1200"} , 
				{shipname:"马士基索菲亚" , star_name:"进口联检手续办理" , voyage:"1011/1012" , etb:"06-12 1200"} , 
				{shipname:"马士基索菲亚" , star_name:"发送靠泊报" , voyage:"1011/1012" , etb:"06-12 1200"} , 
				{shipname:"马士基索菲亚" , star_name:"放艇申请" , voyage:"1011/1012" , etb:"06-12 1200"} , 
				{shipname:"马士基索菲亚" , star_name:"船长借支" , voyage:"1011/1012" , etb:"06-12 1200"}, 
				{shipname:"马士基索菲亚" , star_name:"船方信件" , voyage:"1011/1012" , etb:"06-12 1200"} , 

				{shipname:"悦城" , star_name:"阅档工作" , voyage:"1011/1012" , etb:"06-12 1200"} , 
				{shipname:"悦城" , star_name:"进港单据准备" , voyage:"1011/1012" , etb:"06-12 1200"} , 
				{shipname:"悦城" , star_name:"PSC检查申请" , voyage:"1011/1012" , etb:"06-12 1200"} , 
				{shipname:"悦城" , star_name:"刷油漆申请" , voyage:"1011/1012" , etb:"06-12 1200"}, 
				{shipname:"悦城" , star_name:"办理卫生证书申请" , voyage:"1011/1012" , etb:"06-12 1200"}, 
				{shipname:"悦城" , star_name:"船长借支" , voyage:"1011/1012" , etb:"06-12 1200"}, 
				{shipname:"悦城" , star_name:"船方信件" , voyage:"1011/1012" , etb:"06-12 1200"} , 

				{shipname:"恒茂" , star_name:"发送靠泊报" , voyage:"1011/1012" , etb:"06-12 1200"} , 
				{shipname:"恒茂" , star_name:"放艇申请" , voyage:"1011/1012" , etb:"06-12 1200"} , 
				{shipname:"恒茂" , star_name:"PSC检查申请" , voyage:"1011/1012" , etb:"06-12 1200"} , 
				{shipname:"恒茂" , star_name:"刷油漆申请" , voyage:"1011/1012" , etb:"06-12 1200"}, 
				{shipname:"恒茂" , star_name:"办理卫生证书申请" , voyage:"1011/1012" , etb:"06-12 1200"}, 
				{shipname:"恒茂" , star_name:"船长借支" , voyage:"1011/1012" , etb:"06-12 1200"}, 
				{shipname:"恒茂" , star_name:"船方信件" , voyage:"1011/1012" , etb:"06-12 1200"} , 

				{shipname:"内奇斯" , star_name:"阅档工作" , voyage:"1011/1012" , etb:"06-12 1200"} , 
				{shipname:"内奇斯" , star_name:"进港单据准备" , voyage:"1011/1012" , etb:"06-12 1200"} , 
				{shipname:"内奇斯" , star_name:"发送靠泊报" , voyage:"1011/1012" , etb:"06-12 1200"} , 
				{shipname:"内奇斯" , star_name:"放艇申请" , voyage:"1011/1012" , etb:"06-12 1200"} , 
				{shipname:"内奇斯" , star_name:"PSC检查申请" , voyage:"1011/1012" , etb:"06-12 1200"} , 
				{shipname:"内奇斯" , star_name:"刷油漆申请" , voyage:"1011/1012" , etb:"06-12 1200"}, 
				{shipname:"内奇斯" , star_name:"办理卫生证书申请" , voyage:"1011/1012" , etb:"06-12 1200"}, 
				{shipname:"内奇斯" , star_name:"船长借支" , voyage:"1011/1012" , etb:"06-12 1200"}, 
				{shipname:"内奇斯" , star_name:"船方信件" , voyage:"1011/1012" , etb:"06-12 1200"} , 

				{shipname:"贵族" , star_name:"阅档工作" , voyage:"1011/1012" , etb:"06-12 1200"} , 
				{shipname:"贵族" , star_name:"进港单据准备" , voyage:"1011/1012" , etb:"06-12 1200"} , 
				{shipname:"贵族" , star_name:"进口联检手续办理" , voyage:"1011/1012" , etb:"06-12 1200"} , 
				{shipname:"贵族" , star_name:"发送靠泊报" , voyage:"1011/1012" , etb:"06-12 1200"} , 
				{shipname:"贵族" , star_name:"放艇申请" , voyage:"1011/1012" , etb:"06-12 1200"} , 
				{shipname:"贵族" , star_name:"PSC检查申请" , voyage:"1011/1012" , etb:"06-12 1200"} , 
				{shipname:"贵族" , star_name:"刷油漆申请" , voyage:"1011/1012" , etb:"06-12 1200"}, 
				{shipname:"贵族" , star_name:"办理卫生证书申请" , voyage:"1011/1012" , etb:"06-12 1200"}, 
				{shipname:"贵族" , star_name:"船长借支" , voyage:"1011/1012" , etb:"06-12 1200"}, 
				{shipname:"贵族" , star_name:"船方信件" , voyage:"1011/1012" , etb:"06-12 1200"} , 

				{shipname:"富康山" , star_name:"阅档工作" , voyage:"1011/1012" , etb:"06-12 1200"} , 
				{shipname:"富康山" , star_name:"进港单据准备" , voyage:"1011/1012" , etb:"06-12 1200"} , 
				{shipname:"富康山" , star_name:"刷油漆申请" , voyage:"1011/1012" , etb:"06-12 1200"}, 
				{shipname:"富康山" , star_name:"办理卫生证书申请" , voyage:"1011/1012" , etb:"06-12 1200"}, 
				{shipname:"富康山" , star_name:"船长借支" , voyage:"1011/1012" , etb:"06-12 1200"}, 
				{shipname:"富康山" , star_name:"船方信件" , voyage:"1011/1012" , etb:"06-12 1200"} , 
					
				{shipname:"利克麦上海" , star_name:"阅档工作" , voyage:"1011/1012" , etb:"06-12 1200"} , 
				{shipname:"利克麦上海" , star_name:"PSC检查申请" , voyage:"1011/1012" , etb:"06-12 1200"} , 
				{shipname:"利克麦上海" , star_name:"船长借支" , voyage:"1011/1012" , etb:"06-12 1200"}, 
				{shipname:"利克麦上海" , star_name:"船方信件" , voyage:"1011/1012" , etb:"06-12 1200"}
		   ]
		});

		this.tasks = Ext.create('Ext.List', {
			badgeText:"5" , 
			title: '任务',
			iconCls: 'star',
			cls: 'blog',
            itemTpl: '<div class="contact2">{star_name}</div>',
            disclosure: true,
            grouped: true,
            //indexBar: true,
            onItemDisclosure: function(record, item, index, e) {
                e.stopEvent();
                Ext.Msg.confirm('确认信息', '要确认完成' + record.get('star_name')+" 么?");
            },
            store: store
		});

	
		//登录
		this.form = Ext.create("Ext.form.Panel" ,{
			title: '登录',
			iconCls: 'user',
			layout: 'vbox',
			items: [
				{
					xtype: 'fieldset',
					title: '系统登录',
					instructions: '请输入用户名密码!',
					items: [
						{xtype: 'textfield',label: '用户名',name: 'name'},
						{xtype: 'passwordfield',label: '密码',name: 'email'}					]
				},
				{xtype: 'button',text: '登录',ui: 'confirm',handler: function() {
					var form = this.up('formpanel');
				}}
			]
		});

		//五日计划
		this.plans = Ext.create("Ext.Panel" , {
			title:"五日计划" , 
			iconCls:"bookmarks" , 
			cls:"card" , 
			html: "这里是五日计划列表"
		})

		//个人设置
		this.setting = Ext.create("Ext.List" , {
			title:"设置" , 
			ui:"round" , 
			pinHeaders: false , 
			iconCls:"settings" , 
            grouped: true,
			itemTpl: '{title}',
			store: Ext.create('Ext.data.Store', {
				fields: ['title', 'group'],
				groupField:"group" , 
				data: [
					{ title: '修改密码'  , group:"个人设置"} ,
					{ title: '个人偏好设置'  , group:"个人设置"} ,

					{ title: '提醒设置'  , group:"系统设置"} ,
					{ title: '短信/邮件设置'  , group:"系统设置"} ,
					{ title: '手持机密码设置'  , group:"系统设置"} ,

					{ title: '查看帮助'  , group:"关于系统"} ,
					{ title: '关于'  , group:"关于系统"} ,
					{ title: '检查系统更新'  , group:"关于系统"} , 
				]		
			}) , 
			listeners:{
				select: function(l , record){
					Ext.Msg.alert("提示" , record.get("title"));
				}	
			}
		})

		//更多信息
		this.more = Ext.create("Ext.Panel" , {
			title:"更多" , 
			iconCls:"more" , 
			cls:"card" , 
			html: "更多信息"
		})
		
		/*
		Ext.create("Ext.tab.Panel" , {
            fullscreen: true,
            tabBarPosition: 'bottom',
			items: [
				this.home , 
				this.tasks , 
				this.form , 
				this.plans , 
				this.setting , 
				this.more
			]
		})
		*/


    }
});
