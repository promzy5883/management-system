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
  ledgerData,
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

  const [ledgerName, setLedgerName] = useState(
    type === "Ledger" && ledgerData.filter((data) => data.ledgerName === currentName)[0].ledgerName
      ? type === "Ledger" &&
          ledgerData.filter((data) => data.ledgerName === currentName)[0].ledgerName
      : ""
  );
  const [accountType, setAccountType] = useState(
    type === "Ledger" && ledgerData.filter((data) => data.ledgerName === currentName)[0].accountType
      ? type === "Ledger" &&
          ledgerData.filter((data) => data.ledgerName === currentName)[0].accountType
      : ""
  );
  const [account, setAccount] = useState(
    type === "Ledger" && ledgerData.filter((data) => data.ledgerName === currentName)[0].account
      ? type === "Ledger" && ledgerData.filter((data) => data.ledgerName === currentName)[0].account
      : ""
  );
  const [categoryValue, setCategoryValue] = useState(
    type === "Ledger" &&
      ledgerData.filter((data) => data.ledgerName === currentName)[0].categoryValue
      ? ledgerData.filter((data) => data.ledgerName === currentName)[0].categoryValue
      : ""
  );

  const [openingBalanceForm, setOPeningBalanceForm] = useState([
    {
      label: "Date",
      type: "date",
      value:
        type === "Ledger" && ledgerData.filter((data) => data.ledgerName === currentName)[0].Date
          ? type === "Ledger" &&
            ledgerData.filter((data) => data.ledgerName === currentName)[0].Date
          : "",
    },
    {
      label: "Account",
      type: "select",
      value:
        type === "Ledger" && ledgerData.filter((data) => data.ledgerName === currentName)[0].Account
          ? ledgerData.filter((data) => data.ledgerName === currentName)[0].Account
          : "",
    },
    {
      label: "Contra",
      type: "text",
      value:
        type === "Ledger" && ledgerData.filter((data) => data.ledgerName === currentName)[0].Contra
          ? type === "Ledger" &&
            ledgerData.filter((data) => data.ledgerName === currentName)[0].Contra
          : "",
    },
    {
      label: "Contra Account",
      type: "text",
      value:
        type === "Ledger" &&
        ledgerData.filter((data) => data.ledgerName === currentName)[0]["Contra Account"]
          ? ledgerData.filter((data) => data.ledgerName === currentName)[0]["Contra Account"]
          : "",
    },
    {
      label: "Project Payee",
      type: "text",
      value:
        type === "Ledger" &&
        ledgerData.filter((data) => data.ledgerName === currentName)[0]["Project Payee"]
          ? ledgerData.filter((data) => data.ledgerName === currentName)[0]["Project Payee"]
          : "",
    },
    {
      label: "Description",
      type: "text",
      value:
        type === "Ledger" &&
        ledgerData.filter((data) => data.ledgerName === currentName)[0].Description
          ? ledgerData.filter((data) => data.ledgerName === currentName)[0].Description
          : "",
    },
    {
      label: "Debit",
      type: "text",
      value:
        type === "Ledger" && ledgerData.filter((data) => data.ledgerName === currentName)[0].Debit
          ? type === "Ledger" &&
            ledgerData.filter((data) => data.ledgerName === currentName)[0].Debit
          : "",
    },
    {
      label: "Credit",
      type: "text",
      value:
        type === "Ledger" && ledgerData.filter((data) => data.ledgerName === currentName)[0].Credit
          ? type === "Ledger" &&
            ledgerData.filter((data) => data.ledgerName === currentName)[0].Credit
          : "",
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

  const generateHeight = () => {
    if (type === "Category") return "300px";
    if (type === "Ledger") return "515px";
    if (type === "Accounts") return "180px";
  };

  const toggleCategoryMenu = () => {
    let elem = document.getElementById("categoryMenuEdit");
    if (elem.style.display !== "flex") {
      elem.style.display = "flex";
    } else {
      elem.style.display = "none";
    }
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
        {type === "Ledger" && (
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
                    minHeight: "40px",
                    paddingLeft: "6px",
                  }}
                >
                  <MDTypography component="option" value="SELECT ACCOUNT" variant="caption">
                    SELECT ACCOUNT
                  </MDTypography>

                  {accountData.map((data) => {
                    return (
                      <MDTypography component="option" value={data.accountName} variant="caption">
                        {data.accountName.toUpperCase()}
                      </MDTypography>
                    );
                  })}
                </MDBox>
              </MDBox>
              <MDInput
                label="Ledger Name"
                value={ledgerName}
                onChange={(e) => setLedgerName(e.target.value)}
              />
            </div>
            <MDBox>
              <MDTypography variant="caption" fontWeight="medium" margin="0px 8px 0px 0px">
                MODULE
              </MDTypography>
              <MDBox
                component="select"
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
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
                  SELECT TYPE
                </MDTypography>
                <MDTypography component="option" value="AP" variant="caption">
                  GL
                </MDTypography>
                <MDTypography component="option" value="AP" variant="caption">
                  AR
                </MDTypography>

                <MDTypography component="option" value="AP" variant="caption">
                  AP
                </MDTypography>
              </MDBox>
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
                  id="categoryMenuEdit"
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
                  {categoryData.map((data) => {
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
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "flex-end", width: "670px" }}
                >
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
                            <MDBox
                              component="select"
                              value={data.value}
                              onChange={(e) => updateOpeningBalanceForm(data.label, e.target.value)}
                              style={{
                                width: "100%",
                                outline: "none",
                                border: "1px solid rgb(230, 226, 226)",
                                borderRadius: "5px",
                                fontSize: "11px",
                                minHeight: "40px",
                                paddingLeft: "6px",
                              }}
                            >
                              <MDTypography component="option" value="SELECT" variant="caption">
                                SELECT
                              </MDTypography>
                              {accounts.map((data) => {
                                return (
                                  <MDTypography
                                    component="option"
                                    value={data.accountName}
                                    variant="caption"
                                  >
                                    {data.accountName.toUpperCase()}
                                  </MDTypography>
                                );
                              })}
                            </MDBox>
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
