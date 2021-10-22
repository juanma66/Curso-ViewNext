package com.example.infraestructure.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.domains.entities.Category;

public interface CategolyRepository extends JpaRepository<Category, Integer> {

}
