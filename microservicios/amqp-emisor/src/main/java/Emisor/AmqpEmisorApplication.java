package Emisor;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AmqpEmisorApplication {

	public static void main(String[] args) {
		SpringApplication.run(AmqpEmisorApplication.class, args);
	}

}
