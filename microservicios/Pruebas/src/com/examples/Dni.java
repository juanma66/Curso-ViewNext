package com.examples;

import java.util.regex.Pattern;

public class Dni {

	public boolean isNIF(String dni) {
		Pattern patroPattern=Pattern.compile("[0-9]{7,8}[A-Z a-z]");
		if(!patroPattern.matcher(dni).matches()) {
			
			return false;
		}
		
		String letraString=dni.substring(dni.length()-1);
		String numeroString=dni.substring(0, dni.length()-1);
		return Character.toUpperCase(letraString.charAt(0)) ==
				"TRWAGMYFPDXBNJZSQVHLCKE".charAt(Integer.parseInt(numeroString) % 23);
	}
	
	
}
