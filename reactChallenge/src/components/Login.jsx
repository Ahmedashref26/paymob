import { useState } from 'react';

const Login = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const formHandler = (e) => {
    e.preventDefault();
    setUsername('');
    setPassword('');
  };

  return (
    <div className='login'>
      <div className='wrapper'>
        <h3 className='title'>Login</h3>
        <form onSubmit={formHandler} className='loginBox'>
          <input
            placeholder='Username'
            type='text'
            id='username-input'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='loginInput'
            required
          />
          <input
            placeholder='Password'
            id='password-input'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            className='loginInput'
            required
          />
          <button
            className='loginButton'
            disabled={username === '' || password === ''}
            onClick={(e) => onSubmit(username, password)}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
