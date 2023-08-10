import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import { useEffect, useState } from "react";

export default function TrialBalance() {
  const [tableData, setTableData] = useState([]);
  const [trialBalanceData, setTrialBalanceData] = useState([
    {
      id: 1,
      ledger: "Repair & Maintenance",
      accountType: "Liability",
      debit: "1,475",
      credit: "-",
    },
    {
      id: 2,
      ledger: "Wages & Salary",
      accountType: "Assets",
      debit: "20,000",
      credit: "-",
    },
  ]);

  useEffect(() => {
    setTableData(
      trialBalanceData.map((data) => {
        return {
          "S/NO": data.id,
          Ledger: data.ledger,
          "Account Type": data.accountType,
          Debit: data.debit,
          Credit: data.credit,
        };
      })
    );
  }, [trialBalanceData]);

  return (
    <MDBox>
      <MDTypography
        fontSize="17px"
        marginBottom="10px"
        textAlign="center"
        color="text"
        fontWeight="medium"
      >
        Trial Balance
      </MDTypography>

      <DataTable
        canSearch={true}
        table={{
          columns: [
            { Header: "S/NO", accessor: "S/NO", width: "11%" },
            { Header: "Ledger", accessor: "Ledger", width: "38%" },
            { Header: "Account Type", accessor: "Account Type", width: "17%" },
            { Header: "Debit", accessor: "Debit", width: "17%" },
            { Header: "Credit", accessor: "Credit", width: "17%" },
          ],
          rows: [...tableData],
        }}
      />
      <MDBox
        width="100%"
        display="flex"
        justifyContent="flex-end"
        flexWrap="wrap"
        alignItems="center"
        paddingRight="10px"
      >
        <div style={{ display: "flex", gap: "12px" }}>
          <MDTypography color="error" variant="caption" fontWeight="medium" fontSize="15px">
            Debit:₦21,475
          </MDTypography>
          <MDTypography color="success" variant="caption" fontWeight="medium" fontSize="15px">
            Credit:₦0
          </MDTypography>
        </div>
      </MDBox>
    </MDBox>
  );
}
