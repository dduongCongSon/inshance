import React from "react";
// import "../page/home/Home.css"
import Logo from "../components/nav/logo/Logo";
import LeftNav from "../components/nav/list/LeftNav";
import Shortcut from "../components/nav/listShortcut/Shortcut";
import NewFeeds from "../components/newFeeds/NewFeeds";
import Infor from "../components/profile/information/Infor";
import Post from "../components/profile/post/Post";

const Profile = () => {
  return (
    <div className="full-page">
      <div className="left-page">
        <div className="left-logo">
          <Logo />
        </div>
        <div className="left-nav">
          <LeftNav />
        </div>
        <div className="left-shortcut">
          <Shortcut />
        </div>
      </div>
      <div className="center-page">
        <div><Infor /></div>
        <div><Post /></div>

      </div>
    </div>
  );
};

export default Profile;
