import { Component, OnInit, Input } from '@angular/core';
import { readFile } from 'fs'
import HostPage from '../../hostPage';
import { LocalStorage } from '../../providers/localstorage'
import { Subject } from 'rxjs'

const key = "hostPage"
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    hostPages: HostPage[];
    current: HostPage;
    updateHostPagesSubject = new Subject;
    updateHost() {
        this.updateHostPagesSubject.next(this.hostPages)
    }
    changeCurrent(hostPage: HostPage) {
        this.current = hostPage;
    }
    constructor(private localStorage: LocalStorage) {
        const path = `C:\\Windows\\System32\\drivers\\etc\\hosts`;
        readFile(path, (error, content) => {
            this.hostPages = [{
                name: 'system',
                isSelected: true,
                text: content.toString()
            }];
            this.current = this.hostPages[0];
        })
        this.updateHostPagesSubject.subscribe(
            (value) => this.localStorage.set(key, value)
        )
    }
    addNew(value) {
        const hostPage = {
            name: value,
            isSelected: true,
            text: ""
        }
        this.hostPages.push(hostPage)
        this.current = hostPage;
        this.updateHost();
    }
}
