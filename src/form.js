import React, { useState } from "react";
import Register from "./components/register";
import Login from "./components/login";
import FormSuccess from "./components/formSuccess";


const Form = () => {
    //create a state called form is submitted with assigned value false
    //if form is correct 
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm = () =>{
        setFormIsSubmitted(true);
    };
    //pass props submitform from form to register etc
    return (
    <div> 
        {!formIsSubmitted ? (
        <Register submitForm={submitForm}/> 
        ) :(
             <FormSuccess />
        )}
    </div>
    );
}
export default Form;