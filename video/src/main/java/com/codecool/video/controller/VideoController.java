package com.codecool.video.controller;

import com.codecool.recommendation.model.Recommendation;
import com.codecool.video.model.Video;
import com.codecool.video.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@CrossOrigin
public class VideoController {

    @Autowired
    private VideoService videoService;

    @Autowired
    private RestTemplate restTemplate;

    @Value("${recommendation.url}")
    private String baseUrl;

    @GetMapping("/get-all")
    public List<Video> getAllVideo() {
        return videoService.getAllVideos();
    }

    @GetMapping("/recommendations/{videoId}")
    public List getRecommendationsByVideoId(@PathVariable("videoId") String videoId) {
        String uri = baseUrl + "/get-all/" +videoId;
        return restTemplate.getForEntity(uri,List.class).getBody();
    }

    @GetMapping("/get-video/{videoId}")
    public Video getVideoById(@PathVariable("videoId") String videoId) {
        return videoService.getVideoById(videoId);
    }

    @PostMapping("/new")
    public void saveVideo(@RequestBody Video video) {
        videoService.saveVideo(video);
    }

    @PostMapping("/new-recommendation")
    @CrossOrigin
    public void saveRecommendation(@RequestBody Recommendation recommendation) {
        String uri = baseUrl + "/new";
        restTemplate.postForEntity(uri,recommendation,Recommendation.class);
    }
}
