"use client";

import React, { useState } from "react";
import TopNavBar from "./Nav/top-nav-bar";
import { DesktopMenuBar } from "./desktop-menu-bar";
// import { SlideInMenuBar } from "./slide-in-menu-bar";

type BaseLayoutProps = {
  children: React.ReactNode;
};

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
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
    <div className="flex flex-col min-h-screen">
      <TopNavBar {...menuProps} />
      <div className="flex flex-1">
        <DesktopMenuBar {...menuProps} />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default BaseLayout;
