package com.daytoday.app.Repository;

import com.daytoday.app.Model.User;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,Long>{}