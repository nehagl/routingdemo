import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-childcomp',
  templateUrl: './childcomp.component.html',
  styleUrls: ['./childcomp.component.css']
})
export class ChildcompComponent implements OnInit {
  @Input() userNameFromParent = '';
  @Input() userPhoneFromParent = '';
  constructor() { }

  ngOnInit() {
  }

}
