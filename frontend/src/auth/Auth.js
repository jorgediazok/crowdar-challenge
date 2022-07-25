import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//TO PROTECT THE ROUTES

const Auth = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('profile');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return <div>{children}</div>;
};

export default Auth;
