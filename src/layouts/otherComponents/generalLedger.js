import { MoreHoriz } from "@mui/icons-material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import Card from "@mui/material/Card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function GeneralLedger() {
  const ActionComponent = ({ name }) => {
    const id = `${name}${Math.random()}`;

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
            <Link to={`/accounts-enquiries/${name}`}>
              <div
                style={{ width: "130px", height: "30px" }}
                className="editMenu"
                onClick={() => {
                  toggleMenu(id);
                }}
              >
                <MDTypography variant="overline" display="flex" alignItems="center" gap="3px">
                  View
                </MDTypography>
              </div>
            </Link>
          </Card>
        </div>
      </div>
    );
  };
  const [generalLedgerData, setGeneralLedgerData] = useState([
    {
      id: 1,
      ledger: "Repair & Maintenance",
      debit: "3,500",
      credit: "0",
      balance: "3,500",
    },
  ]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(
      generalLedgerData.map((data) => {
        return {
          "S/NO": data.id,
          Ledger: data.ledger,
          Debit: data.debit,
          Credit: data.credit,
          Balance: data.balance,
          Action: <ActionComponent name={data.ledger} />,
        };
      })
    );
  }, [generalLedgerData]);

  return (
    <MDBox>
      <MDBox
        width="100%"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        alignItems="center"
      >
        <MDButton color="success">Download Excel Sheet</MDButton>
        <div style={{ display: "flex", gap: "12px" }}>
          <MDTypography color="error" variant="caption" fontWeight="medium" fontSize="15px">
            Debit:₦2,747,137
          </MDTypography>
          <MDTypography color="success" variant="caption" fontWeight="medium" fontSize="15px">
            Credit:₦150,000
          </MDTypography>
        </div>
      </MDBox>
      <DataTable
        canSearch={true}
        table={{
          columns: [
            { Header: "S/NO", accessor: "S/NO", width: "10%" },
            { Header: "Ledger", accessor: "Ledger", width: "30%" },
            { Header: "Debit", accessor: "Debit", width: "15%" },
            { Header: "Credit", accessor: "Credit", width: "15%" },
            { Header: "Balance", accessor: "Balance", width: "15%" },
            { Header: "Action", accessor: "Action", width: "13%" },
          ],
          rows: [...tableData],
        }}
      />
    </MDBox>
  );
}
