import { useEffect, useState } from "react";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Card from "@mui/material/Card";
import backgroundImage from "assets/images/home-decor-4.jpeg";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import DataTable from "examples/Tables/DataTable";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";

export default function Transactions() {
  const [modalActive, setModalActive] = useState(false);
  const [openingBalanceForm, setOPeningBalanceForm] = useState([
    { label: "Date", type: "date", value: "" },
    { label: "Account", type: "select", value: "" },
    { label: "Ledger", type: "select", value: "" },
    { label: "Contra Account", type: "select", value: "" },
    { label: "Contra Ledger", type: "select", value: "" },
    { label: "Project Payee", type: "text", value: "" },
    { label: "Description", type: "text", value: "" },
    { label: "Debit", type: "text", value: "" },
    { label: "Credit", type: "text", value: "" },
  ]);

  const [ledgers, setLedgers] = useState([
    {
      ledgerName: "Repair & Maintenance",
      accountType: "GL",
      account: "Expense",
      category: "Expense",
    },
    { ledgerName: "Wages & Salary", accountType: "GL", account: "Liability", category: "Expense" },
    { ledgerName: "Government Levy", accountType: "GL", account: "Liability", category: "Expense" },
  ]);

  const accounts = [
    { accountName: "Assets" },
    { accountName: "Liability" },
    { accountName: "Expense" },
    { accountName: "Bank Account" },
    { accountName: "Equity" },
  ];

  const updateOpeningBalanceForm = (label, newValue) => {
    setOPeningBalanceForm(
      openingBalanceForm.map((data) => {
        if (data.label !== label) {
          return data;
        } else {
          return { ...data, value: newValue };
        }
      })
    );
  };
  return (
    <>
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
          <MDBox
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
          ></MDBox>
          <MDBox width="100%" display="flex" justifyContent="center" marginTop="-50px">
            <Card
              sx={{
                position: "relative",
                mt: -8,
                py: 2,
                px: 2,
                minWidth: "95%",
                mx: 2,
              }}
            >
              <div
                style={{
                  width: "100%",
                  margin: "20px 0px 10px 0px",
                }}
              >
                <MDTypography variant="body2" fontWeight="medium" marginBottom="5px">
                  Post Opening Balance Form
                </MDTypography>
                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-end",
                      width: "100%",
                      flexWrap: "wrap",
                    }}
                  >
                    {openingBalanceForm.map((data) => {
                      return (
                        <>
                          {data.type !== "date" && data.type !== "select" && (
                            <MDBox width="110px">
                              <MDTypography variant="caption" fontWeight="medium">
                                {data.label}
                              </MDTypography>
                              <MDInput
                                type={data.type}
                                label={data.label}
                                value={data.value}
                                onChange={(e) =>
                                  updateOpeningBalanceForm(data.label, e.target.value)
                                }
                                fullWidth
                                size="small"
                              />
                            </MDBox>
                          )}
                          {data.type === "select" && (
                            <MDBox width="110px">
                              <MDTypography variant="caption" fontWeight="medium">
                                {data.label}
                              </MDTypography>
                              <MDBox
                                component="select"
                                value={data.value}
                                onChange={(e) =>
                                  updateOpeningBalanceForm(data.label, e.target.value)
                                }
                                style={{
                                  width: "100%",
                                  outline: "none",
                                  border: "1px solid rgb(230, 226, 226)",
                                  borderRadius: "5px",
                                  fontSize: "12px",
                                  minHeight: "35px",
                                  paddingLeft: "6px",
                                }}
                              >
                                <MDTypography component="option" value="SELECT" variant="caption">
                                  Select
                                </MDTypography>
                                {(data.label === "Account" || data.label === "Contra Account") &&
                                  accounts.map((data) => {
                                    return (
                                      <MDTypography
                                        component="option"
                                        value={data.accountName}
                                        variant="caption"
                                      >
                                        {data.accountName}
                                      </MDTypography>
                                    );
                                  })}
                                {(data.label === "Ledger" || data.label === "Contra Ledger") &&
                                  ledgers.map((data) => {
                                    return (
                                      <MDTypography
                                        component="option"
                                        value={data.ledgerName}
                                        variant="caption"
                                      >
                                        {data.ledgerName}
                                      </MDTypography>
                                    );
                                  })}
                              </MDBox>
                            </MDBox>
                          )}
                          {data.type === "date" && (
                            <MDBox width="110px">
                              <MDTypography variant="caption" fontWeight="medium">
                                {data.label}
                              </MDTypography>
                              <MDInput
                                type={data.type}
                                value={data.value}
                                onChange={(e) =>
                                  updateOpeningBalanceForm(data.label, e.target.value)
                                }
                                fullWidth
                                size="small"
                              />
                            </MDBox>
                          )}
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
              <MDBox
                width="100%"
                display="flex"
                justifyContent="center"
                flexWrap="wrap"
                gap="10px"
                columnGap="10px"
              >
                <MDButton color="success">Post</MDButton>
                <MDButton color="info">Save As Draft</MDButton>
              </MDBox>
            </Card>
          </MDBox>
        </MDBox>
      </DashboardLayout>
    </>
  );
}
