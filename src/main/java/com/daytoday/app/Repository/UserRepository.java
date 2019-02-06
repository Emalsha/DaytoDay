package com.daytoday.app.Repository;

import com.daytoday.app.Model.User;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User,Long>{
    public User findByUsername(String username);
}