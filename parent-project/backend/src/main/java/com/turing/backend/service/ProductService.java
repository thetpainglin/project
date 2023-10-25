package com.turing.backend.service;


import org.springframework.http.ResponseEntity;

import com.turing.backend.model.Product;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface ProductService {
	
	Flux<Product> getAllProducts();
	
	Mono<ResponseEntity<Product>> getProductById(String id);
	
	Flux<Product> searchProductByName(String name);
	
	Mono<Product> saveProduct(Product product);
	
	Mono<ResponseEntity<Product>> updateProduct(String id,Product product);
	
	Mono<ResponseEntity<Void>> deleteProduct(String id);
	
	
}
