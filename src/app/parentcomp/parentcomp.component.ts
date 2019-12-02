import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-parentcomp',
  templateUrl: './parentcomp.component.html',
  styleUrls: ['./parentcomp.component.css']
})
export class ParentcompComponent implements OnInit {
  public userName = '';
  public userPhone = '';
  constructor() { }

  ngOnInit() {
  }

}
