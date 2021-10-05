const Validator= require("validator");
const isEmpty =require("is-empty");


module.exports = function validateRegisterInput(data){
  let errors= {};

  data.name=!isEmpty(data.name)?data.name:"";
  data.email=!isEmpty(data.email)?data.email:"";
  data.password=!isEmpty(data.password)?data.password:"";

  if(Validator.isEmpty(data.name)){
    errors.name="Name Required";
  }

  if(Validator.isEmpty(data.email)){
    errors.email="email Required";
  }
  else if(Validator.isemail(data.email)){
    errors.email="email is invalid";
  }
  //password check
  if (Validator.isEmpty(data.password)){
    errors.password="pass field is required";
  }

  if (!Validator.isLength(data.password,{min:6,max:30})){
    errors.password="pass word must be 6 characters";
  }

  return{
    errors,
    isValid:isEmpty(errors)
  };

};
