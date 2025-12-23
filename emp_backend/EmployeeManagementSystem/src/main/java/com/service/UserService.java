package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.DTO.LoginDTO;
import com.entity.User;
import com.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository urep;

	public String registerUser(User newuser) {
		User existingUser = urep.findByUsername(newuser.getUsername());
		if (existingUser == null) {
			urep.save(newuser);
			return "Registration Successful";
		} else {
			return "Username already exists, please enter new username.";
		}
	}

	public User login(LoginDTO dto) {
		User existingUser = urep.findByUsername(dto.getUsername());
		if (existingUser == null) {
			return null;
		} else {
			if (existingUser.getPassword().equals(dto.getPassword())) {
				return existingUser;
			} else {
				return null;
			}
		}
	}
}
