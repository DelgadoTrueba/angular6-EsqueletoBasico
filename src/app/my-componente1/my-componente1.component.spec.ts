import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponente1Component } from './my-componente1.component';

describe('MyComponente1Component', () => {
  let component: MyComponente1Component;
  let fixture: ComponentFixture<MyComponente1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComponente1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponente1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
