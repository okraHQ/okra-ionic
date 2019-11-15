import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOkraComponent } from './ngx-okra.component';

describe('NgxOkraComponent', () => {
  let component: NgxOkraComponent;
  let fixture: ComponentFixture<NgxOkraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxOkraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxOkraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
