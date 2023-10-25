package com.turing.backend.dao;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

import com.turing.backend.model.Product;

import reactor.core.publisher.Flux;

@Repository
public interface ProductDao extends ReactiveMongoRepository<Product,String>{

	Flux<Product> findByName(String name);
	
}
