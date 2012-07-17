Ext.define('PenavicoMobile.controller.Login', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			form: "login" ,
			btn_login : "button[itemId=login]"
		},
		control: {
			btn_login: {
				tap: "checkLogin"
			} , 
			form: {
				activate: function(){
					var st = window.localStorage;
					var user = st.setItem("isLogin" , "0");	
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

		var st = window.localStorage;
		var user = st.setItem("isLogin" , "1");

		var ss = Ext.Viewport.add({ xtype: 'home' });
		Ext.Viewport.setActiveItem(ss)

		this.getForm().setMasked(false);
	}
});
