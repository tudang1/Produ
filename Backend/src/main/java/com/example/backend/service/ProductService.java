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
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ImageRepository imageRepository;

    @Autowired
    private ImageService imageService;

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

//        Image newImage = Image.builder().imageUrl(request.getImageUrl()).build();
//        imageRepository.save(newImage);

        // Tạo product
        Product product = Product.builder()
                .title(request.getTitle())
                .price(request.getPrice())
                .description(request.getDescription())
                .thumbnail(request.getThumbnail())
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

//        Image newImage = Image.builder().imageUrl(request.getImageUrl()).build();
//        imageRepository.save(newImage);

        product.setTitle(request.getTitle());
        product.setCategory(category);
        product.setPrice(request.getPrice());
        product.setDescription(request.getDescription());
        product.setThumbnail(request.getThumbnail());
//        product.setImage(newImage);

        return productRepository.save(product);
    }

    //delete
    public void deleteProductById(Integer id) {
        Product product = productRepository.findById(id).orElseThrow(()->{
            throw new NotFoundException("Not found product with id = " + id);
        });
        productRepository.delete(product);
    }
    //upload thumbnail
    public String uploadThumbnail(Integer id, MultipartFile file) {
       Product product = productRepository.findById(id).orElseThrow(() -> {
            throw new NotFoundException("Not found product with id = " + id);
        });

        String path = imageService.uploadImage(file);
        product.setThumbnail(path);

        productRepository.save(product);

        return path;
    }

    // Đọc file
    public byte[] readThumbnail(Integer id, Integer fileId) {
        Product product = productRepository.findById(id).orElseThrow(() -> {
            throw new NotFoundException("Not found product with id = " + id);
        });
        return imageService.readImage(fileId);
    }
    // Xóa file
    public void deleteThumbnail(Integer id, Integer fileId) {
        Product product = productRepository.findById(id).orElseThrow(() -> {
            throw new NotFoundException("Not found product with id = " + id);
        });
        imageService.deleteImage(fileId);
    }
}
