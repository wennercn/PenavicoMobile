Ext.define('PenavicoMobile.controller.Login', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			home: "home" , 
			form: "login" ,
			btn_login : "button[itemId=login]"
		},
		control: {
			btn_login: {
				tap: "checkLogin"
			} , 
			form: {
				activate: function(){
					//var st = window.localStorage;
					//var user = st.setItem("user" , null);	
				}
			}
		}
	} , 

	checkLogin: function(){

		var GC = this.getApplication().GC;
		var wspath = GC.wspath;

		var form = this.getForm();
		var vs = form.getValues();
		if (!vs.u_name || !vs.u_pass){
			Ext.Msg.alert('错误', '请填写用户名及密码.');
			return;
		}

        form.setMasked({ xtype: 'loadmask'  , message:"登录验证..."});	
		
		Ext.Ajax.request({
			url: wspath+'admin.asmx/CheckLogin',
			params: vs , 
			success: this._checkLogin , 
			failure: function(data){
				alert("登录发生错误:"+data.responseText);
				this.getForm().setMasked(false);
			} , 
			scope: this		
		})

	} , 

	_checkLogin: function(result){
		var bd = $back(result);
		if (!bd.isok) {
			Ext.Msg.alert('错误', bd.getErrorInfo());
			this.getForm().setMasked(false);
			return;		
		}
		
		//设置用户信息
		var user = this.setInfo(bd.data);

		var st = window.localStorage;
		st.setItem("user" , Ext.encode(user));
		
		var home = this.getHome();
		if (!home) {
			home = Ext.Viewport.add({xtype:"home"});
		}
		Ext.Viewport.setActiveItem(home)

		this.getForm().setMasked(false);
	} ,

	setInfo: function(node){
		var user = {};
		user.Name = node.getAttribute("name");
		user.Code = node.getAttribute("code");
		user.Id = node.getAttribute("id");
		user.Loc = node.getAttribute("loc");

		var app = this.getApplication();
		app.userInfo = user;
		return user
	}
});
