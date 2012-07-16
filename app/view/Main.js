Ext.define('PenavicoMobile.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    config: {

        title: 'Sessions',
        iconCls: 'time',
        autoDestroy: false,
        items: [
            {
                xtype: 'home',
                //store: 'Sessions',
                //grouped: true,
                pinHeaders: false
            }
        ]
    }
});
