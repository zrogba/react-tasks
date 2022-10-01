import React from "react";
import {  Link } from 'react-router-dom';

const Home = () => {




    return (
		
		<>
			<div className="container">
			<div className="card" >
			<Link to="/Register"className="dropdown-item" >
					 Sign up</Link>
					 <Link to="/Login"className="dropdown-item" >
					 Login</Link>
			</div>
		 
			
			</div>
		</>
	)

}
export default Home;