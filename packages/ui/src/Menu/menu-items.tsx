"use client";

import {
    UserIcon,
    CogIcon,
    NewspaperIcon,
    SparklesIcon,
    GlobeAltIcon,
  } from "@heroicons/react/24/outline";
  import { IDecoratedMenuItem } from "./generate-menu";
  
  export const menuItems: IDecoratedMenuItem[] = [
    {
      title: "Account",
      name: "Account",
      icon: <UserIcon />,
      path: "account",
      items: {},
      menuItems: [],
      // isActive: location.pathname === "/account",
    },
    {
      title: "Settings",
      name: "Settings",
      icon: <CogIcon />,
      path: "settings",
      items: {},
      menuItems: [
        // {
        //   title: "Product 1",
        //   name: "Product 1",
        //   path: "/",
        //   items: {},
        //   menuItems: [],
        // },
        // {
        //   title: "Product 2",
        //   name: "Product 2",
        //   path: "/",
        //   items: {},
        //   menuItems: [],
        // },
      ],
    },
  ];
  
  export const mobileMenuItems: IDecoratedMenuItem[] = [
    ...menuItems,
    {
      title: "Discover",
      name: "Discover",
      icon: <SparklesIcon />,
      path: "discover",
      items: {},
      menuItems: [],
    },
    {
      title: "News",
      name: "News",
      icon: <NewspaperIcon />,
      path: "news",
      items: {},
      menuItems: [],
    },
  ];