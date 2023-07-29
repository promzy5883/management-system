import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import "index.css";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import { Close } from "@mui/icons-material";

export default function ItemUnitModal({ submitted, cancel, added }) {
  const [position, setPosition] = useState(-200);
  const [created, setCreated] = useState("SELECT");
  const [errorMessage, setErrorMessage] = useState("");

  const itemUnitData = ["SELECT", "CARTON"];

  const handleSubmit = () => {
    if (created === "SELECT") {
      setErrorMessage("Please add a variation");
      return;
    } else {
      let value = true;
      added.forEach((n) => {
        if (n.unit === created) {
          value = false;
        }
      });
      if (value) {
        submitted(created);
      } else {
        setErrorMessage("Unit already created");
        return;
      }
    }
  };

  useEffect(() => setPosition(50), []);
  return (
    <div className="addSettingModal">
      <Card
        sx={{
          maxWidth: "450px",
          width: "90%",
          p: 2,
          height: "180px",
          transition: "0.4s",
          transform: `translateY(${position}px)`,
          zIndex: 20,
        }}
      >
        <MDTypography
          variant="caption"
          fontWeight="bold"
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          ADD VARIATION
          <button
            onClick={() => cancel()}
            style={{ border: "none", backgroundColor: "transparent", cursor: "pointer" }}
          >
            <MDTypography>
              <Close fontSize="small" color="inherit" />
            </MDTypography>
          </button>
        </MDTypography>
        <MDBox width="100%" marginTop="14px">
          <select
            value={created}
            onChange={(e) => setCreated(e.target.value)}
            style={{
              width: "100%",
              outline: "none",
              border: "1px solid rgb(230, 226, 226)",
              borderRadius: "5px",
              fontSize: "11px",
              color: "rgba(0,0,0,0.7)",
              height: "40px",
              paddingLeft: "6px",
            }}
          >
            {itemUnitData.map((data) => {
              return (
                <option key={data} style={{ color: "gray", fontSize: "14px" }}>
                  <MDTypography variant="caption">{data}</MDTypography>
                </option>
              );
            })}
          </select>
          <div style={{ position: "relative", margin: "2px 0px 4px 0px" }}>
            <MDTypography variant="caption" position="absolute" color="error">
              {errorMessage}
            </MDTypography>
          </div>
        </MDBox>
        <MDBox width="100%" marginTop="14px">
          <MDButton color="success" onClick={handleSubmit}>
            Add
          </MDButton>
        </MDBox>
      </Card>
    </div>
  );
}
