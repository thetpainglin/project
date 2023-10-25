package com.turing.backend.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.turing.backend.model.Product;
import com.turing.backend.service.ProductService;

import lombok.extern.slf4j.Slf4j;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("api/products")
@CrossOrigin
@Slf4j
public class ProductController {
	
	@Autowired
	ProductService productService;
	
	@GetMapping
	public Flux<Product> getAllProduct(){
		return productService.getAllProducts();
	}
	@GetMapping("/{id}")
	public Mono<ResponseEntity<Product>> getProductById(@PathVariable(value="id") String id){
		return productService.getProductById(id);
	}
	
	@GetMapping("/name")
	public Flux<Product> getProductByName(@RequestParam String name){
		return productService.searchProductByName(name);
	}
	
	@PostMapping
	public Mono<Product> saveProduct(@RequestBody @Valid Product product){
		log.info("product saving ",product);
		return productService.saveProduct(product);
	}
	
	@PutMapping("/{id}")
	public Mono<ResponseEntity<Product>> updateProduct(@PathVariable(value="id") String id, @Valid @RequestBody Product product){
		
		return productService.updateProduct(id, product);
	}
	@DeleteMapping("/{id}")
	public Mono<ResponseEntity<Void>> deleteProduct(@PathVariable(value="id") String id){
		return productService.deleteProduct(id);
	}
	
}
