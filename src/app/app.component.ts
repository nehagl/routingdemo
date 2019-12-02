import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routedemo';

  //server side routing how the router works on serverside
  constructor(private router:Router){}
  student()
  {
     this.router.navigate(['/student']);
  }
  
}
