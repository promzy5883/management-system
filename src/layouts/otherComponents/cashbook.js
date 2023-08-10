import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import { useEffect, useState } from "react";

export default function Cashbook() {
  return (
    <MDBox padding="0px 6px">
      <MDTypography
        fontSize="17px"
        marginBottom="10px"
        textAlign="center"
        color="text"
        fontWeight="medium"
      >
        Cash Book
      </MDTypography>
      <MDBox
        width="100%"
        display="flex"
        flexWrap="wrap"
        rowGap="15px"
        columnGap="15px"
        justifyContent="center"
      >
        <MDBox width="600px" minWidth="340px" maxWidth="49%" overflowX="scroll">
          <div style={{ width: "100%", minWidth: "100%" }}>
            <MDTypography
              width="100%"
              variant="caption"
              color="text"
              display="flex"
              justifyContent="center"
              padding="10px 0px"
              borderBottom="1px solid rgba(204, 197, 197,0.7)"
            >
              DEBIT
            </MDTypography>
            <MDBox
              borderBottom="1px solid rgba(204, 197, 197,0.7)"
              bgColor="rgba(204,197,197,0.3)"
              width="auto"
              minWidth="100%"
              height="40px"
              display="grid"
              gridTemplateColumns="30% 30% 20% 20%"
              alignItems="center"
              padding="0px 15px"
            >
              <MDTypography variant="caption" color="text">
                Date
              </MDTypography>
              <MDTypography variant="caption" color="text">
                Particulars
              </MDTypography>
              <MDTypography variant="caption" color="text">
                Cash(₦)
              </MDTypography>
              <MDTypography variant="caption" color="text">
                Bank(₦)
              </MDTypography>
            </MDBox>
            <MDBox
              borderTop="1px solid rgba(204, 197, 197,0.7)"
              bgColor="rgba(204,197,197,0.3)"
              width="auto"
              minWidth="100%"
              height="40px"
              display="grid"
              gridTemplateColumns="30% 30% 20% 20%"
              alignItems="center"
              padding="0px 15px"
            >
              <MDTypography variant="caption" color="text"></MDTypography>
              <MDTypography variant="caption" color="text"></MDTypography>
              <MDTypography variant="caption" color="text">
                ₦0
              </MDTypography>
              <MDTypography variant="caption" color="text">
                ₦0
              </MDTypography>
            </MDBox>
            <MDBox
              borderTop="1px solid rgba(204, 197, 197,0.7)"
              bgColor="rgba(204,197,197,0.3)"
              width="auto"
              minWidth="100%"
              height="40px"
              display="grid"
              gridTemplateColumns="30% 30% 20% 20%"
              alignItems="center"
              padding="0px 15px"
            >
              <MDTypography variant="caption" color="text">
                {new Date().toLocaleDateString()}
              </MDTypography>
              <MDTypography variant="caption" color="text">
                By Bal. c/d
              </MDTypography>
              <MDTypography variant="caption" color="text">
                ₦0
              </MDTypography>
              <MDTypography variant="caption" color="text">
                ₦0
              </MDTypography>
            </MDBox>
          </div>
        </MDBox>
        <MDBox width="600px" minWidth="340px" maxWidth="49%" overflowX="scroll">
          <div style={{ minWidth: "100%" }}>
            <MDTypography
              width="100%"
              variant="caption"
              color="text"
              display="flex"
              justifyContent="center"
              padding="10px 0px"
              borderBottom="1px solid rgba(204, 197, 197,0.7)"
            >
              CREDIT
            </MDTypography>
            <MDBox
              borderBottom="1px solid rgba(204, 197, 197,0.7)"
              bgColor="rgba(204,197,197,0.3)"
              width="auto"
              minWidth="100%"
              height="40px"
              display="grid"
              gridTemplateColumns="30% 30% 20% 20%"
              alignItems="center"
              padding="0px 15px"
            >
              <MDTypography variant="caption" color="text">
                Date
              </MDTypography>
              <MDTypography variant="caption" color="text">
                Particulars
              </MDTypography>
              <MDTypography variant="caption" color="text">
                Cash(₦)
              </MDTypography>
              <MDTypography variant="caption" color="text">
                Bank(₦)
              </MDTypography>
            </MDBox>
            <MDBox
              borderTop="1px solid rgba(204, 197, 197,0.7)"
              bgColor="rgba(204,197,197,0.3)"
              width="auto"
              minWidth="100%"
              height="40px"
              display="grid"
              gridTemplateColumns="30% 30% 20% 20%"
              alignItems="center"
              padding="0px 15px"
            >
              <MDTypography variant="caption" color="text"></MDTypography>
              <MDTypography variant="caption" color="text"></MDTypography>
              <MDTypography variant="caption" color="text">
                ₦0
              </MDTypography>
              <MDTypography variant="caption" color="text">
                ₦0
              </MDTypography>
            </MDBox>
            <MDBox
              borderTop="1px solid rgba(204, 197, 197,0.7)"
              bgColor="rgba(204,197,197,0.3)"
              width="auto"
              minWidth="100%"
              height="40px"
              display="grid"
              gridTemplateColumns="30% 30% 20% 20%"
              alignItems="center"
              padding="0px 15px"
            >
              <MDTypography variant="caption" color="text">
                {new Date().toLocaleDateString()}
              </MDTypography>
              <MDTypography variant="caption" color="text">
                By Bal. c/d
              </MDTypography>
              <MDTypography variant="caption" color="text">
                ₦0
              </MDTypography>
              <MDTypography variant="caption" color="text">
                ₦0
              </MDTypography>
            </MDBox>
          </div>
        </MDBox>
      </MDBox>
    </MDBox>
  );
}
