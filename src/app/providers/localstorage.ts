import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

const { localStorage } = window;
@Injectable()
export class LocalStorage {
    subject = new Subject();
    constructor() {
        this.subject
            .subscribe(({ key, value }) => {
                localStorage.setItem(key, JSON.stringify(value))
            })
    }
    set(key, value) {
        this.subject.next({ key, value })
    }
    get(key) {
        return JSON.parse(localStorage.getItem(key))
    }
}
