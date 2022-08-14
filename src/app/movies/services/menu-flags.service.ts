import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuFlagsService {

  private sbShowSidebar = new BehaviorSubject(false);
  isSidebar = this.sbShowSidebar.asObservable();

  private sbClickLink = new BehaviorSubject(false);
  isClickLink = this.sbClickLink.asObservable();

  constructor() { }


  setShowSidebar(isShowSidebar: boolean) {
    this.sbShowSidebar.next(isShowSidebar);
  }

  setClickLink(isClickLink: boolean) {
    this.sbClickLink.next(isClickLink);
  }

}
