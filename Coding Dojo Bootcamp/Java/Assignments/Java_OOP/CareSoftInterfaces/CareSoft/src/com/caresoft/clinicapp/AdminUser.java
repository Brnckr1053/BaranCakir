package com.caresoft.clinicapp;
import java.util.ArrayList;
import java.util.Date;

import javax.xml.transform.Templates;

public class AdminUser extends User implements HIPAACompliantUser, HIPAACompliantAdmin {
//... imports class definition...
    
    // Inside class:
    private Integer employeeID;
    private String role;
    private ArrayList<String> securityIncidents = new ArrayList<>();
    private int user;
    
    // TO DO: Implement a constructor that takes an ID and a role
    public AdminUser (Integer userId, String role) {
    	employeeID = userId;
    	this.role = role;
    	setId(employeeID);
    }
    // TO DO: Implement HIPAACompliantUser!
    // TO DO: Implement HIPAACompliantAdmin!
    
    public void newIncident(String notes) {
        String report = String.format(
            "Datetime Submitted: %s \n,  Reported By ID: %s\n Notes: %s \n", 
            new Date(), this.id, notes
        );
        securityIncidents.add(report);
    }
    
    public void authIncident() {
        String report = String.format(
            "Datetime Submitted: %s \n,  ID: %s\n Notes: %s \n", 
            new Date(), this.id, "AUTHORIZATION ATTEMPT FAILED FOR THIS USER"
        );
        securityIncidents.add(report);
    }
    
	@Override
	public ArrayList<String> reportSecurityIncidents() {
		return securityIncidents;
	}
	
	@Override
	public boolean assignPin(int pin) {
		user = pin;
		String s = Integer.toString(user);
		
		if (s.length() >= 6) {
			return true;
		}else {
			return false;
		}
		
	}
	@Override
	public boolean accessAuthorized(Integer confirmedAuthID) {
		if (confirmedAuthID == employeeID) {
			return true;
		}else {
			authIncident();
			return false;
		}
	}

	public Integer getEmployeeID() {
		return employeeID;
	}

	public void setEmployeeID(Integer employeeID) {
		this.employeeID = employeeID;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public ArrayList<String> getSecurityIncidents() {
		return securityIncidents;
	}

	public void setSecurityIncidents(ArrayList<String> securityIncidents) {
		this.securityIncidents = securityIncidents;
	}
    
    // TO DO: Setters & Getters
	
}
