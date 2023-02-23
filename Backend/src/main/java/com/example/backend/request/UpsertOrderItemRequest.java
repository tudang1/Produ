package com.example.backend.request;

import com.example.backend.entity.Account;
import com.example.backend.entity.Product;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UpsertOrderItemRequest {
    private Product product;

    private Integer amount;

    private Account account;
}
