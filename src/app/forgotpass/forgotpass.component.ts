import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  btnClick= function () {
    this.router.navigateByUrl('/forgotpassword');
 };

}
