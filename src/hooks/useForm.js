import { useState, useEffect} from "react";
import validate from "../validations";
import { useNavigate } from "react-router-dom";

//Firebase


const useForm = () => {
    const [values, setValues] = useState({
      
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
    
    });
    

    const navigate = useNavigate();
    //10.set the usestate for errors
    const [errors, setErrors] = useState({});
    //11.set the usestate for correct data input
    const [dataCorrect, setDataCorrect] = useState(false);
   
    //2.call method se to send data via input 
    //to the e.target event handler /run tests in browser console
    const handleChange = (e) => {
        
        const name = e.target.name;
        const value = e.target.value;
        e.preventDefault();
        console.log(value);
        setValues({ ...values, [name]: value })
      
    }

    //6. call the handlesubmit e.preventDefault method to implement submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));
        setDataCorrect(true);
       
    };
    
    useEffect(() => {
         
        if (Object.keys(errors).length === 0 && dataCorrect) {
            
            navigate("/FormSuccess")
            
      }
    
    }, [errors, dataCorrect, navigate]);
   
    
    
    return { handleChange, handleSubmit, errors, values}
};

export default useForm;