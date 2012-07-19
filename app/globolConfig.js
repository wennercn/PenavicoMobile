Ext.define("PenavicoMobile.globolConfig" , {
	singleton: true , 
	wspath: Ext.os.is.Android ? "http://tbm.penavicotj.com/penavico/ws/mobile/" : "http://192.168.0.159/penavico2/ws/mobile/" , 
	ServerDate: new Date() , 
	constructor: function(config) {
		var me = this;
		setInterval(function(){
			me.ServerDate = Ext.Date.add(me.ServerDate , Ext.Date.SECOND , 1);	
		} , 1000);
    }	
});