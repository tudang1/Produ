package com.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "cart")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Integer id;

    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL,
            fetch = FetchType.LAZY,orphanRemoval = true)
    private Set<ProductInOrder> productInOrders = new LinkedHashSet<>();

    @OneToOne(orphanRemoval = true)
    @JoinColumn(name = "account_id")
    @MapsId
    @JsonIgnore
    private Account account;

    @Override
    public String toString() {
        return "Cart{" +
                "cartId=" + id +
                ", products=" + productInOrders +
                '}';
    }
}