package com.example.domains.entities.dtos;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Length;

import com.example.domains.entities.Film;
import com.fasterxml.jackson.annotation.JsonFormat;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiModelProperty.AccessMode;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@ApiModel(value = "PeliculaDetalles", description = "Version completa de las peliculas")
@Data @AllArgsConstructor @NoArgsConstructor
public class FilmDetailsDTO {
	@ApiModelProperty(value = "Identificador de la pelicula", required = true, accessMode = AccessMode.READ_ONLY)
	private int filmId;
	@Size(max=5)
	
	@ApiModelProperty(value = "Descripcion de la pelicula")
	private String description;
	@Length(max=128)
	
	@ApiModelProperty(value = "Duración de la pelicula", required = true)
	private int length;
	@Size(max=5)
	
	private String rating;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy")
	private Short releaseYear;
	
	private byte rentalDuration;
	
	private BigDecimal rentalRate;
	
	private BigDecimal replacementCost;
	
	@ApiModelProperty(value = "Titulo de la pelicula", required = true, allowableValues = "Un maximo de 255 caracteres")
	private String title;
	
	@ApiModelProperty(value = "Lenguaje de la pelicula")
	private String language;
	
	@ApiModelProperty(value = "Lenguaje de la versón originar")
	private String languageVO;
	
	
	private List<String> actors;
	@ApiModelProperty(name = "Lista actores", value = "Todos los actores")

	private List<String> categories;
	@ApiModelProperty(name = "Lista categorias", value = "Todas las categorias")

	
	public static FilmDetailsDTO from(Film source) {
		return new FilmDetailsDTO(
				source.getFilmId(), 
				source.getDescription(),
				source.getLength(),
				source.getRating(),
				source.getReleaseYear(),
				source.getRentalDuration(),
				source.getRentalRate(),
				source.getReplacementCost(),
				source.getTitle(),
				source.getLanguage() == null ? null : source.getLanguage().getName(),
				source.getLanguageVO() == null ? null : source.getLanguageVO().getName(),
				source.getFilmActors().stream().map(item -> item.getActor().getFirstName() + " " + item.getActor().getLastName())
					.collect(Collectors.toList()),
				source.getFilmCategories().stream().map(item -> item.getCategory().getName())
					.collect(Collectors.toList())
				);
	}
}
