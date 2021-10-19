package com.examples;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

class DniTest {
	
	Dni insta;
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
		insta=new Dni();
	}

	@AfterEach
	void tearDown() throws Exception {
	}

	@ParameterizedTest
	@DisplayName("DNI Correcto")
	@CsvSource({"12345678Z"})
	void testBuenoIsNIF(String dni) {
		assertTrue(insta.isNIF(dni));
	}
	
	@ParameterizedTest
	@DisplayName("DNI Icorrecto")
	@CsvSource({"8","34653232","t","12345678T", "''"})
	void testNoIsNIF(String dni) {
		assertFalse(insta.isNIF(dni));
	}

}
