import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import {  Link } from 'react-router-dom';

const FormSuccess = ( ) => {

    return (
        <div className="container">
            <div className="app-wrapper">
            <Link to="/Home"className="dropdown-item" >
				Home</Link>
                <h1 className="form-success">Account created successfully!</h1>
                < FaRegCheckCircle />
            </div>
        </div>
    );
};
export default FormSuccess;