Ext.define('MyTreeApp.view.main.CompanyNews', {
    extend: 'Ext.Container',
     alias: 'widget.companynews',
     requires: [
        'MyTreeApp.model.CompnayNewsModel',
      //  'Ext.dataview.plugin.ItemTip',
        'Ext.plugin.Responsive'
    ],
    height: 400,
    layout: 'fit',
    width: 400,

    items: [{
        xtype: 'dataview',
        cls: 'dataview-basic',
        itemTpl: '<div class="img" style="background-image: url({photo});"></div>' +
            '<div class="content">' +
                '<div class="name">{first_name} {last_name}</div>' +
                '<div class="affiliation">{affiliation}</div>' +
            '</div>',
       // store: 'Speakers',
        plugins: {
            dataviewtip: {
                align: 'tl-bl',
                maxHeight: 200,
                width: 300,
                scrollable: 'y',
                delegate: '.img',
                allowOver: true,
                anchor: true,
                bind: '{record}',
                cls: 'dataview-basic',
                tpl: '<strong>Affiliation</strong><div class="info">{affiliation}</div>' +
                    '<strong>Position</strong><div class="info">{position}</div>' +
                    '<strong>Bio</strong><div class="info">{bio:substr(0, 100)}</div>'
            }
        }
    }]
});