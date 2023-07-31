import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import "index.css";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { Close } from "@mui/icons-material";

export default function CreateAccount({ submitted, cancel, category }) {
  const [position, setPosition] = useState(-340);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [accounts, setAccounts] = useState([]);
  const [categoryValue, setCategoryValue] = useState("");

  const [openingBalanceForm, setOPeningBalanceForm] = useState([
    { label: "Date", type: "date", value: "" },
    { label: "Account", type: "select", value: "" },
    { label: "Contra", type: "text", value: "" },
    { label: "Contra Account", type: "text", value: "" },
    { label: "Project Payee", type: "text", value: "" },
    { label: "Description", type: "text", value: "" },
    { label: "Debit", type: "text", value: "" },
    { label: "Credit", type: "text", value: "" },
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

  const handleSubmit = () => {
    let details = {
      accountName: name,
      accountType: type,
      accountCategory: categoryValue,
    };
    openingBalanceForm.forEach((form) => {
      details[form.label] = form.value;
    });
    submitted(details);
  };

  useEffect(() => setPosition(50), []);
  return (
    <div className="addSettingModal">
      <Card
        sx={{
          maxWidth: "680px",
          width: "90%",
          p: 2,
          height: "330px",
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
          CREATE Account
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
            label="Account Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "48% 48%",
              justifyContent: "space-between",
              alignItems: "end",
            }}
          >
            <MDBox>
              <MDTypography variant="caption" fontWeight="medium" margin="0px 8px 0px 0px">
                TYPE
              </MDTypography>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
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
                {category.map((data) => {
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
          </div>
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
              <div style={{ display: "flex", gap: "10px", alignItems: "end", width: "670px" }}>
                {openingBalanceForm.map((data) => {
                  return (
                    <>
                      {data.type !== "date" && data.type !== "select" && (
                        <MDBox width="80px">
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
                        <MDBox width="80px">
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
                        <MDBox width="80px">
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
        <MDBox width="100%" marginTop="14px">
          <MDButton color="success" onClick={handleSubmit}>
            Create
          </MDButton>
        </MDBox>
      </Card>
    </div>
  );
}
