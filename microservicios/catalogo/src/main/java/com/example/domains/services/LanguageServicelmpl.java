package com.example.domains.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import com.example.domains.contracts.services.LanguageService;

import com.example.domains.entities.Language;
import com.example.exceptions.DuplicateKeyException;
import com.example.exceptions.InvalidDataException;
import com.example.exceptions.NotFoundException;

import com.example.infraestructure.repositories.LanguageRepository;

@Service
public class LanguageServicelmpl implements LanguageService{
	@Autowired
	private LanguageRepository dao;

	@Override
	public List<Language> getAll() {
		return dao.findAll(Sort.by("name"));
	}

	@Override
	public Optional<Language> getOne(Integer id) {
		return dao.findById(id);
	}

	@Override
	public Language add(Language item) throws DuplicateKeyException, InvalidDataException {
		if(item == null)
			throw new InvalidDataException("Faltan los datos");
		if(item.isInvalid())
			throw new InvalidDataException(item.getErrorsString());
		if(getOne(item.getLanguageId()).isPresent())
			throw new DuplicateKeyException();		
		return dao.save(item);
	}

	@Override
	public Language modify(Language item) throws NotFoundException, InvalidDataException, DuplicateKeyException {
		if(item == null)
			throw new InvalidDataException("Faltan los datos");
		if(item.isInvalid())
			throw new InvalidDataException(item.getErrorsString());
		if(getOne(item.getLanguageId()).isPresent())
			throw new DuplicateKeyException();
		
		return dao.save(item);
	}

	@Override
	public void delete(Language item) throws InvalidDataException {
		if(item == null)
			throw new InvalidDataException("Faltan los datos");
		deleteById(item.getLanguageId());
	}

	@Override
	public void deleteById(Integer id) {
		dao.deleteById(id);
		
	}
	

	
	
}
