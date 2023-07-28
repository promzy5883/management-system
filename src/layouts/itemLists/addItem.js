import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import "index.css";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import { Close } from "@mui/icons-material";
import MDInput from "components/MDInput";

export default function AddItem({ submitted, cancel }) {
  const [position, setPosition] = useState(0);
  const [itemName, setItemName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [variationValue, setVariationValue] = useState("");
  const [selectDisplay, setSelectDisplay] = useState(false);
  const [units, setUnits] = useState([]);

  const brandNameData = ["SELECT", "NESTLE", "SO YUMMY"];
  const categoryData = ["SELECT", "SEASONING", "MILK", "CEREALS"];
  const variationData = ["SELECT", "CARTONS"];

  useEffect(() => setPosition(1), []);
  return (
    <div className="addSettingModal" style={{ alignItems: "center" }}>
      <Card
        sx={{
          maxWidth: "450px",
          width: "90%",
          p: 2,
          height: "500px",
          transition: "1s",
          opacity: position,
          zIndex: 20,
        }}
      >
        <MDTypography
          variant="overline"
          fontWeight="bold"
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          Add Item
          <button
            onClick={() => cancel()}
            style={{ border: "none", backgroundColor: "transparent", cursor: "pointer" }}
          >
            <MDTypography>
              <Close fontSize="small" color="inherit" />
            </MDTypography>
          </button>
        </MDTypography>
        <MDTypography variant="body2" marginBottom="15px" fontWeight="medium">
          Item Details
        </MDTypography>
        <MDInput
          label="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          fullWidth
        />
        <MDTypography variant="caption" fontWeight="medium" margin="8px 0px">
          BRAND NAME
        </MDTypography>
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
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
          {brandNameData.map((data) => {
            return (
              <option key={data} style={{ color: "gray", fontSize: "14px" }}>
                <MDTypography variant="caption">{data}</MDTypography>
              </option>
            );
          })}
        </select>
        <MDTypography variant="caption" fontWeight="medium" margin="14px 0px 8px 0px">
          CATEGORY
        </MDTypography>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
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
          {categoryData.map((data) => {
            return (
              <option key={data} style={{ color: "gray", fontSize: "14px" }}>
                <MDTypography variant="caption">{data}</MDTypography>
              </option>
            );
          })}
        </select>

        <MDTypography variant="caption" fontWeight="medium" margin="14px 0px 8px 0px">
          ITEM UNITS
        </MDTypography>
        <div style={{ width: "150px" }}>
          <MDButton color="success">Add Variation</MDButton>
        </div>
      </Card>
    </div>
  );
}
