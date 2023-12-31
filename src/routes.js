// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import DashboardIcon from "@mui/icons-material/Dashboard";

// @mui icons
import Icon from "@mui/material/Icon";
import {
  Business,
  Calculate,
  CheckCircleOutline,
  DashboardOutlined,
  Inventory,
  OtherHousesTwoTone,
  Payment,
  PaymentOutlined,
  People,
  Person,
  PersonPin,
  Receipt,
  Settings,
  TableChartRounded,
} from "@mui/icons-material";
import SetUpCompanyInfo from "layouts/set-up-company-info";
import SubscriptionDetails from "layouts/subscription-details";
import ItemSettings from "layouts/item-settings";
import ItemLists from "layouts/itemLists";
import CreateAccountsAndCategories from "layouts/create-accounts-and-categories";
import ManageBanks from "layouts/manage-banks";
import ManageCards from "layouts/manage-cards";
import CreateLedgers from "layouts/create-ledgers";
import CashFlow from "layouts/cash-flow";
import Transactions from "layouts/transactions";
import BankStatements from "layouts/bank-statements";
import Enquiries from "layouts/enquiries";
import Reports from "layouts/reports";

const routes = [
  {
    isLink: true,
    type: "collapse",
    name: "My Workspace",
    key: "my-workspace",
    icon: <DashboardIcon fontSize="medium" />,
    route: "/my-workspace",
    component: <Dashboard color="inherit" />,
  },
  {
    isLink: false,
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Person color="inherit" fontSize="medium" />,
  },
  {
    isLink: "No",
    type: "header",
    name: "Item Set-up",
  },
  {
    isLink: false,
    type: "collapse",
    name: "Manage Items",
    key: "manage-items",
    icon: <DashboardOutlined fontSize="medium" color="inherit" />,
  },
  {
    isLink: "No",
    type: "header",
    name: "Financials",
  },
  {
    isLink: false,
    type: "collapse",
    name: "Banking",
    key: "banking",
    icon: <Payment fontSize="medium" color="inherit" />,
  },
  {
    isLink: false,
    type: "collapse",
    name: "Accounts",
    key: "accounts",
    icon: <Calculate fontSize="medium" color="inherit" />,
  },
  {
    isLink: false,
    type: "collapse",
    name: "Customers",
    key: "customers",
    icon: <People color="inherit" fontSize="medium" />,
  },
  {
    isLink: false,
    type: "collapse",
    name: "Suppliers",
    key: "suppliers",
    icon: <Receipt color="inherit" fontSize="medium" />,
  },
  {
    isLink: "No",
    type: "header",
    name: "Operations",
  },
  {
    isLink: false,
    type: "collapse",
    name: "HRM",
    key: "hrm",
    icon: <Person fontSize="medium" color="inherit" />,
  },
  {
    isLink: false,
    type: "collapse",
    name: "Business Outlets",
    key: "access-business-outlets",
    icon: <Business fontSize="medium" color="inherit" />,
  },
  {
    isLink: true,
    type: "collapse",
    name: "Inventory",
    key: "inventory",
    icon: <Inventory fontSize="medium" />,
    route: "/inventory",
    component: <Dashboard color="inherit" />,
  },
  {
    isLink: true,
    type: "collapse",
    name: "Sales",
    key: "sales",
    icon: <PaymentOutlined fontSize="medium" />,
    route: "/sales",
    component: <Dashboard color="inherit" />,
  },
  {
    isLink: "No",
    type: "header",
    name: "Collaborations",
  },

  {
    isLink: false,
    type: "collapse",
    name: "Teams, Collaboration",
    key: "teams-collaboration",
    icon: <People fontSize="medium" color="inherit" />,
  },
  {
    isLink: true,
    type: "collapse",
    name: "Team Boards",
    key: "team-boards",
    icon: <TableChartRounded fontSize="medium" />,
    route: "/team-boards",
    component: <Dashboard color="inherit" />,
  },
  {
    isLink: false,
    type: "collapse",
    name: "Approvals",
    key: "approvals",
    icon: <CheckCircleOutline fontSize="medium" color="inherit" />,
  },
  {
    isLink: true,
    type: "collapse",
    name: "CRM",
    key: "crm",
    icon: <PersonPin color="inherit" fontSize="medium" />,
    route: "/crm",
    component: <Dashboard />,
  },
  {
    isLink: "No",
    type: "header",
    name: "Settings",
  },

  {
    isLink: false,
    type: "collapse",
    name: "Company",
    key: "company",
    icon: <OtherHousesTwoTone color="inherit" fontSize="medium" />,
  },
  {
    isLink: true,
    type: "collapse",
    name: "Console",
    key: "console",
    icon: <Settings color="inherit" fontSize="medium" />,
    route: "/console",
    component: <Dashboard />,
  },
];

