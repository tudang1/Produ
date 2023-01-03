package com.example.backend.security;

import com.example.backend.entity.Account;
import com.example.backend.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    private AccountRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<Account> userOptional = userRepository.findByEmail(email);
        if(userOptional.isEmpty()) {
            throw new UsernameNotFoundException("Not found user with email = " + email);
        }

        return new CustomUserDetail(userOptional.get());
    }
}
