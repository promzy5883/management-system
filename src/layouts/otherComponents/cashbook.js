import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

export default function Cashbook() {
  return (
    <MDBox padding="0px 6px">
      <MDTypography
        fontSize="17px"
        marginBottom="10px"
        textAlign="center"
        color="text"
        fontWeight="medium"
      >
        Cash Book
      </MDTypography>
      <MDBox
        border="1px solid red"
        width="100%"
        display="flex"
        flexWrap="wrap"
        rowGap="15px"
        columnGap="15px"
        justifyContent="center"
      >
        <div className="cashbookhalf">
          <div style={{ width: "100%", minWidth: "100%" }}>
            <MDTypography
              width="100%"
              variant="caption"
              color="text"
              display="flex"
              justifyContent="center"
              padding="10px 0px"
              borderBottom="1px solid rgba(204, 197, 197,0.7)"
            >
              DEBIT
            </MDTypography>
            <MDBox
              borderBottom="1px solid rgba(204, 197, 197,0.7)"
              bgColor="rgba(204,197,197,0.3)"
              width="auto"
              minWidth="100%"
              height="40px"
              display="grid"
              gridTemplateColumns="30% 30% 20% 20%"
              alignItems="center"
              padding="0px 15px"
            >
              <MDTypography variant="caption" color="text">
                Date
              </MDTypography>
              <MDTypography variant="caption" color="text">
                Particulars
              </MDTypography>
              <MDTypography variant="caption" color="text">
                Cash(₦)
              </MDTypography>
              <MDTypography variant="caption" color="text">
                Bank(₦)
              </MDTypography>
            </MDBox>
            <MDBox
              borderTop="1px solid rgba(204, 197, 197,0.7)"
              bgColor="rgba(204,197,197,0.3)"
              width="auto"
              minWidth="100%"
              height="40px"
              display="grid"
              gridTemplateColumns="30% 30% 20% 20%"
              alignItems="center"
              padding="0px 15px"
            >
              <MDTypography variant="caption" color="text"></MDTypography>
              <MDTypography variant="caption" color="text"></MDTypography>
              <MDTypography variant="caption" color="text">
                ₦0
              </MDTypography>
              <MDTypography variant="caption" color="text">
                ₦0
              </MDTypography>
            </MDBox>
            <MDBox
              borderTop="1px solid rgba(204, 197, 197,0.7)"
              bgColor="rgba(204,197,197,0.3)"
              width="auto"
              minWidth="100%"
              height="40px"
              display="grid"
              gridTemplateColumns="30% 30% 20% 20%"
              alignItems="center"
              padding="0px 15px"
            >
              <MDTypography variant="caption" color="text">
                {new Date().toLocaleDateString()}
              </MDTypography>
              <MDTypography variant="caption" color="text">
                By Bal. c/d
              </MDTypography>
              <MDTypography variant="caption" color="text">
                ₦0
              </MDTypography>
              <MDTypography variant="caption" color="text">
                ₦0
              </MDTypography>
            </MDBox>
          </div>
        </div>
        <div className="cashbookhalf">
          <div style={{ minWidth: "100%" }}>
            <MDTypography
              width="100%"
              variant="caption"
              color="text"
              display="flex"
              justifyContent="center"
              padding="10px 0px"
              borderBottom="1px solid rgba(204, 197, 197,0.7)"
            >
              CREDIT
            </MDTypography>
            <MDBox
              borderBottom="1px solid rgba(204, 197, 197,0.7)"
              bgColor="rgba(204,197,197,0.3)"
              width="auto"
              minWidth="100%"
              height="40px"
              display="grid"
              gridTemplateColumns="30% 30% 20% 20%"
              alignItems="center"
              padding="0px 15px"
            >
              <MDTypography variant="caption" color="text">
                Date
              </MDTypography>
              <MDTypography variant="caption" color="text">
                Particulars
              </MDTypography>
              <MDTypography variant="caption" color="text">
                Cash(₦)
              </MDTypography>
              <MDTypography variant="caption" color="text">
                Bank(₦)
              </MDTypography>
            </MDBox>
            <MDBox
              borderTop="1px solid rgba(204, 197, 197,0.7)"
              bgColor="rgba(204,197,197,0.3)"
              width="auto"
              minWidth="100%"
              height="40px"
              display="grid"
              gridTemplateColumns="30% 30% 20% 20%"
              alignItems="center"
              padding="0px 15px"
            >
              <MDTypography variant="caption" color="text"></MDTypography>
              <MDTypography variant="caption" color="text"></MDTypography>
              <MDTypography variant="caption" color="text">
                ₦0
              </MDTypography>
              <MDTypography variant="caption" color="text">
                ₦0
              </MDTypography>
            </MDBox>
            <MDBox
              borderTop="1px solid rgba(204, 197, 197,0.7)"
              bgColor="rgba(204,197,197,0.3)"
              width="auto"
              minWidth="100%"
              height="40px"
              display="grid"
              gridTemplateColumns="30% 30% 20% 20%"
              alignItems="center"
              padding="0px 15px"
            >
              <MDTypography variant="caption" color="text">
                {new Date().toLocaleDateString()}
              </MDTypography>
              <MDTypography variant="caption" color="text">
                By Bal. c/d
              </MDTypography>
              <MDTypography variant="caption" color="text">
                ₦0
              </MDTypography>
              <MDTypography variant="caption" color="text">
                ₦0
              </MDTypography>
            </MDBox>
          </div>
        </div>
      </MDBox>
    </MDBox>
  );
}
