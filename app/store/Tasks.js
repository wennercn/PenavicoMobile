﻿Ext.define('PenavicoMobile.store.Tasks', {
	extend: 'Ext.data.Store',
	//requires: 'Ext.DateExtras',
    config: {
        model: 'PenavicoMobile.model.Task',
		proxy: {
			type: 'ajax',
			url:PenavicoMobile.globolConfig.wspath+"person.asmx/GetTasks" , 
			reader: {
				type: 'xml',
				record: 'RowSet R'
			} ,
		},
		//autoLoad: true ,
		groupField: "groupname" ,
        sorters: [
			{property: 'star_name',direction: 'ASC'}
        ]
    }
});
