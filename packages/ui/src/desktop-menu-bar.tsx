import { Bars3Icon } from "@heroicons/react/24/outline";
import React, { useRef } from "react";
import { classNames } from "./types/class-names";
import { GenerateNavMenu } from "./generate-menu";
import { menuItems } from "./menu-items";

export const DesktopMenuBar: React.FC<{
  children?: React.ReactNode;
  collapseDesktopMenu: boolean;
  setCollapseDesktopMenu: React.Dispatch<React.SetStateAction<boolean>>;
}> = (props) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="h-screen relative z-10 hidden lg:flex lg:flex-shrink-0">
      <div
        className={classNames(
          props.collapseDesktopMenu ? "w-20" : "w-auto",
          "flex flex-col",
        )}
      >
        <div className="flex flex-col flex-1 min-h-0 border-l menu-bg-color">
          <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center justify-between flex-shrink-0 px-4 mx-auto lg:px-5">
              <div
                className={`items-center ${
                  !props.collapseDesktopMenu
                    ? "flex space-x-14"
                    : "flex-col space-y-3"
                }`}
              >
                <button
                  type="button"
                  className="p-1 text-gray-400 border border-gray-200 rounded-md shadow"
                  onClick={() =>
                    props.setCollapseDesktopMenu(!props.collapseDesktopMenu)
                  }
                >
                  <Bars3Icon
                    className={`w-6 h-6 fill-gray-400 group-hover:fill-blue-600 ${
                      props.collapseDesktopMenu ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                <></>
              </div>
            </div>
            <nav
              className="flex flex-col flex-1 mt-5"
              aria-label="Sidebar"
              ref={sidebarRef}
            >
              <div
                className={classNames(
                  "flex-grow space-y-2",
                  props.collapseDesktopMenu && "px-2",
                )}
              >
                <GenerateNavMenu
                  collapseDesktopMenu={props.collapseDesktopMenu}
                  setCollapseDesktopMenu={props.setCollapseDesktopMenu}
                  menuItems={menuItems}
                ></GenerateNavMenu>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
