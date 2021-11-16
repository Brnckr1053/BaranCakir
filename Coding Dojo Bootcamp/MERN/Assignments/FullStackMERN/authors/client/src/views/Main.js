import React, { useEffect, useState } from 'react'
// import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';
import {  Link } from "react-router-dom";
import axios from 'axios';
    
export default () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);
    
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId));
    }

    // const createAuthor = author => {
    //     axios.post('http://localhost:8000/api/authors', author)
    //         .then(res=>{
    //             setAuthors([...authors, res.data]);
    //         })
    // }

    return (
        <div>
            <p>
                <Link to="/authors/create">Add an Author</Link>
            </p>
            {loaded && <AuthorList authors={authors} setAuthors={setAuthors} removeFromDom={removeFromDom}/>}
            <hr/>
            {/* <AuthorForm onSubmitProp={createAuthor} initialTitle="" initialPrice="" initialDescription=""/> */}
        </div>
    )
}
    




