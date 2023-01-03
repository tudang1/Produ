package com.example.backend.controller;

import com.example.backend.repository.AuthResponse;
import com.example.backend.request.LoginRequest;
import com.example.backend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("api/auth")
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("handle-login")
    public AuthResponse login(@RequestBody LoginRequest request) {
        return authService.login(request);
    }

    @GetMapping("handle-logout")
    public void logout(HttpSession session) {
        authService.logout(session);
    }
}
