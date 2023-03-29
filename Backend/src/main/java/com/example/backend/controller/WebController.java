package com.example.backend.controller;

import com.example.backend.entity.Account;
import com.example.backend.entity.Category;
import com.example.backend.entity.Product;
import com.example.backend.request.CreateAccountRequest;
import com.example.backend.service.AccountService;
import com.example.backend.service.WebService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1")
public class WebController {
    @Autowired
    private WebService webService;

    @Autowired
    private AccountService accountService;
//    @GetMapping("/products")
//    public List<Product> getAllProducts(){
//        return webService.getAllProducts();
//    }

//    //tìm kiếm product theo category
//    @GetMapping("/products/{category}")
//    public List<Product> getProductsByCategory(@PathVariable String category){
//        return webService.getProductsByCategory(category);
//    }

    //tim kiếm product theo category va product Name
    @GetMapping("/products")
    public List<Product> getProductsByCategory(@RequestParam(required = false) String category,
                                               @RequestParam(required = false) String search){
        return webService.getProductsByCategory(search,category);
    }

    //tìm kiếm product theo category
    @GetMapping("/products/{category}/{id}")
    public List<Product> getProductsByCategoryAndId(@PathVariable String category,
                                               @PathVariable Integer id){
        return webService.getProductsByCategoryAndId(category,id);
    }

    //tìm kiếm products theo id
    @GetMapping("/products/{id}")
    public Product getProductById(@PathVariable Integer id){
        return webService.getProductById(id);
    }

    // gọi tất ca category
    @GetMapping("/categories")
    public List<Category> getCategories(){
        return webService.getCategories();
    }

    // tao account
    @PostMapping("/register")
    public Account createAcc(@RequestBody CreateAccountRequest request){
        return accountService.createAccountByAny(request);
    }
}
