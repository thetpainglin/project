package com.turing.backend.model;

import javax.validation.constraints.NotEmpty;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "ecommerces")
@Data
public class Product {

	@Id
	private String id;
	
	//@NotNull(message = "Image can not be null")
	@NotEmpty(message = "need image")
	private String name;
	
	///@NotNull(message = "Image can not be null")
	private String image;
	
	//@NotNull(message = "Image can not be null")
	private Integer price;
	
	//@NotNull(message = "Image can not be null")
	private Integer quantity;
	
	//@NotNull(message = "Image can not be null")
	private String details;
}
