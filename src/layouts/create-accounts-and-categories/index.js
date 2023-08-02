import { useEffect, useState } from "react";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Card from "@mui/material/Card";
import backgroundImage from "assets/images/home-decor-4.jpeg";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import CreateCategory from "./createCategoryModal";
import DataTable from "examples/Tables/DataTable";
import MDTypography from "components/MDTypography";
import { Edit, MoreHoriz } from "@mui/icons-material";
import EditComponent from "./edit";
import CreateAccount from "./createAccountModal";

export default function CreateAccountsAndCategories() {
  const [modalActive, setModalActive] = useState(false);
  const [initialName, setInitialName] = useState("");
  const [editType, setEditType] = useState("Account");
  const [selectedMenu, setSelectedMenu] = useState("Accounts");
  const [editModal, setEditModal] = useState(false);
  const EditActionComponent = ({ currentName, type }) => {
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
                setEditType(type);
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
    { categoryName: "None" },
    {
      categoryName: "Sales",
      categoryDescription: "Non-items based sales",
    },
    {
      categoryName: "Cost of Sales",
      categoryDescription: "Any cost associated with sales. Used to calculate gross profit.",
    },
    {
      categoryName: "Other Income",
      categoryDescription: "Income received such as interest and discount received.",
    },
    {
      categoryName: "Expenses",
      categoryDescription: "Cost incurred, Advertising, rent, stationary, and so on.",
    },
  ]);
  const [accounts, setAccounts] = useState([
    { accountName: "Assets" },
    { accountName: "Liability" },
    { accountName: "Expense" },
    { accountName: "Bank Account" },
    { accountName: "Equity" },
  ]);
  const [categoryModal, setCategoryModal] = useState(false);
  const [accountsModal, setAccountsModal] = useState(false);
  const [accountsTableData, setAccountsTableData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    setCategoriesData(
      categories.map((data) => {
        return {
          "Category Name": data.categoryName,
          "Category Description": data.categoryDescription,
          Account: data.account,
          Action: <EditActionComponent currentName={data.categoryName} type="Category" />,
        };
      })
    );
  }, [categories]);

  useEffect(() => {
    setAccountsTableData(
      accounts.map((data) => {
        return {
          "Account Name": data.accountName,
          key: `${data.accountName}${Math.random()}`,
          Action: <EditActionComponent currentName={data.key} type="Accounts" />,
        };
      })
    );
  }, [accounts]);

  return (
    <>
      {categoryModal && (
        <CreateCategory
          submitted={(data) => {
            setCategories([...categories, data]);
            setCategoryModal(false);
          }}
          accounts={accounts}
          cancel={() => setCategoryModal(false)}
        />
      )}
      {accountsModal && (
        <CreateAccount
          cancel={() => setAccountsModal(false)}
          submitted={(data) => {
            setAccounts([...accounts, data]);
            setAccountsModal(false);
          }}
        />
      )}
      {editModal && (
        <EditComponent
          type={editType}
          accounts={accounts}
          categoryData={categories}
          accountData={accounts}
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
          >
            <MDButton
              color={selectedMenu === "Accounts" ? "success" : "white"}
              variant={selectedMenu === "Accounts" ? "contained" : "outlined"}
              onClick={() => setSelectedMenu("Accounts")}
            >
              Account
            </MDButton>
            <MDButton
              onClick={() => setSelectedMenu("Category")}
              variant={selectedMenu === "Category" ? "contained" : "outlined"}
              color={selectedMenu === "Category" ? "success" : "white"}
            >
              Category
            </MDButton>
          </MDBox>

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
                {selectedMenu === "Accounts" && (
                  <MDButton color="success" onClick={() => setAccountsModal(true)}>
                    Add Account
                  </MDButton>
                )}
                {selectedMenu === "Category" && (
                  <MDButton color="success" onClick={() => setCategoryModal(true)}>
                    Add Category
                  </MDButton>
                )}
              </MDBox>

              {selectedMenu === "Accounts" && (
                <DataTable
                  canSearch={true}
                  table={{
                    columns: [
                      { Header: "Account Name", accessor: "Account Name", width: "80%" },

                      { Header: "Action", accessor: "Action" },
                    ],
                    rows: [...accountsTableData],
                  }}
                />
              )}
              {selectedMenu === "Category" && (
                <DataTable
                  canSearch={true}
                  table={{
                    columns: [
                      { Header: "Category Name", accessor: "Category Name", width: "25%" },
                      {
                        Header: "Category Description",
                        accessor: "Category Description",
                        width: "30%",
                      },
                      { Header: "Account", accessor: "Account", width: "30%" },
                      { Header: "Action", accessor: "Action" },
                    ],
                    rows: [...categoriesData],
                  }}
                />
              )}
            </Card>
          </MDBox>
        </MDBox>
      </DashboardLayout>
    </>
  );
}
