import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import { useParams, useHistory } from "react-router-dom";
import DeleteButton from '../components/DeleteButton';
    
const Update = (props) => {
    // const { id } = useParams();
    // const [title, setTitle] = useState('');
    // const [price, setPrice] = useState('');
    // const [description, setDescription] = useState('');
    const { id } = useParams();
    const history = useHistory();
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                // setTitle(res.data.title);
                // setPrice(res.data.price);
                // setDescription(res.data.description);
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch((err) => {
                console.error(err); 
                history.push('/error');
            });
    }, []);
    
    const updateAuthor = author => {
        // e.preventDefault();
        axios.put('http://localhost:8000/api/authors/' + id, author
        // {
            // title,
            // price,
            // description
        // }
        )
            .then((res) => console.log(res), history.push('/authors/' +id))
            
            // .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Update a Author</h1>
            {loaded && (
                <>
                    <AuthorForm
                        onSubmitProp={updateAuthor}
                        initialTitle={author.title}
                        initialPrice={author.price}
                        initialDescription={author.description}
                    />
                    <DeleteButton authorId={author._id} successCallback={()=>history.push("/authors")}/>
                </>
                
            )}
            {/* <form onSubmit={updateAuthor}>
                <p>
                    <label>Title : </label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price : </label><br />
                    <input type="number" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description : </label><br />
                    <input type="text" 
                    name="description" 
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit"  href='/authors/'/>
            </form> */}
        </div>
    )
}
    
export default Update;

