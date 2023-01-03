package com.example.backend.service;

import com.example.backend.entity.Account;
import com.example.backend.repository.AccountRepository;
import com.example.backend.request.UpsertAccount;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccountService {
    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<Account> getAccounts() {
        return accountRepository.findAll();
    }
    public Optional<Account> getAccountByEmail(String email) {
        return accountRepository.findByEmail(email);
    }

    public Account createAccount(UpsertAccount request) {
        Account newAccount = Account.builder()
                .name(request.getName())
                .email(request.getEmail())
                .avatar(request.getAvatar())
                .password(passwordEncoder.encode(request.getPassword()))
                .roles(request.getRoles())
                .build();
        accountRepository.save(newAccount);
        return newAccount;
    }

    public Account updateAccount(Integer id, UpsertAccount request) {
        return null;
    }

    public void deleteAccount(Integer id) {
    }


}
