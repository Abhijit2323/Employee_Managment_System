package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.DTO.LoginDTO;
import com.entity.User;
import com.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {
	@Autowired
	UserService service;

	@PostMapping("/register")
	public String register(@RequestBody User newuser) {
		return service.registerUser(newuser);
	}

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody LoginDTO dto) { // ResponseEntity is used to return any type of data <?>
																// ?tells that we can return any type of data.
		if (dto.getUsername().equals("Admin") && dto.getPassword().equals("admin@123")) {
			User u = new User();
			u.setUsername("Admin");
			u.setRole("Admin");
			return ResponseEntity.ok(u);
		} else {
			User existinguser = service.login(dto);
			if (existinguser != null) {
				return ResponseEntity.ok(existinguser);
			} else {
				return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
			}
		}
	}
}
