package com.example.backend.repository;

import com.example.backend.entity.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Set;

public interface OrderItemRepository extends JpaRepository<OrderItem, Integer> {
    List<OrderItem> findByAccount_IdAndStatusIsTrue(Integer id);


    Set<OrderItem> findByIdIn(List<Integer> orderItemIds);
}