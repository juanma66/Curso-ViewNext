package com.example.domains.entities.dtos;

import org.springframework.beans.factory.annotation.Value;
import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.annotations.ApiModelProperty;

public interface ActorShort {
	int getActorId();
	
	@ApiModelProperty(name = "Nombre Completo", value = "Nombre más apellidos")
    @JsonProperty("Nombre completo")
	@Value("#{target.lastName + ', ' + target.firstName}")
	String getNombreCompleto();
}
