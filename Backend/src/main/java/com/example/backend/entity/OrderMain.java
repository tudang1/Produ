package com.example.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.LinkedHashSet;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@DynamicUpdate
@Entity
@Table(name = "order_main")
public class OrderMain {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "buyer_id")
    private Integer buyerId;

    @Column(name = "buyer_email")
    private String buyerEmail;

    @Column(name = "buyer_name")
    private String buyerName;

    @Column(name = "buyer_phone")
    private String buyerPhone;

    @Column(name = "buyer_address")
    private String buyerAddress;


    // Total Amount
    @Column(name = "order_amount")
    private BigDecimal orderAmount;

    @ColumnDefault("0")
    @Column(name = "order_status")
    private Integer orderStatus;

    @CreationTimestamp
    private LocalDateTime createTime;

    @UpdateTimestamp
    private LocalDateTime updateTime;

    @OneToMany(mappedBy = "orderMain", cascade = CascadeType.ALL,
            fetch = FetchType.LAZY,orphanRemoval = true)
    private Set<ProductInOrder> productInOrders = new LinkedHashSet<>();

    public Set<ProductInOrder> getProductInOrders() {
        return productInOrders;
    }

    public void setProductInOrders(Set<ProductInOrder> productInOrders) {
        this.productInOrders = productInOrders;
    }

    public OrderMain(Account buyer) {
        this.buyerEmail = buyer.getEmail();
        this.buyerName = buyer.getName();
        this.buyerPhone = buyer.getPhone();
        this.buyerAddress = buyer.getAddress();
        this.orderAmount = buyer.getCart().getProductInOrders().stream().map(item -> item.getProductPrice().multiply(new BigDecimal(item.getProductCount())))
                .reduce(BigDecimal::add)
                .orElse(new BigDecimal(0));
        this.orderStatus = 0;

    }

}