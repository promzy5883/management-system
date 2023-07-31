import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import "index.css";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { Close } from "@mui/icons-material";

export default function CreateCategory({ submitted, cancel }) {
  const [position, setPosition] = useState(-300);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [subCategory, setSubCategory] = useState("");

  useEffect(() => setPosition(50), []);
  return (
    <div className="addSettingModal">
      <Card
        sx={{
          maxWidth: "450px",
          width: "90%",
          p: 2,
          height: "280px",
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
          marginBottom="8px"
        >
          CREATE CATEGORY
          <button
            onClick={() => cancel()}
            style={{ border: "none", backgroundColor: "transparent", cursor: "pointer" }}
          >
            <MDTypography>
              <Close fontSize="small" color="inherit" />
            </MDTypography>
          </button>
        </MDTypography>
        <MDBox width="100%" display="flex" flexDirection="column" gap="8px">
          <MDInput
            label="Category Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <MDInput
            label="Category Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
          />
          <MDInput
            label="Sub Category"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            fullWidth
          />
        </MDBox>
        <MDBox width="100%" marginTop="14px">
          <MDButton
            color="success"
            onClick={() => {
              submitted({
                categoryName: name,
                categoryDescription: description,
                subCategory: subCategory,
              });
            }}
          >
            Create
          </MDButton>
        </MDBox>
      </Card>
    </div>
  );
}
