import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponente2Component } from './my-componente2.component';

describe('MyComponente2Component', () => {
  let component: MyComponente2Component;
  let fixture: ComponentFixture<MyComponente2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComponente2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponente2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
