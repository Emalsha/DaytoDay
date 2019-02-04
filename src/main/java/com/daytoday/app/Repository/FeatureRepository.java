package com.daytoday.app.Repository;

import com.daytoday.app.Model.Feature;

import org.springframework.data.repository.CrudRepository;

public interface FeatureRepository extends CrudRepository<Feature,Long>{}