package com.example.application.resource;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.example.domains.contracts.services.CategoryService;
import com.example.domains.entities.Category;
import com.example.domains.entities.dtos.FilmShortDTO;
import com.example.exceptions.BadRequestException;
import com.example.exceptions.DuplicateKeyException;
import com.example.exceptions.InvalidDataException;
import com.example.exceptions.NotFoundException;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import org.springframework.http.HttpStatus;

@RestController
@RequestMapping(path = "/categorias")
@Api(value = "Crud Catalogo", description = "Para listar, agregar, modificar y eliminar catalogo")
public class CategoryResource {
	@Autowired
	CategoryService srv;

	@ApiOperation("Metodo que devuelve todas las categolias")
	@GetMapping
	public List<Category> getAll() {
		return srv.getAll();
	}

	@ApiOperation("Metodo que devuelve una categoria, pasandorĂ© una id")
	@GetMapping(path = "/{id}")
	public Category getOne(@PathVariable int id) throws NotFoundException {
		var category = srv.getOne(id);
		if (category.isEmpty())
			throw new NotFoundException();
		else
			return category.get();
	}

	@ApiOperation("Metodo que devuelve una lista corta, pasandorĂ© una id")
	@GetMapping(path = "/{id}/peliculas")
	@Transactional
	public List<FilmShortDTO> getPelis(@PathVariable int id) throws NotFoundException {
		var Category = srv.getOne(id);
		if (Category.isEmpty())
			throw new NotFoundException();
		else {
			return (List<FilmShortDTO>) Category.get().getFilmCategories().stream()
					.map(item -> FilmShortDTO.from(item.getFilm())).collect(Collectors.toList());
		}
	}

	@ApiOperation("Metodo que aĂ±ade una nueva categorĂ­a")
	@PostMapping
	public ResponseEntity<Object> create(@Valid @RequestBody Category item)
			throws BadRequestException, DuplicateKeyException, InvalidDataException {
		if (item == null)
			throw new BadRequestException("Faltan los datos");
		var newItem = srv.add(item);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(newItem.getCategoryId()).toUri();
		return ResponseEntity.created(location).build();

	}

	@ApiOperation("Metodo que modifica una categoria, pasandorĂ© una id")
	@PutMapping("/{id}")
	public Category update(@PathVariable int id, @Valid @RequestBody Category item)
			throws BadRequestException, NotFoundException, InvalidDataException {
		if (item == null)
			throw new BadRequestException("Faltan los datos");
		if (id != item.getCategoryId())
			throw new BadRequestException("No coinciden los identificadores");
		return srv.modify(item);
	}

	@ApiOperation("Metodo que elimana una categoria, pasandorĂ© una id")
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable int id) {
		srv.deleteById(id);
	}

}
