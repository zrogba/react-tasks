import { useState } from "react";
import Register from "./register";
import FormSuccess from "./FormSuccess";


const Form = () => {
    //create a state called form is submitted with assigned value false
    //if form is correct 
    const [dataCorrect, setDataCorrect] = useState(false);

    const submitForm = () => {
        setDataCorrect(true);
        submitForm('');
    };
    //pass props SubmitForm from form to register etc
    return (
        <div>
            
            {!dataCorrect ? <Register submitForm= 
            {submitForm} /> : <FormSuccess />}
               
        </div>
    );
};
export default Form;