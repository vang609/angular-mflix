import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieService } from 'src/app/movies/services/movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit {

  color = '#333';
  toggled!: boolean;

  handleToggle(event: any){
    this.toggled = !event;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
