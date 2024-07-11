import React, { useState } from 'react';
import './LoginForm.scss';
import { useNavigate } from 'react-router-dom';
import Button from '../common/button/Button';
import Logo from '../../assets/logo.svg'
import Banner from '../../assets/login-banner.png'

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login submitted', { email, password });
  };

  const navigate = useNavigate();
  const handleLogin = () => {
    console.log('Login button clicked');
    navigate('/dashboard/users');
  };

  return (
    <section className='login_container'>
      <div className='banner_wrapper'>
        <div className='login_banner'>
          <img src={Logo} width={173.76} height={36} alt='logo' />
          <img src={Banner} width={600} height={337.57} alt='login banner' />
        </div>
      </div>

      <div className='login_form'>
        <div className='form_wrapper'>
          <p>Welcome!</p>
          <p>Enter details to login.</p>
          <form onSubmit={handleSubmit}>
            <input
              type='email'
              id='email'
              value={email}
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type='password'
              id='password'
              value={password}
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href='/forgot-password'>FORGOT PASSWORD?</a>

            <Button
              text='LOG IN'
              width={447}
              height={48}
              className='custom_banner'
              // marginTop={300}
              onClick={handleLogin}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
