<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Hello Counter</title>
</head>
<body>
	<h1>Counter of Visits</h1>
			<fieldset>
				<% Integer count = (Integer) session.getAttribute("count"); %>
				<legend>Counter</legend>
				<p>You have visited the home page <c:out value="${count}" /> times</p>
				<p><a href="/reset">Reset Count</a></p>
				<p><a href="/">Visit Home</a></p>
			</fieldset>
</body>
</html>