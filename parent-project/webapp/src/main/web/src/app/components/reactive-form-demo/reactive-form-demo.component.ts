import {Component, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

import Swal from 'sweetalert2';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {Movie} from "../../model/movie.model";
import {MovieService} from "../../service/movie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.css']
})
export class ReactiveFormDemoComponent {

  modalRef?: BsModalRef;
  @ViewChild('template') template : any = null;
  movies : Array<Movie> = [];
  editMode = false;

  movieForm;
  constructor(private formBuilder : FormBuilder ,
              private modalService : BsModalService,
              private movieService : MovieService ,
              private router : Router
              ) {
    this.movieForm = this.formBuilder.group({
      id : [''],
      name : ['',[
        Validators.required,
        Validators.minLength(4)
      ]],
      year : [0,[
        Validators.required,
        Validators.pattern("^[0-9]*$")
      ]],
      director : ['']
    });
    this.movieService.movies.subscribe(movies =>{
      console.log("Data movie change ",movies);
      this.movies = movies;
    })
    /*
    this.movieService.fetchAllMovies().subscribe(movies=>{
      console.log("Data movie change ",movies);
      this.movies = movies;
    })
     */
  }

  /*movieForm = new FormGroup({
    movieName : new FormControl('',[
      Validators.required,
      Validators.minLength(4)
    ]),
    year : new FormControl('',[
        Validators.required,
        Validators.minLength(4)
      ]
    ),
    director : new FormControl(''),
  })
  */

  SaveOrUpdateMovie(){
    let movie  = this.movieForm.value as Movie;
    if(this.editMode == false){

      this.movieService.saveMovie(movie);
      this.movieForm.reset();
    }
    else{
      console.log("Update Movie");
      this.movieService.updateMovieAPI(movie);
    }
    this.modalRef?.hide();

  }
  editClick(index : number,template : TemplateRef<any>){
      this.editMode = true;
      console.log("edit movie => ",index," " ,this.movies[index]);
      let movie = this.movies[index];
      this.movieForm.patchValue({...movie});
    this.modalRef = this.modalService.show(this.template);
    //this.modalRef = this.modalService.show(template);
    //this.movieForm.reset();
   // this.movieForm.push();
  }
  movieDetailClick(index : any){
    console.log("movie detail list ",index);
    this.router.navigate(['/movies/'+index]).then(data=>{
      console.log("After navigate",data);
    });
  }

  keyPress(event:any  ){
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if(event.keyCode != 8 && !pattern.test(inputChar)){
      event.preventDefault();
    }
  }
  newMovieClick(){
    this.editMode = false;
    this.openModal(this.template);
  }
  openModal(template : TemplateRef<any>){
    // this.modalRef = this.modalService.show(template);
    this.modalRef = this.modalService.show(this.template);
  }
  closeMovieModal(){
   this.modalRef?.hide();
  }
  deleteMovieClick(index: number){

    let movie = this.movies[index];
    console.log("movie => ",movie);

    this.showDeleteMovieDialog(index).then((result)=>{
      if(result.isConfirmed){
        //this.movieService.deleteMovie(index);
        this.deleteMovie(movie);
      }

    })

  }

  private deleteMovie(movie : Movie) {
    this.movieService.deleteMovieAPI(movie,()=>{
      Swal.fire(
        'Delete!',
        'Your file has been deleted',
        'success'
      )
    });


  }

  private showDeleteMovieDialog(index: number) {
    return Swal.fire({
      title: 'Are you Sure to delete ' + this.movies[index].name + ' movie ?',
      //text : "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });
  }
}
