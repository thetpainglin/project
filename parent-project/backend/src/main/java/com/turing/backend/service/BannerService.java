package com.turing.backend.service;

import org.springframework.http.ResponseEntity;

import com.turing.backend.model.Banner;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface BannerService {

	Mono<Banner> saveBanner(Banner banner);
	
	Flux<Banner> getAllBanner();
	
	Mono<ResponseEntity<Banner>> updateBanner(String id,Banner banner);
	
	Mono<ResponseEntity<Void>> deleteBanner(String id);
	
}
