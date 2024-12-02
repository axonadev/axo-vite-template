import React, { useEffect, useState } from "react";
import SideMenu from "../SideMenu";
import Fab from "../Fab";
import { Box } from "@mui/system";

const Layout = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState();
  const { height, width, scale, fontScale } = useWindowDimensions();
  useEffect(() => {
    setScreenWidth(width);
  }, [width]);

  return (
    <Box
      sx={{
        height: "calc(100% - 60px)",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <Box>Header</Box>
      <Box>
        {screenWidth >= 600 ? <SideMenu /> : <Fab />}
        {children}
      </Box>
      <Box>Footer</Box>
    </Box>
  );
};

export default Layout;
