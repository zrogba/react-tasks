const Validations = values => { //set logics if input and values are empty- display errors
   let errors = {};
   
   if (!values.firstname){
    errors.firstname='Firstname is required';

   }
   if (!values.lastname){
    errors.lastname='Lastname is required';

   }
   if (!values.phone){
    errors.phone='Phone number is required';

   }
   if (!values.email){
    errors.email='Email is required'
   } else if(!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email='Email is invalid';
   }

   //PASSWORD
   if (!values.password){
    errors.password='Password is required'
   } else if(values.password.length < 5) {
    errors.password='Password must be more than five characters';
   }
   else if(!/(?=.*?[A-Z])/.test(values.password)){
    errors.password="At least one Uppercase";
}
else if(!/(?=.*?[0-9])/.test(values.password)){
  errors.password="At least one Digit";
}/*
else if(!/(?=.*?[#?!@$%^&*-])/.test(values.password)){
  errors.password="At least one Special character(#,?,!,@,$,%,^,&)";
}*/
 //CONFIRM THE PASSWORD  
 else if (values.confirmPassword!==values.password){ 
  errors.confirmPassword= 'Password and confirm password does not match';
  values = false; 
  
}
//return null// always return null here since as you'd want the error displayed on the confirmation input


   
    return errors;
  }

  export default Validations;