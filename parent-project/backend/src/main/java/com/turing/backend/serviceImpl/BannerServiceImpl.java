package com.turing.backend.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.turing.backend.dao.BannerDao;
import com.turing.backend.model.Banner;
import com.turing.backend.service.BannerService;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class BannerServiceImpl implements BannerService{

	@Autowired
	BannerDao bannerDao;
	
	@Override
	public Mono<Banner> saveBanner(Banner banner) {
		// TODO Auto-generated method stub
		return bannerDao.save(banner);
	}

	@Override
	public Flux<Banner> getAllBanner() {
		// TODO Auto-generated method stub
		return bannerDao.findAll();
	}

	@Override
	public Mono<ResponseEntity<Banner>> updateBanner(String id, Banner banner) {
		// TODO Auto-generated method stub
		return bannerDao.findById(id).flatMap((existBanner)->{
			existBanner.setImage(banner.getImage());
			existBanner.setButtonText(banner.getButtonText());
			existBanner.setProduct(banner.getProduct());
			existBanner.setDesc(banner.getDesc());
			existBanner.setSmallText(banner.getSmallText());
			existBanner.setMidText(banner.getMidText());
			existBanner.setLargeText1(banner.getLargeText1());
			existBanner.setLargeText2(banner.getLargeText2());
			existBanner.setDiscount(banner.getDiscount());
			existBanner.setSaleTime(banner.getSaleTime());
			return bannerDao.save(existBanner);
		}).map((updateBanner)->new ResponseEntity<>(updateBanner,HttpStatus.OK))
				.defaultIfEmpty(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}

	@Override
	public Mono<ResponseEntity<Void>> deleteBanner(String id) {
		// TODO Auto-generated method stub
		return bannerDao.findById(id)
				.flatMap((deleteBanner)->bannerDao.delete(deleteBanner))
				.then(Mono.just(new ResponseEntity<Void>(HttpStatus.OK)))
				.defaultIfEmpty(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}

}
