Ext.define('PenavicoMobile.view.PhoneGap', {
	extend: 'Ext.Container',
	xtype: 'test',
	config: {	
		title:"fsadfasd" , 
		layout:"vbox" , 
		padding:5 , 
		defaults:{
			xtype:"button" , 
			margin:"0 0 5 0"
		} , 
		items:[
			{text:"跨域调用XML" , handler:function(){
				Ext.Ajax.request({
					url:"http://tbm.penavicotj.com/penavico/ws/admin.asmx/CheckSession" , 
					success: function(response, opts) {
						alert("succ:"+response.responseText)
					},
					failure: function(response, opts) {
						alert("failure:"+response.responseText)
					}
				})
			}} , 
			{text:"事件: BACK键" , handler:function(){
				document.addEventListener("backbutton", function(){
					alert("back");
				}, false);
			}} , 
			{text:"事件: MENU键" , handler:function(){
				document.addEventListener("menubutton", function(){
					alert("menu");
				}, false);
			}} , 
			{text:"事件: SEARCH键" , handler:function(){
				document.addEventListener("searchbutton", function(){
					alert("search");
				}, false); //搜索键				
			}} , 

			{text:"事件: PAUSE" , handler:function(){
				document.addEventListener("pause", function(){
					alert("pause");
				}, false); //搜索键				
			}} , 

			{text:"NOTIFICATION" , handler:function(){
				navigator.notification.alert(
					'You are the winner!',  // 显示信息
					function(){
						alert(111)
					},         // 警告被忽视的回调函数
					'Game Over',            // 标题
					'Done'                  // 按钮名称
				);			
			}} , 

			{text:"CONFIRM" , handler:function(){
				navigator.notification.confirm(
					'You are the winner!',  // 显示信息
					function(btn){
						alert(btn)
					},              // 按下按钮后触发的回调函数，返回按下按钮的索引
					'Game Over',            // 标题
					'Restart,Exit'          // 按钮标签
				);	
			}} , 

			{text:"beep" , handler:function(){
				navigator.notification.beep(3);
			}} , 

			{text:"vibrate" , handler:function(){
				navigator.notification.vibrate(2500);
			}} , 

			{text:"调用相机" , handler:function(){
				navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
					destinationType: Camera.DestinationType.DATA_URL
				 }); 

				function onSuccess(imageData) {
					var image = document.getElementById('myImage');
					image.src = "data:image/jpeg;base64," + imageData;
				}

				function onFail(message) {
					alert('Failed because: ' + message);
				}
			}}
		]
	}
});