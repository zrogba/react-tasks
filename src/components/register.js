import React from "react";
import './register.css';
import { useState } from "react";
import { Link } from 'react-router-dom';
import Validations from "./validations";
 
//1.create  register
const Register = () => {
	//3.import usestate snippet and create array of data of the input values
	//10.set the usestate for errors
	
	const [values, setValues] = useState({
		firstname: "", lastname: "",
		phone: "", email: "",
		password: "",
	});
	const [errors, setErrors] = useState({});
	//2.call method handleInput to send data via input 
	//to the e.target event handler /run tests in browser console
	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		console.log(name, value);
		//5.using the spread operator to caall the array of data run tests in browser console
		//
		setValues({ ...values, [name]: value })
	}

	//6. call the handlesubmit e.preventDefault method to implement submit
	const handleSubmit = (e) => {
		e.preventDefault();
		
//9.to validate and show the errors
setErrors(Validations(values));
		 
	};

//.call the errors to check if true to display in div paragraph
	return (

		<>
			<div className="container">
				<div className="card" >
					<h2>Create an account</h2> 
					<h6><Link to="/Login">or Login</Link></h6>
										<form action="" onSubmit={handleSubmit}>
						<div className="form-group">
							<label htmlFor="firstname">First Name</label>
							<input type="text" autoComplete="off" className="form-control" id="firstname"
								placeholder="First Name" value={values.firstname}
								name="firstname" onChange={handleInput} />
								{errors.firstname && <p className="error">{errors.firstname}</p>}
						</div>
						<div className="form-group">
							<label htmlFor="lastname">Last Name</label>
							<input type="text" autoComplete="off" className="form-control" id="lastname"
								placeholder="Last Name" value={values.lastname}
								name="lastname" onChange={handleInput} />
								{errors.lastname && <p className="error">{errors.lastname}</p>}
						</div>
						<div className="form-group">
							<label htmlFor="phone">Phone Number</label>
							<input type="text" autoComplete="off" className="form-control" id="phone"
								placeholder="Phone" value={values.phone}
								name="phone" onChange={handleInput} />
								{errors.phone && <p className="error">{errors.phone}</p>}
						</div>
						<div className="form-group">
							<label htmlFor="email">Email address</label>
							<input type="text" autoComplete="off" className="form-control" id="email"
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

						<div className="form-group row">
							<label htmlFor="confirmPassword" className="col-sm-2 col-form-label">Confirm Password</label>

							<input type="confirmPassword" autoComplete="off" className="form-control" id="confirmPassword"
								value={values.confirmPassword} placeholder="Retype Password" name="confirmPassword" onChange={handleInput} />
								{errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
						</div>

						<button type="submit" className="btn">Submit</button>
					</form>

				</div>
				
			</div>

		</>
	)

}
export default Register;