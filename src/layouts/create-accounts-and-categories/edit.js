import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import "index.css";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { Close } from "@mui/icons-material";

export default function EditComponent({
  submitted,
  cancel,
  type,
  categoryData,
  accountData,
  currentName,
}) {
  const [position, setPosition] = useState(type === "Category" ? -300 : -350);
  const [accounts, setAccounts] = useState([]);

  const [name, setName] = useState(
    type === "Category" &&
      categoryData.filter((data) => data.categoryName === currentName)[0].categoryName
  );
  const [description, setDescription] = useState(
    type === "Category" &&
      categoryData.filter((data) => data.categoryName === currentName)[0].categoryDescription
  );
  const [subCategory, setSubCategory] = useState(
    type === "Category" &&
      categoryData.filter((data) => data.categoryName === currentName)[0].subCategory
  );

  const [accountName, setAccountName] = useState(
    type === "Account" &&
      accountData.filter((data) => data.accountName === currentName)[0].accountName
  );
  const [accountType, setAccountType] = useState(
    type === "Account" &&
      accountData.filter((data) => data.accountName === currentName)[0].accountType
  );
  const [categoryValue, setCategoryValue] = useState(
    type === "Account" &&
      accountData.filter((data) => data.accountName === currentName)[0].categoryValue
  );

  const [openingBalanceForm, setOPeningBalanceForm] = useState([
    {
      label: "Date",
      type: "date",
      value:
        type === "Account" &&
        accountData.filter((data) => data.accountName === currentName)[0].Date,
    },
    {
      label: "Account",
      type: "select",
      value:
        type === "Account" &&
        accountData.filter((data) => data.accountName === currentName)[0].Account,
    },
    {
      label: "Contra",
      type: "text",
      value:
        type === "Account" &&
        accountData.filter((data) => data.accountName === currentName)[0].Contra,
    },
    {
      label: "Contra Account",
      type: "text",
      value:
        type === "Account" &&
        accountData.filter((data) => data.accountName === currentName)[0]["Contra Account"],
    },
    {
      label: "Project Payee",
      type: "text",
      value:
        type === "Account" &&
        accountData.filter((data) => data.accountName === currentName)[0]["Project Payee"],
    },
    {
      label: "Description",
      type: "text",
      value:
        type === "Account" &&
        accountData.filter((data) => data.accountName === currentName)[0].Description,
    },
    {
      label: "Debit",
      type: "text",
      value:
        type === "Account" &&
        accountData.filter((data) => data.accountName === currentName)[0].Debit,
    },
    {
      label: "Credit",
      type: "text",
      value:
        type === "Account" &&
        accountData.filter((data) => data.accountName === currentName)[0].Credit,
    },
  ]);

  const updateOpeningBalanceForm = (label, newValue) => {
    setOPeningBalanceForm(
      openingBalanceForm.map((data) => {
        if (data.label !== label) {
          return data;
        } else {
          return { ...data, value: newValue };
        }
      })
    );
  };

  useEffect(() => setPosition(50), []);
  return (
    <div className="addSettingModal">
      <Card
        sx={{
          maxWidth: "450px",
          width: "90%",
          p: 2,
          height: `${type === "Category" ? "280px" : "330px"}`,
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
            <MDInput
              label="Sub Category"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              fullWidth
            />
          </MDBox>
        )}
        {type === "Account" && (
          <MDBox width="100%" display="flex" flexDirection="column" gap="8px">
            <MDInput
              label="Account Name"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              fullWidth
            />
            <MDBox>
              <MDTypography variant="caption" fontWeight="medium" margin="0px 8px 0px 0px">
                TYPE
              </MDTypography>
              <select
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
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
                  <MDTypography variant="caption">SELECT TYPE</MDTypography>
                </option>
                <option style={{ color: "gray", fontSize: "14px" }}>
                  <MDTypography variant="caption">GL</MDTypography>
                </option>
                <option style={{ color: "gray", fontSize: "14px" }}>
                  <MDTypography variant="caption">AR</MDTypography>
                </option>
                <option style={{ color: "gray", fontSize: "14px" }}>
                  <MDTypography variant="caption">AP</MDTypography>
                </option>
              </select>
            </MDBox>
            <MDBox>
              <MDTypography variant="caption" fontWeight="medium" margin="0px 8px 0px 0px">
                CATEGORY
              </MDTypography>
              <select
                value={categoryValue}
                onChange={(e) => setCategoryValue(e.target.value)}
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
                  <MDTypography variant="caption">SELECT CATEGORY</MDTypography>
                </option>
                {categoryData.map((data) => {
                  return (
                    <option style={{ color: "gray", fontSize: "14px" }}>
                      <MDTypography variant="caption">
                        {data.categoryName.toUpperCase()}
                      </MDTypography>
                    </option>
                  );
                })}
              </select>
            </MDBox>
            <div
              style={{
                width: "100%",
                margin: "20px 0px 10px 0px",
              }}
            >
              <MDTypography variant="body2" fontWeight="medium" marginBottom="5px">
                Post Opening Balance Form
              </MDTypography>
              <div
                style={{
                  width: "100%",
                  overflowX: "scroll",
                }}
              >
                <div style={{ display: "flex", gap: "10px", alignItems: "end", width: "1150px" }}>
                  {openingBalanceForm.map((data) => {
                    return (
                      <>
                        {data.type !== "date" && data.type !== "select" && (
                          <MDBox width="135px">
                            <MDInput
                              type={data.type}
                              label={data.label}
                              value={data.value}
                              onChange={(e) => updateOpeningBalanceForm(data.label, e.target.value)}
                              fullWidth
                            />
                          </MDBox>
                        )}
                        {data.type === "select" && (
                          <MDBox width="140px">
                            <MDTypography variant="caption" fontWeight="medium">
                              {data.label}
                            </MDTypography>
                            <select
                              value={data.value}
                              onChange={(e) => updateOpeningBalanceForm(data.label, e.target.value)}
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
                              {accounts.map((data) => {
                                return (
                                  <option style={{ color: "gray", fontSize: "14px" }}>
                                    <MDTypography variant="caption">
                                      {data.accountName.toUpperCase()}
                                    </MDTypography>
                                  </option>
                                );
                              })}
                            </select>
                          </MDBox>
                        )}
                        {data.type === "date" && (
                          <MDBox width="135px">
                            <MDTypography variant="caption" fontWeight="medium">
                              {data.label}
                            </MDTypography>
                            <MDInput
                              type={data.type}
                              value={data.value}
                              onChange={(e) => updateOpeningBalanceForm(data.label, e.target.value)}
                              fullWidth
                            />
                          </MDBox>
                        )}
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
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
