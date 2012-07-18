Ext.Loader.setPath({
    'PenavicoMobile': 'app' , 
	'PhoneGap' : 'app'
});

Ext.application({
    requires: [
		'PenavicoMobile.globolConfig' , 
		'PenavicoMobile.util.PhoneGap' , 
		'PenavicoMobile.util.ParseResponse' , 
		'PenavicoMobile.util.Functions'
	],

	//自定义内容开始
	userInfo: {} , 

	//自定义内容结束

    name: 'PenavicoMobile',
    glossOnIcon: false,
	//不同尺寸的图标
    icon: {
        57: 'resources/icons/icon.png',
        72: 'resources/icons/icon@72.png',
        114: 'resources/icons/icon@2x.png',
        144: 'resources/icons/icon@114.png'
    },
	
	//启动画面
    phoneStartupScreen: 'resources/images/splash.jpg',
    tabletStartupScreen: 'resources/images/splash.jpg',
	
	//models
	models:[	
		"Task" , 
		"Plan"
	] , 
	//stores
    stores: [
		"Tasks" , 
		"Plans"
	] , 
	//views
    views: [
		"Login" , 
		"Home" , 
		"Menus" , 
		"Tasks" , 
		"Plans" , 
		"workinfo.Progress" , 
		"workinfo.Event"
    ],

	//controllers
	controllers: [
		"Common" , 
		"Home" , 
		"Login" , 
		"Task" , 
		"Plan" , 
		"WorkInfo"
	] ,

    viewport: {
        //autoMaximize: true , 
		layout:{
			type:"card" , 
			animation: {
                type: 'slide',
                direction: 'left',
                duration: 250
            }
		} 
    },


	//启动
    launch: function() {
		
		//公共配置
		this.GC = this.globolConfig = PenavicoMobile.globolConfig;
		
		//是否已登录
		//TODO: 需要修改
		var st = window.localStorage;
		var user = st.getItem("user");
		var isLogin = !Ext.isEmpty(user);
		if (!isLogin){
            Ext.Viewport.add({ xtype: 'login' });
		}else{
			//获取已登录用户信息
			this.userInfo = Ext.decode(user);
            Ext.Viewport.add({ xtype: 'home' });
		}
	}

});
