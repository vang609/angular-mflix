import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIconNavbarComponent } from './menu-icon-navbar.component';

describe('MenuIconNavbarComponent', () => {
  let component: MenuIconNavbarComponent;
  let fixture: ComponentFixture<MenuIconNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuIconNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuIconNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
