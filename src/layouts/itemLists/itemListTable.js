import { useEffect, useState } from "react";

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import DataTable from "examples/Tables/DataTable";
import { MoreHoriz } from "@mui/icons-material";
import MDTypography from "components/MDTypography";
import { Card } from "@mui/material";
import ItemDetails from "./viewItem";
import EditItem from "./editItem";

import "index.css";
import AddItem from "./addItem";

export default function ItemListsTable({ setting, openModal, closeModal }) {
  const [addSettingModal, setAddSettingModal] = useState(false);
  const [viewItemModal, setViewItemModal] = useState(false);
  const [editSettingModal, setEditSettingModal] = useState(false);
  const [initialNo, setInitialNo] = useState(1);
  const ActionComponent = ({ currentNo }) => {
    const id = `${currentNo}${Math.random()}`;

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
            <div
              style={{ width: "130px", height: "30px" }}
              className="editMenu"
              onClick={() => {
                toggleMenu(id);
                setInitialNo(currentNo);
                setViewItemModal(true);
              }}
            >
              <MDTypography variant="overline" display="flex" alignItems="center" gap="3px">
                View
              </MDTypography>
            </div>
            <div
              onClick={() => {
                toggleMenu(id);
                setInitialNo(currentNo);
                setEditSettingModal(true);
              }}
              style={{ width: "130px", height: "30px" }}
              className="editMenu"
            >
              <MDTypography variant="overline" display="flex" alignItems="center" gap="3px">
                Edit
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
                Delete
              </MDTypography>
            </div>
          </Card>
        </div>
      </div>
    );
  };
  const [allItems, setAllItems] = useState([]);

  const initialData = [
    {
      "S/NO": 1,
      brandName: "NESTLE",
      Name: "BULK SALE",
      category: "OIL",
      itemUnit: [{ unit: "CARTON", unitPrice: "721000", unitBarCode: "123", minimumStock: "1" }],
      Action: <ActionComponent currentNo={1} />,
    },
    {
      "S/NO": 2,
      brandName: "SO YUMMY",
      Name: "CARAMEL POPCORN",
      category: "SNACK",
      itemUnit: [{ unit: "CARTON", unitPrice: "2000", unitBarCode: "0000", minimumStock: "5" }],
      Action: <ActionComponent currentNo={2} />,
    },
    {
      "S/NO": 3,
      brandName: "NESTLE",
      Name: "CERELAC MAIZE AND SOYA SACHET 12X350G",
      category: "CEREALS",
      itemUnit: [{ unit: "CARTON", unitPrice: "", unitBarCode: "", minimumStock: "" }],
      Action: <ActionComponent currentNo={3} />,
    },
    {
      "S/NO": 4,
      brandName: "NESTLE",
      Name: "CERELAC MAIZE CARE 2 TIN 400g",
      category: "CEREALS",
      itemUnit: [{ unit: "CARTON", unitPrice: "0", unitBarCode: "12375768", minimumStock: "6" }],
      Action: <ActionComponent currentNo={4} />,
    },
    {
      "S/NO": 5,
      brandName: "NESTLE",
      Name: "CERELAC MAIZE CARE 3 TIN 6x1kg",
      category: "CEREALS",
      itemUnit: [{ unit: "CARTON", unitPrice: "0", unitBarCode: "12466566", minimumStock: "6" }],
      Action: <ActionComponent currentNo={5} />,
    },
  ];

  useEffect(() => {
    setAllItems(
      initialData.map((data) => {
        return {
          "S/NO": data["S/NO"],
          plainName: data.Name,
          brandName: data.brandName,
          Name: data.Name + `(${data.brandName})`,
          category: data.category,
          itemUnit: data.itemUnit,
          Action: data.Action,
        };
      })
    );
  }, []);

  useEffect(() => {
    if (addSettingModal || editSettingModal || viewItemModal) {
      openModal();
    } else {
      closeModal();
    }
  }, [addSettingModal, editSettingModal, viewItemModal]);

  return (
    <>
      {viewItemModal && (
        <ItemDetails data={allItems} no={initialNo} cancel={() => setViewItemModal(false)} />
      )}
      {addSettingModal && (
        <AddItem
          cancel={() => setAddSettingModal(false)}
          submitted={(data) => {
            setAllItems([
              ...allItems,
              {
                "S/NO": allItems.length + 1,
                Action: <ActionComponent currentNo={allItems.length + 1} />,
                brandName: data.brandName,
                plainName: data.Name,
                Name: data.Name + `(${data.brandName})`,
                category: data.category,
                itemUnit: data.itemUnit,
                rackLocation: data.rackLocation,
              },
            ]);
            setAddSettingModal(false);
          }}
        />
      )}
      {editSettingModal && (
        <EditItem
          cancel={() => setEditSettingModal(false)}
          submitted={(data) => {
            setAddSettingModal(false);
          }}
          no={initialNo}
          data={allItems}
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
