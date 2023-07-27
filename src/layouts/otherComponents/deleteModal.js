import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import { useState, useEffect } from "react";

export default function DeleteModal({ cancel, submit }) {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => setOpacity(1), []);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: "0px",
        left: "0px",
        backgroundColor: "rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "1s",
        opacity: opacity,
        zIndex: 10,
      }}
    >
      <Card sx={{ p: 2, width: "85%", maxWidth: "300px", zIndex: 20 }}>
        <MDTypography variant="button" fontWeight="bold">
          Are you sure <br /> you want to submit this form?
        </MDTypography>
        <MDBox width="100%" display="flex" justifyContent="space-between" marginTop="15px">
          <div style={{ width: "48%" }}>
            <MDButton
              color="error"
              size="small"
              fullWidth
              variant="contained"
              onClick={() => cancel()}
            >
              Cancel
            </MDButton>
          </div>
          <div style={{ width: "48%" }}>
            <MDButton
              variant="contained"
              color="success"
              size="small"
              fullWidth
              onClick={() => submit()}
            >
              Submit
            </MDButton>
          </div>
        </MDBox>
      </Card>
    </div>
  );
}
