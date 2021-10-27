package com.example.exceptions;

public class DuplicateKeyException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	final static String MESSAGE_STRING = "Duplicate key";
	public DuplicateKeyException() {
		super("Duplicate key");
		
	}

	public DuplicateKeyException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
		
	}
	public DuplicateKeyException(String message, Throwable cause) {
		super(message, cause);
		
	}

	public DuplicateKeyException(String message) {
		super(message);
		
	}

	public DuplicateKeyException(Throwable cause) {
		super(MESSAGE_STRING, cause);
		
	}

}
