import React from "react";
import Layout from "./components/Layout/layout";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import AdminComponent from "./components/AdminComponent";
import SocialNav from "./components/SocialNav";
import AuthContext from "./Context/auth-context";
import { useContext } from "react";
function App() {
  const AuthCtx = useContext(AuthContext);
  return (
    <Layout>
      <Navbar />
      <SocialNav />
      {!AuthCtx.isLoggin && <LoginForm />}
      {AuthCtx.isLoggin && <AdminComponent />}
    </Layout>
  );
}

export default App;
