/*
 * File: app/view/LoginViewport.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ExtJS.view.LoginViewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.button.Button'
    ],

    id: 'id_login',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    height: 251,
                    width: 573,
                    layout: 'absolute',
                    bodyPadding: 10,
                    title: 'Login',
                    items: [
                        {
                            xtype: 'textfield',
                            x: 100,
                            y: 120,
                            width: 380,
                            fieldLabel: 'Contraseña:',
                            inputType: 'password',
                            allowBlank: false,
                            blankText: 'Este campo es requerido',
                            minLength: 5,
                            minLengthText: 'Debe ingresar mínimo 5 caracteres'
                        },
                        {
                            xtype: 'textfield',
                            x: 100,
                            y: 60,
                            width: 380,
                            fieldLabel: 'Correo Electrónico:',
                            allowBlank: false,
                            blankText: 'Este campo es requerido',
                            minLength: 5,
                            minLengthText: 'Deber ingresar mínimo 5 caracteres'
                        },
                        {
                            xtype: 'button',
                            x: 260,
                            y: 160,
                            text: 'Ingresar',
                            listeners: {
                                click: {
                                    fn: me.onButtonClick,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'button',
                            x: 340,
                            y: 160,
                            text: 'Registrarse'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onButtonClick: function(button, e, eOpts) {
            if (button.up('form').getForm().isValid()){
                 // Remove Login Window
                var panel = Ext.getCmp('id_login');
                panel.destroy();
                Ext.widget('main').show();
               }
    }

});