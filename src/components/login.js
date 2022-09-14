import React from "react";
import './login.css';
import { useState } from "react";
import {  Link } from 'react-router-dom';
//1.create constant login
const Login = () => {
	//3.import usestate snippet and create array of data
	const [values, setvalues] = useState({

		username: "",
		password: "",
	});
	//7.call method function for new info
	//8.using the map mehod to display 	
	const [records, setRecords] = useState([]);
	//2.call method handleInput to send data via input 
	//to the e.target event handler /run tests in browser console
	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		console.log(name, value);
//5.using the spread operator to caall the array of data run tests in browser console
//
		setvalues({...values, [name]: value})
	}
		
//6. call the handlesubmit e.preventDefault method to implement submit
	const handleSubmit = (e) => {
		e.preventDefault();
		const newRecord = { ...values, id:new Date().getTime().toString()}
		console.log(records);
		setRecords([...records, newRecord]);
		console.log(records);

		setvalues({	username: "", password: "",})
	}
	return (
		
		<>
			<div className="container">
			<div className="card" >
			<h2>Sign in</h2>
				<form action="" onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="inputUname">Username</label>
						<input type="text" autoComplete="off" className="form-control" id="inputUname"
							placeholder="Username" value={values.username}
							name="username" onChange={handleInput} />
					</div>

					<div className="form-group">
						<label htmlFor="inputEmail">Email address</label>
						<input type="text" autoComplete="off" className="form-control" id="inputEmail"
							aria-describedby="emailHelp" placeholder="Enter email" value={values.email}
							name="email" onChange={handleInput} />
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