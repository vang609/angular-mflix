import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from './app.reducer';
import { MenuFlagsService } from './movies/services/menu-flags.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Angular-NFLIX';
  isToggle!: boolean;
  subscriptionToggle!: Subscription;


  constructor(private menuFlagsService: MenuFlagsService, private store: Store<AppState>) { }

  ngOnInit(): void {
    // Implementation with observables
    // this.subscriptionToggle = this.menuFlagsService.isSidebar.subscribe(isToggle => {
    //   this.isToggle = isToggle;
    // });

    this.store.subscribe( ({ toogle }) => {
      this.isToggle = toogle;
      // console.log('toogle', this.isToggle);
     });
  }

  ngOnDestroy() {
    this.subscriptionToggle.unsubscribe();

  }
}
