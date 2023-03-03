package com.example.backend.service;

import com.example.backend.entity.Order;
import com.example.backend.entity.OrderItem;
import com.example.backend.exception.BadRequestException;
import com.example.backend.exception.NotFoundException;
import com.example.backend.repository.OrderItemRepository;
import com.example.backend.repository.OrderRepository;
import com.example.backend.request.UpsertOrderRequest;
import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Set;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

    //get all ddc sap xep
    public List<Order> getAllOrderAdmin() {
        return orderRepository.findByOrderByStatusAscCreateAtAsc();
    }

    public Order getOrderByIdAdmin(Integer orderId) {
        return orderRepository.findById(orderId).orElseThrow(()->{
            throw new NotFoundException("Not found order with id = "+orderId);
        });
    }

    public Order confirmOrder(Integer id) {
        Order order = orderRepository.findById(id).orElseThrow(()->{
            throw new NotFoundException("Not found order with id = "+ id);
        });
        order.setStatus(true);
        return orderRepository.save(order);
    }

    // phía User
    public List<Order> getHistoryOrderUser(Integer userId) {
//        List<Order> test = orderRepository.findByAccount_IdOrderByCreateAtAsc(userId);
        List<Order> allOrders = orderRepository.findAll();

        List<Order> ordersByUser = new ArrayList<>();

        for (Order order : allOrders) {
            for (OrderItem orderItem : order.getOrderItems()) {
                if (orderItem.getAccount().getId()
                        .equals(userId)) {
                    ordersByUser.add(order);
                    break;
                }
            }
            ordersByUser.sort(new Comparator<Order>() {
                @Override
                public int compare(Order o1, Order o2) {
                    return o2.getCreateAt().compareTo(o1.getCreateAt());
                }
            });
        }
        return ordersByUser;
    }

    public Order createOrderUser(UpsertOrderRequest request) {
        Order order = new Order();
        if (request.getAddress().equals("")){
            throw new BadRequestException("Bạn cần nhập địa chỉ");
        }
        if (request.getOrderItemIds().size()==0){
            throw new BadRequestException("Cần tối thiểu 1 sản phẩm để đặt hàng");
        }
        order.setAddress(request.getAddress());
        Set<OrderItem> orderItems = orderItemRepository.findByIdIn(request.getOrderItemIds());
        order.setOrderItems(orderItems);
        return orderRepository.save(order);
    }

    public void deleteOrderUser(Integer id) {
        Order order = orderRepository.findById(id).orElseThrow(()->{
            throw new NotFoundException("Not found Order with id = " + id);
        });
        orderRepository.delete(order);
    }
}
