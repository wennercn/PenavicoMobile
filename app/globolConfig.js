Ext.define("PenavicoMobile.globolConfig" , {
	singleton: true , 
	wspath: Ext.os.is.Android ? "http://tbm.penavicotj.com/penavico/ws/mobile/" : "http://10.128.60.49/penavico/ws/mobile/" , 
	ServerDate: new Date() , 
	constructor: function(config) {
		var me = this;
		setInterval(function(){
			me.ServerDate = Ext.Date.add(me.ServerDate , Ext.Date.SECOND , 1);	
		} , 1000);
    }	
});