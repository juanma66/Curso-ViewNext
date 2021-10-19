package com.examples;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class ValidadniTest3 {

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
	}

	@AfterEach
	void tearDown() throws Exception {
	}

	@Test
	@DisplayName("Extraer letra")
	void testExtraerLetraDNI() {
		
		assertEquals('T', Validadni.extraerLetraDNI("62291071T") );
	}
	
	@Test
	@DisplayName("NO Extraer letra")
	void testInExtraerLetraDNI() {
		assertFalse(Character.isDigit( Validadni.extraerLetraDNI("62291071T")));
	}

	@Test
	@DisplayName("Extaraer numero")
	void testExtraerNumeroDNI() {
	    assertEquals(62291071, Validadni.extraerNumeroDNI("62291071T"));
	   
	}
	
	@Test
	@DisplayName("Calcular letra")
	void testCalcularLetraDNI() {
		assertEquals('Z', Validadni.calcularLetraDNI(12345678) );
	}
	
	

	@Test
	@DisplayName("Validad DNI")
	void testValidadDNI() {
		assertTrue(Validadni.validadDNI("12345678Z"));
	
	}

	
	@Test
	@DisplayName("Invalidad DNI")
	void testInValidadDNI() {
		assertFalse(Validadni.validadDNI("62291071T"));
		assertFalse(Validadni.validadDNI("622910"));
		assertFalse(Validadni.validadDNI("6229104545454"));
	
	}
	
	
}
