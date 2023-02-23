package com.example.backend.service;

import com.example.backend.entity.OrderItem;
import com.example.backend.exception.NotFoundException;
import com.example.backend.repository.OrderItemRepository;
import com.example.backend.request.UpsertOrderItemRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderItemService {
    @Autowired
    private OrderItemRepository orderItemRepository;

    public List<OrderItem> getAllByUserIdStatusTrue(Integer userId) {
        return orderItemRepository.findByAccount_IdAndStatusIsTrue(userId);
    }

    public OrderItem createOrderItem(UpsertOrderItemRequest request) {
        OrderItem newOrderItem=new OrderItem();
        newOrderItem.setProduct(request.getProduct());
        newOrderItem.setAmount(request.getAmount());
        newOrderItem.setAccount(request.getAccount());

        return orderItemRepository.save(newOrderItem);
    }

    public OrderItem updateOrderItem(Integer id, UpsertOrderItemRequest request) {
        OrderItem orderItem = orderItemRepository.findById(id).orElseThrow(() -> {
            throw new NotFoundException("Not found orderItem with id = " + id);
        });
        orderItem.setAmount(request.getAmount());
        return orderItemRepository.save(orderItem);
    }

    public void deleteOrderItem(Integer id) {
        OrderItem orderItem = orderItemRepository.findById(id).orElseThrow(() -> {
            throw new NotFoundException("Not found orderItem with id = " + id);
        });
        orderItemRepository.delete(orderItem);
    }
}
