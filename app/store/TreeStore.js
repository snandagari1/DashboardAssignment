Ext.define('MyTreeApp.store.TreeStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.files',
    root : {
        expanded : true,
        children : [
                {text:"treedata", leaf:true},
                {text:"homework", expanded : true, children : [
                    {text:'book report', leaf : true},
                    {text: 'algebra', leaf : true}
                ]}
             ]
          }
        });      