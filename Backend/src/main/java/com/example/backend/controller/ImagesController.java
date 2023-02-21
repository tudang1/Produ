package com.example.backend.controller;

import com.example.backend.entity.Image;
import com.example.backend.service.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("api/admin")
@RequiredArgsConstructor
public class ImagesController {
    @Autowired
    private ImageService imageService;

    @GetMapping("/images")
    public List<Image> images(){
        return imageService.getAllImage();
    }

    //read file
    @GetMapping("/images/{id}")
    public ResponseEntity<?> readFile(@PathVariable Integer id){
        byte[] bytes = imageService.readImage(id);
        return ResponseEntity.ok()
                .contentType(MediaType.IMAGE_JPEG)
                .body(bytes);
    }

    //delete
    @DeleteMapping("images/{id}")
    public void deleteFile(@PathVariable Integer id){
        imageService.deleteImage(id);
    }
}
