import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie!: Movie;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  pictNotLoading(event: any) {
    console.log('event', event);
    event.target.src = '../../../../assets/img/Image-not-available.png';
  }

  showDetails(id?: string) {
    this.router.navigate(['/movie', id]);
  }

}
