import React, { useState } from 'react';

const Form = (props) =>{


    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [confirmPassword, setConfirmPassword] = useState("");

    const [firstNameValid, setFirstNameValid] = useState("");
    const [lastNameValid, setLastNameValid] = useState("");
    const [emailValid, setEmailValid] = useState("");
    const [passwordValid, setPasswordValid] = useState("");
    const [confirmPasswordValid, setConfirmPasswordValid] = useState("");



    // const createUser = (e) =>{
    //     e.preventDefault();
    //     const newUser = {
    //         firstName, lastName, email, password, confirmPassword
    //     }
    //     console.log('newUser:', newUser)
    // }


    const handleFirstName = (e) => {
        setFirstName(e.target.value);

        if(e.target.value.length < 2 && e.target.value.length !== 0){
            setFirstNameValid("First name has to be at least 2 characters!");
        }
        else{
            setFirstNameValid(true);
        }
    }
    
    
    const handleLastName = (e) => {
        setLastName(e.target.value);

        if(e.target.value.length < 2 && e.target.value.length !== 0){
            setLastNameValid("Last name has to be at least 2 characters!");
        }
        else{
            setLastNameValid(true);
        }
    }
    
    const handleEmail = (e) => {
        setEmail(e.target.value);

        if (e.target.value.length < 5 && e.target.value.length !== 0){
            setEmailValid("Email name has to be at least 5 characters!");
        }
        else{
            setEmailValid(true);
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);

        if (e.target.value.length < 8 && e.target.value.length !== 0){
            setPasswordValid("Password name has to be at least 8 characters!");
        }
        else{
            setPasswordValid(true)
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);

        if (e.target.value !== password && e.target.value.length !== 0){
            setConfirmPasswordValid("Passwords do not match!");
        }
        else{
            setConfirmPasswordValid(true)
        }

    }
    


    return(
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" onChange={handleFirstName}></input>
                    {firstNameValid ? <span style={{ color: "red" }}>{firstNameValid}</span>: ''}
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" onChange={handleLastName}></input>
                    {lastNameValid ? <span style={{ color: "red" }}>{lastNameValid}</span>: ''}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" onChange={handleEmail}></input>
                    {emailValid ?<span style={{ color: "red" }}>{emailValid}</span>: ''}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" onChange={handlePassword}></input>
                    {passwordValid ?<span style={{ color: "red" }}>{passwordValid}</span>: ''}
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="text" onChange={handleConfirmPassword}></input>
                    {confirmPasswordValid ? <span style={{ color: "red" }}>{confirmPasswordValid}</span>: ''}
                </div>
            </form>
            
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    );
};

export default Form;
