package com.example.backend.controller;

import com.example.backend.entity.Product;
import com.example.backend.repository.ProductRepository;
import com.example.backend.request.UpsertProductRequest;
import com.example.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/admin")
public class ProductController {
    @Autowired
    private ProductService productService;

    //gọi tất cả
    @GetMapping("/products")
    public List<Product> getProducts(){
        return productService.getAllProducts();
    }

    //lấy chi tiết từng product
    @GetMapping("/products/{id}")
    public Product getProductById(@PathVariable Integer id){
        return productService.getProductById(id);
    }

    // tạo Product
    @PostMapping("products")
    public Product createProduct(@RequestBody UpsertProductRequest request){
        return productService.createProduct(request);
    }

    // cập nhập Product
    @PutMapping("/products/{id}")
    public Product updateProduct(@PathVariable Integer id,@RequestBody UpsertProductRequest request){
        return productService.updateProduct(id,request);
    }

    // xóa Product
    @DeleteMapping("products/{id}")
    public void deleteProduct(@PathVariable Integer id){
        productService.deleteProductById(id);
    }

}
