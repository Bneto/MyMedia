var app = require('app');
var BrowserWindow = require('browser-window');
var bWinObj = null;
var BROWSER_SETTINGS = {
    'width': 800,
    'height': 600,
    'show': false,
    'center': true,
    'auto-hide-menu-bar': true,
    'resizable': true
};

exports.loadAppSys = function(){
    app.on('ready', function(){
        bWinObj = new BrowserWindow(BROWSER_SETTINGS);
    
        bWinObj.loadUrl('http://localhost:8000/main_stats');
        bWinObj.show();    
    });
    
    app.on('window-all-closed', function() {
        app.quit();
    });
};