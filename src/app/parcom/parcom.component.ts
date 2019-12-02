import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parcom',
  templateUrl: './parcom.component.html',
  styleUrls: ['./parcom.component.css']
})
export class ParcomComponent implements OnInit {
  public userName = '';
  public userPhone = '';

  nameEventHander($event: any) {
    this.userName = $event;
  }

  phoneEventHander($event: any) {
    this.userPhone = $event;
  }

  constructor() { }

  ngOnInit() {
  }

}
