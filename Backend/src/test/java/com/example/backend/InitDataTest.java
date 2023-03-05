package com.example.backend;

import com.example.backend.entity.*;
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

    @Autowired
    private OrderItemRepository orderItemRepository;

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
        //nam
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

        Image eausauvage = Image.builder()
                .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw6ca74e4e/assets/Y0078000/Y0078000_F007824009_E01_GHC.jpg?sw=460&sh=498&sm=fit&imwidth=460")
                .build();
        imageRepository.save(eausauvage);

        Image higher = Image.builder()
                .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw9c20c68e/assets/Y0674201/Y0674201_F067424009_E01_GHC.jpg?sw=460&sh=498&sm=fit&imwidth=460")
                .build();
        imageRepository.save(higher);

        Image dunepourhomme = Image.builder()
                .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw9433dfff/assets/Y0690201/Y0690201_F069024009_E01_GHC.jpg?sw=460&sh=498&sm=fit&imwidth=460")
                .build();
        imageRepository.save(dunepourhomme);

        //nu
        Image missDior = Image.builder()
                        .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw53d6c04c/assets/Y0996347/Y0996347_C099600764_E01_ZHC.jpg?sw=870&sh=580&sm=fit&imwidth=870")
                        .build();
        imageRepository.save(missDior);

        Image jadore = Image.builder()
                        .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw17e9b231/assets/Y0996491/Y0996491_C099600981_E01_ZHC.jpg?sw=870&sh=580&sm=fit&imwidth=870")
                        .build();
        imageRepository.save(jadore);

        Image joybydior = Image.builder()
                .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw7d159766/assets/Y0997004/Y0997004_C099600458_E01_GHC.jpg?sw=460&sh=498&sm=fit&imwidth=460")
                .build();
        imageRepository.save(joybydior);

        Image poison = Image.builder()
                .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dwc0bf5795/assets/Y0083424/Y0083424_F008342409_E01_GHC.jpg?sw=460&sh=498&sm=fit&imwidth=460")
                .build();
        imageRepository.save(poison);

        Image lesdedior = Image.builder()
                .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dwfd6ca752/assets/Y0651230/Y0651230_F065123800_E01_GHC.jpg?sw=460&sh=498&sm=fit&imwidth=460")
                .build();
        imageRepository.save(lesdedior);

        Image dune = Image.builder()
                .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw835429bb/assets/Y0069201/Y0069201_F006924009_E01_GHC.jpg?sw=460&sh=498&sm=fit&imwidth=460")
                .build();
        imageRepository.save(dune);

        //makeup
        Image diorshow = Image.builder()
                .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw43edb61a/assets/Y0696100/Y0696100_F069610090_E01_ZHC.jpg?sw=870&sh=580&sm=fit&imwidth=870")
                .build();
        imageRepository.save(diorshow);

        Image diorAddict = Image.builder()
                .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw9fd7cbcd/assets/Y0291000/Y0291000_C029100008_E01_ZHC.jpg?sw=870&sh=580&sm=fit&imwidth=870")
                .build();
        imageRepository.save(diorAddict);

        Image EYESHADOWS = Image.builder()
                .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw73f7dbec/assets/Y0310006/Y0310006_C031000659_E01_GHC.jpg?sw=460&sh=498&sm=fit&imwidth=460")
                .build();
        imageRepository.save(EYESHADOWS);

        Image diorforever = Image.builder()
                .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dwf2e56950/assets/Y0326000/Y0326000_C032600010_E01_GHC.jpg?sw=460&sh=498&sm=fit&imwidth=460")
                .build();
        imageRepository.save(diorforever);

        Image eyebrows = Image.builder()
                .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw092ee4aa/assets/Y0268001/Y0268001_C026800003_E01_GHC.jpg?sw=460&sh=498&sm=fit&imwidth=460")
                .build();
        imageRepository.save(eyebrows);

        Image nail = Image.builder()
                .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dweef7cc04/assets/Y0996356/Y0996356_F000355552_E01_GHC.jpg?sw=460&sh=498&sm=fit&imwidth=460")
                .build();
        imageRepository.save(nail);

        //skincare
        Image diorPrestige = Image.builder()
                .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw3cebfb5f/assets/Y0678560/Y0678560_F067856004_E01_ZHC.jpg?sw=870&sh=580&sm=fit&imwidth=870")
                .build();
        imageRepository.save(diorPrestige);

        Image diorHydra = Image.builder()
                .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw45c4e0b8/assets/Y0996033/Y0996033_C099600033_E01_ZHC.jpg?sw=870&sh=580&sm=fit&imwidth=870")
                .build();
        imageRepository.save(diorHydra);

        Image diorclear = Image.builder()
                .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dwb160ca21/assets/Y0996480/Y0996480_C099600861_E01_GHC.jpg?sw=460&sh=498&sm=fit&imwidth=460")
                .build();
        imageRepository.save(diorclear);

        Image devie = Image.builder()
                .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw28f7444c/assets/Y0996391/Y0996391_C099600795_E01_GHC_en_GB.jpg?sw=460&sh=498&sm=fit&imwidth=460")
                .build();
        imageRepository.save(devie);

        Image capture = Image.builder()
                .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw6e504a5c/assets/Y0997044/Y0997044_C099700070_E01_GHC.jpg?sw=460&sh=498&sm=fit&imwidth=460")
                .build();
        imageRepository.save(capture);

        Image onessen = Image.builder()
                .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw88eb1b1c/assets/Y0725320/Y0725320_F072533000_E01_GHC.jpg?sw=460&sh=498&sm=fit&imwidth=460")
                .build();
        imageRepository.save(onessen);

        Image diordermo = Image.builder()
                .imageUrl("https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw2ecc03a1/assets/Y0645301/Y0645301_F064533600_E01_GHC.jpg?sw=460&sh=498&sm=fit&imwidth=460")
                .build();
        imageRepository.save(diordermo);
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

        Product eauSauvage = Product.builder()
                .title("EAU SAUVAGE")
                .price(1200)
                .description("A now-legendary revolution, Eau Sauvage is synonymous with absolute elegance à la française. A composition with a revered freshness imbued with a roguishly chic spirit.")
                .category(categories.get(2))
                .thumbnail(images.get(3).getImageUrl())
                .build();
        productRepository.save(eauSauvage);

        Product higher = Product.builder()
                .title("HIGHER")
                .price(1100)
                .description("Higher, contemporary, urban fragrances, exudes airy sensations and smooth energy. The radiance and fluidity of the fruity accord are blended with the energy and vibrations of the spices.")
                .category(categories.get(2))
                .thumbnail(images.get(4).getImageUrl())
                .build();
        productRepository.save(higher);

        Product dunePourHomme = Product.builder()
                .title("DUNE POUR HOMME")
                .price(1000)
                .description("The expression of powerful and poetic nature that offers an invitation to travel, Dune pour Homme is a fresh and soothing fragrance drifting between serenity and escape.")
                .category(categories.get(2))
                .thumbnail(images.get(5).getImageUrl())
                .build();
        productRepository.save(dunePourHomme);

        //nước hoa nữ
        Product missDior = Product.builder()
                .title("MISS DIOR EAU DE PARFUM")
                .price(14000)
                .description("Miss Dior Eau de Parfum reinvents itself with a new scent.\n" +
                        "\n" +
                        "In 1947, Miss Dior was born out of a wild impetus where the pressing desire to re-enchant the lives of women and open up their eyes, once again, to the sparkling colors of love was felt. Following a bleak period, at that time this scent was synonymous with renewed happiness, poetry, and harmony for Christian Dior. Miss Dior intrigues, excites and invites us to marvel at love and all the beauty in the world.")
                .category(categories.get(3))
                .thumbnail(images.get(6).getImageUrl())
                .build();
        productRepository.save(missDior);

        Product jadore = Product.builder()
                .title("J'ADORE PARFUM D'EAU")
                .price(12000)
                .description("The new fragrance, a concentration of water and flowers: J'adore Parfum d'eau reinvents the promise of pleasure that J’adore has upheld since 1999.\n" +
                        "\n" +
                        "The pleasure of a reinvented J'adore bouquet with a strong natural focus: Neroli from Vallauris injects its full freshness into J'adore Parfum d'eau, while sunny notes of jasmine sambac meld with velvety notes of Chinese magnolia. A genuine ode to the white flowers of J'adore in a fresh and spontaneous interpretation.")
                .category(categories.get(3))
                .thumbnail(images.get(7).getImageUrl())
                .build();
        productRepository.save(jadore);

        Product joybydior = Product.builder()
                .title("JOY BY DIOR")
                .price(1500)
                .description("Joy, captured at long last in a scent.\n" +
                        "JOY by Dior is an ode to pleasure and to life told through the Eau de Parfum, as bright as a smile, along with the Eau de Parfum Intense, a genuine olfactory firework.")
                .category(categories.get(3))
                .thumbnail(images.get(8).getImageUrl())
                .build();
        productRepository.save(joybydior);

        Product poison = Product.builder()
                .title("POISON")
                .price(2100)
                .description("The legendary and intoxicating oriental eau de toilette from the House of Dior, dressed in a vibrant, resolutely modern shade of red. ")
                .category(categories.get(3))
                .thumbnail(images.get(9).getImageUrl())
                .build();
        productRepository.save(poison);

        Product lesdedior = Product.builder()
                .title("LES ESCALES DE DIOR")
                .price(1700)
                .description("Simple and refined, Escale à Portofino is a fresh and radiant fragrance to inspire a wish to travel. Created from exceptional natural raw materials, it produces a delightful sensation of time standing still. ")
                .category(categories.get(3))
                .thumbnail(images.get(10).getImageUrl())
                .build();
        productRepository.save(lesdedior);

        Product dune = Product.builder()
                .title("DUNE")
                .price(1700)
                .description("A tribute to Christian Dior's childhood home in Granville, where sea meets land, Dior created the fragrance Dune. An invitation to travel and to find serenity, a search for happiness and one's inner self. ")
                .category(categories.get(3))
                .thumbnail(images.get(11).getImageUrl())
                .build();
        productRepository.save(dune);

        //makeup
        Product diorshow = Product.builder()
                .title("DIORSHOW ICONIC")
                .price(12000)
                .description("The first lash-lifting mascara by Dior.\n" +
                        "\n" +
                        "Enriched with a unique lifting formula, Diorshow Iconic perfectly sculpts, stretches and curls lashes with impeccable hold and exceptional definition.")
                .category(categories.get(1))
                .thumbnail(images.get(12).getImageUrl())
                .build();
        productRepository.save(diorshow);

        Product dioraddict = Product.builder()
                .title("DIOR ADDICT")
                .price(12000)
                .description("Dior Addict is the Dior shine lipstick designed like a fashion accessory, with a formula now composed of 90%* natural-origin ingredients, housed in an ultra-couture and refillable case.")
                .category(categories.get(1))
                .thumbnail(images.get(13).getImageUrl())
                .build();
        productRepository.save(dioraddict);

        Product eyeshadows = Product.builder()
                .title("EYESHADOWS")
                .price(1600)
                .description("Dior's colours and bold creativity shine through its wide range of eyeshadows with professional textures and show-stopping effects.")
                .category(categories.get(1))
                .thumbnail(images.get(14).getImageUrl())
                .build();
        productRepository.save(eyeshadows);

        Product concealers = Product.builder()
                .title("Dior Forever")
                .price(1600)
                .description("Dior Forever Skin Correct is the clean* high-perfection concealer by Dior that offers 24h** wear and hydration.")
                .category(categories.get(1))
                .thumbnail(images.get(15).getImageUrl())
                .build();
        productRepository.save(concealers);

        Product eyebrows = Product.builder()
                .title("EYEBROWS")
                .price(1700)
                .description("Eyebrows need to be brushed, controlled, shaped and coloured to create eyes with that unique Dior look.")
                .category(categories.get(1))
                .thumbnail(images.get(16).getImageUrl())
                .build();
        productRepository.save(eyebrows);

        Product nail = Product.builder()
                .title("NAIL LACQUERS")
                .price(1450)
                .description("Inspired by Christian Dior's favourite colours and those that feature in the world of couture, Dior nail varnishes are available in refined, vibrant and bold shades.")
                .category(categories.get(1))
                .thumbnail(images.get(17).getImageUrl())
                .build();
        productRepository.save(nail);

        //skincare
        Product diorPrestige = Product.builder()
                .title("DIOR PRESTIGE")
                .price(1230)
                .description("As luxurious as a cream and as effective as an oil, La Crème Démaquillante gently cleanses the skin. This creme’s texture transforms into a fine oil that envelops the skin and melts away impurities and the most stubborn makeup. Upon contact with water, it transforms into a silky milk that is rinsed effortlessly, leaving the skin unbelievably smooth, supple and soothed. Also suitable for eyes.")
                .category(categories.get(0))
                .thumbnail(images.get(18).getImageUrl())
                .build();
        productRepository.save(diorPrestige);

        Product diorhydra = Product.builder()
                .title("DIOR HYDRA LIFE")
                .price(1450)
                .description("This biphase makeup remover delivers 3 powerful actions with each application: it effectively eliminates all types of makeup, even waterproof, and softens and soothes the eye contour while beautifying the lashes.")
                .category(categories.get(0))
                .thumbnail(images.get(19).getImageUrl())
                .build();
        productRepository.save(diorhydra);

        Product diorClear = Product.builder()
                .title("DIOR CLEANSING WITH NYMPHÉA")
                .price(1550)
                .description("Discover the line of Dior cleansers and makeup removers infused with purifying French nymphéa extracts harvested in the new Dior Latour-Marliac garden.")
                .category(categories.get(0))
                .thumbnail(images.get(20).getImageUrl())
                .build();
        productRepository.save(diorClear);

        Product dievie = Product.builder()
                .title("L'OR DE VIE")
                .price(1650)
                .description("The Dior skincare masterpiece. Born from the legendary Château d’Yquem, L'Or de Vie provides the skin with infinite longevity. Day after day, the skin transformation is spectacular.")
                .category(categories.get(0))
                .thumbnail(images.get(21).getImageUrl())
                .build();
        productRepository.save(dievie);

        Product capture = Product.builder()
                .title("CAPTURE TOTALE")
                .price(1650)
                .description("For over 20 years, the Capture Totale anti-aging skincare line has combined pioneering research on mother cells with the power of Dior floral science to deliver a visible transformation of the skin.\n" +
                        "\n" +
                        "Skin is visibly firmer, smoother and younger.")
                .category(categories.get(0))
                .thumbnail(images.get(22).getImageUrl())
                .build();
        productRepository.save(capture);

        Product onsen = Product.builder()
                .title("ONE ESSENTIAL")
                .price(1650)
                .description("A fundamental daily step, One Essential helps the skin to eliminate toxins every day and regenerate itself for increased youthfulness and radiance.\n" +
                        "As the first step in a routine, it boosts the effectiveness of other skincare products.")
                .category(categories.get(0))
                .thumbnail(images.get(23).getImageUrl())
                .build();
        productRepository.save(onsen);

        Product diordermo = Product.builder()
                .title("DIOR HOMME DERMO SYSTEM")
                .price(1650)
                .description("A derma-balancing skincare system to maintain an ideal balance in men's skin, every day.")
                .category(categories.get(0))
                .thumbnail(images.get(24).getImageUrl())
                .build();
        productRepository.save(diordermo);
    }

}
