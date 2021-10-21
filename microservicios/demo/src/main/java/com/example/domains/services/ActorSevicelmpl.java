package com.example.domains.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.domains.contracts.services.ActorService;
import com.example.domains.entities.Actor;
import com.example.exceptions.DuplicateKeyException;
import com.example.exceptions.InvalidDataException;
import com.example.exceptions.NotFoundException;
import com.example.infraectructure.repositories.ActorRepository;

public class ActorSevicelmpl implements ActorService {
	@Autowired
	private ActorRepository dao;

	@Override
	public List<Actor> getAll() {
		return dao.findAll();
	}

	@Override
	public Optional<Actor> getOne(Integer id) {
		// TODO Auto-generated method stub
		return dao.findById(id);
	}

	@Override
	public Actor add(Actor item) throws DuplicateKeyException, InvalidDataException {
		if (getOne(item.getActorId()).isPresent())
			throw new DuplicateKeyException();
		dao.save(item);
		return dao.save(item);
	}

	@Override
	public Actor modify(Actor item) throws NotFoundException, InvalidDataException {
		if (getOne(item.getActorId()).isEmpty())
			throw new NotFoundException();
		return dao.save(item);
	}

	@Override
	public void deleteById(Integer id) {
		dao.deleteById(id);

	}

	@Override
	public void delete(Actor item) {
		deleteById(item.getActorId());

	}

}
