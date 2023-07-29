import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import "index.css";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import { Close } from "@mui/icons-material";

export default function ItemDetails({ no, cancel, data }) {
  const [position, setPosition] = useState(-410);
  let mainData = data[no - 1];

  useEffect(() => setPosition(50), []);
  return (
    <div className="addSettingModal">
      <Card
        sx={{
          maxWidth: "450px",
          width: "90%",
          p: 2,
          height: "390px",
          overflowY: "scroll",
          transition: "0.4s",
          transform: `translateY(${position}px)`,
          zIndex: 20,
        }}
      >
        <MDTypography
          variant="caption"
          fontWeight="bold"
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="10px"
        >
          ITEM DETAILS
          <button
            onClick={() => cancel()}
            style={{ border: "none", backgroundColor: "transparent", cursor: "pointer" }}
          >
            <MDTypography>
              <Close fontSize="small" color="inherit" />
            </MDTypography>
          </button>
        </MDTypography>
        <div
          style={{
            display: "flex",
            width: "100%",
            padding: "10px 0px",
            borderBottom: "1px solid rgb(230, 226, 226)",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <MDTypography variant="button" fontWeight="medium">
            Name
          </MDTypography>
          <MDTypography variant="caption">{mainData.plainName.toUpperCase()}</MDTypography>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            padding: " 10px 0px",
            borderBottom: "1px solid rgb(230, 226, 226)",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <MDTypography variant="button" fontWeight="medium">
            Brand Name
          </MDTypography>
          <MDTypography variant="caption">{mainData.brandName.toUpperCase()}</MDTypography>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            padding: "10px 0px",
            borderBottom: "1px solid rgb(230, 226, 226)",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <MDTypography variant="button" fontWeight="medium">
            Category
          </MDTypography>
          <MDTypography variant="caption">{mainData.category.toUpperCase()}</MDTypography>
        </div>

        <MDTypography
          variant="body2"
          fontWeight="medium"
          width="100%"
          marginTop="16px"
          marginBottom="10px"
        >
          ITEM UNITS
        </MDTypography>
        {mainData.itemUnit.map((unit) => {
          return (
            <div
              style={{
                width: "100%",
                display: "flex",
                padding: "10px 0px",
                borderBottom: "1px solid  rgb(230, 226, 226)",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <MDTypography variant="caption">
                UNIT NAME:&nbsp;<b>{unit.unit}</b>
              </MDTypography>
              <MDTypography variant="caption">
                UNIT SELLING PRICE:&nbsp;<b>{unit.unitPrice}</b>
              </MDTypography>
              <MDTypography variant="caption">
                BAR CODE:&nbsp;<b>{unit.unitBarCode}</b>
              </MDTypography>
              <MDTypography variant="caption">
                MINIMUM STOCK QTY:&nbsp;<b>{unit.minimumStock}</b>
              </MDTypography>
            </div>
          );
        })}
        <MDBox width="100%" marginTop="14px">
          <MDButton onClick={() => cancel()} color="error">
            Close
          </MDButton>
        </MDBox>
      </Card>
    </div>
  );
}
