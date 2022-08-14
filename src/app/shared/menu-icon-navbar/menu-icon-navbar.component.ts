import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuFlagsService } from 'src/app/movies/services/menu-flags.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-icon-navbar',
  templateUrl: './menu-icon-navbar.component.html',
  styleUrls: ['./menu-icon-navbar.component.scss']
})
export class MenuIconNavbarComponent implements OnInit {

  @ViewChild('menuBar') menuBar!: ElementRef<HTMLDivElement>;

  sbShowSidebar!: Subscription;
  sbClickLink!: Subscription;

  constructor(private menuFlagsService: MenuFlagsService) { }

  ngOnInit(): void {
    this.sbShowSidebar = this.menuFlagsService.isClickLink.subscribe(isClickLink => {
      if(isClickLink){
        this.menuFlagsService.setShowSidebar(false);
        this.menuBar.nativeElement.classList.toggle("change");
      }
    });
  }

  onHandleToggle() {
    this.menuBar.nativeElement.classList.toggle("change");
    const isSidebar = this.menuBar.nativeElement.classList.length === 2 ? true : false;
    this.menuFlagsService.setShowSidebar(isSidebar);
    this.menuFlagsService.setClickLink(false);
  }

  ngOnDestroy() {
    this.sbShowSidebar.unsubscribe();
    this.sbClickLink.unsubscribe();
  }

}
