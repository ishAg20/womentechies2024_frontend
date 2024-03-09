import React, { useState } from 'react';
import './style.css';

const Signup = ({ onSignupSuccess }) => {
  const [isSignupSuccessful, setIsSignupSuccessful] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSignupSuccessful(true);
    onSignupSuccess();
  };
  return (
    <>
      <div className="box">
        <h1 className="text">Welcome!</h1>
        {isSignupSuccessful ? (
          <p>Signup successful</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="signupform">
                <div className="inputbox">
                    <label htmlFor="name" class="lab1">Full Name</label>
                    <input type="text" id="name" name="name" class="input1" />
                </div>
                <label htmlFor="email" class="lab1">VIT Email Address</label>
                <input type="email" id="email" name="email" class="input1" />
                <label htmlFor="phone" class="lab1">Phone Number</label>
                <input type="tel" id="phone" name="phone" class="input1" />
                <label htmlFor="password" class="lab1">Password</label>
                <input type="password" id="password" class="input1" name="password" />
                <label htmlFor="confirm-password" class="lab1">Confirm Password</label>
                <input type="password" id="confirm-password" class="input1" name="confirm-password"/>
                <div className="link-cont">
                    <a href="#" className="a1">Already have an account?  </a>
                    <a href="#" className="a2">Sign In</a>
                </div>
                <button className="button1" type="submit">Sign Up</button>
            </div>
          </form>
        )}
      </div>
      
    </>
  );
};
export default Signup;