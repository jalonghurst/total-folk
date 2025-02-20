import React from "react";
// import { Bars3Icon } from "@heroicons/react/outline";

export const TopNavBar: React.FC<{ children?: React.ReactNode }> = (props) => {
  return (
    <div className="flex flex-col flex-1 min-w-0 overflow-hidden base-bg-color">
      <div className="flex items-center justify-between px-4 py-1.5 lg:m-0.5 lg:py-6 lg:px-8">
        <img className="h-10 aspect-1" src="./logo.png" alt="logo" />
        <div className="justify-center hidden lg:flex md:space-x-10">
          <button>About</button>
          <button>Search</button>
          <button>Discover</button>
          <button>More</button>
        </div>
        <div className="flex justify-center space-x-3 btn btn-primary btn:hover">
          Get started
        </div>
        <div className="flex lg:w-0 lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center w-12 -mr-3 text-gray-600 rounded-md aspect-1 hover:text-gray-900 lg:hidden"
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
