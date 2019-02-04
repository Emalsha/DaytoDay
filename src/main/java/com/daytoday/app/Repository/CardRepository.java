package com.daytoday.app.Repository;

import com.daytoday.app.Model.Card;

import org.springframework.data.repository.CrudRepository;

public interface CardRepository extends CrudRepository<Card, Long> {

}