package com.example.backend.repository;

import com.example.backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    List<Product> findByTitleContains(String title);

    List<Product> findByCategory_NameEquals(String name);

    List<Product> findByCategory_NameEqualsAndId(String name, Integer id);

    @Query("""
            select b from Product b inner join b.category category
            where (:term is null or upper(b.title) like upper(concat('%', :term, '%')))
            and (:categoryName is null or upper(category.name) = upper(:categoryName))
            group by b.id
            order by b.createdAt desc
            """)
    List<Product> findByTitleContainsIgnoreCaseAndCategory_NameEquals(@Param("term") String term, @Param("categoryName") String categoryName);

}