Ext.define('PenavicoMobile.store.Plans', {
	extend: 'Ext.data.Store',
	//requires: 'Ext.DateExtras',
    config: {
			model: 'PenavicoMobile.model.Plan',
			proxy: {
				type: 'ajax',
				url:PenavicoMobile.globolConfig.wspath+"plans.xml" , //plan.asmx/GetMyPlans" , 
				reader: {
					type: 'xml',
					record: 'RowSet R'
				} ,
			},
			//autoLoad: true ,
			groupField: "groupname" ,
			sorters: [
				{property: 'etb',direction: 'ASC'}
			]
	}
});
