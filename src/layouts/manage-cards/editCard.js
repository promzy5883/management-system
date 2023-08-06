import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import "index.css";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { ArrowDropDown, Close } from "@mui/icons-material";

export default function EditCard({ number, data, submitted, cancel }) {
  const [position, setPosition] = useState(0);
  const filteredData = data.filter((data) => data.cardNumber === number)[0];

  const [cardName, setCardName] = useState(filteredData.cardName || "");
  const [bankName, setBankName] = useState(filteredData.bankName || "");
  const [type, setType] = useState(filteredData.module || "");
  const [categoryValue, setCategoryValue] = useState(filteredData.category || "");
  const [cardNumber, setCardNumber] = useState(filteredData.cardNumber || "");
  const [cardType, setCardType] = useState(filteredData.cardType || "");
  const [openingBalanceForm, setOPeningBalanceForm] = useState([
    {
      label: "Date",
      type: "date",
      value: filteredData.Date ? filteredData.date : "",
    },
    {
      label: "Account",
      type: "select",
      value: filteredData.Account ? filteredData.Account : "",
    },
    {
      label: "Contra",
      type: "text",
      value: filteredData.Contra ? filteredData.Contra : "",
    },
    {
      label: "Contra Account",
      type: "text",
      value: filteredData["Contra Account"] ? filteredData["Contra Account"] : "",
    },
    {
      label: "Project Payee",
      type: "text",
      value: filteredData["Project Payee"] ? filteredData["Project Payee"] : "",
    },
    {
      label: "Description",
      type: "text",
      value: filteredData.Description ? filteredData.Description : "",
    },
    {
      label: "Debit",
      type: "text",
      value: filteredData.Debit ? filteredData.Debit : "",
    },
    {
      label: "Credit",
      type: "text",
      value: filteredData.Credit ? filteredData.Credit : "",
    },
  ]);

  const [categories, setCategories] = useState([
    { categoryName: "None", categoryDescription: "No Category" },
    {
      categoryName: "Sales",
      categoryDescription: "Non-items based sales",
      account: "Assests",
    },
    {
      categoryName: "Cost of Sales",
      categoryDescription: "Any cost associated with sales. Used to calculate gross profit.",
      account: "Liability",
    },
    {
      categoryName: "Other Income",
      categoryDescription: "Income received such as interest and discount received.",
      account: "Assets",
    },
    {
      categoryName: "Expense",
      categoryDescription: "Cost incurred, Advertising, rent, stationary, and so on.",
      account: "Liability",
    },
    {
      categoryName: "Income Tax",
      categoryDescription: "Taxes levied on the net income of the company",
      account: "Assets",
    },
    {
      categoryName: "Non-Current Assets",
      categoryDescription: "Items of value lasting for an extended period of time such as property",
      account: "Liability",
    },
    {
      categoryName: "Current Assets",
      categoryDescription: "Assets expected to be sold or used in under a year such as cash",
      account: "Assets",
    },
    {
      categoryName: "Non-Current Liabilities",
      categoryDescription: "Liabilities to be settled in the future. Loan, mortgages, and so on.",
      account: "Assets",
    },
    {
      categoryName: "Current Liabilities",
      categoryDescription: "Liabilities",
      account: "Liability",
    },
  ]);
  const accounts = [
    { accountName: "Assets" },
    { accountName: "Liability" },
    { accountName: "Expense" },
    { accountName: "Bank Account" },
    { accountName: "Equity" },
  ];

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
      cardName: cardName,
      bankName: bankName,
      category: categoryValue,
      cardNumber: cardNumber,
      cardType: cardType,
      module: type,
    };
    openingBalanceForm.forEach((form) => {
      data[form.label] = form.value;
    });
    submitted(data);
  };

  const toggleCategoryMenu = () => {
    let elem = document.getElementById("cardCategoryMenu");
    if (elem.style.display !== "flex") {
      elem.style.display = "flex";
    } else {
      elem.style.display = "none";
    }
  };

  useEffect(() => setPosition(1), []);
  return (
    <div className="createLedgerModal" style={{ alignItems: "center" }}>
      <div className="createLedgerLayer">
        <Card
          sx={{
            maxWidth: "1200px",
            width: "90%",
            p: 2,
            height: "470px",
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
            EDIT CARD
            <button
              onClick={() => cancel()}
              style={{ border: "none", backgroundColor: "transparent", cursor: "pointer" }}
            >
              <MDTypography>
                <Close fontSize="small" color="inherit" />
              </MDTypography>
            </button>
          </MDTypography>

          <MDBox display="flex" flexDirection="column" width="100%" gap="15px">
            <div
              style={{
                width: "100%",
                maxWidth: "700px",
                display: "grid",
                gridTemplateColumns: "48% 48%",
                justifyContent: "space-between",
              }}
            >
              <MDInput
                label="Card Name"
                size="small"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
              />
              <MDInput
                size="small"
                label="Bank Name"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />
            </div>
            <div
              style={{
                maxWidth: "700px",
                width: "100%",
                display: "grid",
                gridTemplateColumns: "48% 48%",
                justifyContent: "space-between",
                alignItems: "end",
              }}
            >
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
                      minHeight: "35px",
                      padding: "0px 6px 0px 6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                    }}
                  >
                    <MDTypography variant="caption">
                      {categoryValue !== "" ? categoryValue : "Select"}
                    </MDTypography>
                    <MDTypography>
                      <ArrowDropDown />
                    </MDTypography>
                  </div>
                  <div
                    id="cardCategoryMenu"
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
                    {categories.map((data) => {
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
                            variant="caption"
                            fontWeight="medium"
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
              <MDInput
                label="Account Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                size="small"
              />
            </div>

            <div
              style={{
                width: "100%",
                display: "grid",
                maxWidth: "700px",
                justifyContent: "space-between",
              }}
            ></div>
            <div
              style={{
                maxWidth: "700px",
                width: "100%",
                display: "grid",
                gridTemplateColumns: "48% 48%",
                justifyContent: "space-between",
                alignItems: "end",
              }}
            >
              <MDBox>
                <MDTypography variant="caption" fontWeight="medium" margin="0px 8px 0px 0px">
                  MODULE
                </MDTypography>
                <MDBox
                  component="select"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  style={{
                    width: "100%",
                    outline: "none",
                    border: "1px solid rgb(230, 226, 226)",
                    borderRadius: "5px",
                    minHeight: "35px",
                    paddingLeft: "6px",
                    fontSize: "12px",
                  }}
                >
                  <MDTypography component="option" value="Select Type" variant="caption">
                    Select Type
                  </MDTypography>
                  <MDTypography component="option" value="GL" variant="caption">
                    GL
                  </MDTypography>
                  <MDTypography component="option" value="AR" variant="caption">
                    AR
                  </MDTypography>

                  <MDTypography component="option" value="AP" variant="caption">
                    AP
                  </MDTypography>
                </MDBox>
              </MDBox>
              <MDBox>
                <MDTypography variant="caption" fontWeight="medium" margin="0px 8px 0px 0px">
                  CARD TYPE
                </MDTypography>
                <MDBox
                  component="select"
                  value={cardType}
                  onChange={(e) => setCardType(e.target.value)}
                  style={{
                    width: "100%",
                    outline: "none",
                    border: "1px solid rgb(230, 226, 226)",
                    borderRadius: "5px",
                    minHeight: "35px",
                    paddingLeft: "6px",
                    fontSize: "12px",
                  }}
                >
                  <MDTypography component="option" value="Select Type" variant="caption">
                    Select Type
                  </MDTypography>
                  <MDTypography component="option" value="Master Card" variant="caption">
                    Master Card
                  </MDTypography>
                  <MDTypography component="option" value="Verve Card" variant="caption">
                    Verve Card
                  </MDTypography>

                  <MDTypography component="option" value="Visa Card" variant="caption">
                    Visa Card
                  </MDTypography>
                </MDBox>
              </MDBox>
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
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-end", width: "900px" }}>
                {openingBalanceForm.map((data) => {
                  return (
                    <>
                      {data.type !== "date" && data.type !== "select" && (
                        <MDBox width="110px">
                          <MDInput
                            type={data.type}
                            label={data.label}
                            value={data.value}
                            onChange={(e) => updateOpeningBalanceForm(data.label, e.target.value)}
                            fullWidth
                            size="small"
                          />
                        </MDBox>
                      )}
                      {data.type === "select" && (
                        <MDBox width="110px">
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
                              fontSize: "12px",
                              minHeight: "35px",
                              paddingLeft: "6px",
                            }}
                          >
                            <MDTypography component="option" value="SELECT" variant="caption">
                              Select
                            </MDTypography>
                            {accounts.map((data) => {
                              return (
                                <MDTypography
                                  component="option"
                                  value={data.accountName}
                                  variant="caption"
                                >
                                  {data.accountName}
                                </MDTypography>
                              );
                            })}
                          </MDBox>
                        </MDBox>
                      )}
                      {data.type === "date" && (
                        <MDBox width="110px">
                          <MDTypography variant="caption" fontWeight="medium">
                            {data.label}
                          </MDTypography>
                          <MDInput
                            type={data.type}
                            value={data.value}
                            onChange={(e) => updateOpeningBalanceForm(data.label, e.target.value)}
                            fullWidth
                            size="small"
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
              EDIT CARD
            </MDButton>
          </MDBox>
        </Card>
      </div>
    </div>
  );
}
