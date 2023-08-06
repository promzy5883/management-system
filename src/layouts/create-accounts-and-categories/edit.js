import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import "index.css";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { ArrowDropDown, Close } from "@mui/icons-material";

export default function EditComponent({
  submitted,
  cancel,
  type,
  categoryData,
  accountData,
  currentName,
  accounts,
}) {
  const [position, setPosition] = useState(
    type === "Category" || type === "Accounts" ? -300 : -520
  );

  const [name, setName] = useState(
    type === "Category" &&
      categoryData.filter((data) => data.categoryName === currentName)[0].categoryName
  );
  const [description, setDescription] = useState(
    type === "Category" &&
      categoryData.filter((data) => data.categoryName === currentName)[0].categoryDescription
  );
  const [categoryAccount, setCategoryAccount] = useState(
    type === "Category" &&
      categoryData.filter((data) => data.categoryName === currentName)[0].account
  );

  const [accountsName, setAccountsName] = useState(
    type === "Accounts" && accountData.filter((data) => data.key === currentName)[0].accountName
  );

  const generateHeight = () => {
    if (type === "Category") return "300px";
    if (type === "Accounts") return "180px";
  };

  useEffect(() => setPosition(50), []);
  return (
    <div className="addSettingModal">
      <Card
        sx={{
          maxWidth: `${type === "Ledger" ? "710px" : "450px"}`,
          width: "90%",
          p: 2,
          height: `${generateHeight()}`,
          transition: "0.4s",
          transform: `translateY(${position}px)`,
          zIndex: 20,
          overflowY: "scroll",
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
          EDIT {type.toUpperCase()}
          <button
            onClick={() => cancel()}
            style={{ border: "none", backgroundColor: "transparent", cursor: "pointer" }}
          >
            <MDTypography>
              <Close fontSize="small" color="inherit" />
            </MDTypography>
          </button>
        </MDTypography>
        {type === "Category" && (
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
            <MDBox>
              <MDTypography variant="caption" fontWeight="medium" margin="0px 8px 0px 0px">
                ACCOUNT
              </MDTypography>
              <MDBox
                component="select"
                value={categoryAccount}
                onChange={(e) => setCategoryAccount(e.target.value)}
                style={{
                  width: "100%",
                  outline: "none",
                  border: "1px solid rgb(230, 226, 226)",
                  borderRadius: "5px",
                  fontSize: "12px",
                  minHeight: "40px",
                  paddingLeft: "6px",
                }}
              >
                <MDTypography component="option" value="AP" variant="caption">
                  SELECT ACCOUNT
                </MDTypography>

                {accounts.map((data) => {
                  return (
                    <MDTypography variant="caption" component="option" value={data.accountName}>
                      {data.accountName.toUpperCase()}
                    </MDTypography>
                  );
                })}
              </MDBox>
            </MDBox>
          </MDBox>
        )}

        {type === "Accounts" && (
          <MDBox width="100%" display="flex" flexDirection="column" gap="8px">
            <MDInput
              label="Account Name"
              value={accountsName}
              onChange={(e) => setAccountsName(e.target.value)}
              fullWidth
            />
          </MDBox>
        )}
        <MDBox width="100%" marginTop="14px">
          <MDButton
            color="success"
            onClick={() => {
              submitted({});
            }}
          >
            Edit
          </MDButton>
        </MDBox>
      </Card>
    </div>
  );
}
