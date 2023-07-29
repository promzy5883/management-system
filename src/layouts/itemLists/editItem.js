import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import "index.css";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { Close, Delete } from "@mui/icons-material";
import MDInput from "components/MDInput";
import ItemUnitModal from "./itemUnitModal";
import MDBox from "components/MDBox";

export default function EditItem({ data, no, submitted, cancel }) {
  const [position, setPosition] = useState(0);
  const [itemName, setItemName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [selectDisplay, setSelectDisplay] = useState(false);
  const [rackLocation, setRackLocation] = useState("");
  const [units, setUnits] = useState([]);

  const brandNameData = ["SELECT", "NESTLE", "SO YUMMY"];
  const categoryData = ["SELECT", "SEASONING", "MILK", "CEREALS", "OIL"];

  let mainData = data[no - 1];

  useEffect(() => {
    setItemName(mainData.Name);
    setCategory(mainData.category);
    setBrand(mainData.brandName);
    setUnits(mainData.itemUnit);
    setRackLocation(mainData.rackLocation);
  }, []);

  const handleSubmit = () => {
    const data = {
      brandName: brand,
      Name: itemName.toUpperCase(),
      category: category.toUpperCase(),
      itemUnit: units,
      rackLocation: rackLocation,
    };
    submitted(data);
  };

  useEffect(() => setPosition(1), []);

  return (
    <>
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
            overflowY: "scroll",
          }}
        >
          {selectDisplay && (
            <ItemUnitModal
              cancel={() => setSelectDisplay(false)}
              submitted={(data) => {
                setUnits([
                  ...units,
                  { unit: data, unitPrice: "", unitBarCode: "", minimumStock: "" },
                ]);
                setSelectDisplay(false);
              }}
              added={units}
            />
          )}
          <MDTypography
            variant="button"
            fontWeight="bold"
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            Edit Item
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
              minHeight: "40px",
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
              minHeight: "40px",
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
            <MDButton onClick={() => setSelectDisplay(true)} color="success">
              Add Variation
            </MDButton>
          </div>
          <div
            style={{
              width: "100%",
              paddingTop: "10px",
              display: "flex",
              flexWrap: "wrap",
              columnGap: "10px",
            }}
          >
            {units.map((unit) => {
              return (
                <MDBox
                  display="flex"
                  flexWrap="wrap"
                  alignItems="center"
                  gap="12px"
                  paddingBottom="5px"
                  paddingTop="5px"
                  borderBottom="1px solid rgb(230, 226, 226)"
                >
                  <MDTypography variant="button" fontWeight="medium">
                    {unit.unit.toUpperCase()}
                  </MDTypography>
                  <MDInput
                    value={unit.unitPrice}
                    label={`${unit.unit} UNIT PRICE`}
                    onChange={(e) =>
                      setUnits(
                        units.map((data) => {
                          if (data.unit !== unit.unit) {
                            return data;
                          } else {
                            return { ...data, unitPrice: e.target.value };
                          }
                        })
                      )
                    }
                    size="small"
                  />
                  <MDInput
                    value={unit.unitBarCode}
                    label={`${unit.unit} BARCODE`}
                    size="small"
                    onChange={(e) =>
                      setUnits(
                        units.map((data) => {
                          if (data.unit !== unit.unit) {
                            return data;
                          } else {
                            return { ...data, unitBarCode: e.target.value };
                          }
                        })
                      )
                    }
                  />
                  <MDInput
                    value={unit.minimumStock}
                    label="MINIMUM STOCK QTY"
                    size="small"
                    onChange={(e) =>
                      setUnits(
                        units.map((data) => {
                          if (data.unit !== unit.unit) {
                            return data;
                          } else {
                            return { ...data, minimumStock: e.target.value };
                          }
                        })
                      )
                    }
                  />
                  <MDButton
                    color="error"
                    onClick={() => setUnits(units.filter((data) => data.unit !== unit.unit))}
                  >
                    <Delete />
                  </MDButton>
                </MDBox>
              );
            })}
          </div>
          <MDTypography variant="body2" margin="10px 0px" fontWeight="medium">
            Extra Information
          </MDTypography>
          <MDTypography variant="caption" fontWeight="medium" margin="14px 0px 8px 0px">
            RACK LOCATION
          </MDTypography>
          <select
            value={rackLocation}
            onChange={(e) => setRackLocation(e.target.value)}
            style={{
              width: "100%",
              outline: "none",
              border: "1px solid rgb(230, 226, 226)",
              borderRadius: "5px",
              fontSize: "11px",
              color: "rgba(0,0,0,0.7)",
              minHeight: "40px",
              paddingLeft: "6px",
            }}
          >
            <option style={{ color: "gray", fontSize: "14px" }}>
              <MDTypography variant="caption">SELECT</MDTypography>
            </option>
            <option style={{ color: "gray", fontSize: "14px" }}>
              <MDTypography variant="caption">RACK 101</MDTypography>
            </option>
            <option style={{ color: "gray", fontSize: "14px" }}>
              <MDTypography variant="caption">RACK 102</MDTypography>
            </option>
            );
          </select>
          <div style={{ width: "130px", paddingTop: "10px" }}>
            <MDButton onClick={handleSubmit} color="success">
              Save Item
            </MDButton>
          </div>
        </Card>
      </div>
    </>
  );
}
