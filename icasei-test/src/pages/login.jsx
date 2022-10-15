import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/context';


function Login() {
  document.title = 'ICasei - Login';
  const { email, setEmail, password, setPassword } = useContext(AppContext);
  const navigate = useNavigate();
  const MINLENGTH = 6;
  const validateEmail = /\S+@\S+\.\S+/.test(email);

  function handleClick() {   
    navigate('/search');
  }

  return (
    <form>
      <fieldset>
        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            name="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </label>
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={!validateEmail || password.length <= MINLENGTH}
          onClick={handleClick}
        >
          Login
        </button>
      </fieldset>
    </form>
  );
}
export default Login;