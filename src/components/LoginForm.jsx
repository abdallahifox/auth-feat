import React from "react";
import { useState, useContext } from "react";
import AuthContext from "../Context/auth-context";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const AuthCtx = useContext(AuthContext);

  const LoginHandelar = (e) => {
    e.preventDefault();
    AuthCtx.onLogin(email, password);
    setEmail("");
    setPassword("");
  };

  const emialHandelar = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandelar = (e) => {
    setPassword(e.target.value);
  };

  const isDisabled = () => (email === "" || password === "" ? true : false);
  return (
    <div className="container" style={{ marginTop: "60px" }}>
      <h2>Login Now</h2>
      <div className="row">
        <form className="col s12" onSubmit={LoginHandelar}>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="email"
                className="validate"
                value={email}
                onChange={emialHandelar}
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="password"
                type="password"
                className="validate"
                value={password}
                onChange={passwordHandelar}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>

          <button
            className="waves-effect waves-light btn right"
            disabled={isDisabled()}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
