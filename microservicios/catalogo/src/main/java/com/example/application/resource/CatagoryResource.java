package com.example.application.resource;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
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

import com.example.domains.entities.Category;
import com.example.exceptions.BadRequestException;
import com.example.exceptions.InvalidDataException;
import com.example.exceptions.NotFoundException;
import com.example.infraestructure.repositories.CategoryRepository;



@RestController
@RequestMapping(path="/api/catagory")
public class CatagoryResource {

	
	@Autowired
	private CategoryRepository dao;

	@GetMapping
	public List<Category> getAll() {
	
		return dao.findAll();
	}


	@GetMapping(path = "/{id}")
	public Category getOne(@PathVariable int id) throws Exception {
		Optional<Category> rslt = dao.findById(id);
		if (!rslt.isPresent())
			throw new NotFoundException();
		return rslt.get();
	}

	@PostMapping
	@ResponseStatus(code = HttpStatus.CREATED)
	public ResponseEntity<Object> add(@Valid @RequestBody Category item) throws Exception {
		if (dao.findById(item.getCategoryId()).isPresent())
			throw new InvalidDataException("Duplicate key");
		int id = 1;
		Optional<Category> encontrado = dao.findAll(PageRequest.of(0, 1, Sort.by(Direction.DESC, "id"))).stream()
				.findFirst();
		if (encontrado.isPresent())
			id = encontrado.get().getCategoryId() + 1;
		item.setCategoryId(id);
		dao.save(item); // ConstraintViolationException
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(id).toUri();
		return ResponseEntity.created(location).build();
	}

	@PutMapping(path = "/{id}")
	public Category modify(@PathVariable int id, @Valid @RequestBody Category item) throws Exception {
		if (item.getCategoryId() != id)
			throw new BadRequestException("No coinciden los ID");
		if (!dao.findById(item.getCategoryId()).isPresent())
			throw new NotFoundException("Missing item");
		return dao.save(item); // ConstraintViolationException
	}

	@DeleteMapping(path = "/{id}")
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	public void delete(@PathVariable int id) throws Exception {
		try {
			dao.deleteById(id);
		} catch (Exception e) {
			throw new NotFoundException("Missing item", e);
		}
	}

	
	
	}

