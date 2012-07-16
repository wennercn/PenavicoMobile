/**
* 任务列表
*/
Ext.define('PenavicoMobile.model.Task', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			'shipname', 
			'star_name' , 
			'voyage' , 
			'etb' , 
			{name:'groupname' , convert:function(v , r){return r.get("shipname") +" "+ r.get("voyage") +"  ("+r.get("etb")+")"}}
		]
	}
});