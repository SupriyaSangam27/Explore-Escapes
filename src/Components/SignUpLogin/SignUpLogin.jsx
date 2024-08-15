import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SignUpLogin.css';
import personIcon from '../../assets/person.png';
import passwordIcon from '../../assets/lock.png';
import mailIcon from '../../assets/mailIcon.png';
import axios from 'axios';

const SignUpLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [action, setAction] = useState('Sign Up');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const formAction = query.get('action');
    if (formAction) {
      setAction(formAction);
    }
  }, [location]);

  const handleActionChange = (newAction) => {
    setAction(newAction);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      console.log(response.data);
      // Assuming successful registration, navigate to the login page
      navigate('/signup-login?action=Login');
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      console.log(response.data);
      // Assuming successful login, navigate to the main app page
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='register'>
      <div className='logHeader'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>

      <div className='inputs'>
        {action === "Login" ? null : (
          <div className='input'>
            <img src={personIcon} alt="personIcon" />
            <input
              type="text"
              placeholder='Enter Your Name'
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        )}

        <div className='input'>
          <img src={mailIcon} alt="mailIcon" />
          <input
            type="email"
            placeholder='Enter Your Email Address'
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className='input'>
          <img src={passwordIcon} alt="passwordIcon" />
          <input
            type="password"
            placeholder='Enter Your Password'
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </div>
      
      {action === "Sign Up" ? null : (
        <div className="forgot-password">Lost Password? <span>Click Here!!</span></div>
      )}

      <div className='submit-container'>
        <div
          className={action === 'Login' ? 'submit gray' : 'submit'}
          onClick={() => {
            handleActionChange('Sign Up');
            handleSignup();
          }}
        >
          Sign Up
        </div>
        <div
          className={action === 'Sign Up' ? 'submit gray' : 'submit'}
          onClick={() => {
            handleActionChange('Login');
            handleLogin();
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default SignUpLogin;
