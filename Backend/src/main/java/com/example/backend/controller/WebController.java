package com.example.backend.controller;

import com.example.backend.entity.Category;
import com.example.backend.entity.Product;
import com.example.backend.service.WebService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    //tìm kiếm product theo category
    @GetMapping("/products/{category}")
    public List<Product> getProductsByCategory(@PathVariable String category){
        return webService.getProductsByCategory(category);
    }

    //tìm kiếm product theo category
    @GetMapping("/products/{category}/{id}")
    public List<Product> getProductsByCategoryAndId(@PathVariable String category,
                                               @PathVariable Integer id){
        return webService.getProductsByCategoryAndId(category,id);
    }

    //tìm kiếm products theo title
//    @GetMapping("/products")
//    public List<Product> getProducts(@RequestParam(required = false) String title){
//        return webService.getProducts(title);
//    }

    //tìm kiếm nước hoa theo giới tính
    @GetMapping("/man")
    public List<Product> getFragranceOfMan(){
        return webService.getFragranceOfMan();
    }

    @GetMapping("/woman")
    public List<Product> getFragranceOfWoman(){
        return webService.getFragranceOfWoman();
    }

    // gọi tất ca category
    @GetMapping("/categories")
    public List<Category> getCategories(){
        return webService.getCategories();
    }


}