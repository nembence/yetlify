package com.codecool.recommendation;

import com.codecool.recommendation.model.Recommendation;
import com.codecool.recommendation.repository.RecommendationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.List;

@SpringBootApplication
@EnableSwagger2
@EnableEurekaClient
public class RecommendationApplication {

	@Autowired
	private RecommendationRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(RecommendationApplication.class, args);
	}

	@Bean
	public Docket api() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.any())
				.paths(PathSelectors.ant("/recommendation/**"))
				.build();
	}

	@Bean
	public CommandLineRunner init() {
		return args -> {
			Recommendation rec1 = Recommendation.builder()
					.rating(3)
					.comment("Good one!")
					.videoId((long) 1)
					.build();

			Recommendation rec2 = Recommendation.builder()
					.rating(3)
					.comment("Nice video!")
					.videoId((long) 1)
					.build();

			Recommendation rec3 = Recommendation.builder()
					.rating(4)
					.comment("Nice video!")
					.videoId((long) 2)
					.build();

			Recommendation rec4 = Recommendation.builder()
					.rating(5)
					.comment("Really good one!")
					.videoId((long) 3)
					.build();

			Recommendation rec5 = Recommendation.builder()
					.rating(1)
					.comment("Boring!")
					.videoId((long) 4)
					.build();

			repository.saveAll(List.of(rec1, rec2, rec3, rec4, rec5));
		};
	}
}
