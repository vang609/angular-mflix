import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Movie } from '../../interfaces/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-card-details',
  templateUrl: './movie-card-details.component.html',
  styleUrls: ['./movie-card-details.component.scss']
})
export class MovieCardDetailsComponent implements OnInit {

  movieID: string = '';
  movie: Movie = {};

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.movieID = params['id']);
    this.getMovie();
  }

  getMovie(): void {
    this.movie = this.movieService.getMovieByID(this.movieID);
    console.log(' movie', this.movie);
  }

  pictNotLoading(event: any) {
    console.log('event', event);
    event.target.src = '../../../../assets/img/Image-not-available.png';
  }


}
