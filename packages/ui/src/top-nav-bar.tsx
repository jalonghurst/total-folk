import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const TopNavBar: React.FC<{ children?: React.ReactNode }> = (props) => {
  return (
    <div className="ui-flex ui-flex-col ui-flex-1 ui-min-w-0 ui-overflow-hidden base-bg-color">
      <div className="ui-flex ui-items-center ui-justify-between ui-px-4 ui-py-1.5 ui-lg:m-0.5 ui-lg:py-6 ui-lg:px-8">
        <Link href="/">
          <img className="ui-h-10 ui-aspect-1" src="/logo.svg" alt="logo" />
        </Link>
        <div className="ui-justify-center ui-hidden ui-lg:flex ui-md:space-x-10">
          <button>
            <Link href="/about">About</Link>
          </button>
          <button>Search</button>
          <button>
            <Link href="/discover">Discover</Link>
          </button>
          <button>More</button>
        </div>
        <div className="ui-flex ui-justify-center ui-space-x-3 btn btn-primary btn:hover">
          <Link href={"signin"}>Get started</Link>
        </div>
        <div className="ui-flex ui-lg:w-0 ui-lg:hidden">
          <button
            type="button"
            className="ui-inline-flex ui-items-center ui-justify-center ui-w-12 ui--mr-3 ui-text-gray-600 ui-rounded-md ui-aspect-1 ui-hover:text-gray-900 ui-lg:hidden"
          >
            <span className="sr-only">Access menu</span>
            <Bars3Icon className="ui-w-10 ui-h-10" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div
        id="scroll"
        className="ui-relative ui-z-10 ui-h-full ui-overflow-auto ui-overflow-x-hidden"
      >
        {props.children}
      </div>
    </div>
  );
};
