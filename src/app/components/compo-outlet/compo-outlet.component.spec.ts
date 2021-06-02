import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoOutletComponent } from './compo-outlet.component';

describe('CompoOutletComponent', () => {
  let component: CompoOutletComponent;
  let fixture: ComponentFixture<CompoOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompoOutletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
