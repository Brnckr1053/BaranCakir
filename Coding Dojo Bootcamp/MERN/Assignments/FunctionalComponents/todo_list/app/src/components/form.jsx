import React, { useState } from "react";

const Form = props => {
    

    const [myForm, setMyForm] = useState({
        todo: "",
        completed: false

    })

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        props.onSubmitIdea(myForm);
    }

    const onChangeHandler = (e) =>{
        setMyForm({...myForm, [e.target.name]: e.target.value})
    }

    return(
        <div className="col-6">
            <h1>Add your idea</h1>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <input type="text" name="todo" className="form-control" value={myForm.todo} onChange={onChangeHandler}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Add" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    );
}

export default Form