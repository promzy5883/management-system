import { useEffect, useState } from "react";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Card from "@mui/material/Card";
import backgroundImage from "assets/images/bg-sign-in-basic.jpeg";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import DataTable from "examples/Tables/DataTable";
import MDTypography from "components/MDTypography";
import { Add, Edit, MoreHoriz } from "@mui/icons-material";
import AddBank from "./addBankForm";
import EditBank from "./editBankForm";

export default function ManageBanks() {
  const [modalActive, setModalActive] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [addBankModal, setAddBankModal] = useState(false);
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
  const [banksData, setBanksData] = useState([]);
  const [dataToEdit, setDataToEdit] = useState({});
  const [accountNo, setAccountNo] = useState(0);

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
                setAccountNo(currentName);
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

  useEffect(() => {
    if (accountNo !== 0) {
      setDataToEdit(banks.filter((bank) => bank.accountNumber === accountNo)[0]);
      setEditModal(true);
    }
  }, [accountNo]);

  useEffect(() => {
    setBanksData(
      banks.map((data) => {
        return {
          "Bank Account Name": data.bankAccountName,
          "Bank Name": data.bankName,
          Category: data.category,
          "Account Number": data.accountNumber,
          "Branch Name": data.branchName,
          Action: <EditActionComponent currentName={data.accountNumber} />,
        };
      })
    );
  }, [banks]);

  return (
    <>
      {addBankModal && (
        <AddBank
          cancel={() => setAddBankModal(false)}
          submitted={(data) => {
            setBanks([...banks, data]);
            setAddBankModal(false);
          }}
        />
      )}
      {editModal && (
        <EditBank
          data={dataToEdit}
          submitted={(data) => {
            setAccountNo(0);
            setEditModal(false);
          }}
          cancel={() => {
            setAccountNo(0);
            setEditModal(false);
          }}
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
          ></MDBox>
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
              <MDBox width="170px">
                <MDButton
                  color="success"
                  display="flex"
                  alignItems="center"
                  onClick={() => setAddBankModal(true)}
                >
                  <Add />
                  &nbsp; Add Bank
                </MDButton>
              </MDBox>
              <DataTable
                canSearch={true}
                table={{
                  columns: [
                    { Header: "Bank Account Name", accessor: "Bank Account Name", width: "17%" },
                    {
                      Header: "Bank Name",
                      accessor: "Bank Name",
                      width: "14%",
                    },
                    { Header: "Category", accessor: "Category", width: "15%" },
                    { Header: "Account Number", accessor: "Account Number", width: "20%" },
                    { Header: "Branch Name", accessor: "Branch Name", width: "19%" },
                    { Header: "Action", accessor: "Action" },
                  ],
                  rows: [...banksData],
                }}
              />
            </Card>
          </MDBox>
        </MDBox>
      </DashboardLayout>
    </>
  );
}
