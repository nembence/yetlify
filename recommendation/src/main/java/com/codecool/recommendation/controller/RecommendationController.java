package com.codecool.recommendation.controller;

import com.codecool.recommendation.model.Recommendation;
import com.codecool.recommendation.service.RecommendationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recommendation")
public class RecommendationController {

    @Autowired
    private RecommendationService service;

    @GetMapping("/get-all/{videoId}")
    public List<Recommendation> getAllRecommendations(@PathVariable("videoId") String videoId) {
        return service.getAllRecommendations(videoId);
    }

    @PostMapping("/new")
    public void saveRecommendation(@RequestBody Recommendation recommendation) {
        service.saveRecommendation(recommendation);
    }
}
