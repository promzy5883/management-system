import { useEffect, useState } from "react";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Card from "@mui/material/Card";
import backgroundImage from "assets/images/home-decor-4.jpeg";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import CreateLedger from "layouts/create-accounts-and-categories/createLedgerModal";
import DataTable from "examples/Tables/DataTable";
import MDTypography from "components/MDTypography";
import { Edit, MoreHoriz } from "@mui/icons-material";
import EditLedger from "./editLedger";

export default function CreateLedgers() {
  const [modalActive, setModalActive] = useState(false);
  const [initialName, setInitialName] = useState("");
  const [editModal, setEditModal] = useState(false);
  const [ledgerModal, setLedgerModal] = useState(false);
  const EditActionComponent = ({ currentName }) => {
    const id = `${currentName}${Math.random()}`;

    const toggleMenu = (id) => {
      let elem = document.getElementById(id);
      if (elem.style.display !== "flex") {
        elem.style.display = "flex";
      } else {
        elem.style.display = "none";
      }
    };
    return (
      <div style={{ position: "relative" }}>
        <button
          onClick={() => toggleMenu(id)}
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            transform: "rotate(90deg)",
          }}
        >
          <MDTypography>
            <MoreHoriz color="inherit" />
          </MDTypography>
        </button>
        <div id={id} style={{ display: "none" }}>
          <Card
            sx={{
              position: "absolute",
              top: "18px",
              right: "15px",
              overflow: "hidden",
            }}
          >
            <div
              style={{ width: "120px", height: "40px" }}
              className="editMenu"
              onClick={() => {
                toggleMenu(id);
                setInitialName(currentName);
                setEditModal(true);
              }}
            >
              <MDTypography variant="overline" display="flex" alignItems="center" gap="3px">
                <Edit /> Edit
              </MDTypography>
            </div>
          </Card>
        </div>
      </div>
    );
  };
  const [categories, setCategories] = useState([
    { categoryName: "None", categoryDescription: "No Category" },
    {
      categoryName: "Sales",
      categoryDescription: "Non-items based sales",
      account: "Assests",
    },
    {
      categoryName: "Cost of Sales",
      categoryDescription: "Any cost associated with sales. Used to calculate gross profit.",
      account: "Liability",
    },
    {
      categoryName: "Other Income",
      categoryDescription: "Income received such as interest and discount received.",
      account: "Assets",
    },
    {
      categoryName: "Expense",
      categoryDescription: "Cost incurred, Advertising, rent, stationary, and so on.",
      account: "Liability",
    },
    {
      categoryName: "Income Tax",
      categoryDescription: "Taxes levied on the net income of the company",
      account: "Assets",
    },
    {
      categoryName: "Non-Current Assets",
      categoryDescription: "Items of value lasting for an extended period of time such as property",
      account: "Liability",
    },
    {
      categoryName: "Current Assets",
      categoryDescription: "Assets expected to be sold or used in under a year such as cash",
      account: "Assets",
    },
    {
      categoryName: "Non-Current Liabilities",
      categoryDescription: "Liabilities to be settled in the future. Loan, mortgages, and so on.",
      account: "Assets",
    },
    {
      categoryName: "Current Liabilities",
      categoryDescription: "Liabilities",
      account: "Liability",
    },
  ]);
  const [accounts, setAccounts] = useState([
    { accountName: "Assets" },
    { accountName: "Liability" },
    { accountName: "Expense" },
    { accountName: "Bank Account" },
    { accountName: "Equity" },
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
  const [ledgerTableData, setLedgerTableData] = useState([]);

  useEffect(() => {
    setLedgerTableData(
      ledgers.map((data) => {
        return {
          "Ledger Name": data.ledgerName,
          Module: data.accountType,
          Account: data.account,
          Category: data.category,
          Action: <EditActionComponent currentName={data.ledgerName} />,
        };
      })
    );
  }, [ledgers]);

  return (
    <>
      {ledgerModal && (
        <CreateLedger
          cancel={() => setLedgerModal(false)}
          category={categories}
          accounts={accounts}
          submitted={(data) => {
            setLedgers([...accounts, data]);
            setLedgerModal(false);
          }}
        />
      )}

      {editModal && (
        <EditLedger
          type="Ledger"
          accounts={accounts}
          categoryData={categories}
          accountData={accounts}
          ledgerData={ledgers}
          cancel={() => setEditModal(false)}
          submitted={(data) => setEditModal(false)}
          currentName={initialName}
        />
      )}
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

          <MDBox width="100%" display="flex" justifyContent="center" marginTop="-50px">
            <Card
              sx={{
                position: "relative",
                mt: -8,
                py: 2,
                px: 2,
                minWidth: "95%",
              }}
            >
              <MDBox width="200px">
                <MDButton color="success" onClick={() => setLedgerModal(true)}>
                  Add Ledger
                </MDButton>
              </MDBox>

              <DataTable
                canSearch={true}
                table={{
                  columns: [
                    { Header: "Ledger Name", accessor: "Ledger Name", width: "22%" },
                    { Header: "Module", accessor: "Module", width: "22%" },
                    { Header: "Account", accessor: "Account", width: "22%" },
                    { Header: "Category", accessor: "Category", width: "22%" },
                    { Header: "Action", accessor: "Action" },
                  ],
                  rows: [...ledgerTableData],
                }}
              />
            </Card>
          </MDBox>
        </MDBox>
      </DashboardLayout>
    </>
  );
}
