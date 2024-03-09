import React, { useState } from 'react';
import './App.css';
import Signup from './Signup';
import './style.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Signup');

  const handleLandingpage = () => {
    setCurrentPage('landingpage');
  };
  
  const handleViewSignup = () => {
    setCurrentPage('Signup');
  };


  return (
    <div>
      {currentPage === 'landingpage' && <landingpage onViewSignup={handleViewSignup} />}
      {currentPage === 'Signup' && <Signup onSignupSuccess={handleLandingpage} />}
  
    </div>
  );
}


export default App;