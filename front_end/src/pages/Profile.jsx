import React from "react";
import Header_resister from "../components/page_resister/Header_resister";
import MainProfile from "../components/profile/MainProfile";
import Footer from "../components/Footer";

const Profile = () => {
  return (
    <div>
      <Header_resister />
      <MainProfile />
      <div style={{position:"fixed", bottom:"0px", width:"100%"}} >
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
