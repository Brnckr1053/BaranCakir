import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";


const Error = (props) => {


    return(
        <div>
            <p>"We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?"</p>
            <p><Link to="/authors/create">Add an Author</Link></p>
        </div>
    )
}

export default Error;