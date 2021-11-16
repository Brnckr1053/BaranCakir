import React, { useState } from 'react';
import axios from 'axios';
export default (props) => {
    //keep track of what is being typed via useState hook
    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle); 
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
    // const [errors, setErrors] = useState([]);
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person

        // axios.post('http://localhost:8000/api/authors', {
        //     title,
        //     price,
        //     description
        // })
        //     .then(res=>console.log(res))
        //     .catch(err => console.error(err));
            // .catch(err=>{
            //     const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            //     const errorArr = []; // Define a temp error array to push the messages in
            //     for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
            //         errorArr.push(errorResponse[key].message)
            //     }
            //     // Set Errors
            //     setErrors(errorArr);
            // })
    
    //onChange to update title and price

        onSubmitProp({title, price, description});
    }

    return (
        <form onSubmit={onSubmitHandler}>
            {/* {errors.map((err, index) => <p key={index}>{err}</p>)} */}
            <p>
                <label>Title : </label><br/>
                <input type="text" name="title" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price : </label><br/>
                <input type="number" name="price" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description : </label><br/>
                <input type="text" name="description" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

