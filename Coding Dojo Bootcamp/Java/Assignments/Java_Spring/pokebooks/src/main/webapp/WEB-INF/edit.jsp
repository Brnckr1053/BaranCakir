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
    <div class="container"><br><br> <!-- Beginning of Container -->
        
	
	<br><br><br><br><br><br>
	<h1>Edit Book</h1><br><br>
	<a href="/books">Dashboard</a><br><br><br>
	<form:form action="/update/${book.id}" method="post" modelAttribute="book">
		<input type="hidden" name="_method" value="put">
	    <p>
	        <form:label path="expense">Expense</form:label>
	        <p class="text-danger"><form:errors path="expense"/></p>
	        <form:input path="expense"/>
	    </p>
	    
	    <p>
	        <form:label path="vendor">Vendor</form:label>
	        <p class="text-danger"><form:errors path="vendor"/></p>
	        <form:input path="vendor"/>
	    </p>
	    <p>
	        <form:label path="amount">Amount</form:label>
	        <p class="text-danger"><form:errors path="amount"/></p>     
	        <form:input type="number" path="amount"/>
	    </p>    
	    <p>
	        <form:label path="description">Description</form:label>
	        <p class="text-danger"><form:errors path="description"/></p>
	        <form:textarea path="description"/>
	    </p>
	    <input type="submit" value="Submit"/>
	</form:form>    
        
        
    </div>
    <br><br><br><br><br><br> <!-- End of Container -->
</body>
</html>