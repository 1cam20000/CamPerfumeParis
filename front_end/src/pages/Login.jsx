import React from "react";
import Header_resister from "../components/page_resister/Header_resister";
import Footer_resister from "../components/page_resister/Footer_resister";
import LoginForm from "../components/page_login/LoginForm";

const Login = () => {
  return (
    <div>
      <Header_resister />
      <LoginForm />
      <Footer_resister />
    </div>
  );
};

export default Login;
