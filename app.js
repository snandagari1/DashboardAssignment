/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MyTreeApp.Application',

    name: 'MyTreeApp',

    requires: [
        // This will automatically load all classes in the MyTreeApp namespace
        // so that application classes do not need to require each other.
        'MyTreeApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'MyTreeApp.view.main.Main'
});
