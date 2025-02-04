import * as React from "react";
import AvtProfile from "../../../assets/DSCF14571.jpg";
import Avatar from "@mui/material/Avatar";
import "./Stories.css";

const Stories = () => {
  return (
    <div>
      <div>
        <div className="card">
          <img
            className="img"
            src={AvtProfile}
            alt="Description of image"
            style={{ width: "195px", height: "285px" }}
          />
          <div className="infBox">
            <Avatar 
              alt="Description of image"
              src={AvtProfile}
              style={{ zIndex: "2", border: "3px solid white" }}
            />
            <p className="infName">_duongcongson</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
