import React, { Component } from "react";
 
const validEmailRegex = RegExp(/^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;,.](([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+)*$/i);

const validateForm = (errors) => {
  //handleChange();
  /*let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;*/
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      errors: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    let errors = this.state.errors;

    console.log(value);

    switch (name) {
      case 'firstName': 
        if(value == "" ) {
          errors.firstName = "firstName field cannot be blank";
        } else {
          errors.firstName = "";
        }
        break;

      case 'lastName': 
        if(value == "" ) {
          errors.lastName = "lastName field cannot be blank";
        } else {
          errors.lastName = "";
        }
      break;

      case 'email': 
        if(value == "" ) {
          errors.email = "email field cannot be blank";
        } else if(!validEmailRegex.test(value)) {
          errors.email = "Please enter correct email address !";
        } else {
          errors.email = "";
        }
      break;

      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Contact Details</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className='firstName'>
              <label htmlFor="firstName">First Name</label>
              <input type='text' name='firstName' onBlur={this.handleChange} noValidate />
              {errors.firstName.length > 0 && 
                <span className='error'>{errors.firstName}</span>}
            </div>
            <div className='lastName'>
              <label htmlFor="lastName">Last Name</label>
              <input type='text' name='lastName' onBlur={this.handleChange} noValidate />
              {errors.lastName.length > 0 && 
                <span className='error'>{errors.lastName}</span>}
            </div>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onBlur={this.handleChange} noValidate />
              {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' onBlur={this.handleChange} noValidate />
              {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
            </div>
            <div className='info'>
              <small>Password must be eight characters in length.</small>
            </div>
            <div className='submit'>
              <button>Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
 
export default Form;