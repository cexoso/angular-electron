import { Component, OnInit, Input } from '@angular/core';
import { readFile } from 'fs'
import HostPage from '../../hostPage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'app';
  hostPages: HostPage[];
  current: HostPage;
  changeCurrent(hostPage: HostPage) {
    this.current = hostPage;
  }
  constructor() {
    this.hostPages = [{
      name: 'system',
      isSelected: true,
      text: '123'
    }, {
      name: 'page1',
      isSelected: false,
      text: '456'
    }];
    this.current = this.hostPages[0];
  }
  ngOnInit() {
    const path = `C:\\Windows\\System32\\drivers\\etc\\hosts`;
    readFile(path, (error, content) => {
      console.log(error || content.toString())
    })
  }
}
