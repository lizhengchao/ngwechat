/**
 * Created with JetBrains WebStorm.
 * User: xnb
 * Date: 14-3-25
 * Time: 下午9:40
 * To change this template use File | Settings | File Templates.
 */
Ext.define("MyApp.store.work.appflow.NextNodeStore", {
    extend: "Ext.data.Store",
    config: {
        fields: [
            {
                name:'nodeid',
                type:'string'
            },
            {
                name:'nodetext',
                type:'string'
            },
            {
                name:'designate_actor',
                type:'int'
            },
            {
                name:'designate_anyactor',
                type:'int'
            },
            {
                name:'checked',
                type:'string',
                defaultValue: '0'
            }
        ],
        data: []
    }
});