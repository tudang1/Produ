package com.example.backend.request;

import com.example.backend.entity.Image;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UpsertProductRequest {
    private String title;

    private Integer price;

    private String description;

    private Image image;

    private Set<Integer> categoryIds;

}
