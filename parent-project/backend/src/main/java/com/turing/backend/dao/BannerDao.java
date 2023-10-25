package com.turing.backend.dao;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

import com.turing.backend.model.Banner;

@Repository
public interface BannerDao extends ReactiveMongoRepository<Banner,String>{

}
