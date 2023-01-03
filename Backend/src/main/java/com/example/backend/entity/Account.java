package com.example.backend.entity;

import com.vladmihalcea.hibernate.type.json.JsonStringType;
import lombok.*;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@TypeDef(
        name = "json",
        typeClass = JsonStringType.class
)
@Table(name = "account")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "phone")
    private String phone;

    @Column(name ="address")
    private String address;

    @Column(name ="active")
    private boolean active;

    @Column(name = "avatar")
    private String avatar;

    @Column(name = "password")
    private String password;

    @Type(type = "json")
    @Column(name = "roles", columnDefinition = "json")
    private List<String> roles;

    @OneToOne(orphanRemoval = true)
    @JoinColumn(name = "cart_id")
    private Cart cart;
}