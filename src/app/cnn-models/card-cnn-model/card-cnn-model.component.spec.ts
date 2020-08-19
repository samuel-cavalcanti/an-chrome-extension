import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCnnModelComponent } from './card-cnn-model.component';

describe('CardCnnModelComponent', () => {
  let component: CardCnnModelComponent;
  let fixture: ComponentFixture<CardCnnModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCnnModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCnnModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
