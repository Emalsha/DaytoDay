package com.daytoday.app;

import com.daytoday.app.Model.Card;
import com.daytoday.app.Model.Feature;
import com.daytoday.app.Repository.CardRepository;
import com.daytoday.app.Repository.FeatureRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner{
    private final FeatureRepository repository;

    @Autowired
    public DatabaseLoader(FeatureRepository repository){
        this.repository = repository;
    }

    @Override
    public void run(String... args) throws Exception {
        // this.repository.save(new Card(9110,"First Day",0400,1100));
        // this.repository.save(new Card(9111,"Second Day",0400,1000));
        this.repository.save(new Feature((long) 1, "This is first feature", "$", "left"));
        // Long cardId, String featureName, String symbol, String position
    }


}