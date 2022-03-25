package com.onlinetest.repo;

import org.springframework.data.repository.CrudRepository;

import com.onlinetest.model.Product;

public interface ProductRepo extends CrudRepository<Product,Integer>
 {

}
