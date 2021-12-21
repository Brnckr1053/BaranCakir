package com.codingdojo.loginregister.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.codingdojo.loginregister.models.LoginUser;
import com.codingdojo.loginregister.models.User;
import com.codingdojo.loginregister.services.UserService;

@Controller
public class MainController {
	
	 
	    private UserService userServ;
	    public MainController(UserService userServ) {
	    	this.userServ = userServ;
	    }
	    
	    @GetMapping("/")
	    public String index(Model model) {
	        model.addAttribute("newUser", new User());
	        model.addAttribute("newLogin", new LoginUser());
	        return "index.jsp";
	    }
	    
	    @PostMapping("/register")
	    public String register(@Valid @ModelAttribute("newUser") User newUser, BindingResult result, 
	    		Model model, HttpSession session) {
	        userServ.register(newUser, result);
	        if(result.hasErrors()) {
	            model.addAttribute("newLogin", new LoginUser());
	            return "index.jsp";
	        }
	        session.setAttribute("user_id", newUser.getId());
	        return "redirect:/home";
	    }
	    
	    @PostMapping("/login")
	    public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, BindingResult result, 
	    		Model model, HttpSession session) {
	        User user = userServ.login(newLogin, result);
	        if(result.hasErrors()) {
	            model.addAttribute("newUser", new User());
	            return "index.jsp";
	        }
	        session.setAttribute("user_id", user.getId());
	        return "redirect:/home";
	    }
	    
	    
	    @GetMapping("/logout")
	    public String logout(HttpSession session) {
	    	session.invalidate();
	    	return "redirect:/";
	    }
	    
	    @GetMapping("/home")
	    public String dashborad(HttpSession session, Model model) {
	    	Long userId = (Long) session.getAttribute("user_id");
	    	if(userId == null) {return "redirect:/";}
	    	
	    	User user = userServ.getUserInfo(userId);
	    	model.addAttribute("loggedUser", user);
	    	return "dashboard.jsp";
	    }
}
