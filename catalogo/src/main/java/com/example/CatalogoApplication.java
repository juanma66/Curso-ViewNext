package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.oas.annotations.EnableOpenApi;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@EnableOpenApi
@SpringBootApplication
public class CatalogoApplication {

	public static void main(String[] args) {
		SpringApplication.run(CatalogoApplication.class, args);
	}

	@Bean
	public Docket api() {                
   	    return new Docket(DocumentationType.OAS_30)          
	      .select()
	      .apis(RequestHandlerSelectors.basePackage("com.example.catalogo.domain.resources"))
	      .paths(PathSelectors.ant("/**"))
	      .build()
	      .apiInfo(new ApiInfoBuilder()
	                .title("Microservicio: Catalogo de peliculas")
	                .description("Ejemplo de Microservicio utilizando la base de datos Sakila.")
	                .version("1.0")
	                .license("Apache License Version 2.0")
	                .contact(new Contact("Yo Mismo", "http://www.example.com", "myeaddress@example.com"))
	                .build());
	}
	

}
