package com.codecool.video.service;

import com.codecool.video.model.Video;
import com.codecool.video.repository.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VideoService {

    @Autowired
    private VideoRepository videoRepository;

    public List<Video> getAllVideos() {
        return videoRepository.findAll();
    }

    public void saveVideo(Video video) {
        videoRepository.save(video);
    }
}
