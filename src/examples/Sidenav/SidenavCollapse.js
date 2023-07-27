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

function SidenavCollapse({ caret, icon, name, active, ...rest }) {
  const [controller] = useMaterialUIController();
  const [isHovered, setIsHovered] = useState(false);
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
  const [letters, setLetters] = useState(
    name.length < 16 ? [name] : [name.slice(0, 15), name.slice(15)]
  );

  let textColor = "white";

  if (transparentSidenav || (whiteSidenav && !darkMode)) {
    textColor = "dark";
  } else if (whiteSidenav && darkMode) {
    textColor = "inherit";
  }

  return (
    <ListItem component="li">
      <MDBox
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        {...rest}
        sx={(theme) =>
          collapseItem(theme, {
            active,
            transparentSidenav,
            whiteSidenav,
            darkMode,
            sidenavColor,
          })
        }
      >
        <MDTypography
          color={active || isHovered ? "white" : "info"}
          width="27px"
          display="flex"
          alignItems="center"
          height="36px"
        >
          {typeof icon === "string" ? (
            <Icon sx={(theme) => collapseIcon(theme, { active })}>{icon}</Icon>
          ) : (
            icon
          )}
        </MDTypography>

        <MDTypography
          color={textColor}
          variant="button"
          width="145px"
          maxWidth="145px"
          paddingLeft="8px"
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

        {caret && caret}
      </MDBox>
    </ListItem>
  );
}

// Setting default values for the props of SidenavCollapse
SidenavCollapse.defaultProps = {
  active: false,
};

// Typechecking props for the SidenavCollapse
SidenavCollapse.propTypes = {
  icon: PropTypes.node,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
  caret: PropTypes.node,
};

export default SidenavCollapse;
