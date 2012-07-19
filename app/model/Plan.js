/**
* 计划列表 model
*/
Ext.define("PenavicoMobile.model.Plan", {
	extend: "Ext.data.Model",
	config:{

		idProperty: "plan_id" ,
		fields: [
			/*计划基本信息*/
			{name:"plan_id" , mapping:"@plan_id"} ,					//计划ID
			{name:'loc_id' , mapping:'@loc_id'} ,							//机构ID
			{name:'plan_emp' , mapping:'@plan_emp'} ,				//计划员ID
			{name:'planempname' , mapping:'@planempname'} ,				//计划员名称
			{name:"duty_emp" , mapping:"@duty_emp"} ,			//业务员
			{name:"sn" , mapping:"@sn"} ,									//海关编号 (116021)
			{name:"memo" , mapping:"@memo"} ,						//计划备注
			{name:"ago_id" , mapping:"@ago_id"} ,						//上港ID
			{name:"ago_cname" , mapping:"@ago_cname"} ,			//上港中文名称
			{name:"ago_ename" , mapping:"@ago_ename"} ,			//上港英文名称
			{name:"next_id" , mapping:"@next_id"} ,						//下港ID
			{name:"next_cname" , mapping:"@next_cname"} ,		//上港中文名称
			{name:"next_ename" , mapping:"@next_ename"} ,		//上港英文名称
			{name:"ship_type" , mapping:"@ship_type"} ,				//船舶类型 (集装箱 , 杂货 , 滚装 ...)
			{name:"voyage_in" , mapping:"@voyage_in"} ,					//jinkou航次
			{name:"voyage_out" , mapping:"@voyage_out"} ,					//chukou航次
			{name:"voyage" , mapping:"@voyage" , convert:function(v , r){
				var vs = [];
				if (r.get("voyage_in")) vs.push(r.get("voyage_in"));
				if (r.get("voyage_out")) vs.push(r.get("voyage_out"));
				return vs.join("/");
			}} ,					//航次
			{name:"give_trust" , mapping:"@give_trust"} ,			//委托方ID
			{name:'give_name',mapping:'@give_name'},				//委托方名称
			{name:'isbl' , mapping:'@isbl'} ,								//是否是班轮 (班轮 , 非班轮)
			{name:'is_import' , mapping:'@is_import' , convert: function(v , r){return v === "" ?  0 : v;}} , //重点船 (0 , 1 , 2 , 3)
			{name:"task_port" , mapping:"@task_port"} ,				//来港任务 (-汽车 369.00  +无 0.00)
			{name:"dock_name" , mapping:"@dock_name"} ,			//所在泊位
			{name:"operatework" , mapping:"@operatework"} ,		//作业进度 
			{name:"pre_port" , mapping:"@pre_port"} ,				//预计作业公司

			//以下未用到
			{name:'dock_touch' , mapping:'@dock_touch'} ,
			{name:"avg_water" , mapping:"@avg_water"} ,			//平均吃水 (06.90/07.20)
			{name:"aim" , mapping:"@aim"} ,								//装卸类型 (装货 , 卸货 , 装卸货)

			/*状态相关*/
			{name:"cur_status" , mapping:"@cur_status"} ,			//船舶当前状态 (预报, 确保, 离港 , 在泊...)
			{name:"run_status" , mapping:"@run_status"} ,			//执行计划状态 (待确认 , 执行中)
			{name:"ss_status" , mapping:"@ss_status"} ,				//五日计划状态 (前期计划 , 五日计划 , 昼夜预编 , 昼夜计划)
			{name:"sort" , mapping:"@sort"} ,										//排序  (在泊 ， 锚地 ，确保，预报，离港 ， 改航 )

			{name:"create_count" , mapping:"@create_count" , type:"int"} ,	//五日计划工作项目创建数
			{name:"iscreated" , mapping:"@iscreated" , convert:function(v , r){return r.get("create_count") > 0}} ,	//五日计划创建状态  是否创建了五日计
			{name:"finish_count" , mapping:"@finish_count" , type:"int"} ,	//五日计划工作项目完成数
			{name:"isfinished" , mapping:"@isfinished" , convert:function(v , r){return r.get("finish_count") == r.get("create_count") && r.get("iscreated")}} ,	//五日计划完成状态


			/*计划相关的时间*/
			{name:"arrive_port" , mapping:"@arrive_port"} ,			//抵口时间
			{name:"leave_port" , mapping:"@leave_port"} ,			//离港时间
			{name:"enter_time" , mapping:"@enter_time"} ,			//进港时间
			{name:"work_time" , mapping:"@work_time"} ,			//抵口/开工时间
			{name:"eta" , mapping:"@eta"} ,								//预抵时间
			{name:"eta1" , mapping:"@eta1"} ,								//预抵时间
			{name:"etb" , mapping:"@etb"} ,								//预进时间
			{name:"etb1" , mapping:"@etb1"} ,							//预计靠泊时间
			{name:"atb" , mapping:"@atb"} ,								//实际靠泊时间
			{name:"atb_memo" , mapping:"@atb_memo"} ,			
			{name:"etd" , mapping:"@etd"} ,								//预离时间
			{name:"etd1" , mapping:"@etd1"} ,							//预离时间
			{name:"atd" , mapping:"@atd"} ,								//实际离港时间
			{name:"atd_memo" , mapping:"@atd_memo"} ,
			//以下时间未用到
			{name:"begin_date" , mapping:"@begin_date"} , 
			{name:"leave_time" , mapping:"@leave_time"} ,			//离港时间
			{name:"work_notime" , mapping:"@work_notime"} ,

			/*船舶信息*/
			{name:"ship_id" , mapping:"@ship_id"} ,					//船舶ID
			{name:"vbvbid" , mapping:"@vbvbid"} ,						//船舶编号
			{name:"ship_code" , mapping:"@ship_code"} ,			//船舶呼号
			{name:'cname' , mapping:'@cname'} ,						//中文名
			{name:'ename' , mapping:'@ename'} ,						//英文名
			{name:"shipname" , convert:function(v , r){				//英中文名称 (PACIFICEAGLE / 太平洋之鹰)
				var n = [];
				if (r.get("ename") != "") n.push(r.get("ename"));
				if (r.get("cname") != "") n.push(r.get("cname"));
				return n.join(" / ");
			}} ,
			{name:"state" , mapping:"@state"} ,							//国籍 (巴拿马)
			{name:"state_code" , mapping:"@state_code"} ,			//国籍代码 (PA)
			{name:"kind" , mapping:"@kind"} ,					
			{name:"length" , mapping:"@length" , type:"float"} ,	//船长
			{name:"width" , mapping:"@width" , type:"float"} ,		//船宽
			{name:"gross_width" , mapping:"@gross_width" , type:"float"} ,
			{name:"net_width" , mapping:"@net_width" , type:"float"} ,
			{name:"loadage" , mapping:"@loadage" , type:"float"} ,
			{name:"load_draught_head" , mapping:"@load_draught_head" , type:"float"} ,	//前吃水
			{name:"load_draught_tail" , mapping:"@load_draught_tail" , type:"float"} ,		//后吃水


		] 
	}
});
