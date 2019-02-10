package com.daytoday.app.Model;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class Feature{

    private @Id String id;
    private String cardId;
    private String featureName;
    private String symbol;
    private String position;

    private Feature(){}

    public Feature(String cardId, String featureName, String symbol, String position){
        this.cardId = cardId;
        this.featureName = featureName;
        this.symbol = symbol;
        this.position = position;
    }
    
}