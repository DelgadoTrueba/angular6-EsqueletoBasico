import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevationCSSComponent } from './elevation-css.component';

describe('ElevationCSSComponent', () => {
  let component: ElevationCSSComponent;
  let fixture: ComponentFixture<ElevationCSSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElevationCSSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevationCSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
