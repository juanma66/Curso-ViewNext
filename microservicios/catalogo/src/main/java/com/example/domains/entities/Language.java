package com.example.domains.entities;

import java.io.Serializable;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.PastOrPresent;

import org.hibernate.annotations.Generated;
import org.hibernate.annotations.GenerationTime;
import org.hibernate.validator.constraints.Length;

import com.example.domains.core.EntityBase;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.sql.Timestamp;
import java.util.List;
import java.util.Objects;


/**
 * The persistent class for the language database table.
 * 
 */
@Entity
@Table(name="language")
@NamedQuery(name="Language.findAll", query="SELECT l FROM Language l")
public class Language extends EntityBase<Language> implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@NotBlank
	@Column(name="language_id")
	private int languageId;

	@Column(name="last_update")
	@JsonIgnore
	@Generated(value = GenerationTime.ALWAYS)
	@PastOrPresent
	private Timestamp lastUpdate;
	
	@Column(name="name")
    @NotBlank
	@Length(min=2, max = 20)
	private String name;

	//bi-directional many-to-one association to Film
	@OneToMany(mappedBy="language")
	@JsonIgnore
	private List<Film> films;

	//bi-directional many-to-one association to Film
	@OneToMany(mappedBy="languageVO")
	@JsonIgnore
	private List<Film> filmsVO;

	public Language() {
	}
	
	

	public Language(int languageId) {
		super();
		this.languageId = languageId;
	}



	public int getLanguageId() {
		return this.languageId;
	}

	public void setLanguageId(int languageId) {
		this.languageId = languageId;
	}

	public Timestamp getLastUpdate() {
		return this.lastUpdate;
	}

	public void setLastUpdate(Timestamp lastUpdate) {
		this.lastUpdate = lastUpdate;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Film> getFilms() {
		return this.films;
	}

	public void setFilms(List<Film> films) {
		this.films = films;
	}

	public Film addFilm(Film film) {
		getFilms().add(film);
		film.setLanguage(this);

		return film;
	}

	public Film removeFilm(Film film) {
		getFilms().remove(film);
		film.setLanguage(null);

		return film;
	}

	public List<Film> getFilmsVO() {
		return this.filmsVO;
	}

	public void setFilmsVO(List<Film> filmsVO) {
		this.filmsVO = filmsVO;
	}

	public Film addFilmsVO(Film filmsVO) {
		getFilmsVO().add(filmsVO);
		filmsVO.setLanguageVO(this);

		return filmsVO;
	}

	public Film removeFilmsVO(Film filmsVO) {
		getFilmsVO().remove(filmsVO);
		filmsVO.setLanguageVO(null);

		return filmsVO;
	}

	@Override
	public int hashCode() {
		return Objects.hash(languageId);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Language other = (Language) obj;
		return languageId == other.languageId;
	}

	@Override
	public String toString() {
		return "Language [languageId=" + languageId + ", lastUpdate=" + lastUpdate + ", name=" + name + ", films="
				+ films + ", filmsVO=" + filmsVO + ", getLanguageId()=" + getLanguageId() + ", getLastUpdate()="
				+ getLastUpdate() + ", getName()=" + getName() + ", getFilms()=" + getFilms() + ", getFilmsVO()="
				+ getFilmsVO() + ", hashCode()=" + hashCode() + ", getErrors()=" + getErrors() + ", getErrorsString()="
				+ getErrorsString() + ", isValid()=" + isValid() + ", isInvalid()=" + isInvalid() + ", getClass()="
				+ getClass() + ", toString()=" + super.toString() + "]";
	}
	
	

}