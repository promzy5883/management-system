import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";

import backgroundImage from "assets/images/bg-sign-in-basic.jpeg";
import MDButton from "components/MDButton";
import { Download } from "@mui/icons-material";

export default function BankStatements() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const bankStatementData = [
    {
      date: "01-01-2019",
      description: "Leon Industries",
      credit: "3182.56",
      debit: "",
      balance: "3182.56",
      grayBackground: true,
    },
    {
      date: "01-01-2019",
      description: "Delco Electrical",
      credit: "436824.47",
      debit: "",
      balance: "0.00",
    },
    {
      date: "01-01-2019",
      description: "Seatle Tacoma",
      credit: "9041.73",
      debit: "",
      balance: "0.00",
      grayBackground: true,
    },
    {
      date: "01-01-2019",
      description: "Marshall-Davids",
      credit: "752.00",
      debit: "",
      balance: "752.80",
    },
    {
      date: "01-01-2019",
      description: "Excide Industrial",
      credit: "6182.82",
      debit: "",
      balance: "0.00",
      grayBackground: true,
    },
    {
      date: "01-01-2019",
      description: "Marshall-Davids",
      credit: "752.00",
      debit: "",
      balance: "752.80",
    },
    {
      date: "01-01-2019",
      description: "Excide Industrial",
      credit: "6182.82",
      debit: "",
      balance: "0.00",
      grayBackground: true,
    },
  ];
  const [bank, setBank] = useState("");
  const [banks, setBanks] = useState([
    {
      bankAccountName: "CHIMSON BROTHERS",
      bankName: "First Bank",
      branchName: "Dev Branch",
      accountNumber: 3049122766,
      category: "Current Assets",
    },
    {
      bankAccountName: "Saviour Wisdom Essien",
      bankName: "Union Bank",
      accountNumber: "0176487097",
      category: "Expense",
      branchName: "Aba Branch",
    },
  ]);

  const generateBalance = () => {
    let num = 0;
    bankStatementData.forEach((data) => {
      num += parseInt(data.balance);
    });
    return num;
  };

  const generateCredit = () => {
    let num = 0;
    bankStatementData.forEach((data) => {
      num += parseInt(data.credit);
    });
    return num;
  };

  const generateDebit = () => {
    let num = 0;
    bankStatementData.forEach((data) => {
      num += parseInt(data.debit);
    });
    return num;
  };

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
              Bank Statements
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
                width: "100%",
                display: "flex",
                gap: "10px",
                justifyContent: "center",
              }}
            >
              <MDButton display="flex" alignItems="center" size="small" color="dark">
                <Download /> Dowload PDF
              </MDButton>
              <MDButton display="flex" alignItems="center" size="small" color="dark">
                <Download /> Dowload Excel
              </MDButton>
            </div>
            <div
              style={{
                padding: "10px",
                display: "flex",
                flexWrap: "wrap",
                rowGap: "8px",
                columnGap: "20px",
                justifyContent: "center",
              }}
            >
              <MDBox>
                <MDBox
                  component="select"
                  value={bank}
                  onChange={(e) => setBank(e.target.value)}
                  style={{
                    width: "100%",
                    outline: "none",
                    border: "1px solid rgb(230, 226, 226)",
                    borderRadius: "5px",
                    minHeight: "35px",
                    paddingLeft: "6px",
                    fontSize: "12px",
                  }}
                >
                  <MDTypography component="option" variant="caption" value="SELECT ACCOUNT">
                    Select Bank
                  </MDTypography>
                  {banks.map((data) => {
                    return (
                      <MDTypography component="option" variant="caption" value={data.accountName}>
                        {data.bankAccountName}
                      </MDTypography>
                    );
                  })}
                </MDBox>
              </MDBox>
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

            <div style={{ width: "100%", overflowX: "scroll" }}>
              <div
                style={{
                  padding: "5px 10px",
                  backgroundColor: "rgba(204, 197, 197,0.7)",
                  width: "auto",
                  display: "grid",
                  gridTemplateColumns: "140px 200px 150px 150px 80px",
                  justifyContent: "space-between",
                }}
              >
                <MDTypography variant="button" fontWeight="bold">
                  Date
                </MDTypography>
                <MDTypography variant="button" fontWeight="bold">
                  Description
                </MDTypography>
                <MDTypography variant="button" fontWeight="bold">
                  Debit
                </MDTypography>
                <MDTypography variant="button" fontWeight="bold">
                  Credit
                </MDTypography>
                <MDTypography variant="button" fontWeight="bold">
                  Balance
                </MDTypography>
              </div>
            </div>
            {bankStatementData.map((data) => {
              return (
                <div style={{ width: "100%", overflowX: "scroll" }}>
                  <div
                    key={data.description}
                    style={{
                      padding: "5px 10px",
                      backgroundColor: `${
                        data.grayBackground ? "rgba(204, 197, 197,0.3)" : "transparent"
                      }`,
                      width: "auto",
                      display: "grid",
                      gridTemplateColumns: "140px 200px 150px 150px 80px",
                      justifyContent: "space-between",
                    }}
                  >
                    <MDTypography variant="overline" fontWeight="medium">
                      {data.date}
                    </MDTypography>
                    <MDTypography variant="overline" fontWeight="medium">
                      {data.description}
                    </MDTypography>
                    <MDTypography variant="overline" fontWeight="medium">
                      {data.debit}
                    </MDTypography>
                    <MDTypography variant="overline" fontWeight="medium">
                      {data.credit}
                    </MDTypography>
                    <MDTypography variant="overline" fontWeight="medium">
                      {data.balance}
                    </MDTypography>
                  </div>
                </div>
              );
            })}
            <div
              style={{
                padding: "10px",
                display: "flex",
                flexWrap: "wrap",
                rowGap: "8px",
                columnGap: "20px",
                justifyContent: "center",
              }}
            >
              <div style={{ display: "flex", width: "auto", gap: "10px", alignItems: "center" }}>
                <MDTypography variant="caption" fontWeight="bold">
                  Credits:
                </MDTypography>
                <MDBox border="1px solid rgba(204, 197, 197,0.7)" padding="0px 2px 0px 45px">
                  <MDTypography variant="caption" fontWeight="bold">
                    {generateCredit()}
                  </MDTypography>
                </MDBox>
              </div>

              <div style={{ display: "flex", width: "auto", gap: "10px", alignItems: "center" }}>
                <MDTypography variant="caption" fontWeight="bold">
                  Debits:
                </MDTypography>
                <MDBox border="1px solid rgba(204, 197, 197,0.7)" padding="0px 2px 0px 45px">
                  <MDTypography variant="caption" fontWeight="bold">
                    {generateDebit() || "0.00"}
                  </MDTypography>
                </MDBox>
              </div>
              <div style={{ display: "flex", width: "auto", gap: "10px", alignItems: "center" }}>
                <MDTypography variant="caption" fontWeight="bold">
                  Out of Balance by:
                </MDTypography>
                <MDBox border="1px solid rgba(204, 197, 197,0.7)" padding="0px 2px 0px 45px">
                  <MDTypography variant="caption" fontWeight="bold">
                    {generateBalance()}
                  </MDTypography>
                </MDBox>
              </div>
            </div>
          </Card>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}
