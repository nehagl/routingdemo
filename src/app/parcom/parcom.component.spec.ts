import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcomComponent } from './parcom.component';

describe('ParcomComponent', () => {
  let component: ParcomComponent;
  let fixture: ComponentFixture<ParcomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
