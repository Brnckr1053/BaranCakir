package com.codingdojo.pokebooks.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codingdojo.pokebooks.models.Book;
import com.codingdojo.pokebooks.repositories.BookRepo;

@Service
public class BookService {
	
	public final BookRepo bookRepo;
    
    public BookService(BookRepo bookRepo) {
        this.bookRepo = bookRepo;
    }
    // returns all the books
    public List<Book> allBooks() {
        return bookRepo.findAll();
    }
    // creates a book
//    public Book createBook(Book b) {
//        return bookRepo.save(b);
//    }
    // retrieves a book
    public Book findBook(Long id) {
        Optional<Book> optionalBook = bookRepo.findById(id);
        if(optionalBook.isPresent()) {
            return optionalBook.get();
        } else {
            return null;
        }
    }
    
    
    public Book saveBook(Book b) {
    	return bookRepo.save(b);
    }
    
    
    
    
    public void deleteBook(Long id) {
    	bookRepo.deleteById(id);
    }
	
}
