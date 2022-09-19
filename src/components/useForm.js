import { useState, useEffect } from "react";
import Validations from "./validations";
//import { useNavigate } from "react-router-dom";
 //Firebase


const useForm = (submitForm) => {
    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    //const navigate = useNavigate();
    //10.set the usestate for errors
    const [errors, setErrors] = useState({});
    //11.set the usestate for correct data input
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    //2.call method handleInput to send data via input 
    //to the e.target event handler /run tests in browser console
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        //5.using the spread operator to caall the array of data run tests in browser console
        //
        setValues({ ...values, [name]: value })
    };

    //6. call the handlesubmit e.preventDefault method to implement submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validations(values));
        setDataIsCorrect();
        // Firebase



        //navigate('/FormSuccess');
    };
    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm('');
        }
    }, [errors, dataIsCorrect, submitForm]);

    return { handleInput, handleSubmit, errors, values, dataIsCorrect }
};

export default useForm;