import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponente3Component } from './my-componente3.component';

describe('MyComponente3Component', () => {
  let component: MyComponente3Component;
  let fixture: ComponentFixture<MyComponente3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComponente3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponente3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
