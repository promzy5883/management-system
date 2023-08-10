import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import { useEffect, useState } from "react";

export default function BalanceSheet() {
  const [accounts, setAccounts] = useState([
    { accountName: "Assets" },
    { accountName: "Liability" },
    { accountName: "Expense" },
    { accountName: "Bank Account" },
    { accountName: "Equity" },
  ]);
  return (
    <MDBox padding="0px 6px">
      <MDTypography
        fontSize="17px"
        marginBottom="10px"
        textAlign="center"
        color="text"
        fontWeight="medium"
      >
        Balance Sheet
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
          <div style={{ width: "100%", minWidth: "100%" }}></div>
        </MDBox>
        <MDBox width="600px" minWidth="340px" maxWidth="49%" overflowX="scroll">
          <div style={{ minWidth: "100%" }}></div>
        </MDBox>
      </MDBox>
    </MDBox>
  );
}
