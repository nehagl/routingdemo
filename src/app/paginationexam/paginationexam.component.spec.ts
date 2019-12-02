import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationexamComponent } from './paginationexam.component';

describe('PaginationexamComponent', () => {
  let component: PaginationexamComponent;
  let fixture: ComponentFixture<PaginationexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
