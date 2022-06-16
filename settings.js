const { app, BrowserWindow } = require('electron')
// create window and set default settings 

exports.createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
    })

    win.loadFile('index.html')
}


// create stream app 
app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
//Events 
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

