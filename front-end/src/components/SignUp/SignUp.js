import React, {useState, useEffect} from 'react';
import './SignUp.css';
import * as Yup from "yup";
import axios from 'axios'
import { Link, Redirect } from "react-router-dom";


function SignUp() {

  const [redirect, setRedirect] = useState(false);

    const [errors, setErrors] = useState({  
        name: "",
        email: "",
        password: "",
        age: 0
      });
      const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        age: 0
      });
      const [buttonDisabled, setButtonDisabled] = useState(true);

      const [post, setPost] = useState([]);

    const formSchema = Yup.object().shape({
        name: Yup
        .string()
        .min(3, "Username must be at least 3 characters long.")
        .required("Must include username."),
        email: Yup
          .string()
          .email("Must be a valid email address.")
          .required("Must include email address."),
        password: Yup
          .string()
          .min(6, "Passwords must be at least 6 characters long.")
          .required("Password is Required"),
        age: Yup
        .number()
        .required("Age is required"),
      });

      useEffect(() => {
        formSchema.isValid(formState).then(valid => {
          setButtonDisabled(!valid);
        });
      }, [formState]);

      

      const inputChange = e => {
        e.persist();
        Yup
        .reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then(valid => {
          setErrors({
            ...errors,
            [e.target.name]: ""
          });
        })
        .catch(err => {
          setErrors({
            ...errors,
            [e.target.name]: err.errors[0]
          });
        });
        setFormState({
          ...formState,
          [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
      })
    };

    const formSubmit = e => {
        e.preventDefault();
        setErrors({
          ...errors,
          name: 'Submitting. Please wait . . . '
        });
        console.log("submitted!");
        const data = {"username": formState.name,
        "password": formState.password, 
        "age": formState.age,
        "email": formState.email};
        axios
          .post("https://kickstarter-success-bw.herokuapp.com/api/auth/register", data)
          .then(res => {
            setPost(res.data); 
            console.log("success!", res);
            setFormState({name: "",
            email: "",
            password: "",
            age: 0})
            setErrors({
              ...errors,
              name: ''
            });
            setRedirect(true);

          })
          .catch(err => {
            
            console.log(err.response)
            setErrors({
              ...errors,
              name: err.response.data.message
            });

          }
          
          
          );
      };

  if (redirect === true) {
    return <Redirect to='/' />
  }
    
  return (

    
    <form onSubmit={formSubmit}>
    Already have an account? <Link to='/login'>Login</Link><br/>

    <label htmlFor="emailInput">
      Username:
      <input id="nameInput" type="name" name="name" placeholder="Name"  onChange={inputChange} value = {formState.name}/>
    </label>
    
    <br/>
    <label htmlFor="emailInput">
      Email:
      <input id="emailInput" type="email" name="email" placeholder="Email"  onChange={inputChange} value = {formState.email}/>
    </label>
       
    <br/>
    <label htmlFor="passwordInput">
      Password:
      <input id="passwordInput" type="password" name="password" placeholder="Password"  onChange={inputChange} value = {formState.password}/>
    </label>
    
    <br/>
    <label htmlFor="age">
      Age:
      <input id="age" type="number" name="age" placeholder='Age'  onChange={inputChange} value = {formState.age}/>
    </label>
   
    <br/>
    <button disabled = {buttonDisabled} >Submit!</button>
    {errors.age.length > 0 ? (<p className="error">{errors.age}</p>) : null}
    {errors.email.length > 0 ? (<p className="error">{errors.email}</p>) : null}
    {errors.password.length > 0 ? (<p className="error">{errors.password}</p>) : null}
    {errors.name.length > 0 ? (<p className="error">{errors.name}</p>) : null}
    
  </form>
  );
}

export default SignUp;
