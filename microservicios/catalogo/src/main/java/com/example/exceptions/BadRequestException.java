package com.example.exceptions;

public class BadRequestException  extends Exception {
		private static final long serialVersionUID = 1L;
		private final static String MESSAGE_STRING = "Bad request";
		
		public BadRequestException() {
			this(MESSAGE_STRING);
		}

		public BadRequestException(String message) {
			super(message);
		}

		public BadRequestException(Throwable cause) {
			this(MESSAGE_STRING, cause);
		}

		public BadRequestException(String message, Throwable cause) {
			super(message, cause);
		}

		public BadRequestException(String message, Throwable cause, boolean enableSuppression,
				boolean writableStackTrace) {
			super(message, cause, enableSuppression, writableStackTrace);
		}
}
