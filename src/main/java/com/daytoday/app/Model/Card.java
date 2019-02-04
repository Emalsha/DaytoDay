package com.daytoday.app.Model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Card {

    private @Id @GeneratedValue Long id;
    private Date cardDate;
    private int dayNumber;
    private String title;
    private int wakeUpAt;
    private int sleepAt;

    private Card(){}

    public Card( int dayNumber, String title, int wakeUpAt, int sleepAt){
        this.cardDate = new Date();
        this.dayNumber = dayNumber;
        this.title = title;
        this.wakeUpAt = wakeUpAt;
        this.sleepAt = sleepAt;
    }

}