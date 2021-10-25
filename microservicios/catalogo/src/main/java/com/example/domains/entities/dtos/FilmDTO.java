package com.example.domains.entities.dtos;

import com.example.domains.entities.Film;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class FilmDTO {
	@JsonProperty("id")
	private int filmId;
	@JsonProperty("description")
	private String description;
	@JsonProperty("title")
	private String title;
	/*
	@JsonProperty("last_update")
	private Timestamp last_update;
	@JsonProperty("length")
	private int length;
	@JsonProperty("rating")
	private String rating;
	@JsonProperty("release_year")
	private Short release_year;
	@JsonProperty("replacement_cost")
	private BigDecimal replacement_cost;
	@JsonProperty("title")
	private String title;
	@JsonProperty("language_id")
	private Language language_id;
	@JsonProperty("original_language_id")
	private Language original_language_id;
	@JsonProperty("filmActors")
	private List<FilmActor> filmActors;
	@JsonProperty("filmCategories")
	private List<FilmCategory> filmCategories;*/
	
	
	public static Film from(FilmDTO source) {
		return new Film(
				source.getFilmId(),
				source.getDescription(),
				source.getTitle()
				
				
				);
	}
	public static FilmDTO from(Film source) {
	
				return new FilmDTO(
						source.getFilmId(),
						source.getDescription(),
						source.getTitle()
						
						);
	}
	

}
