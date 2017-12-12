import { Component, OnInit, Input } from '@angular/core';
import { readFile } from 'fs'
import HostPage from '../../hostPage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'app';
  hostPages: HostPage[];
  current: HostPage;
  changeCurrent(hostPage: HostPage) {
    this.current = hostPage;
  }
  constructor() {
    const path = `C:\\Windows\\System32\\drivers\\etc\\hosts`;
    readFile(path, (error, content) => {
      this.hostPages = [{
        name: 'system',
        isSelected: true,
        text: content.toString()
      }];
      this.current = this.hostPages[0];
    })
  }
  addNew(value) {
    const hostPage = {
      name: value,
      isSelected: true,
      text: ""
    }
    this.hostPages.push(hostPage)
    this.current = hostPage;
  }
}
