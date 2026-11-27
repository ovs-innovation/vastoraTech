import {
  FiGrid,
  FiUsers,
  FiUser,
  FiSettings,
  FiGlobe,
  FiFileText,
  FiBriefcase,
  FiMail,
} from "react-icons/fi";

/**
 * Sidebar Navigation for Vastora Tech Agency Admin Dashboard
 */
const sidebar = [
  {
    path: "/dashboard",
    icon: FiGrid,
    name: "Dashboard",
  },
  {
    icon: FiMail,
    name: "LeadManagement",
    routes: [
      {
        path: "/vastora-tech/lead-management/contact-leads",
        name: "ContactPageLeads",
      },
      {
        path: "/vastora-tech/landing-page",
        name: "LandingPageLeads",
      },
      {
        path: "/vastora-tech/lead-management/white-label-leads",
        name: "WhitePageLeads",
      },
    ],
  },
  {
    icon: FiBriefcase,
    name: "PortfolioShowcase",
    routes: [
      {
        path: "/works",
        name: "OurWorks",
      },
      {
        path: "/products/demos",
        name: "ProductDemos",
      },
    ],
  },
  {
    icon: FiFileText,
    name: "BlogManagement",
    routes: [
      {
        path: "/blogs",
        name: "Blogs",
      },
      {
        path: "/blog-categories",
        name: "BlogCategories",
      },
      {
        path: "/blog-comments",
        name: "BlogComments",
      },
    ],
  },
  {
    path: "/our-staff",
    icon: FiUser,
    name: "OurStaff",
  },
  {
    path: "/languages",
    icon: FiGlobe,
    name: "Languages",
  },
  {
    path: "/settings?settingTab=common-settings",
    icon: FiSettings,
    name: "Settings",
  },
];

export default sidebar;
