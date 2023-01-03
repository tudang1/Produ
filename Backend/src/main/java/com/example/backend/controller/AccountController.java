package com.example.backend.controller;

import com.example.backend.entity.Account;
import com.example.backend.request.UpsertAccount;
import com.example.backend.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/admin")
public class AccountController {
    @Autowired
    private AccountService accountService;

    //1.Lấy danh sách Account
    @GetMapping("users")
    public List<Account> accounts(){
        return accountService.getAccounts();
    }

    //2. lấy chi tiết Account by email
    @GetMapping("users/{email}")
    public Optional<Account> getAccountByEmail(@PathVariable String email){
        return accountService.getAccountByEmail(email);
    }

    //3. tạo mới
    @PostMapping("users")
    public Account createAccount(@RequestBody UpsertAccount request){
        return accountService.createAccount(request);
    }

    //4. cập nhật
    @PutMapping("users/{id}")
    public Account updateAccount(@PathVariable Integer id, @RequestBody UpsertAccount request){
        return accountService.updateAccount(id,request);
    }

    //5.xóa
    @DeleteMapping("users/{id}")
    public void deleteAccount(@PathVariable Integer id){
        accountService.deleteAccount(id);
    }
}
