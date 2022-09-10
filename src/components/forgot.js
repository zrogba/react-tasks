import React from "react";
import {  Link } from 'react-router-dom';

import './forgot.css';
import { useState } from "react";
//1.create constant login
const Forgot = () => {
	//3.import usestate snippet and create array of data
	const [userForgot, setUserLogin] = useState({

		email: "",
		password: "",
	});
	//7.call method function for new info
	//8.using the map mehod to display 	
	const [infos, setInfo] = useState([]);
	//2.call method handleInput to send data via input 
	//to the e.target event handler /run tests in browser console
	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		console.log(name, value);
//5.using the spread operator to caall the array of data run tests in browser console
//
		setUserLogin({...userForgot, [name]: value})
	}
		
//6. call the handlesubmit e.preventDefault method to implement submit
	const handleSubmit = (e) => {
		e.preventDefault();
		const newRecord = { ...userForgot, id:new Date().getTime().toString()}
		console.log(infos);
		setInfo([...infos, newRecord]);
		console.log(infos);

		setUserLogin({	email: "", password: "",})
	}

	return (
		
		<>
			<div className="container">
			<div className="card" >
			<h2>Forgot password</h2>
				<form action="" onSubmit={handleSubmit}>
                <div className="form-group">
						<label htmlFor="inputEmail">Email address</label>
						<input type="text" autoComplete="off" className="form-control" id="inputEmail"
							aria-describedby="emailHelp" placeholder="Enter email" value={userForgot.email}
							name="email" onChange={handleInput} />
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