package com.codecool.recommendation.service;

import com.codecool.recommendation.model.Recommendation;
import com.codecool.recommendation.repository.RecommendationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecommendationService {

    @Autowired
    private RecommendationRepository repository;

    public List<Recommendation> getAllRecommendations(String videoId) {
        return repository.findRecommendationByVideoIdEquals(Long.parseLong(videoId));
    }

    public void saveRecommendation(Recommendation recommendation) {
        repository.save(recommendation);
    }
}
