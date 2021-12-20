package com.codingdojo.pokebooks.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.codingdojo.pokebooks.models.Book;
import com.codingdojo.pokebooks.services.BookService;

@Controller
public class MainController {
	
	
	public final BookService bookService;
    public MainController(BookService bookService){
        this.bookService = bookService;
        }
	
	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}
	
	@RequestMapping("/books")
	public String books(Model model, @ModelAttribute("book") Book book) {
		List<Book> books = bookService.allBooks();
		model.addAttribute("books", books);
		return "dashboard.jsp";
	}
	
//	public String newBook(@ModelAttribute("book") Book book) {
//        return "dashboard.jsp";
//    }
	
	@GetMapping("/book/{id}")
    public String show(Model model, @PathVariable("id") Long id) {
        Book book = bookService.findBook(id);
        model.addAttribute("book", book);
        return "bookinfo.jsp";
    }
	
	
	// ... imports removed for brevity
	
	   
//	@RequestMapping("/new")
//    public String newBook(@ModelAttribute("book") Book book) {
//        return "dashboard.jsp";
//    }
    @RequestMapping(value="/create", method=RequestMethod.POST)
    public String create(@Valid @ModelAttribute("book") Book book, BindingResult result, Model model) {
        if (result.hasErrors()) {
        	List<Book> books = bookService.allBooks();
        	model.addAttribute("books", books);
            return "dashboard.jsp";
        } else {
            bookService.saveBook(book);
            return "redirect:/books";
        }
    }

	
    @RequestMapping("/edit/{id}")
    public String edit(@PathVariable("id") Long id, Model model) {
        Book book = bookService.findBook(id);
        model.addAttribute("book", book);
        return "edit.jsp";
    }
    
    @RequestMapping(value="/update/{id}", method= {RequestMethod.PUT})
    public String update(@Valid @ModelAttribute("book") Book book, BindingResult result) {
        if (result.hasErrors()) {
            return "edit.jsp";
        } else {
            bookService.saveBook(book);
            return "redirect:/books";
        }
    }

   
	@RequestMapping(value="/delete/{id}", method= {RequestMethod.DELETE})
	    public String delete(@PathVariable("id") Long id) {
	        bookService.deleteBook(id);
	        return "redirect:/books";
	}
	

}
