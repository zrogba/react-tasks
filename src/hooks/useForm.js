import { useState, useEffect, useId } from "react";
import Validations from "./validations";
import { useNavigate } from "react-router-dom";

//Firebase


const useForm = (submitForm) => {
    const [values, setValues] = useState({
        id: "",
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    
    const id = useId();
    const navigate = useNavigate();
    //10.set the usestate for errors
    const [errors, setErrors] = useState({});
    //11.set the usestate for correct data input
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
   
    //2.call method se to send data via input 
    //to the e.target event handler /run tests in browser console
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        console.log( id + {values});
        
        setValues({ ...values, [name]: value })
      
    }

    //6. call the handlesubmit e.preventDefault method to implement submit
    const handleSubmit = (e) => {
        
        setErrors(Validations(values));
        setDataIsCorrect(true);
        e.preventDefault();
    }
    
    useEffect(() => {
        let submitForm = ()=> true;
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            
            navigate("/FormSuccess")
            
        }
        submitForm(true);
    }, [errors, dataIsCorrect, navigate, submitForm]);

    
    
    return { handleChange, handleSubmit, errors, values, dataIsCorrect}
};

export default useForm;