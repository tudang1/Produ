package com.example.backend.service;

import com.example.backend.entity.Category;
import com.example.backend.entity.Product;
import com.example.backend.repository.CategoryRepository;
import com.example.backend.repository.ProductRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class WebService {
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public List<Product> getProducts(String title) {
        log.info("title {}", title);
        return productRepository.findByTitleContains(title);
    }

    public List<Category> getCategories() {
        return categoryRepository.findAll();
    }

    public List<Product> getFragranceOfMan() {
        return productRepository.findByGenderTrue();
    }

    public List<Product> getFragranceOfWoman() {
        return productRepository.findByGenderFalse();
    }
}
