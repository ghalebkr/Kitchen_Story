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

import com.onlinetest.model.User;
import com.onlinetest.repo.UserRepo;

@RestController
@CrossOrigin(origins ="http://localhost:4200")

@RequestMapping("user")
public class UserController {

	@Autowired
	UserRepo UP;
	
	@GetMapping("all")
	public List<User> getAll()
	{
		List<User> a= (List<User>) UP.findAll();
		return a;
	}
	
	
	@PostMapping("add")
	public User addBook(@RequestBody User User)
	{
		return UP.save(User);
	}
	
	// get particular student by their ID
		@GetMapping("user/{id}")
		public Optional<User> getUserById(@PathVariable int id)
		{
			return UP.findById(id);
		}
		
		// update existing student 
		@PutMapping("update/{id}")
		public User updateUser(@RequestBody User User)
		{
			return UP.save(User);
		}
		
		// delete particular student from database
		@DeleteMapping("delete/{id}")
		public void deleteUser(@PathVariable int id)
		{
			UP.deleteById(id);
		}

}
