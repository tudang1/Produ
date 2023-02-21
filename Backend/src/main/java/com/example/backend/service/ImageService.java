package com.example.backend.service;

import com.example.backend.entity.Account;
import com.example.backend.entity.Image;
import com.example.backend.entity.Product;
import com.example.backend.exception.BadRequestException;
import com.example.backend.exception.NotFoundException;
import com.example.backend.repository.ImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ImageService {
    private final ImageRepository imageRepository;

    public List<Image> getAllImage() {
        return imageRepository.findAll();
    }
    //uploadImageProduct
    public String uploadImage(MultipartFile file) {
        validate(file);

        try {
            Image image = new Image();
            image.setUploadedAt(LocalDateTime.now());
            image.setData(file.getBytes());

            imageRepository.save(image);
            return "/api/admin/images/" + image.getId();
        } catch (IOException e) {
            throw new RuntimeException("Lỗi khi upload file");
        }
    }
    //uploadAvatar
    public String uploadAvatarAcc(MultipartFile file, Account account) {
        validate(file);

        try {
            Image image = new Image();
            image.setUploadedAt(LocalDateTime.now());
            image.setData(file.getBytes());

            imageRepository.save(image);
            return "/api/admin/users/" +account.getId()+"/files/" + image.getId();
        } catch (IOException e) {
            throw new RuntimeException("Lỗi khi upload file");
        }
    }

    public void validate(MultipartFile file) {
        String fileName = file.getOriginalFilename();

        // Kiểm tra tên file
        if(fileName == null || fileName.equals("")) {
            throw new BadRequestException("Tên file không hợp lệ");
        }

        // avatar.png -> png
        // image.jpg -> jpg
        // Kiểm tra đuôi file
        String fileExtension = getFileExtension(fileName);
        if(!checkFileExtension(fileExtension)) {
            throw new BadRequestException("Định dạng file không hợp lệ");
        }

        // Kiểm tra dung lượng file (<= 2MB)
        if((double) file.getSize() / 1_048_576L > 2) {
            throw new BadRequestException("File không được vượt quá 2MB");
        }
    }

    private String getFileExtension(String fileName) {
        int lastIndexOf = fileName.lastIndexOf(".");
        if(lastIndexOf == -1) {
            return "";
        }
        return fileName.substring(lastIndexOf + 1);
    }

    private boolean checkFileExtension(String fileExtension) {
        List<String> extensions = Arrays.asList("jpg", "png", "jpeg");
        return extensions.contains(fileExtension.toLowerCase());
    }
    // read file
    public byte[] readImage(Integer id) {
        Image image = imageRepository.findById(id).orElseThrow(() -> {
            throw new NotFoundException("Not found image with id = " + id);
        });
        return image.getData();
    }
    // Xóa file
    public void deleteImage(Integer fileId) {
        Image image = imageRepository.findById(fileId).orElseThrow(() -> {
            throw new NotFoundException("Not found image with id = " + fileId);
        });
        imageRepository.delete(image);
    }
    //uploadThumbnail
    public String uploadThumbnail(Product product, MultipartFile file) {
        validate(file);
        try {
            Image image = new Image();
            image.setUploadedAt(LocalDateTime.now());
            image.setData(file.getBytes());
            image.setProduct(product);

            imageRepository.save(image);
            return "http://localhost:8080/api/admin/products/" + product.getId() + "/files/" + image.getId();
        } catch (IOException e) {
            throw new RuntimeException("Lỗi khi upload file");
        }
    }

}
