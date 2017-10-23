var { app, BrowserWindow, ipcMain } = require('electron');
var url = require('url');
var path = require('path');

let win = null;

app.on('ready', () => {

    win = new BrowserWindow({ width: 1000, height: 600 });
    wintwo = new BrowserWindow({ width: 800, height: 600, show: false });
     
   // win.loadURL('http://localhost:4200');
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));

    wintwo.loadURL('http://google.com');
    

    win.on('closed', () => {
        win = null;
    })

    //win.webContents.openDevTools();

    ipcMain.on('Opengoogle', () => {
        wintwo.show();
    })
})

app.on('activate', () => {
    if (win == null)
    createWindow()    
})

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit();
    }
})