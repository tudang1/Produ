package com.example.backend.controller;

import com.example.backend.entity.Order;
import com.example.backend.request.UpsertOrderRequest;
import com.example.backend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api")
public class OrderController {
    @Autowired
    private OrderService orderService;

    //get all Order
    @GetMapping("admin/orders")
    public List<Order> getAllOrderAdmin(){
        return orderService.getAllOrderAdmin();
    }

    // get OrderbyId phia admin
    @GetMapping("admin/orders/{orderId}")
    public Order getOrderByIdAdmin(@PathVariable Integer orderId){
        return orderService.getOrderByIdAdmin(orderId);
    }

    //confirmOrder
    @PutMapping("admin/orders/{id}")
    public Order confirmOrder(@PathVariable Integer id){
        return orderService.confirmOrder(id);
    }

    //get OrderbyUser phia User
    @GetMapping("user/orders/{userId}")
    public List<Order> getHistoryOrderUser(@PathVariable Integer userId){
        return orderService.getHistoryOrderUser(userId);
    }

    //tao order
    @PostMapping("user/orders")
    public Order createOrderUser(@RequestBody UpsertOrderRequest request) {
        return orderService.createOrderUser(request);
    }

    //delete order
    @DeleteMapping("user/orders/{id}")
    public void deleteOrderUser(@PathVariable Integer id){
        orderService.deleteOrderUser(id);
    }

}
