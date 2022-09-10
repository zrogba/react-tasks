import React from "react";
import './login.css';
import { useState } from "react";
//1.create constant login
const Login = () => {
	//3.import usestate snippet and create array of data
	const [userLogin, setUserLogin] = useState({

		username: "",
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
		setUserLogin({...userLogin, [name]: value})
	}
		
//6. call the handlesubmit e.preventDefault method to implement submit
	const handleSubmit = (e) => {
		e.preventDefault();
		const newRecord = { ...userLogin, id:new Date().getTime().toString()}
		console.log(infos);
		setInfo([...infos, newRecord]);
		console.log(infos);

		setUserLogin({	username: "", password: "",})
	}
	return (
		
		<>
			<div className="container">
			<div className="card" >
			<h2>Sign Up</h2>
				<form action="" onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="inputUname">Username</label>
						<input type="text" autoComplete="off" className="form-control" id="inputUname"
							placeholder="Username" value={userLogin.username}
							name="username" onChange={handleInput} />
					</div>

					<div className="form-group row">
						<label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>

						<input type="password" autoComplete="off" className="form-control" id="inputPassword"
							value={userLogin.password} placeholder="Password" name="password" onChange={handleInput} />

					</div>

					<button type="submit" className="btn">Submit</button>
				</form>
			</div>
		 
			<div className="disply-console">
				{
					infos.map((curElem) => {
						const {id, username, password} = curElem;
						return(
							<div className="showDataStyle" key={curElem.id}>
								<p>{curElem.username}</p>
								<p>{curElem.password}</p>

							</div>
						)
						
					}) 
				}
			</div>
			</div>
		</>
	)

}
export default Login;