import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ProductComponent } from './product/product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationexamComponent } from './paginationexam/paginationexam.component';
import { ParentcompComponent } from './parentcomp/parentcomp.component';
import { ChildcompComponent } from './childcomp/childcomp.component';
import { FormsModule } from '@angular/forms';
import { ParcomComponent } from './parcom/parcom.component';
import { ChildcComponent } from './childc/childc.component';
import { HomeComponent } from './home/home.component';
import { TermsComponent } from './terms/terms.component';
import { PaComponent } from './secondary-module/pa/pa.component';
import { ChildOneComponent } from './secondary-module/child-one/child-one.component';
import { ChildTwoComponent } from './secondary-module/child-two/child-two.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentdetailsComponent,
    PageNotfoundComponent,
    StudentRegistrationComponent,
    TeacherComponent,
    ProductComponent,
    ParentComponent,
    ChildComponent,
    ForgotpassComponent,
    PaginationexamComponent,
    ParentcompComponent,
    ChildcompComponent,
    ParcomComponent,
    ChildcComponent,
    HomeComponent,
    TermsComponent,
    PaComponent,
    ChildOneComponent,
    ChildTwoComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
