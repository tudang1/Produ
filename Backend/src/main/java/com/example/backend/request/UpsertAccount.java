package com.example.backend.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UpsertAccount {
    private String name;

    private String phone;

    private String address;

    private List<String> roles;
}
