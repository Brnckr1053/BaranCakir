package com.codingdojo.hellohuman;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
	
	@RequestMapping("/")
	public String hello(@RequestParam(value="name", required=false) String name, @RequestParam(value="last_name", required = false) String last_name, @RequestParam(value="times", required = false) String times) {
		String result = new String();
		if (name == null && last_name == null ) result = " Human";
		else if (name == null) result = last_name;
		else if (last_name == null) result = name;
		else if (times != null) {
			int time = Integer.parseInt(times);
			result = name.repeat(time);}
		else result = name + " " + last_name;
		return "Hello " + result;
	}
}
