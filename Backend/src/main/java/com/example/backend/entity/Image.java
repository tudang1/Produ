package com.example.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "image")
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "uploaded_at")
    private LocalDateTime uploadedAt;

    @Column(name = "imageUrl")
    private String imageUrl;

    @Lob        //Large Object
    @Column(name = "data")
    private byte[] data;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @PrePersist
    public void prePersist() {
        uploadedAt = LocalDateTime.now();
    }
}