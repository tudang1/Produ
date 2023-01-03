package com.example.backend.repository;

import com.example.backend.entity.Account;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AuthResponse implements Serializable {
    private Account account;
    private String token;
    @JsonProperty("isAuthenticated")
    private boolean isAuthenticated;
}