package com.example.backend.repository;

import com.example.backend.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
//    List<Category> findByNameEquals(String name);
//
    Optional<Object> findByName(String name);
//
//    Set<Category> findByIds(Set<Integer> categoryId);
}