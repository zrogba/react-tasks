import React from "react";
import {  Link } from 'react-router-dom';

 
import useForm from "../../../hooks/useForm";
//1.create constant login
const Forgot = () => {
	//3.import usestate snippet and create array of data
	const {handleChange, handleSubmit, values, errors} = useForm();

	return (
		
		<>
			<div className="container">
			<div className="card" >
			<h2>Forgot password</h2>
				<form action="" onSubmit={handleSubmit}>
                <div className="form-group">
						<label htmlFor="inputEmail">Email address</label>
						<input type="text" autoComplete="off" className="form-control" id="inputEmail"
							aria-describedby="emailHelp" placeholder="Enter email" value={values.email}
							name="email" onChange={handleChange} />
							{errors.email && <p className="error">{errors.email}</p>}
					</div>

					<button type="submit" className="btn">Submit</button>
				</form>
  <Link to="/Login" className="dropdown-item" >Back to login</Link>

			</div>
		 
			
			</div>
		</>
	)

}
export default Forgot;