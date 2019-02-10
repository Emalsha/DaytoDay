package com.daytoday.app.Repository;

import com.daytoday.app.Model.Feature;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface FeatureRepository extends MongoRepository<Feature,Long>{}