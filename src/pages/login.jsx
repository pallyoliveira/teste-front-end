import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/context';
import jpIMG from '../assents/icasei.png';
import "../style/login.css";

function Login() {
  document.title = 'ICasei - Login';
  const { email, setEmail, password, setPassword } = useContext(AppContext);
  const navigate = useNavigate();
  const MINLENGTH = 6;
  const validateEmail = /\S+@\S+\.\S+/.test(email);

  function handleClick() {
    navigate('/search');
    localStorage.setItem("user", JSON.stringify({email: email, password: password}));
  }

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">
              <img src={jpIMG} alt="ICasei"></img>
            </span>
            <div className="wrap-input">
              <input
                type="email"
                name="email"
                className={email !== "" ? "has-val input" : "input"}
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>
            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                name="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>
            <div className="container-login-form-btn">
              <button
                type="button"
                className="login-form-btn"
                disabled={!validateEmail || password.length <= MINLENGTH}
                onClick={handleClick}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;