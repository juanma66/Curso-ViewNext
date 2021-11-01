package com.example.application.resource;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.domains.contracts.services.ActorService;
import com.example.domains.entities.dtos.ActorDTO;
import com.example.domains.entities.dtos.FilmShortDTO;
import com.example.exceptions.BadRequestException;
import com.example.exceptions.DuplicateKeyException;
import com.example.exceptions.InvalidDataException;
import com.example.exceptions.NotFoundException;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import org.springframework.http.HttpStatus;

@RestController
@RequestMapping(path = "/actores")
@Api(value = "Crud Actores", description = "Para listar, agregar, modificar y eliminar actores")
public class ActorResource {
	@Autowired
	ActorService srv;
	
	@ApiOperation("Metodo que devuelve la lista de actores")
	@GetMapping
	public List<ActorDTO> getAll(@RequestParam(required = false) String sort) {
		if(sort== null)
			return srv.getByProjection(ActorDTO.class);
		else
			return (List<ActorDTO>) srv.getByProjection(Sort.by(sort), ActorDTO.class);
	}
	

	@ApiOperation("Metodo que permite la paginación")
	@GetMapping(params = "page")
	public Page<ActorDTO> getAllPageable(Pageable item) {
		return srv.getByProjection(item, ActorDTO.class);
	}

	@ApiOperation("Metodo que conprueba el identificar pasado de un actor")
	@GetMapping(path = "/{id}")
	public ActorDTO getOne(@PathVariable int id) throws NotFoundException {
		var actor = srv.getOne(id);
		if(actor.isEmpty())
			throw new NotFoundException();
		else
			return ActorDTO.from(actor.get());
	}
	
	@ApiOperation("Metodo que devuelve una colección, pasandoré la id")
	@GetMapping(path = "/{id}/peliculas")
	@Transactional
	public List<FilmShortDTO> getPelis(@PathVariable int id) throws NotFoundException {
		var actor = srv.getOne(id);
		if(actor.isEmpty())
			throw new NotFoundException();
		else {
			return (List<FilmShortDTO>) actor.get().getFilmActors().stream()
					.map(item -> FilmShortDTO.from(item.getFilm()))
					.collect(Collectors.toList());
		}
	}
	
	@ApiOperation("Metodo que añade un nuevo actor")
	@PostMapping
	public ResponseEntity<Object> create(@Valid @RequestBody ActorDTO item) throws BadRequestException, DuplicateKeyException, InvalidDataException {
		if(item == null)
			throw new BadRequestException("Faltan los datos");
		var newItem = srv.add(ActorDTO.from(item));
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
			.buildAndExpand(newItem.getActorId()).toUri();
		return ResponseEntity.created(location).build();

	}

	@ApiOperation("Metodo que actualiza un actor, pasandoré la id")
	@PutMapping("/{id}")
	public ActorDTO update(@PathVariable int id, @Valid @RequestBody ActorDTO item) throws BadRequestException, NotFoundException, InvalidDataException {
		if(item == null)
			throw new BadRequestException("Faltan los datos");
		if(id != item.getActorId())
			throw new BadRequestException("No coinciden los identificadores");
		return ActorDTO.from(srv.modify(ActorDTO.from(item)));	
	}

	@ApiOperation("Metodo que elimina un actor")
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable int id) {
		srv.deleteById(id);
	}

}
