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
			groupField: "groupname" ,
			sorters: [
				{property: 'finish_time',direction: 'ASC'}
			]
    }
});
