import React, {useState} from "react";

import {useHistory} from "react-router-dom"



const Search = () => {
    const [category, setCategory] = useState("")
    const [id, setId] = useState("")
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/${category}/${id}`);

    }

    return (
        <form onSubmit={handleSubmit} >Search For: {""}
            <select onChange={(e) => setCategory(e.target.value) } value={category}>
                <option value="" hidden color="grey">--Choose--</option>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
            ID : <input type="number" onChange={(e) => setId(e.target.value) } value={id}/><p> </p>
            <button type="submit" value="Submit Survey" className="col-sm-1 btn btn-primary">Search</button>
        </form>
        
        );
};

export default Search