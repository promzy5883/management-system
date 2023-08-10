import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AccountsBalances() {
  const [tableData, setTableData] = useState([]);
  const [filterValue, setFilterValue] = useState("Select Module");
  const [accountsBalances, setAccountsBalances] = useState([
    { id: 1, name: "Assets", module: "GL", balance: "₦-60,000" },
    { id: 2, name: "Liability", module: "AR", balance: "₦-10,000" },
    { id: 3, name: "Expense", module: "AP", balance: "₦0.00" },
    { id: 4, name: "Bank Account", module: "GL", balance: "₦20,000" },
    { id: 5, name: "Equity", module: "GL", balance: "₦30,000" },
  ]);

  const modules = ["GL", "AR", "AP"];

  useEffect(() => {
    if (filterValue === "Select Module") {
      setTableData(
        accountsBalances.map((data) => {
          return { "S/NO": data.id, Name: data.name, Module: data.module, Balance: data.balance };
        })
      );
    } else {
      setTableData(
        accountsBalances
          .filter((data) => data.module === filterValue)
          .map((data) => {
            return { "S/NO": data.id, Name: data.name, Module: data.module, Balance: data.balance };
          })
      );
    }
  }, [accountsBalances, filterValue]);

  return (
    <MDBox>
      <MDTypography
        fontSize="17px"
        marginBottom="10px"
        textAlign="center"
        color="text"
        fontWeight="medium"
      >
        Accounts Balances
      </MDTypography>
      <MDBox
        width="100%"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        alignItems="flex-end"
        padding="0px 20px"
      >
        <MDBox>
          <MDTypography variant="caption" color="text" fontWeight="medium" margin="0px 8px 0px 0px">
            SEARCH FILTERS
          </MDTypography>
          <MDBox
            color="text"
            component="select"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            style={{
              width: "100%",
              outline: "none",
              border: "1px solid rgb(230, 226, 226)",
              borderRadius: "5px",
              minHeight: "35px",
              paddingLeft: "6px",
              fontSize: "13px",
            }}
          >
            <MDBox component="option" color="text" value="Select Module">
              Select Module
            </MDBox>
            {modules.map((data) => {
              return (
                <MDBox key={data} component="option" color="text" value={data}>
                  {data}
                </MDBox>
              );
            })}
          </MDBox>
        </MDBox>
        <MDButton color="success" size="small">
          Download Excel Sheet
        </MDButton>
      </MDBox>

      <DataTable
        canSearch={true}
        table={{
          columns: [
            { Header: "S/NO", accessor: "S/NO", width: "12%" },
            { Header: "Name", accessor: "Name", width: "28%" },
            { Header: "Module", accessor: "Module", width: "35%" },
            { Header: "Balance", accessor: "Balance", width: "25%" },
          ],
          rows: [...tableData],
        }}
      />
    </MDBox>
  );
}
