package com.codingdojo.pokebooks.repositories;


import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.pokebooks.models.Book;


@Repository
public interface BookRepo extends CrudRepository<Book, Long>{

	List<Book> findByExpenseContaining(String expense);
	
	List<Book> findAll();
	
	Optional<Book> findById(Long id);
	
	void deleteById(Long id);
 
 
}


