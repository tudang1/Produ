package com.example.backend;

import com.example.backend.entity.Account;
import com.example.backend.entity.Category;
import com.example.backend.entity.Image;
import com.example.backend.entity.Product;
import com.example.backend.repository.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@SpringBootTest
public class InitDataTest {
    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ImageRepository imageRepository;

    @Autowired
    private OrderMainRepository orderMainRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductInOrderRepository productInOrderRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Tạo Account
    @Test
    void save_user() {
        // Tạo account role admin
        Account adminAcc = Account.builder()
                .name("ADMIN")
                .email("admin@exemple.com")
                .phone("9999")
                .address("Hà Nội")
                .active(true)
                .password(passwordEncoder.encode("111"))
                .roles(List.of("ADMIN"))
                .build();
        accountRepository.save(adminAcc);

        // Tạo user bình thường
        Account userAcc1 = Account.builder()
                .name("USER1")
                .email("user1@exemple.com")
                .phone("8888")
                .address("Thái Bình")
                .active(true)
                .password(passwordEncoder.encode("111"))
                .roles(List.of("USER"))
                .build();
        accountRepository.save(userAcc1);

        Account userAcc2 = Account.builder()
                .name("USER2")
                .email("user2@exemple.com")
                .phone("7777")
                .address("Hải Dương")
                .active(true)
                .password(passwordEncoder.encode("111"))
                .roles(List.of("USER"))
                .build();
        accountRepository.save(userAcc2);
    }

    // tạo Category
    @Test
    void save_category() {
        Category category0 = Category.builder()
                .name("Makeup")
                .build();
        categoryRepository.save(category0);

        Category category1 = Category.builder()
                .name("SkinCare")
                .build();
        categoryRepository.save(category1);

        Category category2 = Category.builder()
                .name("Fragrance")
                .build();
        categoryRepository.save(category2);
    }

    //tạo Images
    @Test
    void save_images(){
        Image diorSauvage = Image.builder()
                .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dwdb8168c9/assets/Y0996359/Y0996359_C099600586_E01_GHC.jpg?sw=460&sh=498&sm=fit&imwidth=460")
                .build();
        imageRepository.save(diorSauvage);
    }

    @Test
    void save_product(){
        List<Category> categories = categoryRepository.findAll();

        List<Image> images = imageRepository.findAll();

        Product product1 = Product.builder()
                .title("SAUVAGE")
                .price(10000)
                .description("Born out of creativity and authenticity, Sauvage celebrates the skill and knowledge of exceptional craftsmen, fully dedicated to their art. No matter where they come from or what trade they practice, they have devoted their whole lives to their passion.\n" +
                        "\n" +
                        "Between the riff of a guitar and the trail of this new Elixir, it's naturally a matter of notes...")
                .gender(true)
                .category(categories.get(2))
                .image(images.get(0))
                .build();
        productRepository.save(product1);
    }
}
