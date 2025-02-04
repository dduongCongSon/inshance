import React from "react";
import Avatar from "@mui/material/Avatar";
import AvtProfile from "../../assets/DSCF14571.jpg";
import "./Profile.css";

const Profile = () => {
  return (
    <div>
      <div className="switch-container">
        <div className="show-acc">
          <Avatar alt="Cindy Baker" src={AvtProfile} />
          <div>
            <div className="user-name">_duongcongson</div>
            <div className="name">Duong Cong Son</div>
          </div>
        </div>
        <div className="button-switch">Switch</div>
      </div>
    </div>
  );
};

export default Profile;
