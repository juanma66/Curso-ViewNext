package Emisor;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AmqpReceptorApplication {

	public static void main(String[] args) {
		SpringApplication.run(AmqpReceptorApplication.class, args);
	}

}
