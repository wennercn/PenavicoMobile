Ext.define("PenavicoMobile.util.PhoneGap" , {
	singleton: true , 
	/**
	 * 弹出警告对话框
	 */
	alert: function(msg , callback , title , btn){
		navigator.notification.alert(
			msg , callback , title , btn
		);	
	}
	
})

window.$PG = PenavicoMobile.util.PhoneGap;