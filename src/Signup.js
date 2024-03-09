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
                    <label htmlFor="name" class="lab1">Name</label>
                    <input type="text" id="name" name="name" class="input1" />
                </div>
                <div className="inputbox">
                  <label htmlFor="city" class="lab1">City</label>
                  <input type="text" id="city" name="city" class="input1" />
                </div>
                <div className="inputbox">
                  <label htmlFor="state" class="lab1">State</label>
                  <input type="text" id="state" name="state" class="input1" />
                </div>
                <div className="inputbox">
                  <label htmlFor="pincode" class="lab1">Pin Code</label>
                  <input type="number" id="pincode" name="pincode" class="input1" />
                </div>
                <div className="inputbox">
                  <label htmlFor="phone" class="lab1">Phone</label>
                  <input type="tel" id="phone" name="phone" class="input1" />
                </div>
                <div className="inputbox">
                  <label htmlFor="email" class="lab1">Email</label>
                  <input type="email" id="email" name="email" class="input1" />
                </div>
                <div className="inputbox">
                  <label htmlFor="password" class="lab1">Password</label>
                  <input type="password" id="password" class="input1" name="password" />
                </div>
                <div className="inputbox">
                  <label htmlFor="confirm-password" class="lab1">Confirm Password</label>
                  <input type="password" id="confirm-password" class="input1" name="confirm-password"/>
                </div>
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