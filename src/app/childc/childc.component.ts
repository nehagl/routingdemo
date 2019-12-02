import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childc',
  templateUrl: './childc.component.html',
  styleUrls: ['./childc.component.css']
})
export class ChildcComponent implements OnInit {
  @Output() nameEvent = new EventEmitter<string>();
  @Output() phoneEvent = new EventEmitter<string>();

  userName: string = '';
  userPhone: string = '';

  onNameChange () {
    this.nameEvent.emit(this.userName);
  }

  onPhoneChange () {
    this.phoneEvent.emit(this.userPhone);
  }
  constructor() { }

  ngOnInit() {
  }

}