export const childrenRoutes = [
  {
    isLink: true,
    parent: "manage-items",
    name: "List",
    key: "list",
    route: "/manage-items-list",
    component: <ItemLists />,
  },
  {
    isLink: true,
    parent: "manage-items",
    name: "Item Settings",
    key: "item-settings",
    route: "/manage-items-settings",
    component: <ItemSettings />,
  },
  {
    isLink: true,
    parent: "banking",
    name: "Manage Banks",
    key: "manage-banks",
    route: "/banking-manage-banks",
    component: <ManageBanks />,
  },
  {
    isLink: true,
    parent: "banking",
    name: "Manage Cards",
    key: "manage-cards",
    route: "/banking-manage-cards",
    component: <ManageCards />,
  },

  {
    isLink: true,
    parent: "banking",
    name: "Cash Flow",
    key: "cash-flow",
    route: "/banking-cash-flow",
    component: <CashFlow />,
  },
  {
    isLink: true,
    parent: "banking",
    name: "Bank Statements",
    key: "bank-statements",
    route: "/banking-bank-statements",
    component: <BankStatements />,
  },
  {
    isLink: true,
    parent: "accounts",
    name: "Transactions",
    key: "transactions",
    route: "/accounts-transactions",
    component: <Transactions />,
  },
  {
    isLink: true,
    parent: "accounts",
    name: "Create Accounts &, Categories",
    key: "create-accounts-and-category",
    route: "/create-accounts-and-categories",
    component: <CreateAccountsAndCategories />,
  },
  {
    isLink: true,
    parent: "accounts",
    name: "Create Ledgers",
    key: "create-ledgers",
    route: "/create-ledgers",
    component: <CreateLedgers />,
  },
  {
    isLink: true,
    parent: "accounts",
    name: "Enquiries",
    key: "enquiries",
    route: "/accounts-enquiries",
    component: <Enquiries />,
  },
  {
    isLink: true,
    parent: "accounts",
    name: "Journals",
    key: "journals",
    route: "/accounts-journals",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "accounts",
    name: "Cash Lodgements",
    key: "cash-lodgments",
    route: "/cash-lodgements",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "accounts",
    name: "Reports",
    key: "reports",
    route: "/accounts-reports",
    component: <Reports />,
  },
  {
    isLink: true,
    parent: "accounts",
    name: "Settings",
    key: "settings",
    route: "/accounts-settings",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "access-business-outlets",
    name: "Edit Outlets",
    key: "edit-outlets",
    route: "/edit-outlets",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "access-business-outlets",
    name: "Access Business, Outlets",
    key: "access-business-outlets",
    route: "/access-business-outlets",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "hrm",
    name: "Employee, Management",
    key: "employee-management",
    route: "/hrm-employee-management",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "hrm",
    name: "Staff Appraisal",
    key: "staff-appraisal",
    route: "/hrm-staff-appraisal",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "hrm",
    name: "Attendance, Management",
    key: "attendance-management",
    route: "/hrm-attendance-management",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "hrm",
    name: "Payroll Processing",
    key: "payroll-processing",
    route: "/hrm-payroll-processing",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "hrm",
    name: "Leave Management",
    key: "leave-management",
    route: "/hrm-leave-management",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "hrm",
    name: "Training Schedule",
    key: "training-schedule",
    route: "/hrm-training-schedule",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "hrm",
    name: "Recruitment",
    key: "recruitment",
    route: "/hrm-recruitment",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "hrm",
    name: "Tax",
    key: "tax",
    route: "/hrm-tax",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "hrm",
    name: "ITF",
    key: "itf",
    route: "/hrm-itf",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "teams-collaboration",
    name: "Manage Teams",
    key: "manage-teams",
    route: "/teams-collaboration-manage-teams",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "teams-collaboration",
    name: "Manage Projects &, Tasks",
    key: "manage-projects",
    route: "/teams-collaboration-manage-projects",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "approvals",
    name: "Requisitions",
    key: "requisitions",
    route: "/approvals-requisitions",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "approvals",
    name: "Expense Requests",
    key: "expense-requests",
    route: "/approvals-expense-requests",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "customers",
    name: "Manage Customers",
    key: "manage-customers",
    route: "/manage-customers",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "customers",
    name: "Invoices",
    key: "invoices",
    route: "/customers-invoices",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "customers",
    name: "Receipts",
    key: "receipts",
    route: "/customers-receipts",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "customers",
    name: "Credit Notes",
    key: "credit-notes",
    route: "/customers-credit-notes",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "customers",
    name: "Customer Statements",
    key: "customer-statements",
    route: "/customer-statements",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "customers",
    name: "Quotes",
    key: "quotess",
    route: "/customers-quotess",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "company",
    name: "Set-up Company Info",
    key: "set-up-company-info",
    route: "/set-up-company-info",
    component: <SetUpCompanyInfo />,
  },
  {
    isLink: true,
    parent: "company",
    name: "Subscription Details",
    key: "subscription-details",
    route: "/company-subscription-details",
    component: <SubscriptionDetails />,
  },
  {
    isLink: true,
    parent: "profile",
    name: "My Profile",
    key: "my-profile",
    route: "/my-profile",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "profile",
    name: "Chat",
    key: "chat",
    route: "/chat",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "profile",
    name: "Change Password",
    key: "change-password",
    route: "/change-password",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "profile",
    name: "Lodge Complaint",
    key: "lodge-complaint",
    route: "/profile-lodge-complaint",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "profile",
    name: "Leave Application",
    key: "leave-application",
    route: "/leave-application",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "profile",
    name: "Calendar",
    key: "calendar",
    route: "/profile-calendar",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "profile",
    name: "Staff Handbook",
    key: "staff-handbook",
    route: "/staff-handbook",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "profile",
    name: "Logout",
    key: "logout",
    route: "/logout",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "suppliers",
    name: "Manage Suppliers",
    key: "manage-suppliers",
    route: "/manage-suppliers",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "suppliers",
    name: "Invoices",
    key: "suppliers-invoices",
    route: "/suppliers-invoices",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "suppliers",
    name: "Good Received Notes",
    key: "good-received-notes",
    route: "/good-received-notes",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "suppliers",
    name: "Credit Notes",
    key: "suppliers-credit-notes",
    route: "/suppliers-credit-notes",
    component: <Dashboard />,
  },
  {
    isLink: true,
    parent: "suppliers",
    name: "Supplier Statements",
    key: "supplier-statements",
    route: "/supplier-statements",
    component: <Dashboard />,
  },
];

export default routes;
