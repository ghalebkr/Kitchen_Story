package com.onlinetest.repo;

import org.springframework.data.repository.CrudRepository;

import com.onlinetest.model.User;

public interface UserRepo extends CrudRepository<User,Integer>
 {

}
