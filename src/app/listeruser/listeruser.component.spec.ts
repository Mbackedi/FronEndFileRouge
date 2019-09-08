import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeruserComponent } from './listeruser.component';

describe('ListeruserComponent', () => {
  let component: ListeruserComponent;
  let fixture: ComponentFixture<ListeruserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeruserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
