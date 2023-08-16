import { MoreHoriz } from "@mui/icons-material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import ViewOutletRevenueModal from "./viewOutletRevenueModal";

export default function OutletRevenue({ active, nonActive }) {
  const [viewModal, setViewModal] = useState(false);
  const [initialId, setInitialId] = useState(0);
  const ActionComponent = ({ idNo }) => {
    const id = `${idNo}${Math.random()}${Math.random()}`;

    const toggleMenu = (id) => {
      let elem = document.getElementById(id);
      if (elem.style.display !== "flex") {
        elem.style.display = "flex";
      } else {
        elem.style.display = "none";
      }
    };
    return (
      <div style={{ position: "relative" }}>
        <button
          onClick={() => toggleMenu(id)}
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            transform: "rotate(90deg)",
          }}
        >
          <MDTypography>
            <MoreHoriz color="inherit" />
          </MDTypography>
        </button>
        <div id={id} style={{ display: "none" }}>
          <Card
            sx={{
              position: "absolute",
              top: "18px",
              right: "15px",
              overflow: "hidden",
            }}
          >
            <div
              style={{ width: "130px", height: "30px" }}
              className="editMenu"
              onClick={() => {
                setInitialId(idNo);
                toggleMenu(id);
              }}
            >
              <MDTypography variant="overline" display="flex" alignItems="center" gap="3px">
                View Details
              </MDTypography>
            </div>
          </Card>
        </div>
      </div>
    );
  };
  const [tableData, setTableData] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [workShift, setWorkShift] = useState("");
  const [outlet, setOutlet] = useState("");
  const [outletRevenueData, setOutletRevenueData] = useState([
    {
      id: 1,
      outletName: "Jacobs Aluminum",
      workShift: "All Work Shift",
      paymentMethod: "Cash",
      totalItems: "",
      totalCost: "",
      transactionDate: "2023-08-09",
    },
    {
      id: 2,
      outletName: "Support Team",
      workShift: "Morning Shift",
      paymentMethod: "POS",
      totalItems: "",
      totalCost: "",
      transactionDate: "2023-08-06",
    },
    {
      id: 3,
      outletName: "All Outlets",
      workShift: "Afternoon Shift",
      paymentMethod: "All Payment Method",
      totalItems: "",
      totalCost: "",
      transactionDate: "2023-08-03",
    },
  ]);
  const [data, setData] = useState([...outletRevenueData]);

  const outlets = ["All Outlets", "Jacobs Aluminum", "Support Team"];
  const workShifts = ["All Work Shift", "Morning Shift", "Afternoon Shift"];
  const paymentMethods = ["All Payment Mrthods", "Cash", "POS", "PR", "Bank Transfer"];

  const checkDate = (date, transactionDate) => {
    const parsedDate1 = new Date(date);
    const parsedDate2 = new Date(transactionDate);
    if (parsedDate1 > parsedDate2) {
      return true;
    } else {
      return false;
    }
  };

  const handleFilter = () => {
    if (
      outlet === "" &&
      workShift === "" &&
      paymentMethod === "" &&
      startDate === "" &&
      endDate === ""
    ) {
      setData([...outletRevenueData]);
    } else {
      setData(
        outletRevenueData.filter((newData) => {
          return (
            (outlet !== "" && newData.outletName === outlet) ||
            (workShift !== "" && newData.workShift === workShift) ||
            (paymentMethod !== "" && newData.paymentMethod === paymentMethod) ||
            (startDate !== "" && checkDate(newData.transactionDate, startDate)) ||
            (endDate !== "" && checkDate(endDate, newData.transactionDate))
          );
        })
      );
    }
  };

  useEffect(() => {
    setTableData(
      data.map((obj) => {
        return {
          "S/NO": obj.id,
          "Outlet Name": obj.outletName,
          "Work Shift": obj.workShift,
          "Payment Method": obj.paymentMethod,
          "Total Items": obj.totalItems,
          "Total Cost": obj.totalCost,
          "Transaction Date": obj.transactionDate,
          Action: <ActionComponent idNo={obj.id} />,
        };
      })
    );
  }, [data]);

  useEffect(() => {
    viewModal ? active() : nonActive();
  }, [viewModal]);

  useEffect(() => {
    setViewModal(initialId > 0 ? true : false);
  }, [initialId]);

  return (
    <>
      {viewModal && (
        <ViewOutletRevenueModal
          cancel={() => setInitialId(0)}
          data={outletRevenueData}
          no={initialId}
        />
      )}
      <MDBox>
        <MDTypography
          fontSize="17px"
          marginBottom="10px"
          textAlign="center"
          color="text"
          fontWeight="medium"
        >
          Outlet Revenue
        </MDTypography>

        <div className="outletRevenueFilterBox">
          <div style={{ display: "flex", flexDirection: "column", width: "auto", gap: "10px" }}>
            <MDTypography variant="caption" color="text" fontWeight="bold">
              Outlets:
            </MDTypography>
            <MDBox
              color="text"
              component="select"
              value={outlet}
              onChange={(e) => setOutlet(e.target.value)}
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
              <MDBox component="option" color="text" value="">
                Select Outlet
              </MDBox>
              {outlets.map((data) => {
                return (
                  <MDBox key={data} component="option" color="text" value={data}>
                    {data}
                  </MDBox>
                );
              })}
            </MDBox>
          </div>
          <div style={{ display: "flex", flexDirection: "column", width: "auto", gap: "10px" }}>
            <MDTypography variant="caption" color="text" fontWeight="bold">
              Work Shift:
            </MDTypography>
            <MDBox
              color="text"
              component="select"
              value={workShift}
              onChange={(e) => setWorkShift(e.target.value)}
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
              <MDBox component="option" color="text" value="">
                Select Work Shift
              </MDBox>
              {workShifts.map((data) => {
                return (
                  <MDBox key={data} component="option" color="text" value={data}>
                    {data}
                  </MDBox>
                );
              })}
            </MDBox>
          </div>
          <div style={{ display: "flex", flexDirection: "column", width: "auto", gap: "10px" }}>
            <MDTypography variant="caption" color="text" fontWeight="bold">
              Payment Method:
            </MDTypography>
            <MDBox
              color="text"
              component="select"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
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
              <MDBox component="option" color="text" value="">
                Select Payment Method
              </MDBox>
              {paymentMethods.map((data) => {
                return (
                  <MDBox key={data} component="option" color="text" value={data}>
                    {data}
                  </MDBox>
                );
              })}
            </MDBox>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "auto",
              gap: "10px",
            }}
          >
            <MDTypography variant="caption" color="text" fontWeight="bold">
              Start Date:
            </MDTypography>
            <MDInput
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              size="small"
              type="date"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", width: "auto", gap: "10px" }}>
            <MDTypography variant="caption" color="text" fontWeight="bold">
              End Date:
            </MDTypography>
            <MDInput
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              size="small"
              type="date"
            />
          </div>
          <MDButton color="dark" size="small" onClick={handleFilter}>
            Filter
          </MDButton>
        </div>

        <DataTable
          isSorted={false}
          canSearch={true}
          table={{
            columns: [
              { Header: "S/NO", accessor: "S/NO", width: "9%" },
              { Header: "Outlet Name", accessor: "Outlet Name" },
              { Header: "Work Shift", accessor: "Work Shift" },
              { Header: "Payment Method", accessor: "Payment Method" },
              { Header: "Total Items", accessor: "Total Items" },
              { Header: "Total Cost", accessor: "Total Cost" },
              { Header: "Transaction Date", accessor: "Transaction Date" },
              { Header: "Action", accessor: "Action", width: "10%" },
            ],
            rows: [...tableData],
          }}
        />
      </MDBox>
    </>
  );
}
