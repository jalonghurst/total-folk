"use client";

import { TopNavBar } from "../Nav/top-nav-bar";
import { DesktopMenuBar } from "./desktop-menu-bar";
import { useState } from "react";
import { SlideInMenuBar } from "./slide-in-menu-bar";

export const MenuWrapper = ({ children }: { children: React.ReactNode }) => {
    // Static desktop sidebar
    const [collapseDesktopMenu, setCollapseDesktopMenu] = useState(false);
    // Slide in small screen side bar
    const [slideInMenuOpen, setslideInMenuOpen] = useState(false);

  const menuProps = {
    slideInMenuOpen,
    setslideInMenuOpen,
    collapseDesktopMenu,
    setCollapseDesktopMenu,
  };

  return (
    <div className="ui-z-10 ui-flex ui-h-screen ui-overflow-hidden">
      <div className="ui-relative ui-z-10 ui-min-h-screen ui-w-screen">
        <TopNavBar {...menuProps} />
        <SlideInMenuBar {...menuProps} />
        <DesktopMenuBar {...menuProps} />
        {children}
      </div>
    </div>
  );
};
