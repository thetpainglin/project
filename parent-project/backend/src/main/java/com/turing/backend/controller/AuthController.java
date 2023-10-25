package com.turing.backend.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.turing.backend.dto.Token;
import com.turing.backend.model.User;
import com.turing.backend.service.UserService;

@RestController
@RequestMapping
@CrossOrigin	
public class AuthController {
	  @Autowired
	  private UserService userService;

	  @PostMapping("/register")
	  public String register(@Valid @RequestBody User user) {
	    return userService.register(user);
	  }

	  @PostMapping("/login")
	  public Token login(@Valid @RequestBody User user) {
		Token token = new Token();
		String tok = userService.login(user.getUsername(), user.getPassword());
		token.setToken(tok);
	    return token;
	  }

	 
}
