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
import org.springframework.web.bind.annotation.RestController;

import com.turing.backend.model.Banner;
import com.turing.backend.service.BannerService;
import com.turing.backend.service.ProductService;

import lombok.extern.slf4j.Slf4j;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("api/banner")
@CrossOrigin
@Slf4j
public class BannerController {

	@Autowired
	BannerService bannerService;
	
	@Autowired
	ProductService productService;
	
	@GetMapping
	public Flux<Banner> getAllBanner(){
		log.info("banner => "+bannerService.getAllBanner());
	
		//if(bannerService.getAllBanner().map(data->data.getProduct_id()) != null) {
			//productService.getAllProducts();
		//}
		
		return bannerService.getAllBanner();
	}
	
	@PostMapping
	public Mono<Banner> saveBanner(@Valid @RequestBody Banner banner){
		log.info("banner saving ",banner);
		if(banner.getProduct_id() != null) {
			return this.productService.saveProduct(banner.getProduct_id())
					.flatMap(productData->{
						System.out.println(productData);
						banner.setProduct_id(productData);
						//banner.setButtonText(banner.getButtonText());
						return this.bannerService.saveBanner(banner);
					});
		}
		return bannerService.saveBanner(banner);
	}
	
	@PutMapping("/{id}")
	public Mono<ResponseEntity<Banner>> updateBanner(@PathVariable(value="id") String id, @Valid @RequestBody Banner banner){
		if(banner.getProduct_id() != null) {
			
		}
		return bannerService.updateBanner(id, banner);
	}
	
	@DeleteMapping("/{id}")
	public Mono<ResponseEntity<Void>> deleteBanner(@PathVariable(value="id") String id){
		return bannerService.deleteBanner(id);
	}
}
