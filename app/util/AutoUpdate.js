/**
 * 自动更新
 */
Ext.define("PenavicoMobile.util.AutoUpdate" , {
	singleton: true , 
	constructor: function() {
		this.GC = PenavicoMobile.globolConfig;
		this.wspath = this.GC.wspath;

		this.checkUpdate();
    } , 
	//检测
	checkUpdate: function(){
		Ext.Ajax.request({
			url: this.GC.wspath + "version.asmx/GetVersion" , 
			params : {version: this.GC.version} , 
			success: function(data){
				var bd = $back(data);
				if (!bd.isok) {
					navigator.notification.alert(bd.getErrorInfo() , null , "错误");
					return;
				}
				var version = bd.msg;
				this._checkUpdate(version);
			} , 
			failure:  function(data){
				alert("错误:"+data.responseText);
			} , 
			scope: this		
		})	
	} , 
	_checkUpdate: function(version){
		if (version > this.GC.version){
			navigator.notification.confirm("检测发现新的版本 , 是否要更新?", function(ix){
				if (ix == "1"){
					this.download(version);
				}
			}, "更新提示", "确认更新,取消")
		}
	} , 
	download: function(){

		var fileTransfer = new FileTransfer();
		var uri = encodeURI(this.GC.wspath+"upload/penavicotj"+version+".apk");

		fileTransfer.download(
			uri,
			filePath,
			function(entry) {
				alert("下载完成: " + entry.fullPath);
			},
			function(error) {
				alert("下载错误:"+error.source+" - "+error.target +" - "+error.code);
			}
		);
	
	}
	
});