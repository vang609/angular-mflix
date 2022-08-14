import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesContainerComponent } from './pages/movies-container/movies-container.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieCardDetailsComponent } from './components/movie-card-details/movie-card-details.component';



@NgModule({
  declarations: [
    MoviesContainerComponent,
    MovieCardComponent,
    HomeComponent,
    MovieCardDetailsComponent
  ],
  exports: [
    MoviesContainerComponent,
    MovieCardComponent,
    HomeComponent,
    MovieCardDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MoviesModule { }
