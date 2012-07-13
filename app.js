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
	] , 
	//stores
    stores: [
	] , 
	//views
    views: [
		"Main"
    ],

	//controllers
	controllers: [
	] ,

    viewport: {
        autoMaximize: true
    },



	//启动
    launch: function() {
        Ext.Viewport.setMasked({ 
			xtype: 'loadmask'  , 
			message:"登录系统"
		});

		Ext.Function.createDelayed(function(){
            Ext.Viewport.add({ xtype: 'main' });
            Ext.Viewport.setMasked(false);
		} , 1000)();
	}

});
