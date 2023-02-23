package com.example.backend.repository;

import com.example.backend.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Integer> {
    List<Order> findByOrderByStatusAscCreateAtAsc();

    List<Order> findByAccount_IdOrderByCreateAtAsc(Integer id);


}