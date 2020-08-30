import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLocalModelComponent } from './input-local-model.component';

describe('InputLocalModelComponent', () => {
  let component: InputLocalModelComponent;
  let fixture: ComponentFixture<InputLocalModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputLocalModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputLocalModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
