package com.codecool.recommendation.service;

import com.codecool.recommendation.model.Recommendation;
import com.codecool.recommendation.repository.RecommendationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RecommendationService {

    @Autowired
    private RecommendationRepository repository;

    public List<Recommendation> getAllRecommendation() {
        return repository.findAll();
    }

    public void saveRecommendation(Recommendation recommendation) {
        repository.save(recommendation);
    }
}
