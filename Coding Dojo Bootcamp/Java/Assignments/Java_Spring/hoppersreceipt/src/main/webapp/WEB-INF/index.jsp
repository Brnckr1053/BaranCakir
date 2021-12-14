<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Simple Receipt</title>

</head>
<body>
	<h1>Customer Name: <c:out value="${gName}"/></h1>
    <h2>Item Name: <c:out value="${gItemName}"/></h2>
    <h2>Description: <c:out value="${gDescription}"/></h2>
    <h2>Vendor: <c:out value="${gVendor}"/></h2>
    
</body>
</html>