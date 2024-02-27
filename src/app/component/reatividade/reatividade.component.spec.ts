import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReatividadeComponent } from './reatividade.component';

describe('ReatividadeComponent', () => {
  let component: ReatividadeComponent;
  let fixture: ComponentFixture<ReatividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReatividadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReatividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
