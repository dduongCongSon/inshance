import React from "react";
import "./Shortcut.css";

import NumbersIcon from "@mui/icons-material/Numbers";
import MenuIcon from '@mui/icons-material/Menu';

const Shortcut = () => {
  return (
    <div>
      <div className="threads">
        <div className="icon"><NumbersIcon /></div>
        <div>Threads</div>
      </div>
      <div className="showMore">
        <div className="icon"><MenuIcon /></div>
        <div>More</div>
      </div>
    </div>
  );
};

export default Shortcut;
