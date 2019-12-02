import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm()
  {
    this.angForm = this.fb.group(
      {
        name:['',Validators.required ],
        address:['',Validators.required ]
      });
  }
}
