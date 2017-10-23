import { Component } from '@angular/core';
import { remote, ipcRenderer } from 'electron';

let { dialog } = remote;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    var menu = remote.Menu.buildFromTemplate([{
      label: 'File',
      submenu: [{
        label: 'Open',
        click: () => {
          dialog.showOpenDialog((cb) => {

          })
        }
      }, {
          label: 'Openanother',
          click: () => {
            ipcRenderer.send('Opengoogle');
        }  
      }]
    }])
    remote.Menu.setApplicationMenu(menu);
  }
}
