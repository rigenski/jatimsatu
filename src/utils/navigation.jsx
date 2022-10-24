import CIcon from "@coreui/icons-react";
import React from "react";

export default [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavDivider",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Label"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Drop down menu",
    route: "/",
    icon: "cil-star",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Menu 1",
        to: "/",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Menu 2",
        to: "/",
      },
    ],
  },
];
