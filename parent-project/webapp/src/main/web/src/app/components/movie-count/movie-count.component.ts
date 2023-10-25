import { Component } from '@angular/core';
import {MovieService} from "../../service/movie.service";

@Component({
  selector: 'app-movie-count',
  templateUrl: './movie-count.component.html',
  styleUrls: ['./movie-count.component.css']
})
export class MovieCountComponent {
  movieCounter = 0;
  subscriber;
  constructor(private movieService : MovieService) {
     this.subscriber = this.movieService.movies.subscribe(movies=>{
      this.movieCounter = movies.length;
    })
  }

  ngOnDestroy(){
    this.subscriber.unsubscribe();
  }

}
