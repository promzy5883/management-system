import { useEffect } from "react";

// react-router-dom components
import { useLocation, NavLink } from "react-router-dom";
import "index.css";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import SidenavCollapse from "examples/Sidenav/SidenavCollapse";

// Custom styles for the Sidenav
import SidenavRoot from "examples/Sidenav/SidenavRoot";
import sidenavLogoLabel from "examples/Sidenav/styles/sidenav";

// Material Dashboard 2 React context
import {
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
} from "context";
import { childrenRoutes } from "routes";
import { ArrowRight, Close } from "@mui/icons-material";
import SubMenuLink from "layouts/otherComponents/subMenu";

function Sidenav({ color, brand, brandName, routes, ...rest }) {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
  const location = useLocation();
  const collapseName = location.pathname.replace("/", "");

  let textColor = "white";

  if (transparentSidenav || (whiteSidenav && !darkMode)) {
    textColor = "dark";
  } else if (whiteSidenav && darkMode) {
    textColor = "inherit";
  }

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  const checkIsActive = (children) => {
    let value = false;
    children.forEach((child) => {
      if (location.pathname.startsWith(child.route)) {
        value = true;
      }
    });
    return value;
  };

  const toggleMenuLink = (id) => {
    let elem = document.getElementById(id);
    if (elem.style.height !== "auto") {
      elem.style.height = "auto";
    } else {
      elem.style.height = "0px";
    }
  };

  const closeMenuLinks = (id) => {
    let elem = document.getElementById(id);
    if (elem.style.height === "auto") {
      elem.style.height = "0px";
    }
  };

  const closeAllMenu = () => {
    routes.forEach((menu) => {
      if (!menu.isLink) {
        closeMenuLinks(menu.key);
      }
    });
  };

  useEffect(() => {
    // A function that sets the mini state of the sidenav.
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
      setTransparentSidenav(dispatch, window.innerWidth < 1200 ? false : transparentSidenav);
      setWhiteSidenav(dispatch, window.innerWidth < 1200 ? false : whiteSidenav);
    }

    /** 
     The event listener that's calling the handleMiniSidenav function when resizing the window.
    */
    window.addEventListener("resize", handleMiniSidenav);

    // Call the handleMiniSidenav function to set the state with the initial value.
    handleMiniSidenav();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, location]);

  useEffect(() => {
    closeAllMenu();
  }, [location.pathname]);

  // Render all the routes from the routes.js (All the visible items on the Sidenav)
  const renderRoutes = routes.map(
    ({ type, name, icon, title, noCollapse, key, href, route, isLink }) => {
      let returnValue;

      if (type === "collapse" && isLink) {
        returnValue = href ? (
          <Link
            href={href}
            key={key}
            target="_blank"
            rel="noreferrer"
            sx={{ textDecoration: "none" }}
          >
            <SidenavCollapse
              name={name}
              icon={icon}
              active={key === collapseName}
              noCollapse={noCollapse}
            />
          </Link>
        ) : (
          <NavLink key={key} to={route}>
            <SidenavCollapse name={name} icon={icon} active={key === collapseName} />
          </NavLink>
        );
      } else if (type === "header") {
        returnValue = (
          <div
            style={{
              width: "100%",
              padding: "15px 30px 4px 25px",
            }}
          >
            <MDTypography variant="button" fontWeight="medium" opacity="0.7" color={textColor}>
              {name.toUpperCase()}
            </MDTypography>
          </div>
        );
      } else if (!isLink) {
        let children = childrenRoutes.filter((route) => route.parent === key);

        returnValue = (
          <div style={{ position: "relative", height: "auto" }}>
            <div onClick={() => toggleMenuLink(key)}>
              <SidenavCollapse
                name={name}
                icon={icon}
                active={checkIsActive(children)}
                caret={<ArrowRight fontSize="small" />}
              />
            </div>
            <div
              style={{ width: "100%", display: "flex", justifyContent: "right", transition: "1s" }}
            >
              <div style={{ width: "100%", height: "0px", overflow: "hidden" }} id={`${key}`}>
                {children.map((child) => {
                  return (
                    <NavLink key={child.key} to={child.route}>
                      <SubMenuLink name={child.name} />
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>
        );
      } else if (type === "title") {
        returnValue = (
          <MDTypography
            key={key}
            color={textColor}
            display="block"
            variant="caption"
            fontWeight="bold"
            textTransform="uppercase"
            pl={3}
            mt={2}
            mb={1}
            ml={1}
          >
            {title}
          </MDTypography>
        );
      } else if (type === "divider") {
        returnValue = (
          <Divider
            key={key}
            light={
              (!darkMode && !whiteSidenav && !transparentSidenav) ||
              (darkMode && !transparentSidenav && whiteSidenav)
            }
          />
        );
      }

      return returnValue;
    }
  );

  return (
    <SidenavRoot
      {...rest}
      variant="permanent"
      ownerState={{ transparentSidenav, whiteSidenav, miniSidenav, darkMode }}
    >
      <MDBox pt={3} pb={1} px={4} textAlign="center">
        <MDBox
          display={{ xs: "block", xl: "none" }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          onClick={closeSidenav}
          sx={{ cursor: "pointer" }}
        >
          <MDTypography variant="h6" color="secondary">
            <Close color={textColor} sx={{ fontWeight: "bold" }} />
          </MDTypography>
        </MDBox>
        <MDBox component={NavLink} to="/" display="flex" alignItems="center">
          {brand && <MDBox component="img" src={brand} alt="Brand" width="2rem" />}
          <MDBox
            width={!brandName && "100%"}
            sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}
          >
            <MDTypography component="h6" variant="button" fontWeight="medium" color={textColor}>
              {brandName}
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
      <Divider
        light={
          (!darkMode && !whiteSidenav && !transparentSidenav) ||
          (darkMode && !transparentSidenav && whiteSidenav)
        }
      />
      <List>{renderRoutes}</List>
    </SidenavRoot>
  );
}

// Setting default values for the props of Sidenav
Sidenav.defaultProps = {
  color: "info",
  brand: "",
};

// Typechecking props for the Sidenav
Sidenav.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
