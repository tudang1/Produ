package com.example.backend.controller;

import com.example.backend.entity.Category;
import com.example.backend.entity.Product;
import com.example.backend.service.WebService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1")
public class WebController {
    @Autowired
    private WebService webService;

    @GetMapping("/products")
    public List<Product> getAllProducts(){
        return webService.getAllProducts();
    }

    //tìm kiếm products theo title
    @GetMapping("/products")
    public List<Product> getProducts(@RequestParam(required = false) String title){
        return webService.getProducts(title);
    }

    //tìm kiếm nước hoa theo giới tính
    @GetMapping("/man")
    public List<Product> getFragranceOfMan(){
        return webService.getFragranceOfMan();
    }
    
    @GetMapping("/Woman")
    public List<Product> getFragranceOfWoman(){
        return webService.getFragranceOfWoman();
    }

    // gọi tất ca category
    @GetMapping("/categories")
    public List<Category> getCategories(){
        return webService.getCategories();
    }


}
