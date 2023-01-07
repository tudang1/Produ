package com.example.backend.form;

import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

@Getter
@Setter
public class ItemForm {

    private Integer quantity;

    @NonNull
    private String productId;
}
