Ext.define("PenavicoMobile.globolConfig" , {
	singleton: true , 
	wspath: Ext.os.is.Android ? "http://tbm.penavicotj.com/penavico/ws/mobile/" : "ws/mobile/"
});