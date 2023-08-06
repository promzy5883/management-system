import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { useState } from "react";

import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";

import backgroundImage from "assets/images/bg-sign-in-basic.jpeg";

export default function CashFlow() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const cashFlowFromOperationsData = [
    { label: "Net Income", value: "#60,000" },
    { label: "Additions To Cash", background: "rgba(204,197,197,0.3)" },
    { label: "Depreciation", value: "#20,000" },
    {
      label: "Increase In Accounts Payable",
      value: "#10,000",
      background: "rgba(204,197,197,0.3)",
    },
    {
      label: "Subtractions from Cash",
    },
    {
      label: "Increase In Accounts Receivable",
      value: "#20,000",
      background: "rgba(204,197,197,0.3)",
      color: "error",
    },
    {
      label: "Increase In Inventory",
      value: "#30,000",
      color: "error",
    },
    {
      label: "Net Cash from Operations",
      underline: true,
      value: "#40,000",
      background: "rgba(204,197,197,0.3)",
    },
  ];
  return (
    <DashboardLayout>
      <DashboardNavbar />
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
          marginTop="40px"
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
          <MDBox display="flex" flexDirection="column" alignItems="center">
            <MDTypography variant="h6" color="white">
              Cash Flow Statement
            </MDTypography>
            <MDTypography variant="button" color="white">
              Nestle Distribution
            </MDTypography>
            <MDTypography variant="button" color="white" paddingBottom="10px">
              Month Ended January 31, 2023
            </MDTypography>
          </MDBox>
        </MDBox>

        <MDBox width="100%" display="flex" justifyContent="center" marginTop="-50px">
          <Card sx={{ overflow: "hidden", p: 2, mt: -8, minWidth: "95%" }}>
            <div
              style={{
                padding: "10px",
                display: "flex",
                flexWrap: "wrap",
                rowGap: "8px",
                columnGap: "20px",
              }}
            >
              <div style={{ display: "flex", width: "auto", gap: "10px", alignItems: "center" }}>
                <MDTypography variant="caption" fontWeight="bold">
                  From:
                </MDTypography>
                <MDInput
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  size="small"
                  type="date"
                />
              </div>

              <div style={{ display: "flex", width: "auto", gap: "10px", alignItems: "center" }}>
                <MDTypography variant="caption" fontWeight="bold">
                  To:
                </MDTypography>
                <MDInput
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  size="small"
                  type="date"
                />
              </div>
            </div>

            <div style={{ padding: "5px 10px", backgroundColor: "rgba(204, 197, 197,0.3)" }}>
              <MDTypography variant="button" fontWeight="bold">
                Cash Flow from Operations
              </MDTypography>
            </div>
            {cashFlowFromOperationsData.map((data) => {
              return (
                <div
                  key={data.label}
                  style={{
                    width: "100%",
                    display: "flex",
                    gap: "200px",
                    flexWrap: "wrap",
                    alignItems: "center",
                    padding: "5px 10px",
                    backgroundColor: `${data.background ? data.background : "transparent"}`,
                  }}
                >
                  {data.underline ? (
                    <>
                      <MDTypography variant="overline" width="100%" maxWidth="500px">
                        <u>{data.label}</u>
                      </MDTypography>
                      <MDTypography
                        variant="overline"
                        fontWeight="medium"
                        color={data.color ? data.color : "dark"}
                      >
                        <u>{data.value && data.value}</u>
                      </MDTypography>
                    </>
                  ) : (
                    <>
                      <MDTypography variant="overline" width="100%" maxWidth="500px">
                        {data.label}
                      </MDTypography>
                      <MDTypography
                        variant="overline"
                        fontWeight="medium"
                        color={data.color ? data.color : "dark"}
                      >
                        {data.value && data.value}
                      </MDTypography>
                    </>
                  )}
                </div>
              );
            })}
            <div style={{ padding: "5px 10px" }}>
              <MDTypography variant="overline" fontWeight="bold">
                Cash Flow from Investing
              </MDTypography>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                gap: "200px",
                flexWrap: "wrap",
                alignItems: "center",
                padding: "5px 10px",
                backgroundColor: "rgba(204, 197, 197,0.3)",
              }}
            >
              <>
                <MDTypography variant="overline" width="100%" maxWidth="500px">
                  Purchase of Equipments
                </MDTypography>
                <MDTypography variant="overline" fontWeight="medium" color="error">
                  #5,000
                </MDTypography>
              </>
            </div>
            <div style={{ padding: "5px 10px" }}>
              <MDTypography variant="overline" fontWeight="bold">
                Cash Flow from Financing
              </MDTypography>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                gap: "200px",
                flexWrap: "wrap",
                alignItems: "center",
                padding: "5px 10px",
                backgroundColor: "rgba(204, 197, 197,0.3)",
              }}
            >
              <>
                <MDTypography variant="overline" width="100%" maxWidth="500px">
                  Notes Payable
                </MDTypography>
                <MDTypography variant="overline" fontWeight="medium">
                  #7,500
                </MDTypography>
              </>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                gap: "200px",
                flexWrap: "wrap",
                alignItems: "center",
                padding: "5px 10px",
              }}
            >
              <>
                <MDTypography variant="overline" fontWeight="medium" width="100%" maxWidth="500px">
                  <u>Cash Flow for months ended December 31, 2018</u>
                </MDTypography>
                <MDTypography variant="overline" fontWeight="medium">
                  <u>#42,500</u>
                </MDTypography>
              </>
            </div>
          </Card>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}
