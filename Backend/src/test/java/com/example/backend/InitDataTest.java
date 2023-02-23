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
    private CategoryRepository categoryRepository;

    @Autowired
    private ImageRepository imageRepository;

    @Autowired
    private ProductRepository productRepository;

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
                .avatar("https://upload.wikimedia.org/wikipedia/en/8/8c/Captain_America_%28Steve_Rogers%29.png")
                .password(passwordEncoder.encode("111"))
                .roles(List.of("ADMIN"))
                .build();
        accountRepository.save(adminAcc);

        // Tạo user Nguoi dung
        Account userAcc1 = Account.builder()
                .name("USER1")
                .email("user1@exemple.com")
                .phone("8888")
                .address("Thái Bình")
                .avatar("https://kenh14cdn.com/thumb_w/660/2018/5/16/photo-4-15264888122402032180945.jpg")
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
                .avatar("https://boxofficevietnam.com/wp-content/uploads/2020/09/rsz_chkm8_001a_fpo.jpg")
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
                .name("MEN'S FRAGRANCE")
                .build();
        categoryRepository.save(category2);

        Category category3 = Category.builder()
                .name("WOMEN'S FRAGRANCE")
                .build();
        categoryRepository.save(category3);
    }

    //tạo Images
    @Test
    void save_images(){
        Image diorSauvage = Image.builder()
                .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dwdb8168c9/assets/Y0996359/Y0996359_C099600586_E01_GHC.jpg?sw=460&sh=498&sm=fit&imwidth=460")
                .build();
        imageRepository.save(diorSauvage);

        Image diorHomme = Image.builder()
                .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw326ea4c8/assets/Y0996157/Y0996157_C099600157_E01_GHC.jpg?sw=460&sh=498&sm=fit&imwidth=460")
                .build();
        imageRepository.save(diorHomme);

        Image fahrenheit = Image.builder()
                        .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw59b4cb86/assets/Y0866230/Y0866230_F086623009_E01_ZHC.jpg?sw=870&sh=580&sm=fit&imwidth=870")
                        .build();
        imageRepository.save(fahrenheit);

        Image missDior = Image.builder()
                        .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw53d6c04c/assets/Y0996347/Y0996347_C099600764_E01_ZHC.jpg?sw=870&sh=580&sm=fit&imwidth=870")
                        .build();
        imageRepository.save(missDior);

        Image jadore = Image.builder()
                        .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw17e9b231/assets/Y0996491/Y0996491_C099600981_E01_ZHC.jpg?sw=870&sh=580&sm=fit&imwidth=870")
                        .build();
        imageRepository.save(jadore);

        //makeup
        Image diorshow = Image.builder()
                .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw43edb61a/assets/Y0696100/Y0696100_F069610090_E01_ZHC.jpg?sw=870&sh=580&sm=fit&imwidth=870")
                .build();
        imageRepository.save(diorshow);

        Image diorAddict = Image.builder()
                .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw9fd7cbcd/assets/Y0291000/Y0291000_C029100008_E01_ZHC.jpg?sw=870&sh=580&sm=fit&imwidth=870")
                .build();
        imageRepository.save(diorAddict);

        //skincare
        Image diorPrestige = Image.builder()
                .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw3cebfb5f/assets/Y0678560/Y0678560_F067856004_E01_ZHC.jpg?sw=870&sh=580&sm=fit&imwidth=870")
                .build();
        imageRepository.save(diorPrestige);

        Image diorHydra = Image.builder()
                .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw45c4e0b8/assets/Y0996033/Y0996033_C099600033_E01_ZHC.jpg?sw=870&sh=580&sm=fit&imwidth=870")
                .build();
        imageRepository.save(diorHydra);

    }

    @Test
    void save_product(){
        List<Category> categories = categoryRepository.findAll();

        List<Image> images = imageRepository.findAll();

        //Nước hoa nam
        Product diorSauvage = Product.builder()
                .title("SAUVAGE")
                .price(10000)
                .description("Born out of creativity and authenticity, Sauvage celebrates the skill and knowledge of exceptional craftsmen, fully dedicated to their art. No matter where they come from or what trade they practice, they have devoted their whole lives to their passion.\n" +
                        "\n" +
                        "Between the riff of a guitar and the trail of this new Elixir, it's naturally a matter of notes...")
                .category(categories.get(2))
                .thumbnail(images.get(0).getImageUrl())
                .build();
        productRepository.save(diorSauvage);

        Product diorHomme = Product.builder()
                .title("Dior Homme")
                .price(20000)
                .description("Dior Homme Eau de Toilette is intriguingly powerful and appealingly fresh.\n" +
                        "\n" +
                        "Dior Homme redefines a new, masculine sensuality in a polyphony of smooth and raw wood. A heart of tender wood, in which the virility of Atlas Cedar embraces the enveloping warmth of Haitian Vetiver tinged with spice. Wood hand-chiseled by Dior.\n" +
                        "\n" +
                        "Dior Homme conveys all the facets of modern masculinity. A man, yes, but a man of many nuances: confident in both his strength and his tenderness.\n" +
                        "\n" +
                        "Dior Homme Eau de Toilette is a fragrance with a bold trail that leaves a sensual imprint.")
                .category(categories.get(2))
                .thumbnail(images.get(1).getImageUrl())
                .build();
        productRepository.save(diorHomme);

        Product fahrenheit = Product.builder()
                .title("FAHRENHEIT")
                .price(14000)
                .description("Fahrenheit Parfum invents a power of attraction. An immediately addictive trail that highlights the harmony of extraordinary olfactory accords. A scented script that blends extremes, where flower meets leather and woods. The legendary signature of the Fahrenheit fragrance is wrapped in a vibrant, sensual accord with accents of Violet and Leather, enhanced by Bourbon Vanilla absolute. The irresistible attraction of a fragrance exalted by rare ingredients.")
                .category(categories.get(2))
                .thumbnail(images.get(2).getImageUrl())
                .build();
        productRepository.save(fahrenheit);

        //nước hoa nữ
        Product missDior = Product.builder()
                .title("MISS DIOR EAU DE PARFUM")
                .price(14000)
                .description("Miss Dior Eau de Parfum reinvents itself with a new scent.\n" +
                        "\n" +
                        "In 1947, Miss Dior was born out of a wild impetus where the pressing desire to re-enchant the lives of women and open up their eyes, once again, to the sparkling colors of love was felt. Following a bleak period, at that time this scent was synonymous with renewed happiness, poetry, and harmony for Christian Dior. Miss Dior intrigues, excites and invites us to marvel at love and all the beauty in the world.")
                .category(categories.get(3))
                .thumbnail(images.get(3).getImageUrl())
                .build();
        productRepository.save(missDior);

        Product jadore = Product.builder()
                .title("J'ADORE PARFUM D'EAU")
                .price(12000)
                .description("The new fragrance, a concentration of water and flowers: J'adore Parfum d'eau reinvents the promise of pleasure that J’adore has upheld since 1999.\n" +
                        "\n" +
                        "The pleasure of a reinvented J'adore bouquet with a strong natural focus: Neroli from Vallauris injects its full freshness into J'adore Parfum d'eau, while sunny notes of jasmine sambac meld with velvety notes of Chinese magnolia. A genuine ode to the white flowers of J'adore in a fresh and spontaneous interpretation.")
                .category(categories.get(3))
                .thumbnail(images.get(4).getImageUrl())
                .build();
        productRepository.save(jadore);

        //makeup
        Product diorshow = Product.builder()
                .title("DIORSHOW ICONIC")
                .price(12000)
                .description("The first lash-lifting mascara by Dior.\n" +
                        "\n" +
                        "Enriched with a unique lifting formula, Diorshow Iconic perfectly sculpts, stretches and curls lashes with impeccable hold and exceptional definition.")
                .category(categories.get(1))
                .thumbnail(images.get(5).getImageUrl())
                .build();
        productRepository.save(diorshow);

        Product dioraddict = Product.builder()
                .title("DIOR ADDICT")
                .price(12000)
                .description("Dior Addict is the Dior shine lipstick designed like a fashion accessory, with a formula now composed of 90%* natural-origin ingredients, housed in an ultra-couture and refillable case.")
                .category(categories.get(1))
                .thumbnail(images.get(6).getImageUrl())
                .build();
        productRepository.save(dioraddict);

        //skincare
        Product diorPrestige = Product.builder()
                .title("DIOR PRESTIGE")
                .price(12000)
                .description("As luxurious as a cream and as effective as an oil, La Crème Démaquillante gently cleanses the skin. This creme’s texture transforms into a fine oil that envelops the skin and melts away impurities and the most stubborn makeup. Upon contact with water, it transforms into a silky milk that is rinsed effortlessly, leaving the skin unbelievably smooth, supple and soothed. Also suitable for eyes.")
                .category(categories.get(0))
                .thumbnail(images.get(7).getImageUrl())
                .build();
        productRepository.save(diorPrestige);

        Product diorhydra = Product.builder()
                .title("DIOR HYDRA LIFE")
                .price(12000)
                .description("This biphase makeup remover delivers 3 powerful actions with each application: it effectively eliminates all types of makeup, even waterproof, and softens and soothes the eye contour while beautifying the lashes.")
                .category(categories.get(0))
                .thumbnail(images.get(8).getImageUrl())
                .build();
        productRepository.save(diorhydra);


    }
}
