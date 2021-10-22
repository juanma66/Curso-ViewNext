package com.example.domains.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.domains.contracts.services.CatalogoService;
import com.example.domains.entities.Category;
import com.example.exceptions.DuplicateKeyException;
import com.example.exceptions.InvalidDataException;
import com.example.exceptions.NotFoundException;
import com.example.infraestructure.repositories.CategolyRepository;


public class CategolyServicelmpl implements CatalogoService {
	@Autowired
	private CategolyRepository dao;
	
	
	
	public CategolyServicelmpl() {
	}

	@Override
	public List<Category> getAll() {
		return null;
	}

	@Override
	public Optional<Category> getOne(Integer id) {
		return null;
	}

	@Override
	public Category add(Category item) throws DuplicateKeyException, InvalidDataException {
		return null;
	}

	@Override
	public Category modify(Category item) throws NotFoundException, InvalidDataException {
		return null;
	}

	@Override
	public void delete(Category item) throws InvalidDataException {
		if(item == null)
			throw new InvalidDataException("Faltan los datos");
		deleteById(item.getCategoryId());
	}

	@Override
	public void deleteById(Integer id) {
		//dao.deleteById(id);

	}

}
