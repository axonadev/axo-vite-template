import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import { Box } from "@mui/system";

const SideMenu = () => {
  return (
    <Box>
      <Box>
        <Link to="/home">
          <HomeIcon />
        </Link>
      </Box>
      <Box>
        <Link to="/about">
          <InfoIcon />
        </Link>
      </Box>
      <Box>
        <Link to="/contact">
          <ContactMailIcon />
        </Link>
      </Box>
    </Box>
  );
};

export default SideMenu;
