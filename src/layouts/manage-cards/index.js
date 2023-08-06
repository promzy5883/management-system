import { useEffect, useState } from "react";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Card from "@mui/material/Card";
import backgroundImage from "assets/images/home-decor-4.jpeg";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import DataTable from "examples/Tables/DataTable";
import MDTypography from "components/MDTypography";
import { Add, Edit, MoreHoriz } from "@mui/icons-material";
import AddCard from "./addCard";
import EditCard from "./editCard";

export default function ManageCards() {
  const [modalActive, setModalActive] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [addBankModal, setAddBankModal] = useState(false);
  const [currentNo, setCurrentNo] = useState(0);
  const [cards, setCards] = useState([
    {
      cardName: "Onuoha Promise",
      bankName: "Union Bank",
      category: "Expense",
      cardNumber: "0164 8906 1876",
      cardType: "Verve Card",
      module: "GL",
    },
  ]);
  const [cardTableData, setCardTableData] = useState([]);

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
                setCurrentNo(currentName);
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
    if (currentNo) {
      setEditModal(true);
    } else {
      setEditModal(false);
    }
  }, [currentNo]);

  useEffect(() => {
    setCardTableData(
      cards.map((data) => {
        return {
          "Card Name": data.cardName,
          "Card Number": data.cardNumber,
          "Bank Name": data.bankName,
          Category: data.category,
          Action: <EditActionComponent currentName={data.cardNumber} />,
        };
      })
    );
  }, [cards]);

  return (
    <>
      {addBankModal && (
        <AddCard
          submitted={(data) => setAddBankModal(false)}
          cancel={() => setAddBankModal(false)}
        />
      )}
      {editModal && (
        <EditCard
          data={cards}
          number={currentNo}
          submitted={(data) => {
            setCurrentNo(null);
            setEditModal(false);
          }}
          cancel={() => {
            setCurrentNo(false);
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
                  &nbsp; Add Card
                </MDButton>
              </MDBox>
              <DataTable
                canSearch={true}
                table={{
                  columns: [
                    { Header: "Card Name", accessor: "Card Name", width: "20%" },
                    {
                      Header: "Card Number",
                      accessor: "Card Number",
                      width: "20%",
                    },
                    {
                      Header: "Bank Name",
                      accessor: "Bank Name",
                      width: "20%",
                    },
                    {
                      Header: "Category",
                      accessor: "Category",
                      width: "20%",
                    },

                    { Header: "Action", accessor: "Action" },
                  ],
                  rows: [...cardTableData],
                }}
              />
            </Card>
          </MDBox>
        </MDBox>
      </DashboardLayout>
    </>
  );
}
