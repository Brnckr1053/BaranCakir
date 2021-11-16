import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useHistory } from "react-router-dom";
import DeleteButton from '../components/DeleteButton';
    
const Detail = (props) => {
    const [author, setAuthor] = useState({})
    const { id } = useParams();
    const history = useHistory();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' +id)
            .then(res => setAuthor(res.data))
            .catch((err) => {
                console.error(err); 
                history.push('/error');
            });
    }, [id]);
    
    return (
        <div>
            <p>
                <Link to="/authors/create">Add an Author</Link>
            </p>
            <p>Title : {author.title}</p>
            <p>Price: ${author.price}</p>
            <p>Description: {author.description}</p>
            <Link to={"/authors/edit/" + author._id}><span>Edit</span></Link> | 
            <DeleteButton authorId={author._id} successCallback={()=>history.push("/authors")}/>
        </div>
    )
}
    
export default Detail;

