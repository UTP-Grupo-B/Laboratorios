package com.example.parcial3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;



@SpringBootApplication
public class Parcial3Application {

	public static void main(String[] args) {
		SpringApplication.run(Parcial3Application.class, args);
	}

    @Configuration
    public class CorsConfig {
        @Bean
        public WebMvcConfigurer corsConfigurer() {
            return new WebMvcConfigurer() {
                @Override
                public void addCorsMappings(CorsRegistry registry) {
                    registry.addMapping("/**")
                            .allowedOrigins("*")
                            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH")
                            .allowedHeaders("Origin", "Content-Type", "Accept", "Authorization");
                }
            };
        }
    }
}

