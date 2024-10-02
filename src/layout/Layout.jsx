import React, { useEffect, useState } from "react";
import SideMenu from "../Components/SideMenu";
import Fab from "../Components/Fab";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState();
  const { height, width, scale, fontScale } = useWindowDimensions();
  useEffect(() => {
    setScreenWidth(width);
  }, [width]);

  return (
    <div className={classes.layout_centrale}>
      {screenWidth >= 600 ? <SideMenu /> : <Fab />}
      {children}
    </div>
  );
};

export default Layout;
