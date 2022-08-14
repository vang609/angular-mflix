import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieCardDetailsComponent } from './movies/components/movie-card-details/movie-card-details.component';
import { HomeComponent } from './movies/pages/home/home.component';

import { MoviesContainerComponent } from './movies/pages/movies-container/movies-container.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'movies',
    component: MoviesContainerComponent
  },
  {
    path: 'movie/:id',
    component: MovieCardDetailsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
