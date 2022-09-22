import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const FormSuccess = (SubmitForm) => {

    return (
        <div className="container">
            <div className="app-wrapper">
                <h1 className="form-success">Account created successfully!</h1>
                < FaRegCheckCircle />
            </div>
        </div>
    );
};
export default FormSuccess;