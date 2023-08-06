import { useState } from "react";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Card from "@mui/material/Card";
import backgroundImage from "assets/images/bg-sign-in-basic.jpeg";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import ItemListsTable from "./itemListTable";

export default function ItemLists() {
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
            <ItemListsTable
              openModal={() => setModalActive(true)}
              closeModal={() => setModalActive(false)}
            />
          </Card>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}
