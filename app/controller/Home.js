﻿Ext.define('PenavicoMobile.controller.Home', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			home: 'home' , 
			menu: "home menus" , 
			tbar: "home titlebar"
		},
		control: {
			home: {
				initialize: "setTitle" , 
				activate: "setTitle"
			} , 
			menu: {
				itemtap: "onMenuTap"
			} , 

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
	},
	
	/*
	initSessions: function() {
		var firstButton = this.getSessionDayPicker().getItems().items[0];
		this.getSessionDayPicker().setPressedButtons(firstButton);
		this.filterByButton(firstButton);
	},

	onSessionDateChange: function(seg, btn) {
		this.filterByButton(btn);
	},

	filterByButton: function(btn) {
		if (this.getSessionSpeakers()) {
			this.getSessionSpeakers().deselectAll();
		}
		Ext.getStore('Sessions').clearFilter(true);
		Ext.getStore('Sessions').filter(function(record) {
			return record.get('time').getDate() == btn.config.day;
		});
	},

	onSessionTap: function(list, idx, el, record) {

		var speakerStore = Ext.getStore('SessionSpeakers'),
			speakerIds = record.get('speakerIds');

		speakerStore.clearFilter();
		speakerStore.filterBy(function(speaker) {
			return Ext.Array.contains(speakerIds, speaker.get('id'));
		});

		if (!this.session) {
			this.session = Ext.widget('session');
		}

		this.session.setTitle(record.get('title'));
		this.getSessionContainer().push(this.session);
		this.getSessionInfo().setRecord(record);
	},

	onSpeakerTap: function(list, idx, el, record) {

		if (!this.speakerInfo) {
			this.speakerInfo = Ext.widget('speakerInfo', {
				scrollable: 'vertical'
			});
		}

		this.speakerInfo.config.title = record.getFullName();
		this.speakerInfo.setRecord(record);
		this.getSessionContainer().push(this.speakerInfo);
	},

	onSessionsActivate: function() {
		if (this.session) {
			this.session.down('speakers').deselectAll();
		}
	} , 
	*/

	onMenuTap: function(list , idx , el , record){
		var cls = "PenavicoMobile.view."+record.get("view");
		var itemId= cls.split(".").join("_");
		var view = Ext.getCmp(itemId);
		if (!view) {
			view = Ext.create(cls , {
				id: itemId
			});			
			Ext.Viewport.add(view);
		}
		Ext.Viewport.setActiveItem(view)
	} , 

	setTitle: function(){
		this.getTbar().setTitle("你好 , "+this.getApplication().userInfo.Name+" !");	
	}
});
