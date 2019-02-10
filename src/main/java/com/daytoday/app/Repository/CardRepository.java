package com.daytoday.app.Repository;

import java.time.LocalDate;

import com.daytoday.app.Model.Card;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface CardRepository extends MongoRepository<Card, Long> {
    public Card findByDayNumber(int daynumber);
    public Card findByCardDate(LocalDate date);
}