import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuFlagsService } from 'src/app/movies/services/menu-flags.service';
import { MovieService } from 'src/app/movies/services/movie.service';
import { MenuItem } from '../../movies/interfaces/movie';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItems: MenuItem[] = [];
  genres: string = 'All';


  constructor(private movieService: MovieService, private menuFlagsService: MenuFlagsService, private router: Router) { }

  ngOnInit(): void {

    this.menuItems = [
      { label: 'All', icon: 'fa fa-film', path: 'movies', command: (event) => { console.log('All'); } },
      { label: 'Action', icon: 'fa fa-film', path: 'action', command: (event) => { console.log('Action'); } },
      { label: 'Adventure', icon: 'fa fa-tv', path: 'adventure', command: (event) => { console.log('Adventure'); } },
      { label: 'Animation', icon: 'fa fa-tv', path: 'animation', command: (event) => { console.log('Animation'); } },
      { label: 'Comedy', icon: 'fa fa-tv', path: 'comedy', command: (event) => { console.log('Comedy'); } },
      { label: 'Crime', icon: 'fa fa-tv', path: 'crime', command: (event) => { console.log('Crime'); } },
      { label: 'Drama', icon: 'fa fa-tv', path: 'drama', command: (event) => { console.log('Drama'); } },
      { label: 'Documentary', icon: 'fa fa-tv', path: 'documentary', command: (event) => { console.log('Documentary'); } },
      { label: 'Family', icon: 'fa fa-tv', path: 'family', command: (event) => { console.log('Family'); } },
      { label: 'Fantasy', icon: 'fa fa-tv', path: 'fantasy', command: (event) => { console.log('Fantasy'); } },
      { label: 'History', icon: 'fa fa-tv', path: 'history', command: (event) => { console.log('History'); } },
      { label: 'Horror', icon: 'fa fa-tv', path: 'horror', command: (event) => { console.log('Horror'); } },
      { label: 'Mystery', icon: 'fa fa-tv', path: 'mystery', command: (event) => { console.log('Mystery'); } },
      { label: 'Romance', icon: 'fa fa-tv', path: 'romance', command: (event) => { console.log('Romance'); } },
      { label: 'Short', icon: 'fa fa-tv', path: 'short', command: (event) => { console.log('Short'); } },
      { label: 'Sport', icon: 'fa fa-tv', path: 'sport', command: (event) => { console.log('Sport'); } },
      { label: 'War', icon: 'fa fa-tv', path: 'war', command: (event) => { console.log('War'); } },
      { label: 'Western', icon: 'fa fa-tv', path: 'western', command: (event) => { console.log('Western'); } }
    ];
  }


  search( event: any  ) {
    this.movieService.setGenres(event.target.textContent.toString());
    this.menuFlagsService.setClickLink(true);
    this.router.navigate(['/movies']);
  }

}
