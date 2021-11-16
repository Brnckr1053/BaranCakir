import React, { useEffect, useState } from 'react'
import AuthorForm from '../components/AuthorForm';
// import AuthorList from '../components/AuthorList';
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';
    
export default () => {
    const [authors, setAuthors] = useState([]);
    const [errors, setErrors] = useState([]);
    const history = useHistory();
    // const { id } = useParams();
    // const [loaded, setLoaded] = useState(false);
    
    // useEffect(()=>{
    //     axios.get('http://localhost:8000/api/authors')
    //         .then(res=>{
    //             setAuthors(res.data);
    //             // setLoaded(true);
    //         })
    //         // .catch(err => console.error(err));
    // },[]);
    
    // const removeFromDom = authorId => {
    //     setAuthors(authors.filter(author => author._id != authorId));
    // }

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors', author)
            .then(res=>{
                setAuthors([...authors, res.data]);
                history.push('/authors/')})
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    return (
        <div>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <AuthorForm onSubmitProp={createAuthor} initialTitle="" initialPrice="" initialDescription=""/>
        </div>
    )
}