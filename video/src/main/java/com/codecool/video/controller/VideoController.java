package com.codecool.video.controller;

import com.codecool.video.model.Video;
import com.codecool.video.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/video")
public class VideoController {

    @Autowired
    private VideoService videoService;

    @GetMapping("/get-all")
    public List<Video> getAllVideo() {
        return videoService.getAllVideos();
    }

    @PostMapping("/new-video")
    public void updateNewVideo(@RequestBody Video video) {
        videoService.saveVideo(video);
    }
}
