import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import backgroundImage from "assets/images/bg-sign-in-basic.jpeg";
import MDButton from "components/MDButton";
import { Download, MoreHoriz, PictureAsPdf } from "@mui/icons-material";
import MDInput from "components/MDInput";
import DataTable from "examples/Tables/DataTable";
import ViewLedgerModal from "./viewLedgerModal";

export default function ViewLedger() {
  const [initialId, setInitialId] = useState(0);
  const ActionComponent = ({ idNo }) => {
    const id = `${idNo}${Math.random()}${Math.random()}`;

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
              style={{ width: "130px", height: "30px" }}
              className="editMenu"
              onClick={() => {
                setInitialId(idNo);
                toggleMenu(id);
              }}
            >
              <MDTypography variant="overline" display="flex" alignItems="center" gap="3px">
                View Details
              </MDTypography>
            </div>
          </Card>
        </div>
      </div>
    );
  };
  const { ledgerName } = useParams();

  const [modalActive, setModalActive] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [tableData, setTableData] = useState([]);

  const [allTransaction, setAllTransaction] = useState([
    {
      id: 1,
      Date: "8/8/2023",
      Account: "Assets",
      Ledger: "Repair & Maintenance",
      "Contra Account": "Assets",
      "Project Payee": "",
      Description: "A Repair & Maintenance Transaction",
      Debit: "3,500",
      Credit: "0",
      Balance: "3,500",
    },
  ]);

  useEffect(() => {
    setModalActive(viewModal ? true : false);
  }, [viewModal]);

  useEffect(() => {
    setTableData(
      allTransaction
        .filter((data) => data.Ledger === ledgerName)
        .map((data) => {
          return {
            "S/NO": data.id,
            "Date Transaction": data.Date,
            Ledger: data.Ledger,
            Debit: data.Debit,
            Credit: data.Credit,
            Balance: data.Balance,
            Action: <ActionComponent idNo={data.id} />,
          };
        })
    );
  }, [allTransaction]);

  useEffect(() => {
    setViewModal(initialId > 0 ? true : false);
  }, [initialId]);
  return (
    <>
      {viewModal && (
        <ViewLedgerModal
          data={allTransaction.filter((data) => data.Ledger === ledgerName)}
          cancel={() => setInitialId(0)}
          no={initialId}
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
            width="100%"
            position="absolute"
            top="100px"
            display="flex"
            justifyContent="center"
          >
            <MDButton size="small" display="flex" alignItems="center">
              Download&nbsp; <Download />
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
                  <MDTypography variant="caption" color="text" fontWeight="bold">
                    Start Date:
                  </MDTypography>
                  <MDInput
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    size="small"
                    type="date"
                  />
                </div>

                <div style={{ display: "flex", width: "auto", gap: "10px", alignItems: "center" }}>
                  <MDTypography variant="caption" color="text" fontWeight="bold">
                    End Date:
                  </MDTypography>
                  <MDInput
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    size="small"
                    type="date"
                  />
                </div>
                <MDButton color="dark" size="small">
                  Filter
                </MDButton>
              </div>
              <MDTypography fontSize="15px" variant="caption" color="text" fontWeight="bold">
                {ledgerName}
              </MDTypography>
              <DataTable
                canSearch={true}
                table={{
                  columns: [
                    { Header: "S/NO", accessor: "S/NO", width: "11%" },
                    { Header: "Date Transaction", accessor: "Date Transaction", width: "19%" },
                    { Header: "Ledger", accessor: "Ledger", width: "22%" },
                    { Header: "Debit", accessor: "Debit", width: "12%" },
                    { Header: "Credit", accessor: "Credit", width: "12%" },
                    { Header: "Balance", accessor: "Balance", width: "13%" },
                    { Header: "Action", accessor: "Action", width: "11%" },
                  ],
                  rows: [...tableData],
                }}
              />
            </Card>
          </MDBox>
        </MDBox>
      </DashboardLayout>
    </>
  );
}
