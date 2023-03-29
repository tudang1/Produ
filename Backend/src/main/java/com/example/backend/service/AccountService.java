package com.example.backend.service;

import com.example.backend.entity.Account;
import com.example.backend.exception.BadRequestException;
import com.example.backend.exception.NotFoundException;
import com.example.backend.repository.AccountRepository;
import com.example.backend.request.CreateAccountRequest;
import com.example.backend.request.UpsertAccount;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class AccountService {
    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private ImageService imageService;

    public List<Account> getAccounts() {
        return accountRepository.findAll();
    }
    public Optional<Account> getAccountByEmail(String email) {
        return accountRepository.findByEmail(email);
    }

    //createAccountByAdmin
    public Account createAccountByAdmin(CreateAccountRequest request) {
        if (accountRepository.findByEmail(request.getEmail()).isPresent()){
            throw new BadRequestException("email = " + request.getEmail() + " is existed");
        }

        Account newAccount = Account.builder()
                .name(request.getName())
                .email(request.getEmail())
                .phone(request.getPhone())
                .address(request.getAddress())
                .active(true)
                .password(passwordEncoder.encode(request.getPassword()))
                .roles(request.getRoles())
                .build();
        accountRepository.save(newAccount);
        return newAccount;
    }

    //createAccountByAny
    public Account createAccountByAny(CreateAccountRequest request) {
        if (accountRepository.findByEmail(request.getEmail()).isPresent()){
            throw new BadRequestException("email = " + request.getEmail() + " is existed");
        }

        Account newAccount = Account.builder()
                .name(request.getName())
                .email(request.getEmail())
                .phone(request.getPhone())
                .address(request.getAddress())
                .active(true)
                .password(passwordEncoder.encode(request.getPassword()))
                .roles(List.of("USER"))
                .build();
        accountRepository.save(newAccount);
        return newAccount;
    }

    //updateAccountByAdmin
    public Account updateAccountByAdmin(Integer id, UpsertAccount request) {
        Account account = accountRepository.findById(id).orElseThrow(()->{
            throw new NotFoundException("Not found user with id = " + id);
        });

        account.setAddress(request.getAddress());
        account.setName(request.getName());
        account.setPhone(request.getPhone());

        return accountRepository.save(account);
    }

    //delete
    public void deleteAccount(Integer id) {
        Account account = accountRepository.findById(id).orElseThrow(()->{
            throw new NotFoundException("Not found user with id = " + id);
        });
        accountRepository.delete(account);
    }

    // upload avatar
    public String uploadAvatar(Integer id, MultipartFile file) {
        Account account = accountRepository.findById(id).orElseThrow(()->{
            throw new NotFoundException("Not found user with id = " + id);
        });

        String filePath = imageService.uploadAvatarAcc(file,account);
        account.setAvatar(filePath);
        accountRepository.save(account);

        return filePath;
    }

    public Account getAccountById(Integer id) {
        return accountRepository.findById(id).orElseThrow(() -> {
            throw new NotFoundException("Not found product with id = " + id);
        });
    }
}
