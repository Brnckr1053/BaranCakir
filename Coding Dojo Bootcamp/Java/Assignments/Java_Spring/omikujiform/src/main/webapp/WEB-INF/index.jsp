<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Omikuji</title>
</head>
<body>

	<form action="/search">
        <label>Search:</label>
        <input type="text" name="searchTerm">
        <input type="submit">
    </form>
	<h3>Send an Omikuji!</h3>
    <form action='/action' method='POST'>
		<label>Pick any number from 5 to 25</label><br>
	    	<input type="number" name='number' min='5' max='25'><br><br>
		<label>Enter the name of city</label><br>
	    	<input type='text' name='city'><br><br>
	    <label>Enter the name of any real person</label><br>
	    	<input type='text' name='name'><br><br>
	    <label>Enter professional endeavor or hobby</label><br>
	    	<input type='text' name='hobby'><br><br>
	    <label>Enter any type of living thing</label><br>
	    	<input type='text' name='thing'><br><br>
	    <label>Say something nice to someone</label><br>
	    	<textarea name='something'></textarea><br><br>
	    	
	    <label>Send and show a friend</label><br>
	    	<input type='submit' value='Send'>
    </form>
</body>
</html>