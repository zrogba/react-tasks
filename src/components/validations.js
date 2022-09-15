const Validations = values => { //set logics if input and values are empty- display errors
   let errors = {};
   
   if (!values.firstname){
    errors.firstname='Firstname is required'

   }
   if (!values.lastname){
    errors.lastname='Lastname is required'

   }
   if (!values.phone){
    errors.phone='Phone number is required'

   }
   if (!values.email){
    errors.email='Email is required'
   } else if(!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email='Email is invalid'
   }
   if (!values.password){
    errors.password='Password is required'
   } else if(values.password.length < 5) {
    errors.password='Password must be more than five characters'
   }
   
   if (!values.confirmPassword){
    errors.confirmPassword='Name is required'
   } else if(values.password.length < 5) {
    errors.password='Password must be more than five characters'
   }
   
   
    return errors;
  }

  export default Validations;