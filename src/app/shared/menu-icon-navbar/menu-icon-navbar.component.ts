import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuFlagsService } from 'src/app/movies/services/menu-flags.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../../store/toggle.actions';

@Component({
  selector: 'app-menu-icon-navbar',
  templateUrl: './menu-icon-navbar.component.html',
  styleUrls: ['./menu-icon-navbar.component.scss']
})
export class MenuIconNavbarComponent implements OnInit {

  @ViewChild('menuBar') menuBar!: ElementRef<HTMLDivElement>;

  sbShowSidebar!: Subscription;
  sbClickLink!: Subscription;

  constructor(private menuFlagsService: MenuFlagsService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.sbShowSidebar = this.menuFlagsService.isClickLink.subscribe(isClickLink => {
      if(isClickLink) this.onToogleSidebar();
    });
  }

  onToogleSidebar() {
    this.store.subscribe( ({ toogle }) => {
      if(!toogle) {
        let classList = this.menuBar.nativeElement.classList;
        if(classList.length === 2) this.menuBar.nativeElement.classList.toggle("change");
      }
     });
  }

  onHandleToggle() {
    this.menuBar.nativeElement.classList.toggle("change");
    const isSidebar = this.menuBar.nativeElement.classList.length === 2 ? true : false;
    this.store.dispatch( actions.switchToggle({ isToggle: isSidebar }) );
    this.menuFlagsService.setClickLink(false);
  }

  ngOnDestroy() {
    this.sbShowSidebar.unsubscribe();
    this.sbClickLink.unsubscribe();
  }

}
