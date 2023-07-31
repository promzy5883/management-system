import { useState } from "react";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Card from "@mui/material/Card";
import backgroundImage from "assets/images/home-decor-4.jpeg";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import ItemSettingsTable from "./components/itemSettingsTable";

export default function ItemSettings() {
  const [selectedSettings, setSelectedSettings] = useState("Brand Name");
  const [modalActive, setModalActive] = useState(false);
  return (
    <DashboardLayout>
      <DashboardNavbar zIndex={modalActive ? -10 : 0} />
      <MDBox position="relative" mb={5}>
        <MDBox
          display="flex"
          alignItems="center"
          position="relative"
          minHeight="18.75rem"
          borderRadius="xl"
          sx={{
            backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.info.main, 0.6),
                rgba(gradients.info.state, 0.6)
              )}, url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "50%",
            overflow: "hidden",
          }}
        />
        <MDBox
          width="90%"
          display="flex"
          flexDirection="row"
          position="absolute"
          top="22px"
          left="20px"
          flexWrap="wrap"
          rowGap="10px"
          columnGap="10px"
          justifyContent="center"
        >
          <MDButton
            onClick={() => setSelectedSettings("Brand Name")}
            color={selectedSettings === "Brand Name" ? "success" : "white"}
            variant={selectedSettings === "Brand Name" ? "contained" : "outlined"}
          >
            Brand Name
          </MDButton>
          <MDButton
            color={selectedSettings === "Category" ? "success" : "white"}
            onClick={() => setSelectedSettings("Category")}
            variant={selectedSettings === "Category" ? "contained" : "outlined"}
          >
            Category
          </MDButton>
          <MDButton
            color={selectedSettings === "Item Variation" ? "success" : "white"}
            onClick={() => setSelectedSettings("Item Variation")}
            variant={selectedSettings === "Item Variation" ? "contained" : "outlined"}
          >
            Item Variation
          </MDButton>
        </MDBox>
        <MDBox width="100%" display="flex" justifyContent="center" marginTop="-50px">
          <Card
            sx={{
              position: "relative",
              mt: -8,
              py: 2,
              px: 2,
              minWidth: "95%",
            }}
          >
            <ItemSettingsTable
              setting={selectedSettings}
              openModal={() => setModalActive(true)}
              closeModal={() => setModalActive(false)}
            />
          </Card>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}
