import { useEffect, useState } from "react";

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import DataTable from "examples/Tables/DataTable";
import { Add, Delete, Edit, MoreHoriz, OpenInFull } from "@mui/icons-material";
import MDTypography from "components/MDTypography";
import { Card } from "@mui/material";

import "index.css";
import AddItem from "./addItem";

export default function ItemListsTable({ setting, openModal, closeModal }) {
  const [addSettingModal, setAddSettingModal] = useState(false);
  const [editSettingModal, setEditSettingModal] = useState(false);
  const [initial, setInitial] = useState("");

  const ActionComponent = ({ currentName, setting }) => {
    const id = `${currentName}${setting}${Math.random()}`;

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
          style={{ backgroundColor: "transparent", border: "none", cursor: "pointer" }}
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
            <div style={{ width: "130px", height: "30px" }} className="editMenu">
              <MDTypography variant="overline" display="flex" alignItems="center" gap="3px">
                <OpenInFull /> View
              </MDTypography>
            </div>
            <div
              style={{ width: "130px", height: "30px" }}
              className="editMenu"
              onClick={() => {
                setInitial(currentName);
                toggleMenu(id);
                setEditSettingModal(true);
              }}
            >
              <MDTypography variant="overline" display="flex" alignItems="center" gap="3px">
                <Edit /> Edit
              </MDTypography>
            </div>
            <div style={{ width: "130px", height: "30px" }} className="editMenu">
              <MDTypography
                variant="overline"
                color="error"
                display="flex"
                alignItems="center"
                gap="3px"
              >
                <Delete /> Delete
              </MDTypography>
            </div>
          </Card>
        </div>
      </div>
    );
  };
  const [allItems, setAllItems] = useState([
    {
      "S/NO": 1,
      brandName: "NESTLE",
      Name: (
        <MDTypography variant="overline">
          BULK SALE<b>(NESTLE)</b>
        </MDTypography>
      ),
      category: "OIL",
      itemUnit: "CARTON",
      Action: <ActionComponent currentName="Nestle" setting={setting} />,
    },
  ]);

  useEffect(() => {
    if (addSettingModal || editSettingModal) {
      openModal();
    } else {
      closeModal();
    }
  }, [addSettingModal, editSettingModal]);

  return (
    <>
      {addSettingModal && (
        <AddItem
          cancel={() => setAddSettingModal(false)}
          submitted={() => setAddSettingModal(false)}
        />
      )}
      <MDBox margin="8px 0px" width="100%">
        <MDButton color="success" onClick={() => setAddSettingModal(true)}>
          Add Item
        </MDButton>
      </MDBox>
      <DataTable
        canSearch={true}
        table={{
          columns: [
            { Header: "S/NO", accessor: "S/NO", width: "25%" },
            { Header: "Name", accessor: "Name", width: "30%" },
            { Header: "Action", accessor: "Action" },
          ],
          rows: [...allItems],
        }}
      />
    </>
  );
}
