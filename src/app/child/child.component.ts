import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  test: string;
  
  constructor() { }

  ngOnInit() {
  }
  ChildTestCmp() 
  { 
    this.test = "I am child component!"; 
  }

}
