import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.

@Injectable()
export class LocalStorage {
    subject = new Subject();
    constructor() {
        this.subject
            .flatMap(({key, value})=> {
                return [key, value]
            })
            .subscribe(console.log)
    }
    set(key, value) {
        this.subject.next({key, value})
    }
    get(key) {

    }
}
