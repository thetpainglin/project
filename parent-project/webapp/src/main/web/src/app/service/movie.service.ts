import { Injectable } from '@angular/core';
import {Movie} from "../model/movie.model";
import {BehaviorSubject, count, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../components/Config/Config";

const API =  API_URL+"movies";
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movieArr : Array<Movie> = [];
  _movies : BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  readonly movies = this._movies.asObservable();


  constructor(private http : HttpClient) {
    /*
    this.movieArr.push(new Movie("1","Titanic",2003,"Jame Cameron"));
    this.movieArr.push(new Movie("2","The Fact",2013,"Jame"));
    this.emitChange();
     */
    this.fetchAllMovies().subscribe(movies=>{
      this.movieArr = movies;
      this.emitChange();
    });

  }

  private emitChange() {
    this._movies.next(this.movieArr);
  }

  fetchAllMovies():Observable<Movie[]>{
    console.log("API ",API);
    return this.http.get<Movie[]>(API);
  }
  saveMovie(movie : Movie){
    console.log("save movie ",movie);
    return this.http.post<Movie>(API,movie).subscribe((m)=>{
      console.log("api movie save data => ",m);
      this.addMovie(m);
    });
  }
  updateMovieAPI(movie : Movie){
    return this.http.put<Movie>(API+"/"+movie.id,movie).subscribe((movies)=>{
      this.updateMovie(movies);
    });
  }

  addMovie(movie:Movie){
    this.movieArr.push(movie);
    this.emitChange();
  }
  updateMovie(movie:Movie){

    this.movieArr = this.movieArr.map(m => {
      console.log("id check ",m.id === movie.id, " movie ",movie, " new movie ",m)
      return m.id == movie.id ? movie : m
    });
    this.emitChange();
  }
  deleteMovieAPI(movie : Movie,callback : ()=>void  ){
    return this.http.delete<Movie>(API+"/"+movie.id).subscribe(m=>{
      this.deleteMovie(movie);
      callback();
    });

  }
  getAllMovie(){
    return this.movies;
  }
  deleteMovie(movie : Movie){
    this.movieArr = this.movieArr.filter(movies=>movies.id != movie.id);
    console.log("movieArr ",this.movieArr);
    this.emitChange();
  }

}
