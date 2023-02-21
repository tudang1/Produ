package com.example.backend.controller;

import com.example.backend.entity.Account;
import com.example.backend.request.CreateAccountRequest;
import com.example.backend.request.UpsertAccount;
import com.example.backend.response.UpdateAvatarResponse;
import com.example.backend.service.AccountService;
import com.example.backend.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/admin")
public class AccountController {
    @Autowired
    private AccountService accountService;

    @Autowired
    private ImageService imageService;

    //1.Lấy danh sách Account
    @GetMapping("/users")
    public List<Account> accounts(){
        return accountService.getAccounts();
    }

    //2. lấy chi tiết Account by email
//    @GetMapping("/users/{email}")
//    public Optional<Account> getAccountByEmail(@PathVariable String email){
//        return accountService.getAccountByEmail(email);
//    }

    @GetMapping("/users/{id}")
    public Account getAccountById(@PathVariable Integer id){
        return accountService.getAccountById(id);
    }

    //3. tạo mới
    @PostMapping("/users")
    public Account createAccountByAdmin(@RequestBody CreateAccountRequest request){
        return accountService.createAccountByAdmin(request);
    }

    //4. cập nhật
    @PutMapping("/users/{id}")
    public Account updateAccountByAdmin(@PathVariable Integer id, @RequestBody UpsertAccount request){
        return accountService.updateAccountByAdmin(id,request);
    }

    //5.xóa
    @DeleteMapping("/users/{id}")
    public void deleteAccount(@PathVariable Integer id){
        accountService.deleteAccount(id);
    }

    // upload avatar
    @PostMapping("/users/{id}/update-avatar")
    public UpdateAvatarResponse updateAvatar(@PathVariable Integer id, @ModelAttribute("file")MultipartFile file){
        return new UpdateAvatarResponse(accountService.uploadAvatar(id,file));
    }

    //read file
//    @GetMapping("/user/{id}/files/{fileId}")
//    public ResponseEntity<?> readFileAvatarAcc(@PathVariable Integer id,@PathVariable Integer fileId){
//
//        byte[] bytes = imageService.readImage(id);
//        return ResponseEntity.ok()
//                .contentType(MediaType.IMAGE_JPEG)
//                .body(bytes);
//    }
}
