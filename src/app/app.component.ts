import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuFlagsService } from './movies/services/menu-flags.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-mflix-001';
  isToggle!: boolean;
  subscriptionToggle!: Subscription;


  constructor(private menuFlagsService: MenuFlagsService) { }

  ngOnInit(): void {
    this.subscriptionToggle = this.menuFlagsService.isSidebar.subscribe(isToggle => {
      this.isToggle = isToggle;
    });
  }

  ngOnDestroy() {
    this.subscriptionToggle.unsubscribe();

  }
}
