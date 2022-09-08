import React from "react";
import './register.css';

const Register = () => {

	return (
		<div className="container">
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">First Name</label>
    <input type="text" class="form-control" id="InputEmail1"   placeholder="First Name" />
	</div>
	<div class="form-group">
		<label for="exampleInputEmail1">Last Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Last Name" />
	</div>
	<div class="form-group">
		<label for="exampleInputEmail1">Phone Number</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Phone" />
	</div>
	<div class="form-group">
		<label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
	</div>
	
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    
      <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
   
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>

)

}
export default Register;