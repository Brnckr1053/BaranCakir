package com.codingdojo.hoppersreceipt;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;



@Controller
public class HomeController {
	@RequestMapping("/") 
		public String home(Model model) {
			
			
		        
			String name = "Grace Hopper";
		    String itemName = "Copper wire";
		    double price = 5.25;
		    String description = "Metal strips, also an illustration of nanoseconds.";
		    String vendor = "Little Things Corner Store";
		    
		    	// Your code here! Add values to the view model to be rendered
		    
		    model.addAttribute("gName", name);
		    model.addAttribute("gItemName", itemName);
		    model.addAttribute("gPrice", price);
		    model.addAttribute("gDescription", description);
		    model.addAttribute("gVendor", vendor);
		    
		 
		    

			return "index.jsp";
			
		}
	
}
