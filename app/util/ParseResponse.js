Ext.define("PenavicoMobile.util.ParseResponse" , {
	singleton: true , 
	getErrorInfo: function(){
		return this.errinfo;
	} , 
	getMsg: function(){
		return this.msg;
	} , 
	/*
	 *
	 */
	parse: function(obj , type){
		this.isok = false;

		this._data = obj;

		if (obj.responseText && Ext.isEmpty(obj.responseText)){
			this.errinfo = "未返回任何数据,请检查程序!"
			return this;
		}

		if (type== "json"){
			try{
				eval("var bd = "+obj.responseText);
			}catch(e){
				this.errinfo = "返回的数据为无效的JSON格式,请检查数据!\n\n"+obj.responseText;
				return this;
			}

			this.jdata = {}
			Ext.apply(this.jdata , bd)
			if ($chk(jdata.code)){
				switch (jdata.code){
				//	case : ""

				}
			}

			if (!this.jdata.succ){
				this.errinfo = this.jdata.msg;
				return this;
			}

			this.isok = true;
			this.msg = this.jdata.msg;
			if (this.jdata.data){
				this.data = this.jdata.data;
			}
		}else{
			var bd = obj.responseXML ? obj.responseXML : obj;
			var root = Ext.DomQuery.selectNode("root" , bd); // bd.getElementsByTagName("root")[0]

			if (!root){
				this.errinfo =  "返回的数据为无效的XML格式,请检查数据!\n\n"+obj.responseText;
				return this;
			}
			this.xdata = bd;
			var status = root.getAttribute("status")
			if (status !="succ"){
				this.errinfo = root.getAttribute("message");
				return this
			}
			this.isok = true;
			
			this.serverdate = Ext.Date.parse(root.getAttribute("serverdate") , "Y-m-d H:i:s");
			if (PenavicoMobile.globolConfig != undefined) {
				PenavicoMobile.globolConfig.ServerDate = this.serverdate;
			}
			
			this.msg = root.getAttribute("message")
			this.data =Ext.DomQuery.selectNode("data" , bd);
		}
		return this;


	}

})

window.$back = function(obj , type){
	return PenavicoMobile.util.ParseResponse.parse(obj , type)
};