Ext.Loader.setPath({
    'PenavicoMobile': 'app'
});
Ext.application({
    //requires: ['Oreilly.util.Proxy'],
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
		"Task"
	] , 
	//stores
    stores: [
		"Tasks"
	] , 
	//views
    views: [
		"Home" , 
		"Menus" , 
		"Tasks" , 
		"Login"
    ],

	//controllers
	controllers: [
		"Home" , 
		"Login" , 
		"Task"
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
		var st = window.localStorage;
		var isLogin = st.getItem("isLogin");
		if (isLogin != "1"){
            Ext.Viewport.add({ xtype: 'login' });
		}else{
            Ext.Viewport.add({ xtype: 'home' });
		}

		/*
        Ext.Viewport.setMasked({ 
			xtype: 'loadmask'  , 
			message:"登录系统"
		});

		Ext.Function.createDelayed(function(){
            Ext.Viewport.add({ xtype: 'main' });
            Ext.Viewport.setMasked(false);
		} , 1000)();
		*/
	}

});
