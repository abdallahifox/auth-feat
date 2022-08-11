import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggin: false,
  onLogin: (email, password) => {},
  onLogout: () => {},
});

export const AuthContextProvidor = (props) => {
  const [isLoggin, setIsLoggin] = useState(false);

  useEffect(() => {
    let getIsLoggin = JSON.parse(localStorage.getItem("isLogin"));

    if (getIsLoggin === 1) {
      setIsLoggin(true);
    }
  }, []);

  const LoginSubmit = (email, password) => {
    localStorage.setItem("isLogin", JSON.stringify(1));
    setIsLoggin(true);
  };

  const LogoutHandelar = () => {
    localStorage.removeItem("isLogin");
    setIsLoggin(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggin: isLoggin,
        onLogin: LoginSubmit,
        onLogout: LogoutHandelar,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
