import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss']
})
export class TextfieldComponent {
  @Input() content;
  @Output() contentChange: EventEmitter<string>;
  myCtrl;
  constructor() {
    this.contentChange = new EventEmitter();
    this.myCtrl = new FormControl();
    this.myCtrl.valueChanges.subscribe(
      (data) => this.contentChange.next(data)
    );
  }
}
