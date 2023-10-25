import {Component, TemplateRef, ViewChild} from '@angular/core';
import {Product} from "../../model/product.model";
import {ProductService} from "../../service/product.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {Movie} from "../../../model/movie.model";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  modalRef?: BsModalRef;
  @ViewChild('template') template : any = null;

  editMode = false;

  productForm;

  product : Array<Product> = [];

	constructor(private productService : ProductService,
              private formBuilder : FormBuilder ,
              private modalService : BsModalService,
              private router : Router){
    this.productService.products.subscribe(product=>{
      console.log("all products for looping ",product);
      this.product = product;
    })
    this.productForm = this.formBuilder.group({
      id : [''],
      name : ['',[
        Validators.required,
        Validators.minLength(4)
      ]],
      image : ['',[
        Validators.required,

      ]],
      price : [0,[
        Validators.required,
        Validators.pattern("^[0-9]*$")
      ]],
      quantity : [0,[
        Validators.required,
        Validators.pattern("^[0-9]*$")
      ]],
      details : ['',[
        Validators.required,

      ]],
    });
	}

  SaveOrUpdateProduct(){

    let product = this.productForm.value as Product;
    if(this.editMode == false){
     
      this.productService.saveProductAPI(product);
      this.productForm.reset();
    }else{

      this.productService.updateProductAPI(product);
      this.productForm.reset();
    }
    console.log("Save Or Update product",this.product);
    this.modalRef?.hide();
  }
  newMovieClick(){
    this.editMode = false;
    this.openModal(this.template);
    
  }

addProduct(item : Product){
    this.productService.saveProductAPI(item);
}
updateProduct(item : Product){
  this.productService.updateProductAPI(item);
}

  keyPress(event:any  ){
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if(event.keyCode != 8 && !pattern.test(inputChar)){
      event.preventDefault();
    }
  }

editBtnClick(item:Product ){
  this.editMode = true;
  console.log("product item => ",item);

  this.productForm.patchValue({...item});
  this.modalRef = this.modalService.show(this.template);
  //this.productForm.reset();
}
deleteProductBtnClick(item : Product){

  //let movie = this.movies[index];
  console.log("movie => ",item);

  this.showDeleteProductDialog(item).then((result)=>{
    if(result.isConfirmed){
      //this.movieService.deleteMovie(index);
      this.deleteProduct(item);
    }

  })
}

  private deleteProduct(item : Product) {
    this.productService.deleteProductAPI(item,()=>{
      Swal.fire(
        'Delete!',
        'Your file has been deleted',
        'success'
      )
    });

  }
  private showDeleteProductDialog(product: Product) {
    return Swal.fire({
      title: 'Are you Sure to delete ' + product.name + ' movie ?',
      //text : "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });
  }

  openModal(template : TemplateRef<any>){
    // this.modalRef = this.modalService.show(template);
    this.modalRef = this.modalService.show(this.template);
  }

  closeMovieModal(){
    this.modalRef?.hide();
  }

}
