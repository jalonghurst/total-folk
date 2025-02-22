"use client";

import { HomeIcon } from "@heroicons/react/24/outline";
import React, { Dispatch, SetStateAction } from "react";
import MenuItem from "./menu-item";

export interface IMenuItem {
  title: string;
  name: string;
  icon?: React.ReactElement;
  path?: string;
  items: Record<string, unknown>;
}

export interface IDecoratedMenuItem extends IMenuItem {
  isMatched?: boolean;
  isActive?: boolean;
  menuItems: IDecoratedMenuItem[];
  showMobileOnly?: boolean;
}

export const GenerateNavMenu: React.FC<{
  collapseDesktopMenu: boolean;
  setCollapseDesktopMenu: Dispatch<SetStateAction<boolean>>;
  menuItems: IDecoratedMenuItem[];
}> = ({ collapseDesktopMenu, setCollapseDesktopMenu, menuItems }) => {
  const isAnyItemActive = menuItems.some((item) => item.isActive);

  return (
    <ul>
      <MenuItem
        item={{
          title: !collapseDesktopMenu ? "Dashboard" : "",
          name: "Dashboard",
          icon: <HomeIcon />,
          path: "",
          items: {},
          menuItems: [],
          isActive: !isAnyItemActive,
        }}
        collapseSidebar={collapseDesktopMenu}
        setCollapseSidebar={setCollapseDesktopMenu}
      />
      {menuItems.map((item) => (
        <MenuItem
          key={item.name + "-menu-item"}
          item={item}
          collapseSidebar={collapseDesktopMenu}
          setCollapseSidebar={setCollapseDesktopMenu}
        />
      ))}
    </ul>
  );
};
