import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import "index.css";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import { Close } from "@mui/icons-material";

export default function ViewLedgerModal({ no, cancel, data }) {
  const [position, setPosition] = useState(-520);
  const [mainData, setMainData] = useState(data.filter((data) => data.id === no));
  const [dataToView, setDataToView] = useState([
    {
      label: "Transaction Date",
      value: mainData[0].Date,
    },
    { label: "Account", value: mainData[0].Account },
    { label: "Ledger", value: mainData[0].Ledger },
    { label: "Contra Account", value: mainData[0]["Contra Account"] },
    { label: "Project Payee", value: mainData[0]["Project Payee"] },
    { label: "Description", value: mainData[0].Description },
    { label: "Debit", value: mainData[0].Debit },
    { label: "Credit", value: mainData[0].Credit },
    { label: "Balance", value: mainData[0].Balance },
  ]);

  useEffect(() => setPosition(40), []);
  return (
    <div className="addSettingModal">
      <Card
        sx={{
          maxWidth: "450px",
          width: "90%",
          p: 2,
          height: "510px",
          overflowY: "scroll",
          transition: "0.4s",
          transform: `translateY(${position}px)`,
          zIndex: 20,
        }}
      >
        <MDTypography
          color="text"
          variant="caption"
          fontWeight="bold"
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="10px"
        >
          LEDGER DETAILS
          <button
            onClick={() => cancel()}
            style={{ border: "none", backgroundColor: "transparent", cursor: "pointer" }}
          >
            <MDTypography color="text">
              <Close fontSize="small" color="inherit" />
            </MDTypography>
          </button>
        </MDTypography>

        {dataToView.map((data) => {
          return (
            <div
              key={data.label}
              style={{
                display: "flex",
                width: "100%",
                padding: "10px 0px",
                borderBottom: "1px solid rgb(230, 226, 226)",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <MDTypography color="text" variant="button" fontWeight="medium">
                {data.label}
              </MDTypography>
              <MDTypography color="text" variant="caption">
                {data.value}
              </MDTypography>
            </div>
          );
        })}

        <MDBox width="100%" marginTop="14px">
          <MDButton onClick={() => cancel()} color="error">
            Close
          </MDButton>
        </MDBox>
      </Card>
    </div>
  );
}
