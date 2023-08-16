import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ChartsOfAccounts() {
  const [tableData, setTableData] = useState([]);
  const [filterValue, setFilterValue] = useState("Select Module");
  const [chartsOfAccounts, setChartsOfAccounts] = useState([
    {
      ledger: "Repair & Maintenance",
      module: "GL",
      accountType: "Expense",
    },
    { ledger: "Wages & Salary", module: "AR", accountType: "Liability" },
    { ledger: "Government Levy", module: "AP", accountType: "Liability" },
  ]);

  const modules = ["GL", "AR", "AP"];

  useEffect(() => {
    if (filterValue === "Select Module") {
      setTableData(
        chartsOfAccounts.map((data) => {
          return { Ledger: data.ledger, Module: data.module, "Account Type": data.accountType };
        })
      );
    } else {
      setTableData(
        chartsOfAccounts
          .filter((data) => data.module === filterValue)
          .map((data) => {
            return { Ledger: data.ledger, Module: data.module, "Account Type": data.accountType };
          })
      );
    }
  }, [chartsOfAccounts, filterValue]);

  return (
    <MDBox>
      <MDTypography
        fontSize="17px"
        marginBottom="10px"
        textAlign="center"
        color="text"
        fontWeight="medium"
      >
        Charts Of Accounts
      </MDTypography>
      <MDBox
        width="100%"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        alignItems="flex-end"
        columnGap="12px"
        rowGap="12px"
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
            { Header: "Ledger", accessor: "Ledger", width: "50%" },
            { Header: "Account Type", accessor: "Account Type", width: "28%" },
            { Header: "Module", accessor: "Module", width: "22%" },
          ],
          rows: [...tableData],
        }}
      />
    </MDBox>
  );
}
