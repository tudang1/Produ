package com.example.backend.repository;

import com.example.backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    List<Product> findByTitleContains(String title);

    List<Product> findByCategory_NameEquals(String name);

    List<Product> findByCategory_NameEqualsAndId(String name, Integer id);



}