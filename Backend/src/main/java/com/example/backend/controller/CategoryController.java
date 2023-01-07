package com.example.backend.controller;

import com.example.backend.entity.Category;
import com.example.backend.request.UpsertCategory;
import com.example.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/admin")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    //gọi tất cả
    @GetMapping("/categories")
    public List<Category> getCategory(){
        return categoryService.getAllCategories();
    }

    //lấy chi tiết
    @GetMapping("/categories/{id}")
    public Category getCategoriesById(@PathVariable Integer id){
        return categoryService.getCategoriesById(id);
    }

    // tạo
    @PostMapping("categories")
    public Category createCategories(@RequestBody UpsertCategory request){
        return categoryService.createCategories(request);
    }

    // cập nhập
    @PutMapping("/categories/{id}")
    public Category updateCategories(@PathVariable Integer id,@RequestBody UpsertCategory request){
        return categoryService.updateCategory(id,request);
    }

    // xóa
    @DeleteMapping("categories/{id}")
    public void deleteCategories(@PathVariable Integer id){
        categoryService.deleteCategoryById(id);
    }

}
