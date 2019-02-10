package com.daytoday.app.Model;

import java.time.LocalDate;
import java.util.Date;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class Card {

    private @Id String id;
    private LocalDate cardDate;
    private long dayNumber;
    private String title;
    private int wakeUpAt;
    private int sleepAt;

    private Card(){}

    public Card( long dayNumber, String title, int wakeUpAt, int sleepAt){
        this.cardDate = LocalDate.now();
        this.dayNumber = dayNumber;
        this.title = title;
        this.wakeUpAt = wakeUpAt;
        this.sleepAt = sleepAt;
    }

    @Override
    public String toString() {
        return "Card : " + cardDate + " - "+ dayNumber + " - " + title;
    }

}