package com.example.backend.repository;

import com.example.backend.entity.OrderMain;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderMainRepository extends JpaRepository<OrderMain, Integer> {
}