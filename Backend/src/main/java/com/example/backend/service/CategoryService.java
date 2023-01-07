package com.example.backend.service;

import com.example.backend.entity.Category;
import com.example.backend.exception.BadRequestException;
import com.example.backend.exception.NotFoundException;
import com.example.backend.repository.CategoryRepository;
import com.example.backend.request.UpsertCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    public Category getCategoriesById(Integer id) {
        return categoryRepository.findById(id).orElseThrow(() -> {
            throw new NotFoundException("Not found category with id = " + id);
        });
    }

    public Category createCategories(UpsertCategory request) {
        if (request.getName() == null || request.getName().equals("")) {
            throw new BadRequestException("Name is required");
        }

        if (categoryRepository.findByName(request.getName()).isPresent()) {
            throw new BadRequestException("Category is exist");
        }

        Category newCategory = Category.builder().name(request.getName()).build();

        return categoryRepository.save(newCategory);
    }

    public Category updateCategory(Integer id, UpsertCategory request) {
        Category category = categoryRepository.findById(id).orElseThrow(() -> {
            throw new NotFoundException("Not found category with id = " + id);
        });

        if (request.getName() == null || request.getName().equals("")) {
            throw new BadRequestException("Name is required");
        }

        if (categoryRepository.findByName(request.getName()).isPresent()
                && !categoryRepository.findByName(request.getName()).get().equals(category.getName())) {
            throw new BadRequestException("Category is exist");
        }

        category.setName(request.getName());
        return categoryRepository.save(category);
    }

    public void deleteCategoryById(Integer id) {
        Category category = categoryRepository.findById(id).orElseThrow(() -> {
            throw new NotFoundException("Not found category with id = " + id);
        });

        categoryRepository.delete(category);
    }
}
