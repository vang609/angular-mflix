import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MenuIconNavbarComponent } from './menu-icon-navbar/menu-icon-navbar.component';



@NgModule({
  declarations: [
    MenuHeaderComponent,
    SidebarComponent,
    MenuIconNavbarComponent
  ],
  exports: [
    MenuHeaderComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
