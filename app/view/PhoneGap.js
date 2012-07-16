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
					url:"http://tbm.penavicotj.com/penavico/ws/admin.asmx/checkSession" , 
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