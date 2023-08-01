/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { ReactComponent as LogoSvg } from "../Assets/Logo.svg";
//import Logo from "../Assets/A+Shop.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { BsSearch } from "react-icons/bs";
import '../App.css';


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];
  return (
    <nav>
      
        <div className="nav-logo-container">
         <LogoSvg className="nav-logo" />
        </div>
            <div className="search-bar">
              <BsSearch size={20} className="search-icon"/>
                <input type="text" placeholder="Search..." style={{width:"200px", padding:"5px", borderRadius: "10px", borderColor:"white"}}/>
                </div>
        
            <div className="navbar-links-container">

              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Testimonials</a>
              <a href="">Contact</a>
              <a href="">
                <BsCart2 className="navbar-cart-icon" />
              </a>
              <button className="booking-button">Book Now</button>
              
            </div>
           
              
            
            
      
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      {/* <Search /> */}

      
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          {/* <div className="search-bar-600">
                  <BsSearch size={10} className="search-icon-600"/>
                <input type="text" placeholder="Search..." style={{width:"100px", padding:"2.5px", borderRadius: "10px", BorderColor:"white"}}/>
                </div> */}
            
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;