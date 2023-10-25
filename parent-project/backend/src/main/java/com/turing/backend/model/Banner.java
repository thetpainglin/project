package com.turing.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "banner")
@Data
public class Banner {
	@Id
	private String id;
	
	//@NotNull(message = "Image can not be null")
	private String image;
	
	//@NotNull(message = "buttonText can not be null")
	private String buttonText;
	
	//@NotNull(message = "product can not be null")
	private String product;
	
	//@NotNull(message = "desc can not be null")
	private String desc;
	
	//@NotNull(message = "SmallText can not be null")
	private String smallText;
	
	//@NotNull(message = "MidText can not be null")
	private String midText;
	
	//@NotNull(message = "LargeText1 can not be null")
	private String largeText1;
	
	//@NotNull(message = "LargeText2 can not be null")
	private String largeText2;
	
	//@NotNull(message = "Discount can not be null")
	private String discount;
	
	//@NotNull(message = "SaleTime can not be null")
	private String saleTime;
	
	@DBRef
	Product product_id;
}
