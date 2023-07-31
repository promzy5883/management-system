import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import "index.css";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { Close } from "@mui/icons-material";

export default function AddBank({ submitted, cancel }) {
  const [position, setPosition] = useState(0);

  const [bankAccountName, setBankAccountName] = useState("");
  const [bankName, setBankName] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [branchName, setBranchName] = useState("");
  const [branchCode, setBranchCode] = useState("");
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

  const categories = [];
  const accounts = [];

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
    let data = {
      bankAccountName: bankAccountName,
      bankName: bankName,
      category: categoryValue,
      accountNumber: accountNumber,
      branchName: branchName,
      branchCode: branchCode,
    };
    openingBalanceForm.forEach((form) => {
      data[form.label] = form.value;
    });
    submitted(data);
  };

  useEffect(() => setPosition(1), []);
  return (
    <div className="addSettingModal" style={{ alignItems: "center" }}>
      <Card
        sx={{
          maxWidth: "438px",
          width: "90%",
          p: 2,
          height: "500px",
          transition: "0.4s",
          opacity: `${position}`,
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
          ADD BANK
          <button
            onClick={() => cancel()}
            style={{ border: "none", backgroundColor: "transparent", cursor: "pointer" }}
          >
            <MDTypography>
              <Close fontSize="small" color="inherit" />
            </MDTypography>
          </button>
        </MDTypography>

        <MDBox display="flex" flexWrap="wrap" rowGap="10px" columnGap="15px">
          <MDInput
            label="Bank Account Name"
            value={bankAccountName}
            onChange={(e) => setBankAccountName(e.target.value)}
          />
          <MDInput
            label="Bank Name"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
          />
          <MDBox width="100%">
            <MDTypography variant="caption" fontWeight="medium">
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
              {categories.map((data) => {
                return (
                  <option style={{ color: "gray", fontSize: "14px" }}>
                    <MDTypography variant="caption">{data.categoryName.toUpperCase()}</MDTypography>
                  </option>
                );
              })}
            </select>
          </MDBox>

          <MDInput
            label="Account Number"
            type="number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
          <MDInput
            label="Branch Name"
            value={branchName}
            onChange={(e) => setBranchName(e.target.value)}
          />
          <MDInput
            label="Branch Code"
            value={branchCode}
            onChange={(e) => setBranchCode(e.target.value)}
            type="number"
            fullWidth
          />
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

        <MDBox width="100%" marginTop="14px">
          <MDButton color="success" onClick={handleSubmit}>
            Add Bank
          </MDButton>
        </MDBox>
      </Card>
    </div>
  );
}
