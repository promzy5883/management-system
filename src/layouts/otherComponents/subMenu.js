/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Custom styles for the SidenavCollapse
import {
  collapseItem,
  collapseIconBox,
  collapseIcon,
  collapseText,
} from "examples/Sidenav/styles/sidenavCollapse";

// Material Dashboard 2 React context
import { useMaterialUIController } from "context";
import MDTypography from "components/MDTypography";
import { useState } from "react";

function SubMenuLink({ caret, icon, name, active, ...rest }) {
  const [controller] = useMaterialUIController();
  const [isHovered, setIsHovered] = useState(false);
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
  const [letters, setLetters] = useState(name.split(","));

  let textColor = "white";

  if (transparentSidenav || (whiteSidenav && !darkMode)) {
    textColor = "dark";
  } else if (whiteSidenav && darkMode) {
    textColor = "inherit";
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        margin: "0px 25px",
      }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <MDTypography
        color={active || isHovered ? "white" : "info"}
        width="27px"
        display="flex"
        alignItems="center"
        height="0px"
      ></MDTypography>

      <MDTypography
        color={active || isHovered ? "info" : textColor}
        variant="button"
        width="145px"
        maxWidth="145px"
        padding="8px"
      >
        <p
          style={{
            width: "125px",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {letters.map((letter) => (
            <span key={letter}>{letter}</span>
          ))}
        </p>
      </MDTypography>
    </div>
  );
}

// Setting default values for the props of SidenavCollapse
SubMenuLink.defaultProps = {
  active: false,
};

// Typechecking props for the SidenavCollapse
SubMenuLink.propTypes = {
  icon: PropTypes.node,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
  caret: PropTypes.node,
};

export default SubMenuLink;
