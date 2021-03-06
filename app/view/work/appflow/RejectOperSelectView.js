/**
 * Created with JetBrains WebStorm.
 * User: xnb
 * Date: 14-4-1
 * Time: 下午5:20
 * To change this template use File | Settings | File Templates.
 */
Ext.define('MyApp.view.work.appflow.RejectOperSelectView', {
    extend: 'Ext.Panel',
    xtype: 'rejectOperSelectView',
    config: {
        nodeid: '',
        layout: {type: 'vbox'},
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: '驳回人员帮助',
                items: [
                    {
                        ui: 'back',
                        align: 'left',
                        name: 'rejectOperSelectViewBackBtn',
                        text: '',
                        width: 46,
                        style: 'padding-left:11px; width:46px;'
                    }
                ]
            },
            {
                xtype: 'appFlowSearchField',
                searchStoreField: ['username', 'usercode'],
                searchStore: 'NodeUserStore'
            },
            {
                xtype: 'list',
                plugins: {
                    xclass: 'Ext.plugin.ListPaging',
                    loadMoreText: '',
                    noMoreRecordsText: '',
                    autoPaging: true
                },
                itemHeight: 48,
                itemCls: "nglist",
                disableSelection: true,
                useSimpleItems: true,
                onItemDisclosure: false,
                variableHeights: false,
                striped: false,
                name: 'rejectOperSelectViewList',
                flex: 1,
                itemTpl: '<tpl if="checked==0"><img  btntype="radiobtn"  style="margin-top: -6px;width:32px;height: 32px;float: left" src="resources/images/btn_check_off_normal.png"/></tpl>'
                    + '<tpl if="checked==1"><img  btntype="radiobtn" style="margin-top: -6px;width:32px;height: 32px;float: left" src="resources/images/btn_check_on_normal.png"/></tpl>' + '<div style="margin-top: -6px;margin-left: 12px; max-width:220px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;float: left;text-align: center;height: 32px;line-height: 32px;">{username}({usercode})</div>'
            },
            {
                xtype: 'panel',
                height: 45,
                scrollable: null,
                style: 'background: rgb(204, 204, 204)',
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        flex: 1,
                        xtype: 'container',
                        name: 'rejectOperPickList',
                        height: 45,
                        html: '',
                        style:'line-height: 45px; white-space: nowrap;',
                        scrollable: {
                            direction: 'horizontal'
                        }
                    } ,
                    {
                        xtype: 'button',
                        name: 'rejectOperSelectViewOkBtn',
                        margin: '5.5 8 5.5 5',
                        width: 70,
                        style: {
                            borderColor: '#848484'
                        },
                        text: '<font color="black">确定</font>'
                    }
                ]
            },
            {
                xtype: 'toolbar',
                name: 'rejectOperSelectViewBottombar',
                docked: 'bottom',
                items: [
                    {
                        name: 'rejectOperSelectNodeUserBtn',
                        text: '流程人员',
                        cls: 'button-no-radio',
                        ui: 'normal',
                        width: '50%'
                    },
                    {
                        name: 'rejectOperSelectSysUserBtn',
                        text: '操作员',
                        cls: 'button-no-radio',
                        ui: 'action-white',
                        width: '50%'
                    }
                ]
            }
        ]
    }
});