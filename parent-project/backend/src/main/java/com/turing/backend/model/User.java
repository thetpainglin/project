package com.turing.backend.model;

import java.util.List;
import java.util.Set;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

import javax.validation.constraints.Size;

import org.springframework.data.mongodb.core.mapping.Document;

@Jacksonized 
@Builder
@JsonIgnoreProperties(ignoreUnknown = true)
@Document(collection = "users")
@Data
public class User {

  @Id
  private String id;

  @Size(min = 4, max = 255, message = "Minimum username length: 4 characters")
  private String username;

 
  private String email;

  @Size(min = 4, message = "Minimum password length: 8 characters")
  private String password;

 
  private List<Role> roles;

	  
}
