package com.daytoday.app.Controller;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

import com.daytoday.app.Model.Card;
import com.daytoday.app.Repository.CardRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;

@Controller
public class CardController {

    /**
     *
     */

    private static final String sheduleTime = "0 0 0 * * *";
    private static Logger log = LoggerFactory.getLogger(CardController.class);

    @Autowired
    private CardRepository cardRepository;

    @Scheduled(cron = sheduleTime)
    public void CreateCard() {
        LocalDate bday = LocalDate.parse("1994-02-24"); // TODO : to get from current user
        LocalDate today = LocalDate.now();

        long numberOfDays = ChronoUnit.DAYS.between(bday,today);
        Card card = new Card(numberOfDays, "Wait for it...", 4, 0);
        cardRepository.save(card);

    }

    @Scheduled(cron = sheduleTime)
    public void CheckMissedCard() {
        
        LocalDate checkDate = LocalDate.parse("2019-02-09"); // Registered Date
        LocalDate today = LocalDate.now();
        while(today.compareTo(checkDate) > 0){
            
            if(cardRepository.findByCardDate(checkDate) == null){
                log.info("CREATE OLD CARD : " + checkDate.toString());
                LocalDate bday = LocalDate.parse("1994-02-24"); // TODO : to get from current user
                long numberOfDays = ChronoUnit.DAYS.between(bday,checkDate);
                Card card = new Card(numberOfDays, "Past cards...", 0, 0);
                cardRepository.save(card);
            }
            checkDate = checkDate.plusDays(1);
        }

    }

}