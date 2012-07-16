Ext.define('PenavicoMobile.store.Tasks', {
	extend: 'Ext.data.Store',
	//requires: 'Ext.DateExtras',
    config: {
        model: 'PenavicoMobile.model.Task',
        grouper1: {
            sortProperty: 'time',
            groupFn: function(record) {
                return Ext.Date.format(record.get('time'), 'g:ia');
            }
        },
		groupField: "groupname" ,
        sorters: [
			{property: 'star_name',direction: 'ASC'}
        ] , 
		data: [
			{shipname:"马士基索菲亚" , star_name:"阅档工作" , voyage:"1011/1012" , etb:"06-12 1200"} , 
			{shipname:"马士基索菲亚" , star_name:"进港单据准备" , voyage:"1011/1012" , etb:"06-12 1200"} , 
			{shipname:"马士基索菲亚" , star_name:"进口联检手续办理" , voyage:"1011/1012" , etb:"06-12 1200"} , 
			{shipname:"马士基索菲亚" , star_name:"发送靠泊报" , voyage:"1011/1012" , etb:"06-12 1200"} , 
			{shipname:"马士基索菲亚" , star_name:"放艇申请" , voyage:"1011/1012" , etb:"06-12 1200"} , 
			{shipname:"马士基索菲亚" , star_name:"船长借支" , voyage:"1011/1012" , etb:"06-12 1200"}, 
			{shipname:"马士基索菲亚" , star_name:"船方信件" , voyage:"1011/1012" , etb:"06-12 1200"} , 

			{shipname:"悦城" , star_name:"阅档工作" , voyage:"1011/1012" , etb:"06-12 1200"} , 
			{shipname:"悦城" , star_name:"进港单据准备" , voyage:"1011/1012" , etb:"06-12 1200"} , 
			{shipname:"悦城" , star_name:"PSC检查申请" , voyage:"1011/1012" , etb:"06-12 1200"} , 
			{shipname:"悦城" , star_name:"刷油漆申请" , voyage:"1011/1012" , etb:"06-12 1200"}, 
			{shipname:"悦城" , star_name:"办理卫生证书申请" , voyage:"1011/1012" , etb:"06-12 1200"}, 
			{shipname:"悦城" , star_name:"船长借支" , voyage:"1011/1012" , etb:"06-12 1200"}, 
			{shipname:"悦城" , star_name:"船方信件" , voyage:"1011/1012" , etb:"06-12 1200"} , 

			{shipname:"恒茂" , star_name:"发送靠泊报" , voyage:"1011/1012" , etb:"06-12 1200"} , 
			{shipname:"恒茂" , star_name:"放艇申请" , voyage:"1011/1012" , etb:"06-12 1200"} , 
			{shipname:"恒茂" , star_name:"PSC检查申请" , voyage:"1011/1012" , etb:"06-12 1200"} , 
			{shipname:"恒茂" , star_name:"刷油漆申请" , voyage:"1011/1012" , etb:"06-12 1200"}, 
			{shipname:"恒茂" , star_name:"办理卫生证书申请" , voyage:"1011/1012" , etb:"06-12 1200"}, 
			{shipname:"恒茂" , star_name:"船长借支" , voyage:"1011/1012" , etb:"06-12 1200"}, 
			{shipname:"恒茂" , star_name:"船方信件" , voyage:"1011/1012" , etb:"06-12 1200"} , 

			{shipname:"内奇斯" , star_name:"阅档工作" , voyage:"1011/1012" , etb:"06-12 1200"} , 
			{shipname:"内奇斯" , star_name:"进港单据准备" , voyage:"1011/1012" , etb:"06-12 1200"} , 
			{shipname:"内奇斯" , star_name:"发送靠泊报" , voyage:"1011/1012" , etb:"06-12 1200"} , 
			{shipname:"内奇斯" , star_name:"放艇申请" , voyage:"1011/1012" , etb:"06-12 1200"} , 
			{shipname:"内奇斯" , star_name:"PSC检查申请" , voyage:"1011/1012" , etb:"06-12 1200"} , 
			{shipname:"内奇斯" , star_name:"刷油漆申请" , voyage:"1011/1012" , etb:"06-12 1200"}, 
			{shipname:"内奇斯" , star_name:"办理卫生证书申请" , voyage:"1011/1012" , etb:"06-12 1200"}, 
			{shipname:"内奇斯" , star_name:"船长借支" , voyage:"1011/1012" , etb:"06-12 1200"}, 
			{shipname:"内奇斯" , star_name:"船方信件" , voyage:"1011/1012" , etb:"06-12 1200"} , 

			{shipname:"贵族" , star_name:"阅档工作" , voyage:"1011/1012" , etb:"06-12 1200"} , 
			{shipname:"贵族" , star_name:"进港单据准备" , voyage:"1011/1012" , etb:"06-12 1200"} , 
			{shipname:"贵族" , star_name:"进口联检手续办理" , voyage:"1011/1012" , etb:"06-12 1200"} , 
			{shipname:"贵族" , star_name:"发送靠泊报" , voyage:"1011/1012" , etb:"06-12 1200"} , 
			{shipname:"贵族" , star_name:"放艇申请" , voyage:"1011/1012" , etb:"06-12 1200"} , 
			{shipname:"贵族" , star_name:"PSC检查申请" , voyage:"1011/1012" , etb:"06-12 1200"} , 
			{shipname:"贵族" , star_name:"刷油漆申请" , voyage:"1011/1012" , etb:"06-12 1200"}, 
			{shipname:"贵族" , star_name:"办理卫生证书申请" , voyage:"1011/1012" , etb:"06-12 1200"}, 
			{shipname:"贵族" , star_name:"船长借支" , voyage:"1011/1012" , etb:"06-12 1200"}, 
			{shipname:"贵族" , star_name:"船方信件" , voyage:"1011/1012" , etb:"06-12 1200"} , 

			{shipname:"富康山" , star_name:"阅档工作" , voyage:"1011/1012" , etb:"06-12 1200"} , 
			{shipname:"富康山" , star_name:"进港单据准备" , voyage:"1011/1012" , etb:"06-12 1200"} , 
			{shipname:"富康山" , star_name:"刷油漆申请" , voyage:"1011/1012" , etb:"06-12 1200"}, 
			{shipname:"富康山" , star_name:"办理卫生证书申请" , voyage:"1011/1012" , etb:"06-12 1200"}, 
			{shipname:"富康山" , star_name:"船长借支" , voyage:"1011/1012" , etb:"06-12 1200"}, 
			{shipname:"富康山" , star_name:"船方信件" , voyage:"1011/1012" , etb:"06-12 1200"} , 
				
			{shipname:"利克麦上海" , star_name:"阅档工作" , voyage:"1011/1012" , etb:"06-12 1200"} , 
			{shipname:"利克麦上海" , star_name:"PSC检查申请" , voyage:"1011/1012" , etb:"06-12 1200"} , 
			{shipname:"利克麦上海" , star_name:"船长借支" , voyage:"1011/1012" , etb:"06-12 1200"}, 
			{shipname:"利克麦上海" , star_name:"船方信件" , voyage:"1011/1012" , etb:"06-12 1200"}
		]	
    }
});
