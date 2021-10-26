package com.example;



import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

import java.util.List;

import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


import com.example.domains.entities.Actor;
import com.example.infraestructure.repositories.ActorRepository;



@SpringBootTest
class ActoresTests {
@Test
public void  actor_valido() {
 Actor actor=new Actor(1,"Pepito","Grillo");
 assertTrue(actor.isValid());
}

@Test
public void actor_invalido_nombre() {
	Actor actor = new Actor(1,"","Grillo");
	assertTrue(actor.isInvalid());
}



   @Nested
   class Repositorio{
	   @Autowired
	   ActorRepository dao;
	   @Test
	   public void findByFistNameStartingWithOrderByLastNameDesc() {
		   var rslt=dao.findByFirstNameStartingWithOrderByLastNameDesc("a");
		   assertNotNull(rslt);
	   }
   }
   
   
 
   
	
}
