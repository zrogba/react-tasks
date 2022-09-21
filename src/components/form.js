import { useState } from "react";
import Register from "./register";
import FormSuccess from "./FormSuccess";


const Form = (SubmitForm) => {
    //create a state called form is submitted with assigned value false
    //if form is correct 
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const SubmitForm = () => {
        setFormIsSubmitted(true);
        SubmitForm()
    };
    //pass props SubmitForm from form to register etc
    return (
        <div>
            {!formIsSubmitted ? (
                <Register  />
                ) : (
                <FormSuccess />
            )}
        </div>
    );
};
export default Form;