import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Card from "@mui/material/Card";

export default function SubscriptionDetails() {
  const dummyData = [
    { label: "Company Name", value: "Nestle Distribution, Port Harcourt" },
    { label: "Product", value: "Wholesale/Retail Accounting" },
    { label: "Payment Method", value: "Via Bank Transfer" },
    { label: "License Number", value: "Nestle Distribution" },
    { label: "License No", value: "841131 70ZDA GBD009 338119" },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDTypography variant="h6" marginLeft="40px">
        Subscription
      </MDTypography>
      <Card
        sx={{
          p: 2,
          mt: 3,
          width: "100%",
          maxWidth: "550px",
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
              <MDTypography variant="body2" fontWeight="normal" paddingLeft="10px">
                {data.label}
              </MDTypography>
              <MDTypography variant="body2" fontWeight="normal">
                {data.value}
              </MDTypography>
            </div>
          );
        })}
      </Card>
    </DashboardLayout>
  );
}
