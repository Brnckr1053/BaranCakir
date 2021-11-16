import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
import DeleteButton from './DeleteButton'
import '../App.css'

    
const AuthorList = (props) => {
    // const [authors, setAuthors] = useState([]);


    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/authors')
    //         .then(res => setAuthors(res.data));
    // }, [])
    
    const removeFromDom = authorId => {
        props.setAuthors(props.authors.filter(author => author._id != authorId))
    }

    return (
        
            
            
                <div className="App">
                    <table>
                        <thead>
                            <tr>
                                <th>Author : </th>
                                <th>Action Available : </th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.authors.map( (author, i) => {
                                return (
                                    <tr key={i}>
                                        <td><Link to={'/authors/'  + author._id}><p>{author.title}</p></Link></td>
                                        <td>
                                            <Link to={"/authors/edit/"  + author._id}><span>Edit</span></Link> |
                                            <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/>
                                        </td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
                </div>
        
    );
}
    
export default AuthorList;

