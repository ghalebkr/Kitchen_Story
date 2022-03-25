package com.onlinetest.repo;

import org.springframework.data.repository.CrudRepository;

import com.onlinetest.model.Cart;
public interface CartRepo extends CrudRepository<Cart,Integer>
 {

}
