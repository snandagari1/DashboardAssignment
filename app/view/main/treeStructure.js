Ext.define('MyGridApp.view.main.treeStructure', {
    extend: 'Ext.tree.Panel',
    title: 'Simple Tree',
    width: 1000,
    height: 800,
    alias : 'widget.treestructure',
    useArrows:true,
    store : {
       type: 'files'
    }, tools : [{
        type : 'refresh',
        tooltip: 'refresh from date',
        handler : function(event,toolEl,panelHeader){
            alert('refresh');
        }
    }],    
});