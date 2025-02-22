"use client";

import { TopNavBar } from "../Nav/top-nav-bar";
import { DesktopMenuBar } from "./desktop-menu-bar";
import { useState } from "react";
// import { SlideInMenuBar } from "./slide-in-menu-bar";

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
    <div className="z-10 flex min-h-screen overflow-hidden">
      <div className="relative z-10 min-h-screen w-screen">
        <TopNavBar {...menuProps} />
        {/* <SlideInMenuBar {...menuProps} /> */}
        <DesktopMenuBar {...menuProps} />
        {children}
      </div>
    </div>
  );
};
