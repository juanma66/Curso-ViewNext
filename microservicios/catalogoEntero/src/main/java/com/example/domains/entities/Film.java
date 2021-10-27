package com.example.domains.entities;

import java.io.Serializable;
import javax.persistence.*;
import javax.validation.constraints.PastOrPresent;

import org.hibernate.annotations.Generated;
import org.hibernate.annotations.GenerationTime;

import com.example.domains.core.EntityBase;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;


/**
 * The persistent class for the film database table.
 * 
 */
@Entity
@Table(name="film")
@NamedQuery(name="Film.findAll", query="SELECT f FROM Film f")
public class Film extends EntityBase<Film> implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="film_id")
	private int filmId;

	@Lob
	private String description;

	@Column(name="last_update")
	@Generated(value = GenerationTime.ALWAYS)
	@PastOrPresent
	private Timestamp lastUpdate;

	private int length;

	private String rating;

	@Column(name="release_year")
	private Short releaseYear;

	@Column(name="rental_duration")
	private byte rentalDuration;

	@Column(name="rental_rate")
	private BigDecimal rentalRate;

	@Column(name="replacement_cost")
	private BigDecimal replacementCost;

	private String title;

	//bi-directional many-to-one association to Language
	@ManyToOne
	@JoinColumn(name="language_id")
	private Language language;

	//bi-directional many-to-one association to Language
	@ManyToOne
	@JoinColumn(name="original_language_id")
	private Language languageVO;

	//bi-directional many-to-one association to FilmActor
	@OneToMany(mappedBy="film")
	private List<FilmActor> filmActors = new ArrayList<FilmActor>();

	//bi-directional many-to-one association to FilmCategory
	@OneToMany(mappedBy="film")
	private List<FilmCategory> filmCategories = new ArrayList<FilmCategory>();

	public Film() {
	}


	public Film(int filmId) {
		super();
		this.filmId = filmId;
	}



	public Film(int filmId, String title, String description) {
		super();
		this.filmId = filmId;
		this.title = title;
		this.description = description;
	}



	public Film(int filmId, String title, Language language) {
		super();
		this.filmId = filmId;
		this.title = title;
		this.language = language;
	}
	



	public Film(int filmId,String title, String description,Language language, @PastOrPresent Timestamp lastUpdate, byte rentalDuration,
			BigDecimal rentalRate, BigDecimal replacementCost  ) {
		super();
		this.filmId = filmId;
		this.title = title;
		this.description = description;
		this.language = language;
		this.lastUpdate = lastUpdate;
		this.rentalDuration = rentalDuration;
		this.rentalRate = rentalRate;
		this.replacementCost = replacementCost;
		
		
	}


	public Film(int filmId, String title, String description, int length, String rating, Short releaseYear,
			byte rentalDuration, BigDecimal rentalRate, BigDecimal replacementCost, Language language,
			Language languageVO, List<FilmActor> filmActors, List<FilmCategory> filmCategories) {
		super();
		this.filmId = filmId;
		this.title = title;
		this.description = description;
		this.length = length;
		this.rating = rating;
		this.releaseYear = releaseYear;
		this.rentalDuration = rentalDuration;
		this.rentalRate = rentalRate;
		this.replacementCost = replacementCost;
		this.language = language;
		this.languageVO = languageVO;
		this.filmActors = filmActors;
		this.filmCategories = filmCategories;
	}


	public int getFilmId() {
		return this.filmId;
	}

	public void setFilmId(int filmId) {
		this.filmId = filmId;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Timestamp getLastUpdate() {
		return this.lastUpdate;
	}

	public void setLastUpdate(Timestamp lastUpdate) {
		this.lastUpdate = lastUpdate;
	}

	public int getLength() {
		return this.length;
	}

	public void setLength(int length) {
		this.length = length;
	}

	public String getRating() {
		return this.rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	public Short getReleaseYear() {
		return this.releaseYear;
	}

	public void setReleaseYear(Short releaseYear) {
		this.releaseYear = releaseYear;
	}

	public byte getRentalDuration() {
		return this.rentalDuration;
	}

	public void setRentalDuration(byte rentalDuration) {
		this.rentalDuration = rentalDuration;
	}

	public BigDecimal getRentalRate() {
		return this.rentalRate;
	}

	public void setRentalRate(BigDecimal rentalRate) {
		this.rentalRate = rentalRate;
	}

	public BigDecimal getReplacementCost() {
		return this.replacementCost;
	}

	public void setReplacementCost(BigDecimal replacementCost) {
		this.replacementCost = replacementCost;
	}

	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Language getLanguage() {
		return this.language;
	}

	public void setLanguage(Language language) {
		this.language = language;
	}

	public Language getLanguageVO() {
		return this.languageVO;
	}

	public void setLanguageVO(Language languageVO) {
		this.languageVO = languageVO;
	}

	public List<FilmActor> getFilmActors() {
		return this.filmActors;
	}

	public void setFilmActors(List<FilmActor> filmActors) {
		this.filmActors = filmActors;
	}

	public FilmActor addFilmActor(FilmActor filmActor) {
		getFilmActors().add(filmActor);
		filmActor.setFilm(this);

		return filmActor;
	}

	public FilmActor removeFilmActor(FilmActor filmActor) {
		getFilmActors().remove(filmActor);
		filmActor.setFilm(null);

		return filmActor;
	}

	public List<FilmCategory> getFilmCategories() {
		return this.filmCategories;
	}

	public void setFilmCategories(List<FilmCategory> filmCategories) {
		this.filmCategories = filmCategories;
	}

	public FilmCategory addFilmCategory(FilmCategory filmCategory) {
		getFilmCategories().add(filmCategory);
		filmCategory.setFilm(this);

		return filmCategory;
	}

	public FilmCategory removeFilmCategory(FilmCategory filmCategory) {
		getFilmCategories().remove(filmCategory);
		filmCategory.setFilm(null);

		return filmCategory;
	}


	@Override
	public String toString() {
		return "Film [filmId=" + filmId + ", title=" + title + "]";
	}
	
	

}