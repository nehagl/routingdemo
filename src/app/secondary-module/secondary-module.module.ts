import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaComponent } from './pa/pa.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';



@NgModule({
  declarations: [PaComponent, ChildOneComponent, ChildTwoComponent],
  imports: [
    CommonModule
  ]
})
export class SecondaryModuleModule { }
