package com.onlinetest.controller;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onlinetest.model.Cart;
import com.onlinetest.repo.CartRepo;


@RestController
@CrossOrigin(origins ="http://localhost:4200")

@RequestMapping("cart")
public class CartController {

	@Autowired
	CartRepo CR;
	
	@GetMapping("all")
	public List<Cart> getAll()
	{
		List<Cart> a= (List<Cart>) CR.findAll();
		return a;
	}
	
	
	@PostMapping("add")
	public Cart addCart(@RequestBody Cart Cart)
	{
		return CR.save(Cart);
	}
	
	// get particular student by their ID
		@GetMapping("get/{id}")
		public Optional<Cart> getCartById(@PathVariable int id)
		{
			return CR.findById(id);
		}
		
		// update existing student 
		@PutMapping("update/{id}")
		public Cart updateCart(@RequestBody Cart Cart)
		{
			return CR.save(Cart);
		}
		
		// delete particular student from database
		@DeleteMapping("delete/{id}")
		public void deleteCartById(@PathVariable int id)
		{
			CR.deleteById(id);
		}
		
		@DeleteMapping("deleteAll")
		public void deleteCart()
		{
			CR.deleteAll();
		}

}
