import { useEffect, useState } from "react";

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import DataTable from "examples/Tables/DataTable";
import { Edit, MoreHoriz } from "@mui/icons-material";
import MDTypography from "components/MDTypography";
import { Card } from "@mui/material";

import AddSetting from "./addSettingsModal";

import "index.css";
import EditSetting from "./editSettingModal";

export default function ItemSettingsTable({ setting, openModal, closeModal }) {
  const [selectedData, setSelectedData] = useState([]);
  const [addSettingModal, setAddSettingModal] = useState(false);
  const [editSettingModal, setEditSettingModal] = useState(false);
  const [initial, setInitial] = useState("");
  const EditActionComponent = ({ currentName, setting }) => {
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
            <div
              style={{ width: "120px", height: "40px" }}
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
          </Card>
        </div>
      </div>
    );
  };
  const [brandNameData, setBrandNameData] = useState([
    {
      "S/NO": 1,
      Name: "Nestle",
      Action: <EditActionComponent currentName="Nestle" setting={setting} />,
    },
    {
      "S/NO": 2,
      Name: "So Yummy",
      Action: <EditActionComponent currentName="So Yummy" setting={setting} />,
    },
  ]);
  const [categoryData, setCategoryData] = useState([
    {
      "S/NO": 1,
      Name: "Seasoning",
      Action: <EditActionComponent currentName="Seasoning" setting={setting} />,
    },
    {
      "S/NO": 2,
      Name: "Milk",
      Action: <EditActionComponent currentName="Milk" setting={setting} />,
    },
  ]);
  const [itemVariationData, setItemVariationData] = useState([
    {
      "S/NO": 1,
      Name: "Carton",
      Action: <EditActionComponent currentName="Carton" setting={setting} />,
    },
  ]);

  const createSetting = (data) => {
    if (setting === "Brand Name") {
      setBrandNameData([
        ...brandNameData,
        {
          "S/NO": brandNameData.length + 1,
          Name: data,
          Action: <EditActionComponent currentName={data} setting={data} />,
        },
      ]);
    }
    if (setting === "Category") {
      setCategoryData([
        ...categoryData,
        {
          "S/NO": categoryData.length + 1,
          Name: data,
          Action: <EditActionComponent currentName={data} setting={data} />,
        },
      ]);
    }
    if (setting === "Item Variation") {
      setItemVariationData([
        ...itemVariationData,
        {
          "S/NO": itemVariationData.length + 1,
          Name: data,
          Action: <EditActionComponent currentName={data} setting={data} />,
        },
      ]);
    }
    setAddSettingModal(false);
  };

  useEffect(() => {
    switch (setting) {
      case "Brand Name":
        setSelectedData(brandNameData);
        break;
      case "Category":
        setSelectedData(categoryData);
        break;
      case "Item Variation":
        setSelectedData(itemVariationData);
        break;
      default:
        setSelectedData(brandNameData);
        break;
    }
  }, [setting, brandNameData, categoryData, itemVariationData]);

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
        <AddSetting
          setting={setting}
          cancel={() => setAddSettingModal(false)}
          submitted={createSetting}
        />
      )}
      {editSettingModal && (
        <EditSetting
          setting={setting}
          cancel={() => setEditSettingModal(false)}
          initialName={initial}
          submitted={() => setEditSettingModal(false)}
        />
      )}
      <MDBox margin="8px 0px" width="100%">
        <MDButton color="success" onClick={() => setAddSettingModal(true)}>
          Add {setting}
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
          rows: [...selectedData],
        }}
      />
    </>
  );
}
