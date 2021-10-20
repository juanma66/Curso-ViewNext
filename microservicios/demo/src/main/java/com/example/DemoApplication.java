package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.infraectructure.repositories.ActorRepository;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner{
	

	
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
	
	@Autowired
	ActorRepository dao;
	  
   @Override
   public void run(String... args)throws Exception{
	   
	   
	  // dao.findAll().forEach(System.out.println(1));
   }  

}
