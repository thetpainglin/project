import { Component } from '@angular/core';
import {Movie} from "../../model/movie.model";
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../../service/movie.service";

@Component({
  selector: 'app-movie-list-detail',
  templateUrl: './movie-list-detail.component.html',
  styleUrls: ['./movie-list-detail.component.css']
})
export class MovieListDetailComponent {
  movies : Array<Movie> = [];
  movieId! : string;
  constructor(private route : ActivatedRoute,
              private movieService : MovieService
  ) {
    this.movieService.movies.subscribe(movies =>{
      console.log("Data movie change ",movies);

        this.movies = movies;

    })
  }
  ngOnInit(){
    this.movieId = String(this.route.snapshot.paramMap.get('id'));
    console.log("movie id ",this.movieId);
  }

}
