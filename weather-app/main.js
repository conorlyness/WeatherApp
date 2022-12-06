const { app, BrowserWindow } = require("electron");

async function createWindow() {
  win = new BrowserWindow({
    show: false,
    icon: "./src/assets/weather.ico",
    webPreferences: {
      webSecurity: false,
    },
  });
  win.removeMenu();
  win.maximize();
  win.loadFile("./dist/weather-app/index.html");
}

app.whenReady().then(() => {
  createWindow();
});
