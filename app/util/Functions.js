/**
* 通用函数
*/
Ext.define("PenavicoMobile.util.Functions" , {
	singleton: true , 

	/**
	 * JSON转化为XML
	 */
	json2xml: function(vs , nodename){
		if (!vs) return "";

		var singlenode = function(node , nodename){
			var tmp = [];
			for (var key in node){
				var n = node[key]
				var v = n || "";
				v = v.toString();
				v = v.replace(/\&/ig , "&apm;");
				v = v.replace(/\</ig , "&lt;");
				v = v.replace(/\>/ig , "&gt;");
				v = v.replace(/\"/ig , "&quot;");
				v = v.replace(/\'/ig , "&apos;");
				tmp.push(key +"=\""+v+"\"");
			}
			return"<R "+tmp.join(" ")+"></R>";
		}
		var arr = [];
		//如果是数组
		if (Ext.isArray(vs)){
			for (var i = 0 ; i<vs.length ; i++ ){
				var n = vs[i]
				arr.push(singlenode(n));
			}
		}else{
			arr.push(singlenode(vs , nodename));
		}
		arr = "<"+(nodename || "data")+">"+arr.join("")+"</"+(nodename || "data")+">"
		return arr;
	}
});

window.$json2xml = PenavicoMobile.util.Functions.json2xml;