import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DDoctorsComponent } from './d-doctors.component';

describe('DDoctorsComponent', () => {
  let component: DDoctorsComponent;
  let fixture: ComponentFixture<DDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DDoctorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
