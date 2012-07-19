/**
* 任务列表
*/
Ext.define('PenavicoMobile.model.Task', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{name:"pss_id" , mapping:"@pss_id" , type:"int"} ,			//主键
			{name:"plan_id" , mapping:"@plan_id" , type:"int"} , 
			{name:"start_id" , mapping:"@start_id" , type:"int"} ,		//对应STAR服务标准ID
			{name:"pst_id" , mapping:"@pst_id" , type:"int"} ,			//对应分计划的ID

			/*五日计划信息*/
			{name:'cname' , mapping:'@cname'} ,						//中文名
			{name:'ename' , mapping:'@ename'} ,						//英文名
			{name:"voyage_in" , mapping:"@voyage_in"} ,					//jinkou航次
			{name:"voyage_out" , mapping:"@voyage_out"} ,					//chukou航次
			{name:"voyage" , mapping:"@voyage" , convert:function(v , r){
				var vs = [];
				if (r.get("voyage_in")) vs.push(r.get("voyage_in"));
				if (r.get("voyage_out")) vs.push(r.get("voyage_out"));
				return vs.join("/");
			}} ,					//航次
			{name:"shipname" , convert:function(v , r){				//英中文名称 (PACIFICEAGLE / 太平洋之鹰)
				var n = [];
				if (r.get("ename") != "") n.push(r.get("ename"));
				if (r.get("cname") != "") n.push(r.get("cname"));
				alert(n)
				return n.join(" / ");
			}} ,
			{name:'shipnameandvoyage' , mapping:'@shipname' , convert:function(v , r){
				return r.get("shipname") +"("+r.get("voyage")+")";
			}} ,						//英文名



			/*状态信息*/
			{name:"plan_status" , mapping:"@plan_status"} ,			//计划状态
			{name:"status" , mapping:"@status"} ,							//状态
			{name:"ismod" , mapping:"@ismod" , type:"int" , convert:function(v , r){
				var status = r.get("plan_status");
				if ( (status == "新任务" || status == "执行中" || status == "") && v == 1) {
					return 1;
				}
				return 0;
			}} ,
			{name:"modcount" , mapping:"@modcount" ,type:"int"} ,
			{name:"issub" , mapping:"@issub" , type:"int"} ,

			/*综合计划员信息*/
			{name:"line_id" , mapping:"@line_id" , type:"int"} , 
			{name:"line_name" , mapping:"@line_name"} , 
			{name:"line_status" , mapping:"@line_status"} , 
			{name:"line_time" , mapping:"@line_time"} , 
			/*部门领导信息*/
			{name:"leader_id" , mapping:"@leader_id" , type:"int"} , 
			{name:"leader_name" , mapping:"@leader_name"} , 
			{name:"leader_status" , mapping:"@leader_status"} , 
			{name:"leader_time" , mapping:"@leader_time"} , 
			/*负责人信息*/
			{name:"duty_id" , mapping:"@duty_id" , type:"int"} , 
			{name:"duty_name" , mapping:"@duty_name"} , 
			{name:"duty_status" , mapping:"@duty_status"} ,
			{name:"duty_time" , mapping:"@duty_time"} , 
			/*创建人信息*/
			{name:"emp_id" , mapping:"@emp_id" , type:"int"} , 
			{name:"create_name" , mapping:"@create_name"} , 
			{name:"create_time" , mapping:"@create_time"} ,			
			/*相关时间*/
			{name:"plan_time" , mapping:"@plan_time"} ,		//计划开始时间
			{name:"finish_time" , mapping:"@finish_time"} ,		//计划完成时间
			{name:"finish_date" , mapping:"@finish_time"} ,		//计划完成时间
			{name:"act_time" , mapping:"@act_time"} ,			//实际完成时间
			/*从服务标准带的ETA ,ETB, ETD*/
			{name:"eta" , mapping:"@eta" , type:"int"} , 
			{name:"etb" , mapping:"@etb" , type:"int"} , 
			{name:"etd" , mapping:"@etd" , type:"int"} , 
			/*其他相关信息*/
			{name:"start_name" , mapping:"@start_name"} ,		//服务标准名称
			{name:"proc_name" , mapping:"@proc_name"} ,		//计划名称
			{name:"pitem" , mapping:"@pitem"} ,
			{name:"handy" , mapping:"@handy"} ,
			{name:"standard" , mapping:"@standard"} ,
			{name:"proper" , mapping:"@proper"} ,
			{name:"memo" , mapping:"@memo"} ,					//备注
			{name:"px" , mapping:"@px" , type:"int"} ,								//分计划排序
			{name:'groupname' , convert:function(v , r){
				return r.get("shipname") +" "+ r.get("voyage");
			}}
		]
	}
});