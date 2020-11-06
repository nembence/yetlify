package com.codecool.video;

import com.codecool.video.model.Video;
import com.codecool.video.repository.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.List;

@SpringBootApplication
@EnableSwagger2
@EnableEurekaClient
public class VideoApplication {

	@Autowired
	private VideoRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(VideoApplication.class, args);
	}

	@Bean
	public Docket api() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.any())
				.paths(PathSelectors.ant("/**"))
				.build();
	}

	@Bean
	@LoadBalanced
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}

	@Bean
	public CommandLineRunner init() {
		return args -> {
			Video video1 = Video.builder()
					.name("Bonobo | Best Of")
					.url("https://www.youtube.com/watch?v=eVwYErKtiIA")
					.build();

			Video video2 = Video.builder()
					.name("Bonobo Boiler Room New York")
					.url("https://www.youtube.com/watch?v=uynCeLheCPc")
					.build();

			Video video3 = Video.builder()
					.name("Tala Boiler Room Beirut")
					.url("https://www.youtube.com/watch?v=n-B7IOEfOdY")
					.build();

			Video video4 = Video.builder()
					.name("Recue | Sama'")
					.url("https://www.youtube.com/watch?v=3Rz-iXgQCcw")
					.build();

			repository.saveAll(List.of(video1, video2, video3, video4));
		};
	}
}
