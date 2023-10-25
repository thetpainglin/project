package com.turing.backend.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.turing.backend.dao.ProductDao;
import com.turing.backend.model.Product;
import com.turing.backend.service.ProductService;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class ProductServiceImpl implements ProductService{
	
	@Autowired
	ProductDao productDao;

	@Override
	public Flux<Product> getAllProducts() {
		
		return productDao.findAll();
	}
	@Override
	public Mono<ResponseEntity<Product>> getProductById(String id) {
		// TODO Auto-generated method stub
		return productDao.findById(id).map((newProduct)->ResponseEntity.ok(newProduct))
				.defaultIfEmpty(ResponseEntity.notFound().build());
	}
	
	@Override
	public Flux<Product> searchProductByName(String name) {
		return productDao.findByName(name);
	}

	@Override
	public Mono<Product> saveProduct(Product product) {
		// TODO Auto-generated method stub
		return productDao.save(product);
	}

	@Override
	public Mono<ResponseEntity<Product>> updateProduct(String id, Product product) {
		
		return productDao.findById(id)
				.flatMap(existProduct->{
					existProduct.setName(product.getName());
					existProduct.setImage(product.getImage());
					existProduct.setPrice(product.getPrice());
					existProduct.setQuantity(product.getQuantity());
					existProduct.setDetails(product.getDetails());
					return productDao.save(existProduct);
				}).map(updateProduct->new ResponseEntity<>(updateProduct,HttpStatus.OK))
				.defaultIfEmpty(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}

	@Override
	public Mono<ResponseEntity<Void>> deleteProduct(String id) {
		return productDao.findById(id)
				.flatMap(existProduct->productDao.delete(existProduct)
						.then(Mono.just(new ResponseEntity<Void>(HttpStatus.OK)))
						)
						.defaultIfEmpty(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}


}
