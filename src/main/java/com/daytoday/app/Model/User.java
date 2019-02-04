package com.daytoday.app.Model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class User{

    private @Id @GeneratedValue Long id;
    private String firstName;
    private String lastName;
    private String username;
    private String email;
    private String password;
    private LocalDate birthdate;

    private User(){}

    public User(String firstName, String lastName, String username, String email, String password, LocalDate birthdate){
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.birthdate = birthdate;
    }
}