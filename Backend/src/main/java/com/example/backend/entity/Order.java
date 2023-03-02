package com.example.backend.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "status")
    private Boolean status;

    @Column(name = "create_at")
    private LocalDateTime createAt;

    @Column(name = "address")
    private String address;

    @ManyToMany
    @JoinTable(name = "orders_order_items",
            joinColumns = @JoinColumn(name = "order_id"),
            inverseJoinColumns = @JoinColumn(name = "order_items_id"))
    private Set<OrderItem> orderItems = new LinkedHashSet<>();


    @PrePersist
    public void prePersist() {
        status=false;
        createAt=LocalDateTime.now();
        for (OrderItem o : orderItems) {
            o.setStatus(false);
        }
    }
    @PreRemove
    public void preRemove() {
        for (OrderItem o : orderItems) {
            o.getOrders().remove(this);
        }
    }

}