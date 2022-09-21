import React from "react";
import './register.css';
import { Link } from 'react-router-dom';
import useForm from "./useForm";
import { db } from "../firebase";
// import { FaUserAlt } from 'react-icons/fa';

//1.create  register

const Register = ({SubmitForm}) => {
	//3.import usestate snippet and create array of data of the input values
	const { handleChange, handleSubmit, values, errors} = useForm(SubmitForm);

	//replace and   create a custom hook to defracture  useForm
	/*
	const [values, setValues] = useState({
		firstname: "", lastname: "",
		phone: "", email: "",
		password: "", confirmPassword: "",
	});
	//10.set the usestate for errors
	const [errors, setErrors] = useState({});
	//11.set the usestate for correct data input
	const [dataIsCorrect, setDataIsCorrect] = useState(false);

	//2.call method handleChange to send data via input 
	//to the e.target event handler /run tests in browser console
	const handleChange = (e) => {
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
		 //15.when clicked set data is true
setDataIsCorrect(true);
	};
//impleemtn usefect to chekc if there are errors
useEffect(() => {

  if(Object.keys(errors).length === 0 && dataIsCorrect) {
	submitForm(true);

  } // eslint-disable-next-line react-hooks/exhaustive-deps
}, [errors]);
*/
	//.call the errors to check if true to display in div paragraph

	db.collection("users")
		.add({ values: values });


	return (
		<>
			<div className="container">
				<div className="card" >
					<h2>Create an account</h2>
					<h4><Link to="/Login">or Login</Link></h4>
					<form action="" onSubmit={handleSubmit}>
						<div className="form-group">
							<label htmlFor="firstname">First Name</label>
							<input type="text" autoComplete="off" className="form-control" id="firstname"
								placeholder="First Name" value={values.firstname}
								name="firstname" onChange={handleChange} />
							{errors.firstname && <p className="error">{errors.firstname}</p>}
						</div>
						<div className="form-group">
							<label htmlFor="lastname">Last Name</label>
							<input type="text" autoComplete="off" className="form-control" id="lastname"
								placeholder="Last Name" value={values.lastname}
								name="lastname" onChange={handleChange} />
							{errors.lastname && <p className="error">{errors.lastname}</p>}
						</div>
						<div className="form-group">
							<label htmlFor="phone">Phone Number</label>
							<input type="text" autoComplete="off" className="form-control" id="phone"
								placeholder="Phone" value={values.phone}
								name="phone" onChange={handleChange} />
							{errors.phone && <p className="error">{errors.phone}</p>}
						</div>
						<div className="form-group">
							<label htmlFor="email">Email address</label>
							<input type="text" autoComplete="off" className="form-control" id="email"
								aria-describedby="emailHelp" placeholder="Enter email" value={values.email}
								name="email" onChange={handleChange} />
							{errors.email && <p className="error">{errors.email}</p>}
						</div>

						<div className="form-group row">
							<label htmlFor="password" className="col-sm-2 col-form-label">Password</label>

							<input type="password" autoComplete="off" className="form-control" id="password"
								value={values.password} placeholder="Password" name="password" onChange={handleChange} />
							{errors.password && <p className="error">{errors.password}</p>}
						</div>

						<div className="form-group row">
							<label htmlFor="password" className="col-sm-2 col-form-label">Confirm Password</label>

							<input type="password" autoComplete="off" className="form-control" id="confirmPassword"
								value={values.confirmPassword} placeholder="Retype Password" name="confirmPassword" onChange={handleChange} />
							{errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
						</div>
						 
						<button type="submit" className="btn" onClick={handleSubmit}>Register</button>
						
					</form>

				</div>

			</div>

		</>
	)
	
}

export default Register;

