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
			}
		}
	} , 

	checkLogin: function(){
		var form = this.getForm();
		var vs = form.getValues();
		if (!vs.u_name || !vs.u_pass){
			Ext.Msg.alert('错误', '请填写用户名及密码.');
			return;
		}

        //form.setMasked({ xtype: 'loadmask'  , message:"登录验证..."});	
		/*
		Ext.Ajax.request({
			//url:"http://tbm.penavicotj.com/penavico/ws/mobile" , 
			url:"http://192.168.0.159/penavico2/ws/admin.asmx/CheckLogin" , 
			callback: this._checkLogin , 
			scope: this		
		})
		*/

        Ext.data.JsonP.request({
            url: 'http://192.168.0.159/penavico2/ws/mobile/admin.asmx/CheckLogin',
            callbackKey: 'callback',
            params: vs , 
            success: this._checkLogin , 
			scope: this
        });

	} , 

	_checkLogin: function(result){

		if (!result.succ) {
			Ext.Msg.alert('错误', result.message);
			this.getForm().setMasked(false);
			return;		
		}

		var st = window.localStorage;
		var user = st.setItem("user" , this.getForm().getValues());

		var ss = Ext.Viewport.add({ xtype: 'home' });
		Ext.Viewport.setActiveItem(ss)

		this.getForm().setMasked(false);
	}
});
