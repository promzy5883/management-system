import { useState } from "react";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import MDBox from "components/MDBox";
import backgroundImage from "assets/images/bg-sign-up-cover.jpeg";
import Card from "@mui/material/Card";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import DeleteModal from "layouts/otherComponents/deleteModal";

export default function SetUpCompanyInfo() {
  const [modalActive, setModalActive] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [alternativePhone, setAlternativePhone] = useState("");
  const [email, setEmail] = useState("");
  const [logo, setLogo] = useState("");
  return (
    <>
      {modalActive && (
        <DeleteModal cancel={() => setModalActive(false)} submit={() => setModalActive(false)} />
      )}
      <DashboardLayout>
        <DashboardNavbar zIndex={modalActive ? -10 : 0} />
        <MDBox position="relative" mb={5} zIndex={modalActive ? -10 : 0}>
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
          <Card
            sx={{
              position: "relative",
              mt: -14,
              mx: 3,
              py: 2,
              px: 2,
              maxWidth: "590px",
            }}
          >
            <form>
              <div
                style={{
                  width: "100%",
                  maxWidth: "550px",
                  display: "flex",
                  flexWrap: "wrap",
                  rowGap: "15px",
                  columnGap: "20px",
                }}
              >
                <MDInput
                  label="Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  fullWidth
                />
                <div style={{ width: "265px" }}>
                  <MDInput
                    label="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    fullWidth
                  />
                </div>
                <div style={{ width: "265px" }}>
                  <MDInput
                    type="number"
                    label="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    fullWidth
                  />
                </div>
                <div style={{ width: "265px" }}>
                  <MDInput
                    label="Alternative Phone"
                    type="number"
                    value={alternativePhone}
                    onChange={(e) => setAlternativePhone(e.target.value)}
                    fullWidth
                  />
                </div>
                <div style={{ width: "265px" }}>
                  <MDInput
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                  />
                </div>
                <div
                  style={{
                    width: "265px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MDTypography variant="button" fontWeight="medium">
                    Upload Logo
                  </MDTypography>
                </div>
                <div style={{ width: "265px" }}>
                  <MDInput
                    type="file"
                    value={logo}
                    onChange={(e) => setLogo(e.target.files[0])}
                    fullWidth
                  />
                </div>
                <MDButton color="dark" fullWidth onClick={() => setModalActive(true)}>
                  Submit
                </MDButton>
              </div>
            </form>
          </Card>
        </MDBox>
      </DashboardLayout>
    </>
  );
}
