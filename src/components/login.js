import React from "react";
import './login.css';

import {  Link } from 'react-router-dom';
import useForm from "./useForm";
//1.create constant login
const Login = () => {
	//3.import usestate snippet and create array of data
	const {handleInput, handleSubmit, values, errors} = useForm();
	return (
		
		<>
			<div className="container">
			<div className="card" >
			<h2>Sign in</h2>
				<form action="" onSubmit={handleSubmit}>
					
					<div className="form-group">
						<label htmlFor="inputEmail">Email address</label>
						<input type="text" autoComplete="off" className="form-control" id="inputEmail"
							aria-describedby="emailHelp" placeholder="Enter email" value={values.email}
							name="email" onChange={handleInput} />
							{errors.email && <p className="error">{errors.email}</p>}
					</div>
					<div className="form-group row">
							<label htmlFor="password" className="col-sm-2 col-form-label">Password</label>

							<input type="password" autoComplete="off" className="form-control" id="password"
								value={values.password} placeholder="Password" name="password" onChange={handleInput} />
								{errors.password && <p className="error">{errors.password}</p>}
						</div>
					<div className="form-check">
    <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
    <label htmlFor="dropdownCheck2" className="form-check-label">
      Remember me
    </label>
	<Link to="/Forgot"className="dropdown-item" >Forgot password?</Link>
  </div>
					<button type="submit" className="btn">Submit</button>
				</form>
				 <div className="dropdown-divider"></div>
  <Link to="/Register"className="dropdown-item" >New around here? Sign up</Link>
  

			</div>
		 
			
			</div>
		</>
	)

}
export default Login;