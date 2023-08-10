import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const years = ["2019", "2020", "2021", "2022", "2023"];

export default function ConsolidatedIncomeStatement() {
  const [tableData, setTableData] = useState([]);
  const [month, setMonth] = useState(months[new Date().getMonth()]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [consolidatedIncomeStatements, setConsolidatedIncomeStatements] = useState([
    {
      account: "Revenue - Food",
      jacobsAluminum: "0",
      supportTeam: "0",
      consolidated: "0",
    },
    {
      account: "Royalty Received-Accrued",
      jacobsAluminum: "0",
      supportTeam: "0",
      consolidated: "0",
    },
    {
      account: "Other Financial Income",
      jacobsAluminum: "0",
      supportTeam: "0",
      consolidated: "0",
    },
  ]);

  useEffect(() => {
    setTableData(
      consolidatedIncomeStatements.map((data) => {
        return {
          Account: data.account,
          "Jacobs Aluminum": data.jacobsAluminum,
          "Support Team": data.supportTeam,
          Consolidated: data.consolidated,
        };
      })
    );
  }, [consolidatedIncomeStatements]);

  return (
    <MDBox>
      <MDTypography
        fontSize="17px"
        marginBottom="10px"
        textAlign="center"
        color="text"
        fontWeight="medium"
      >
        Consolidated Income Statement
      </MDTypography>
      <MDBox
        width="100%"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        alignItems="flex-end"
        padding="0px 20px"
      >
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            columnGap: "15px",
            alignItems: "flex-end",
          }}
        >
          <MDBox>
            <MDTypography
              variant="caption"
              color="text"
              fontWeight="medium"
              margin="0px 8px 0px 0px"
            >
              Month
            </MDTypography>
            <MDBox
              color="text"
              component="select"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
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
              {months.map((data) => {
                return (
                  <MDBox key={data} component="option" color="text" value={data}>
                    {data}
                  </MDBox>
                );
              })}
            </MDBox>
          </MDBox>

          <MDBox>
            <MDTypography
              variant="caption"
              color="text"
              fontWeight="medium"
              margin="0px 8px 0px 0px"
            >
              Year
            </MDTypography>
            <MDBox
              color="text"
              component="select"
              value={year}
              onChange={(e) => setYear(e.target.value)}
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
              <MDBox component="option" color="text" value="Select Year">
                Select Year
              </MDBox>
              {years.map((data) => {
                return (
                  <MDBox key={data} component="option" color="text" value={data}>
                    {data}
                  </MDBox>
                );
              })}
            </MDBox>
          </MDBox>
          <MDButton size="small" color="dark">
            Filter
          </MDButton>
        </div>
        <MDButton color="success" size="small">
          Download Excel
        </MDButton>
      </MDBox>

      <DataTable
        isSorted={false}
        canSearch={true}
        table={{
          columns: [
            { Header: "Account", accessor: "Account", width: "34%" },
            { Header: "Jacobs Aluminum", accessor: "Jacobs Aluminum", width: "22%" },
            { Header: "Support Team", accessor: "Support Team", width: "22%" },
            { Header: "Consolidated", accessor: "Consolidated", width: "22%" },
          ],
          rows: [...tableData],
        }}
      />
    </MDBox>
  );
}
