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

    @PrePersist
    public void prePersist() {
        uploadedAt = LocalDateTime.now();
    }
}