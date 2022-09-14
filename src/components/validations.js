const Validations = values => { //set logics if input and values are empty- display errors
   let errors = {};
   
   if (!values.firstname){
    errors.firstname='Name is required'

   }
   if (!values.lastname){
    errors.lastname='Name is required'

   }
   if (!values.phone){
    errors.phone='Name is required'

   }
   if (!values.email){
    errors.email='Name is required'

   }
   if (!values.password){
    errors.password='Name is required'

   }
   if (!values.confirmPassword){
    errors.confirmPassword='Name is required'

   }
   
    return errors;
  }

  export default Validations;