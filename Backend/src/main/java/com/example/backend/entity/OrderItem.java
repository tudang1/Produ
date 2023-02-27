package com.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "order_item")
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @Column(name = "amount")
    private Integer amount;

    @ManyToOne
    @JoinColumn(name = "account_id")
    private Account account;

    @Column(name = "status")
    private Boolean status;

    @ManyToMany(mappedBy = "orderItems")
    @JsonIgnore
    private Set<Order> orders = new LinkedHashSet<>();

    @PrePersist
    public void prePersist() {
        status=true;
    }

    @PreRemove
    public void preRemove() {
//        for (Order order:orders){
//            order.getOrderItems().remove(this);
//        }
        this.setAccount(null);
        this.setProduct(null);
    }
}