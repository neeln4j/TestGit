const electron = require('electron');
const path = require('path');
const BrowserWindow = electron.BrowserWindow;
var app = require('app');
var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow();
    mainWindow.loadURL(path.join('file://', __dirname, "index.html"));
});

app.on('window-all-closed',function(){
	console.log("window-all-closed event trigerred.")
	app.quit();
});

console.warn('testee...');