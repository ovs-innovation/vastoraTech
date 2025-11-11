import {
  FiGrid,
  FiUsers,
  FiUser,
  FiCompass,
  FiSettings,
  FiSlack,
  FiGlobe,
  FiTarget,
  FiChrome,
  FiFileText,
} from "react-icons/fi";

/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const sidebar = [
  {
    path: "/dashboard", // the url
    icon: FiGrid, // icon
    name: "Dashboard", // name that appear in Sidebar
  },

  {
    icon: FiSlack,
    name: "Catalog",
    routes: [
      {
        path: "/products",
        name: "Products",
      },
      {
        path: "/categories",
        name: "Categories",
      },
      {
        path: "/attributes",
        name: "Attributes",
      },
      {
        path: "/coupons",
        name: "Coupons",
      }
    ],
  },

  {
    path: "/customers",
    icon: FiUsers,
    name: "Customers",
  },
  {
    path: "/orders",
    icon: FiCompass,
    name: "Orders",
  },

  {
    path: "/our-staff",
    icon: FiUser,
    name: "OurStaff",
  },
  

  {
    path: "/settings?settingTab=common-settings",
    icon: FiSettings,
    name: "Settings",
  },
  {
    icon: FiGlobe,
    name: "International",
    routes: [
      {
        path: "/languages",
        name: "Languages",
      },
      {
        path: "/currencies",
        name: "Currencies",
      },
    ],
  },
  {
    icon: FiTarget,
    name: "OnlineStore",
    routes: [
      {
        name: "ViewStore",
        path: "/store",
        outside: "store",
      },

      {
        path: "/store/customization",
        name: "StoreCustomization",
      },
      {
        path: "/store/store-settings",
        name: "StoreSettings",
      },
    ],
  },
  {
    icon: FiChrome,
    name: "VastoraTech",
    routes: [
      {
        path: "/vastora-tech/lead-management",
        name: "LeadManagement",
      },
      {
        path: "/blogs",
        name: "Blogs",
      },
      {
        path: "/blog-categories",
        name: "Blog Categories",
      },
      {
        path: "/blog-comments",
        name: "Blog Comments",
      },
    ],
  },
  {
    icon: FiSlack,
    name: "Pages",
    routes: [
      {
        path: "/404",
        name: "404",
      },
      {
        path: "/coming-soon",
        name: "Coming Soon",
      },
    ],
  },
];

export default sidebar;
