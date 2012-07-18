Ext.define('PenavicoMobile.controller.Task', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			home: 'home',

			tasks: "tasks" , 
			//btntaskback: "tasks button[action=back]"	 , 
			btntaskrefresh: "tasks button[action=refresh]" , 
			btntaskconfirm: "tasks button[action=confirm]" ,
			
			taskconfirm: "taskconfirm" , 
			btntaskconfirmback: "taskconfirm button[action=back]" ,
			btntaskconfirmsave: "taskconfirm button[action=save]"
			
		},
		control: {
			tasks: {
				selectionchange: function(st , rs){
					this.getBtntaskconfirm().setDisabled(rs.length == 0);
				} , 
				initialize: function(){
					//this.getTasks().getStore().load();
				}
			} , 

			btntaskrefresh: {
				tap: function(){
					this.getTasks().getStore().load();
				}
			} , 

			btntaskconfirm: {
				tap: function(){
					var view = Ext.create("PenavicoMobile.view.TaskConfirm" , {});
					Ext.Viewport.add(view);
					Ext.Viewport.setActiveItem(view)
				}
			} , 

			btntaskconfirmback: {
				tap: function(){
					Ext.Viewport.getLayout().setAnimation({type: 'slide', direction: 'right'});
					Ext.Viewport.setActiveItem(this.getTasks());
					Ext.Viewport.getLayout().setAnimation({type: 'slide', direction: 'left'});				
				}			
			} , 

			btntaskconfirmsave: {
				tap: function(){
					alert(this.getTaskconfirm().getValues())
				}			
			}
			/*
			sessions: {
				initialize: 'initSessions',
				itemtap: 'onSessionTap',
				activate: 'onSessionsActivate'
			},
			sessionDayPicker: {
				toggle: 'onSessionDateChange'
			},

			speakers: {
				itemtap: 'onSpeakerTap'
			}
			*/
		}
	}
});
