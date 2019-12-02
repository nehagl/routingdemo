import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ProductComponent } from './product/product.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { HomeComponent } from './home/home.component';
import { TermsComponent } from './terms/terms.component';
import { PaComponent } from './secondary-module/pa/pa.component';
import { ChildOneComponent } from './secondary-module/child-one/child-one.component';
import { ChildTwoComponent } from './secondary-module/child-two/child-two.component';

const routes: Routes = [
  // {
  //  path:'',redirectTo:'student', pathMatch:'full'
  // },
    {
      path:'student',
      children:[
        {
          path:'', component:StudentComponent
        },
        // http://localhost:4200/student/studentdetails/4/aaa  write the number and name in output
        {
          path:'studentdetails/:id/:name',component:StudentdetailsComponent
        },
        {
          path:'studentregistration',component:StudentRegistrationComponent
        },

        {
           path: "product/:id", component:ProductComponent
        }
      ]
    },
    {
      path:'teacher', component:TeacherComponent
    },
    {
      path:'forgotpassword',component:ForgotpassComponent
    },
    { path: 'home', component: HomeComponent },

    { path: 'terms', component: TermsComponent },

    { path: 'parent', component: PaComponent ,

    // { path: 'parent/child-one', component: ChildOneComponent },

    // { path: 'parent/child-two', component: ChildTwoComponent },

    children:[{path:'child-one',
              component:ChildOneComponent},
              {path:'child-two',
              component:ChildTwoComponent}
            ]
    },
    {
      path:'**', component:PageNotfoundComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
