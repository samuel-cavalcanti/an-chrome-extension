import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { navBarComponent } from './nav-bar.component';

describe('navBarComponent', () => {
  let component: navBarComponent;
  let fixture: ComponentFixture<navBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ navBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(navBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
