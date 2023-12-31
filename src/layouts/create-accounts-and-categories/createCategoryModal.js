import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import "index.css";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { Close } from "@mui/icons-material";

export default function CreateCategory({ submitted, cancel, accounts }) {
  const [position, setPosition] = useState(-300);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [account, setAccount] = useState("");

  useEffect(() => setPosition(50), []);
  return (
    <div className="addSettingModal">
      <Card
        sx={{
          maxWidth: "450px",
          width: "90%",
          p: 2,
          height: "290px",
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
          ADD CATEGORY
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
            size="small"
            fullWidth
          />
          <MDInput
            label="Category Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            size="small"
            fullWidth
          />
          <MDBox>
            <MDTypography variant="caption" fontWeight="medium" margin="0px 8px 0px 0px">
              ACCOUNT
            </MDTypography>
            <MDBox
              component="select"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              style={{
                width: "100%",
                outline: "none",
                border: "1px solid rgb(230, 226, 226)",
                borderRadius: "5px",
                fontSize: "12px",
                minHeight: "35px",
                paddingLeft: "6px",
              }}
            >
              <MDTypography component="option" value="AP" variant="caption">
                Select Account
              </MDTypography>

              {accounts.map((data) => {
                return (
                  <MDTypography variant="caption" component="option" value={data.accountName}>
                    {data.accountName}
                  </MDTypography>
                );
              })}
            </MDBox>
          </MDBox>
        </MDBox>
        <MDBox width="100%" marginTop="14px">
          <MDButton
            color="success"
            onClick={() => {
              submitted({
                categoryName: name,
                categoryDescription: description,
                account: account,
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
