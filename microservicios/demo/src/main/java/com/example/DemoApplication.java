package com.example;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.ServletRequestParameterPropertyValues;

import com.example.domains.contracts.services.ActorService;
import com.example.domains.entities.Actor;
import com.example.infraectructure.repositories.ActorRepository;


@SpringBootApplication
public class DemoApplication implements CommandLineRunner{
	

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}	


	@Value("${mi.propia.clave}")
	String name;
	

	@Autowired
	ActorRepository dao;
	
	@Autowired
	ActorService srv;
	
	  
   @Override
   @Transactional
   public void run(String... args)throws Exception{
	   
	/* Optional<Actor>a=dao.findById(1);  
	  if(a.isPresent())
	   System.out.println(dao.findById(1).get());
	  else {
		  System.out.println("No encontrado");
	  }
	   //dao.findAll().forEach(System.out::println);
	   Actor actor=new Actor(0,"Pepitp", "Grillo");
	  
	   dao.save(actor);
	   dao.findAll().forEach(System.out::println);*/


	
	   
   }  

   
    
}
