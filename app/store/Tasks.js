Ext.define('PenavicoMobile.store.Tasks', {
	extend: 'Ext.data.Store',
	//requires: 'Ext.DateExtras',
    config: {
			model: 'PenavicoMobile.model.Task',
			proxy: {
				type: 'ajax',
				url:PenavicoMobile.globolConfig.wspath+"task.asmx/GetTasks" , 
				reader: {
					type: 'xml',
					record: 'dutylist R'
				} ,
			},
			//autoLoad: true ,
			//groupField: "groupname" ,
			//MOdel中不能用两层convert,所以在STORE中grouper获取船名+航次来分组
		        grouper: {
		            groupFn: function(record) {
		                return record.get('shipname')+" "+record.get("voyage");
		            },
		            sortProperty: 'shipname'
		        } , 			
			sorters: [
				{property: 'finish_time',direction: 'ASC'}
			]
    }
});
