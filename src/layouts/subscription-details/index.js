import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Card from "@mui/material/Card";
import MDBox from "components/MDBox";

export default function SubscriptionDetails() {
  const dummyData = [
    { label: "Company Name", value: "Nestle Distribution, Port Harcourt" },
    { label: "Product", value: "Wholesale/Retail Accounting", color: "info" },
    { label: "Payment Method", value: "Via Bank Transfer" },
    { label: "License No", value: "841131 70ZDA GBD009 338119" },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDTypography variant="body1" fontWeight="medium" marginLeft="40px">
        Subscription #
      </MDTypography>
      <Card
        sx={{
          p: 2,
          mt: 3,
          width: "100%",
          maxWidth: "750px",
          display: "flex",
          flexWrap: "wrap",
          columnGap: "15px",
          flexDirection: "row",
        }}
      >
        <MDBox
          height="70px"
          alignItems="center"
          width="80px"
          display="flex"
          flexDirection="column"
          gap="5px"
        >
          <MDTypography variant="body2" fontWeight="medium">
            Status
          </MDTypography>
          <MDBox
            bgColor="success"
            width="55px"
            height="22px"
            borderRadius="15px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <MDTypography variant="caption" color="white">
              Active
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox
          height="70px"
          width="120px"
          display="flex"
          alignItems="center"
          flexDirection="column"
          gap="5px"
        >
          <MDTypography variant="body2" fontWeight="medium">
            Start Date
          </MDTypography>
          <MDTypography variant="caption">October 11, 2023</MDTypography>
        </MDBox>
        <MDBox
          height="70px"
          width="145px"
          display="flex"
          alignItems="center"
          flexDirection="column"
          gap="5px"
        >
          <MDTypography variant="body2" fontWeight="medium">
            Last Order Date
          </MDTypography>
          <MDTypography variant="caption">May 5, 2023</MDTypography>
        </MDBox>
        <MDBox
          height="70px"
          width="165px"
          display="flex"
          alignItems="center"
          flexDirection="column"
          gap="5px"
        >
          <MDTypography variant="body2" fontWeight="medium">
            Next Payment Date
          </MDTypography>
          <MDTypography variant="caption">June 21, 2023</MDTypography>
        </MDBox>
      </Card>
      <Card
        sx={{
          p: 2,
          mt: 4,
          width: "100%",
          maxWidth: "750px",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "grid",
            height: "35px",
            alignItems: "center",
            gridTemplateColumns: "35% 65%",
          }}
        >
          <MDTypography variant="body2" fontWeight="medium" paddingLeft="10px">
            Info
          </MDTypography>
          <MDTypography variant="body2" fontWeight="medium">
            Details
          </MDTypography>
        </div>
        {dummyData.map((data) => {
          return (
            <div
              style={{
                width: "100%",
                display: "grid",
                height: "auto",
                alignItems: "center",
                borderTop: "1px solid rgb(201, 194, 194)",
                gridTemplateColumns: "35% 65%",
                padding: "10px 0px 10px 0px",
              }}
            >
              <MDTypography variant="body2" fontWeight="medium" paddingLeft="10px">
                {data.label}
              </MDTypography>
              <MDTypography
                variant="body2"
                fontWeight="normal"
                color={data.color ? data.color : "inherit"}
              >
                {data.value}
              </MDTypography>
            </div>
          );
        })}
      </Card>
    </DashboardLayout>
  );
}
