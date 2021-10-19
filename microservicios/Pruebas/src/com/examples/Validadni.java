package com.examples;

public class Validadni {

	static final String LETRA_DNI = "TRWAGMYFPDXBNJZSQVHLCKE";

	static char extraerLetraDNI(String DNI) {
		return DNI.charAt(DNI.length()-1);
	}

	static int extraerNumeroDNI(String DNI) {
		return Integer.parseInt(DNI.substring(0, DNI.length() - 1));
	}

	static char calcularLetraDNI(int numeroDNI) {
		return LETRA_DNI.charAt(numeroDNI % 23);
	}

	static boolean validadDNI(String DNI) {

		return 2<= DNI.length() &&  DNI.length() <= 9 && 
				Character.isLetter(DNI.charAt(DNI.length()-1))  &&
				extraerLetraDNI(DNI)==calcularLetraDNI(extraerNumeroDNI(DNI));
	}

}
