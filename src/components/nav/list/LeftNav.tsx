import * as React from "react";
import { Link } from "react-router-dom";
import "./LeftNav.css";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import MovieFilterOutlinedIcon from "@mui/icons-material/MovieFilterOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddToPhotosOutlinedIcon from "@mui/icons-material/AddToPhotosOutlined";
import Avatar from "@mui/material/Avatar";
import AvtProfile from "../../../assets/DSCF14571.jpg";
import listMenu from "../../../data/ListMenu.json";

const iconMap = {
  HomeOutlinedIcon: HomeOutlinedIcon,
  SearchOutlinedIcon: SearchOutlinedIcon,
  ExploreOutlinedIcon: ExploreOutlinedIcon,
  MovieFilterOutlinedIcon: MovieFilterOutlinedIcon,
  ChatOutlinedIcon: ChatOutlinedIcon,
  FavoriteBorderOutlinedIcon: FavoriteBorderOutlinedIcon,
  AddToPhotosOutlinedIcon: AddToPhotosOutlinedIcon,
};

const LeftNav = () => {
  return (
    <div className="leftcomponents">
      <div className="leftnavigations">
        {listMenu.map((menuItem) => {
          const IconComponent = iconMap[menuItem.item];
          return (
            <Link to={menuItem.link} key={menuItem.id} className="navList">
              <div className="icon_navList">
                {IconComponent && <IconComponent />}
              </div>
              <div>{menuItem.content}</div>
            </Link>
          );
        })}
        <Link to={"/profile"} className="nav-Avt">
          <Avatar alt="Cindy Baker" src={AvtProfile} className="avt_navList" />
          <div>Profile</div>
        </Link>
      </div>
    </div>
  );
};

export default LeftNav;
