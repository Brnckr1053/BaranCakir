<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
   <!-- c:out ; c:forEach ; c:if -->
 <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
   <!-- Formatting (like dates) -->
 <%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
   <!-- form:form -->
 <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>  
   <!-- for rendering errors on PUT routes -->
 <%@ page isErrorPage="true" %>   
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Title Here</title>
  <!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
      rel="stylesheet" 
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
      crossorigin="anonymous">

</head>
<body>
    <div class="container"> <br><br><!-- Beginning of Container -->
        <h1>This is Pokebook</h1><br>
        
        <a href="/books">Dashboard</a><br><br><br>
        
        
        	<h2>Expense : <c:out value="${book.expense}"></c:out></h2>
        	<p>Vendor : <c:out value="${book.vendor}"></c:out></p>
        	<p>Amount : <c:out value="${book.amount}"></c:out></p>
        	<p>Description : <c:out value="${book.description}"></c:out></p>
            <br><br>
        	<form action="/edit/${book.id}" method="post">
    			<input type="hidden" name="_method" value="update">
    			<input class="btn btn-primary" type="submit" value="Update">
			</form> <br><br>
		    <form action="/delete/${book.id}" method="post">
    			<input type="hidden" name="_method" value="delete">
    			<input class="btn btn-danger" type="submit" value="Delete">
			</form>
        	
        	
        
        
    </div> <!-- End of Container -->
</body>
</html>
