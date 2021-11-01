package com.example.application.resource;

import java.net.URI;
import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.domains.entities.Language;
import com.example.domains.entities.dtos.FilmShortDTO;
import com.example.exceptions.BadRequestException;
import com.example.exceptions.InvalidDataException;
import com.example.exceptions.NotFoundException;
import com.example.infraestructure.repositories.LanguageRepository;
import com.fasterxml.jackson.annotation.JsonView;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(path = "/idiomas")
@Api(value = "Crud idiomas", description = "Para listar, agregar, modificar y eliminar idiomas")

public class LanguageResource {
	@Autowired
	private LanguageRepository
	dao;

	@ApiOperation("Metodo que devuelve todas los lenguajes")
	@GetMapping
	@JsonView(Language.Partial.class)
	public List<Language> getAll() {
		return dao.findAll(Sort.by("name"));
	}

	@ApiOperation("Metodo que devuelve un lenguaje, pasandoré una id")
	@GetMapping(path = "/{id}")
	@JsonView(Language.Complete.class)
	public Language getOne(@PathVariable int id) throws Exception {
		Optional<Language> rslt = dao.findById(id);
		if (!rslt.isPresent())
			throw new NotFoundException();
		return rslt.get();
	}

	
	@ApiOperation("Metodo que devuelve un colección, pasandoré una id")
	@GetMapping(path = "/{id}/peliculas")
	@Transactional
	public List<FilmShortDTO> getFilms(@PathVariable int id) throws Exception {
		Optional<Language> rslt = dao.findById(id);
		if (!rslt.isPresent())
			throw new NotFoundException();
		return rslt.get().getFilms().stream().map(item -> FilmShortDTO.from(item))
				.collect(Collectors.toList());
	}
	
	@ApiOperation("Metodo que devuelve un colección de la VO, pasandoré una id")
	@GetMapping(path = "/{id}/vo")
	@Transactional
	public List<FilmShortDTO> getFilmsVO(@PathVariable int id) throws Exception {
		Optional<Language> rslt = dao.findById(id);
		if (!rslt.isPresent())
			throw new NotFoundException();
		return rslt.get().getFilmsVO().stream().map(item -> FilmShortDTO.from(item))
				.collect(Collectors.toList());
	}

	@ApiOperation("Metodo que añade un lenguaje")
	@PostMapping
	@ResponseStatus(code = HttpStatus.CREATED)
	@JsonView(Language.Partial.class)
	public ResponseEntity<Object> add(@Valid @RequestBody Language item) throws Exception {
		if (item.isInvalid())
			throw new InvalidDataException(item.getErrorsString());
		if (dao.findById(item.getLanguageId()).isPresent())
			throw new InvalidDataException("Duplicate key");
		dao.save(item);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(item.getLanguageId()).toUri();
		return ResponseEntity.created(location).build();
	}

	@ApiOperation("Metodo que modifica un lenguaje, pasandoré una id")
	@PutMapping(path = "/{id}")
	@JsonView(Language.Partial.class)
	public Language modify(@PathVariable int id, @Valid @RequestBody Language item) throws Exception {
		if (item.getLanguageId() != id)
			throw new BadRequestException("No coinciden los ID");
		if (item.isInvalid())
			throw new InvalidDataException(item.getErrorsString());
		if (!dao.findById(item.getLanguageId()).isPresent())
			throw new NotFoundException();
		dao.save(item);
		return item;
	}

	@ApiOperation("Metodo que elima un mensaje, pasandoré una id")
	@DeleteMapping(path = "/{id}")
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	@JsonView(Language.Partial.class)
	public void delete(@PathVariable int id) throws Exception {
		try {
			dao.deleteById(id);
		} catch (Exception e) {
			throw new NotFoundException("Missing item", e);
		}
	}

	@ApiOperation("Metodo que devuelve las fechas por orden")
	public List<Language> novedades(Timestamp fecha) {
		return dao.findByLastUpdateGreaterThanEqualOrderByLastUpdate(fecha);
	}

}
