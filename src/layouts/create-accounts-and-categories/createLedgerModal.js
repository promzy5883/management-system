import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import "index.css";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { ArrowDropDown, Close } from "@mui/icons-material";

export default function CreateLedger({ submitted, cancel, category, accounts }) {
  const [position, setPosition] = useState(-340);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [account, setAccount] = useState("");
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

  const toggleCategoryMenu = () => {
    let elem = document.getElementById("categoryMenu");
    if (elem.style.display !== "flex") {
      elem.style.display = "flex";
    } else {
      elem.style.display = "none";
    }
  };

  const handleSubmit = () => {
    let details = {
      ledgerName: name,
      account: account,
      module: type,
      categoryategory: categoryValue,
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
          maxWidth: "710px",
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
          ADD LEDGER
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
                ACCOUNT
              </MDTypography>
              <select
                value={account}
                onChange={(e) => setAccount(e.target.value)}
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
                  <MDTypography variant="caption">SELECT ACCOUNT</MDTypography>
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
            <MDInput label="Ledger Name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <MDBox>
            <MDTypography variant="caption" fontWeight="medium" margin="0px 8px 0px 0px">
              MODULE
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
            <div style={{ position: "relative", width: "100%" }}>
              <div
                onClick={() => toggleCategoryMenu()}
                style={{
                  width: "100%",
                  border: "1px solid rgb(230, 226, 226)",
                  borderRadius: "5px",
                  minHeight: "40px",
                  padding: "0px 6px 0px 6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
              >
                <MDTypography variant="caption">
                  {categoryValue !== "" ? categoryValue.toUpperCase() : "SELECT"}
                </MDTypography>
                <MDTypography>
                  <ArrowDropDown />
                </MDTypography>
              </div>
              <div
                id="categoryMenu"
                style={{
                  width: "100%",
                  position: "absolute",
                  top: "42px",
                  height: "auto",
                  maxHeight: "150px",
                  overflowY: "scroll",
                  border: "1px solid rgb(230, 226, 226)",
                  borderRadius: "5px",
                  display: "none",
                  flexDirection: "column",
                  backgroundColor: "white",
                  zIndex: "10",
                }}
              >
                {category.map((data) => {
                  return data.categoryName !== categoryValue ? (
                    <div
                      onClick={() => {
                        setCategoryValue(data.categoryName);
                        toggleCategoryMenu();
                      }}
                      key={data.categoryName}
                      className="menuSelect"
                    >
                      <MDTypography
                        color={data.categoryName === categoryValue ? "white" : "inherit"}
                        variant="button"
                      >
                        {data.categoryName}
                      </MDTypography>
                      <MDTypography
                        color={data.categoryName === categoryValue ? "white" : "inherit"}
                        variant="caption"
                      >
                        <i>{data.categoryDescription}</i>
                      </MDTypography>
                    </div>
                  ) : (
                    <div
                      onClick={() => {
                        setCategoryValue(data.categoryName);
                        toggleCategoryMenu();
                      }}
                      key={data.categoryName}
                      className="menuSelectActive"
                    >
                      <MDTypography
                        color={data.categoryName === categoryValue ? "white" : "inherit"}
                        variant="button"
                      >
                        {data.categoryName}
                      </MDTypography>
                      <MDTypography
                        color={data.categoryName === categoryValue ? "white" : "inherit"}
                        variant="caption"
                      >
                        <i>{data.categoryDescription}</i>
                      </MDTypography>
                    </div>
                  );
                })}
              </div>
            </div>
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
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-end", width: "670px" }}>
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
