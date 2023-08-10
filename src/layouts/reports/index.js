import { useEffect, useState } from "react";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Card from "@mui/material/Card";
import backgroundImage from "assets/images/bg-sign-in-basic.jpeg";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import ChartsOfAccounts from "layouts/otherComponents/chartsofaccounts";
import AccountsBalances from "layouts/otherComponents/accountsbalances";
import OutletRevenue from "layouts/otherComponents/outletRevenue";
import ConsolidatedIncomeStatement from "layouts/otherComponents/consolidatedIncomeStatement";
import Cashbook from "layouts/otherComponents/cashbook";
import TrialBalance from "layouts/otherComponents/trialBalance";
import BalanceSheet from "layouts/otherComponents/balanceSheet";

export default function Reports() {
  const [selectedMenu, setSelectedMenu] = useState("Charts Of Accounts");
  const [modalActive, setModalActive] = useState(false);

  const buttons = [
    "Charts Of Accounts",
    "Accounts Balances",
    "Outlet Revenue",
    "Consolidated Income Statement",
    "Cashbook",
    "Trial Balance",
    "Balance Sheet",
  ];

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
            padding="10px 0px 80px 0px"
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
          >
            <MDBox
              height="auto"
              width="90%"
              display="flex"
              flexDirection="row"
              left="20px"
              flexWrap="wrap"
              rowGap="10px"
              columnGap="10px"
              justifyContent="center"
            >
              {buttons.map((button) => {
                return (
                  <MDButton
                    key={button}
                    onClick={() => setSelectedMenu(button)}
                    variant={selectedMenu === button ? "contained" : "outlined"}
                    color={selectedMenu === button ? "success" : "white"}
                  >
                    {button}
                  </MDButton>
                );
              })}
            </MDBox>
          </MDBox>

          <MDBox width="100%" display="flex" justifyContent="center" marginTop="-10px">
            <Card
              sx={{
                position: "relative",
                mt: -8,
                py: 2,
                px: 1,
                minWidth: "95%",
                mx: 1.5,
              }}
            >
              {selectedMenu === "Charts Of Accounts" && <ChartsOfAccounts />}
              {selectedMenu === "Accounts Balances" && <AccountsBalances />}
              {selectedMenu === "Outlet Revenue" && (
                <OutletRevenue
                  active={() => setModalActive(true)}
                  nonActive={() => setModalActive(false)}
                />
              )}
              {selectedMenu === "Consolidated Income Statement" && <ConsolidatedIncomeStatement />}
              {selectedMenu === "Cashbook" && <Cashbook />}
              {selectedMenu === "Trial Balance" && <TrialBalance />}
              {selectedMenu === "Balance Sheet" && <BalanceSheet />}
            </Card>
          </MDBox>
        </MDBox>
      </DashboardLayout>
    </>
  );
}
