import { useState } from "react";
import Register from "./register";
import FormSuccess from "./FormSuccess";


const Form = (SubmitForm) => {
    //create a state called form is submitted with assigned value false
    //if form is correct 
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const SubmitForm = () => {
        setFormIsSubmitted(true);
    };
    //pass props SubmitForm from form to register etc
    return (
        <div>
            {!formIsSubmitted ? (
                <Register SubmitForm={SubmitForm} />
                ) : (
                <FormSuccess />
            )}
        </div>
    );
};
export default Form;