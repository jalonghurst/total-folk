import { Bars3Icon } from "@heroicons/react/24/outline";
import React, { useRef } from "react";
import { classNames } from "../types/class-names";
import { GenerateNavMenu } from "./generate-menu";
import { menuItems } from "./menu-items";

export const DesktopMenuBar: React.FC<{
  children?: React.ReactNode;
  collapseDesktopMenu: boolean;
  setCollapseDesktopMenu: React.Dispatch<React.SetStateAction<boolean>>;
}> = (props) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  
  return (
    <div className="ui-relative ui-z-10 ui-hidden ui-lg:flex ui-lg:flex-shrink-0">
      <div
        className={classNames(
          props.collapseDesktopMenu ? "ui-w-20" : "ui-w-auto",
          "ui-flex ui-flex-col"
        )}
      >
        <div className="ui-flex ui-flex-col ui-flex-1 ui-min-h-0 ui-border-l menu-bg-color">
          <div className="ui-flex ui-flex-col ui-flex-1 ui-pt-5 ui-pb-4 ui-overflow-y-auto">
            <div className="ui-flex ui-items-center ui-justify-between ui-flex-shrink-0 ui-px-4 ui-mx-auto ui-lg:px-5">
              <div
                className={`iu-items-center ${
                  !props.collapseDesktopMenu
                    ? "ui-flex ui-space-x-14"
                    : "ui-flex-col ui-space-y-3"
                }`}
              >
                <button
                  type="button"
                  className="ui-p-1 ui-text-gray-400 ui-border ui-border-gray-200 ui-rounded-md ui-shadow"
                  onClick={() =>
                    props.setCollapseDesktopMenu(!props.collapseDesktopMenu)
                  }
                >
                  <Bars3Icon
                    className={`ui-w-6 ui-h-6 ui-fill-gray-400 ui-group-hover:fill-blue-600 ${
                      props.collapseDesktopMenu
                        ? "ui-transform ui-rotate-180"
                        : ""
                    }`}
                  />
                </button>
                <></>
              </div>
            </div>
            <nav
              className="ui-flex ui-flex-col ui-flex-1 ui-mt-5"
              aria-label="Sidebar"
              ref={sidebarRef}
            >
              <div
                className={classNames(
                  "ui-flex-grow ui-space-y-2",
                  props.collapseDesktopMenu && "ui-px-2"
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
