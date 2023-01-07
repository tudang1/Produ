package com.example.backend.service;

import com.example.backend.entity.Category;
import com.example.backend.entity.Image;
import com.example.backend.entity.Product;
import com.example.backend.exception.NotFoundException;
import com.example.backend.repository.CategoryRepository;
import com.example.backend.repository.ImageRepository;
import com.example.backend.repository.ProductRepository;
import com.example.backend.request.UpsertProductRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ImageRepository imageRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Integer id) {
        return productRepository.findById(id).orElseThrow(() -> {
            throw new NotFoundException("Not found product with id = " + id);
        });
    }

    //create
    public Product createProduct(UpsertProductRequest request) {
//        Set<Category> categories = categoryRepository.findByIds(request.getCategoryId());
        Category category = categoryRepository.findById(request.getCategoryId()).orElseThrow(() -> {
            throw new NotFoundException("Not found category with id = " + request.getCategoryId());
        });

        Image newImage = Image.builder().imageUrl(request.getImageUrl()).build();
        imageRepository.save(newImage);

        // Tạo product
        Product product = Product.builder()
                .title(request.getTitle())
                .price(request.getPrice())
                .description(request.getDescription())
                .image(newImage)
                .category(category)
                .build();

        // Trả về product sau khi tạo
        return productRepository.save(product);
    }

    //update
    public Product updateProduct(Integer id, UpsertProductRequest request) {
        Product product = productRepository.findById(id).orElseThrow(()->{
            throw new NotFoundException("Not found product with id = " + id);
        });

        Category category = categoryRepository.findById(request.getCategoryId()).orElseThrow(() -> {
            throw new NotFoundException("Not found category with id = " + request.getCategoryId());
        });

        Image newImage = Image.builder().imageUrl(request.getImageUrl()).build();
        imageRepository.save(newImage);

        product.setTitle(request.getTitle());
        product.setCategory(category);
        product.setPrice(request.getPrice());
        product.setDescription(request.getDescription());
        product.setImage(newImage);

        return productRepository.save(product);
    }

    //delete
    public void deleteProductById(Integer id) {
        Product product = productRepository.findById(id).orElseThrow(()->{
            throw new NotFoundException("Not found product with id = " + id);
        });
        productRepository.delete(product);
    }
}
