<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="ISO-8859-1">
	<title>Dojo Page</title>
</head>
<body>
	<h1>Fruit Store</h1>
	
	<table class="table">
  		<thead>
		    <tr>
		        <th>Name</th>
		        <th>Price</th>
		    </tr>
		 <thead/> 
		 <tbody>
		   	<c:forEach var="item" items="${fruits}">
		    <tr>
		        <td>
		            <p><c:out value="${item.name}"></c:out></p>
		        </td>
		        <td>
		            <p><c:out value="${item.price}"></c:out></p>
		        </td>
		        
		    </tr>
	    	</c:forEach>
	    </tbody>	
	</table>
	
</body>
</html>