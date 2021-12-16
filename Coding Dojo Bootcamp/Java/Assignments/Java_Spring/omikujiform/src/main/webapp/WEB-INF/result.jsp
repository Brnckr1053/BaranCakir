<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Result</title>
</head>
<body>
		<h1>Here's your Omikuji!</h1>
		<h2><span><c:out value="${intro}">no intro</c:out></span></h2>
		 <a href="/">Go back</a>
</body>
</html>