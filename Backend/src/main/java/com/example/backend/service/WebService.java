package com.example.backend.service;

import com.example.backend.entity.Category;
import com.example.backend.entity.Product;
import com.example.backend.exception.NotFoundException;
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

    //tim product theo category
    public List<Product> getProductsByCategory(String category) {
        log.info("category {}", category);
        return productRepository.findByCategory_NameEquals(category);
    }

    public List<Product> getProductsByCategoryAndId(String category, Integer id) {
        return productRepository.findByCategory_NameEqualsAndId(category,id);
    }

    public Product getProductById(Integer id) {
        return productRepository.findById(id).orElseThrow(() -> {
            throw new NotFoundException("Not found Product with id = " + id);
        });
    }
}
