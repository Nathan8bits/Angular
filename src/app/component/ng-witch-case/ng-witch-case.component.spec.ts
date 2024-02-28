import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgWitchCaseComponent } from './ng-witch-case.component';

describe('NgWitchCaseComponent', () => {
  let component: NgWitchCaseComponent;
  let fixture: ComponentFixture<NgWitchCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgWitchCaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgWitchCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
