import * as React from "react";
import "./Home.css"

import Logo from "../../components/nav/logo/Logo";
import LeftNav from "../../components/nav/list/LeftNav";
import Shortcut from "../../components/nav/listShortcut/Shortcut";
import NewFeeds from "../../components/newFeeds/NewFeeds";
import Profile from "../../components/right/Profile";
import Suggested from "../../components/right/Suggested";

const Home = () => {
  return (
    <div className="full-page">
      <div className="left-page"> 
        <div className="left-logo"><Logo /></div>
        <div className="left-nav"><LeftNav /></div>
        <div className="left-shortcut"><Shortcut /></div>
      </div>
      <div className="center-page">
        <div><NewFeeds /></div>
      </div>
      <div className="right-page">
        <div><Profile /></div>
        <div><Suggested /></div>
      </div>
    </div>
  );
};

export default Home;
