package com.example.domains.entities.dtos;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.example.domains.entities.Actor;
import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
@ApiModel(value = "Actor", description = "Datos para su modificación y para añadir nuevo")
public class ActorDTO {
	@JsonProperty("id")
	@NotBlank
	@Size(max=5)
	@ApiModelProperty(name = "Identificar único del actor", value = "Identificador",required = true)
	private int actorId;
	
	@JsonProperty("nombre")
	@NotBlank
	@Size(max=45)
	@ApiModelProperty(name = "Nombre", value = "Nombre de pila del actor",required = true)
	
	private String firstName;
	@JsonProperty("apellidos")
	@NotBlank
	@Size(max=45)
	@ApiModelProperty(name = "Apellido", value = "Segundo nombre del actor el apellido",required = true)

	private String lastName;

	public static Actor from(ActorDTO source) {
		return new Actor(
				source.getActorId(),
				source.getFirstName(),
				source.getLastName()
				);
	}
	public static ActorDTO from(Actor source) {
		return new ActorDTO(
				source.getActorId(),
				source.getFirstName(),
				source.getLastName()
				);
	}
}
