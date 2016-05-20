const electron = require('electron');
const path = require('path');
const BrowserWindow = electron.BrowserWindow;
var app = require('app');
var mainWindow = null;

console.log("main.js",'file://', __dirname, "index.html");
app.on('ready', function() {
    mainWindow = new BrowserWindow();
    mainWindow.loadURL(path.join('file://', __dirname, "index.html"));
});

app.on('window-all-closed',function(){
	app.quit();
});