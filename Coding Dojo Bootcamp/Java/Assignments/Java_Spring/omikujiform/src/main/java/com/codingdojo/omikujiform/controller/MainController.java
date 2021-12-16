package com.codingdojo.omikujiform.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {
	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}
	
	@RequestMapping(value="/action", method=RequestMethod.POST)
	public String login(
			@RequestParam(value="number") String number,
			@RequestParam(value="city") String city,
			@RequestParam(value="name") String name,
			@RequestParam(value="hobby") String hobby,
			@RequestParam(value="thing") String thing,
			@RequestParam(value="something") String something,
			HttpSession session
			) {
	    
	    	// CODE TO PROCESS FORM ie. check email and password
		String intro = "In " + number + " years you will live in " + city + " with " + name + " as your roommate, " + hobby + " for living. The next time you see a " + thing + ", you will have good luck. Also " + something + ".";
		session.setAttribute("intro", intro);
	    	
	    	return "redirect:/show"; // <-- we'll change this when we learn redirecting
	}
	
	@RequestMapping("/show")
	public String index(HttpSession session, Model model) {
		String intro = (String) session.getAttribute("intro");
		System.out.println(intro);
		model.addAttribute("intro", intro);
		return "result.jsp";
	}
}
