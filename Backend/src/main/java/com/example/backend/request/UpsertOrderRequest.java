package com.example.backend.request;

import com.example.backend.entity.Account;
import lombok.*;

import java.util.List;

@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UpsertOrderRequest {
    private List<Integer> orderItemIds;

    private String address;
}
