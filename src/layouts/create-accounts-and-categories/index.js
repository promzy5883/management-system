import { useEffect, useState } from "react";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Card from "@mui/material/Card";
import backgroundImage from "assets/images/home-decor-4.jpeg";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import CreateCategory from "./createCategoryModal";
import CreateAccount from "./createAccountModal";
import DataTable from "examples/Tables/DataTable";
import MDTypography from "components/MDTypography";
import { Edit, MoreHoriz } from "@mui/icons-material";
import EditComponent from "./edit";

export default function CreateAccountsAndCategories() {
  const [modalActive, setModalActive] = useState(false);
  const [initialName, setInitialName] = useState("");
  const [editType, setEditType] = useState("Account");
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
  const [categories, setCategories] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [categoryModal, setCategoryModal] = useState(false);
  const [accountsModal, setAccountsModal] = useState(false);
  const [accountsData, setAccountsData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    setAccountsData(
      accounts.map((data) => {
        return {
          "Account Name": data.accountName,
          "Account Type": data.accountType,
          "Account Category": data.accountCategory,
          Action: <EditActionComponent currentName={data.accountName} type="Account" />,
        };
      })
    );
  }, [accounts]);

  useEffect(() => {
    setCategoriesData(
      categories.map((data) => {
        return {
          "Category Name": data.categoryName,
          "Category Description": data.categoryDescription,
          "Sub Category": data.subCategory,
          Action: <EditActionComponent currentName={data.categoryName} type="Category" />,
        };
      })
    );
  }, [categories]);

  return (
    <>
      {categoryModal && (
        <CreateCategory
          submitted={(data) => {
            setCategories([...categories, data]);
            setCategoryModal(false);
          }}
          cancel={() => setCategoryModal(false)}
        />
      )}
      {accountsModal && (
        <CreateAccount
          cancel={() => setAccountsModal(false)}
          category={categories}
          submitted={(data) => {
            setAccounts([...accounts, data]);
            setAccountsModal(false);
          }}
        />
      )}
      {editModal && (
        <EditComponent
          type={editType}
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
            <MDButton color="success" onClick={() => setAccountsModal(true)}>
              Create Account
            </MDButton>
            <MDButton color="success" onClick={() => setCategoryModal(true)}>
              Create Category
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
              <MDTypography variant="button" fontWeight="bold">
                Accounts
              </MDTypography>
              <DataTable
                canSearch={true}
                table={{
                  columns: [
                    { Header: "Account Name", accessor: "Account Name", width: "25%" },
                    { Header: "Account Type", accessor: "Account Type", width: "30%" },
                    { Header: "Account Category", accessor: "Account Category", width: "30%" },
                    { Header: "Action", accessor: "Action" },
                  ],
                  rows: [...accountsData],
                }}
              />
              <MDTypography variant="button" fontWeight="bold" marginTop="12px">
                Categories
              </MDTypography>
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
                    { Header: "Sub Category", accessor: "Sub Category", width: "30%" },
                    { Header: "Action", accessor: "Action" },
                  ],
                  rows: [...categoriesData],
                }}
              />
            </Card>
          </MDBox>
        </MDBox>
      </DashboardLayout>
    </>
  );
}
