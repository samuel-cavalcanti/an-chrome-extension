import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarPaginationComponent } from './nav-bar-pagination.component';

describe('NavBarpaginationComponent', () => {
  let component: NavBarPaginationComponent;
  let fixture: ComponentFixture<NavBarPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
