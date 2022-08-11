import React from "react";
import Logo from "./UI/Logo";
import { useContext } from "react";
import AuthContext from "../Context/auth-context";
function Navbar() {
  const AuthCtx = useContext(AuthContext);

  return (
    <div>
      <nav>
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo left">
            <Logo width="126" hieght="126" />
          </a>
          <ul id="nav-mobile" className="right ">
            {AuthCtx.isLoggin && (
              <li>
                <button
                  className="waves-effect waves-light btn"
                  style={{ marginRight: "10px" }}
                >
                  Home
                </button>
              </li>
            )}
            {!AuthCtx.isLoggin && (
              <li>
                <button className="waves-effect waves-light btn ">Login</button>
              </li>
            )}
            {AuthCtx.isLoggin && (
              <li>
                <button
                  onClick={AuthCtx.onLogout}
                  className="waves-effect waves-light btn "
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
