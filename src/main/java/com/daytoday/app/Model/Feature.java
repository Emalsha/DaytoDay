package com.daytoday.app.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Feature{

    private @Id @GeneratedValue Long id;
    private Long cardId;
    private String featureName;
    private String symbol;
    private String position;

    private Feature(){}

    public Feature(Long cardId, String featureName, String symbol, String position){
        this.cardId = cardId;
        this.featureName = featureName;
        this.symbol = symbol;
        this.position = position;
    }
    
}