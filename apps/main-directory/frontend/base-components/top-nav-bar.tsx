import React from "react";
// import { Bars3Icon } from "@heroicons/react/24/outline";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@repo/ui/navigation-menu";
import Link from "next/link";

const TopNavBar: React.FC<{
  children?: React.ReactNode;
  collapseDesktopMenu: boolean;
  setCollapseDesktopMenu: (collapseDesktopMenu: boolean) => void;
  slideInMenuOpen: boolean;
  setslideInMenuOpen: (slideInMenuOpen: boolean) => void;
}> = (props) => {
  return (
    <div className="flex flex-col flex-1 min-w-0 overflow-hidden base-bg-color">
      <div className="flex items-center justify-between px-4 py-1.5 lg:m-0.5 lg:py-6 lg:px-8">
        {/* <Link href="/">
          <img className="h-10 aspect-1" src="/logo.svg" alt="logo" />
        </Link> */}
        <div className="justify-center hidden lg:flex md:space-x-10">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuTrigger>About</NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Link
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex justify-center space-x-3 btn btn-primary btn:hover">
          {/* <Link href={"signin"}>Get started</Link> */}
        </div>
        <div className="flex lg:w-0 lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center w-12 -mr-3 text-gray-600 rounded-md aspect-1 hover:text-gray-900 lg:hidden"
            onClick={() => {
              props.setslideInMenuOpen(true);
              props.setCollapseDesktopMenu(false);
            }}
          >
            <span className="sr-only">Access menu</span>
            {/* <Bars3Icon className="w-6 h-6" aria-hidden="true" /> */}
          </button>
        </div>
      </div>
      <div
        id="scroll"
        className="relative z-10 h-full overflow-auto overflow-x-hidden"
      >
        {props.children}
      </div>
    </div>
  );
};

export default TopNavBar;
