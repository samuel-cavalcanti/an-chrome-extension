import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnnModelsComponent } from './cnn-models.component';

describe('CnnModelsComponent', () => {
  let component: CnnModelsComponent;
  let fixture: ComponentFixture<CnnModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnnModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnnModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
