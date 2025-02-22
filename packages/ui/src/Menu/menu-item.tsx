"use client";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import { classNames } from "../types/class-names";
import { IDecoratedMenuItem } from "./generate-menu";

const MenuItem: React.FC<{
  item: IDecoratedMenuItem;
  level?: number;
  isSearchActive?: boolean;
  collapseSidebar?: boolean;
  setCollapseSidebar?: Dispatch<SetStateAction<boolean>>;
}> = ({
  item,
  level = 1,
  isSearchActive = false,
  collapseSidebar,
  setCollapseSidebar,
}) => {
  const [isOpen, setIsOpen] = useState(
    item.isActive || (item.isMatched && isSearchActive),
  );
  const isParentToSingleLeaf =
    item.menuItems.length === 1 && item.menuItems[0]?.menuItems.length === 0;

  const defaultEntry = item.menuItems?.find((v) =>
    v.name.toLowerCase().includes("default"),
  );

  const getLinkToTheTargetComponent = () => {
    if (defaultEntry) return defaultEntry.path;

    return item.menuItems.length === 1 && item.menuItems[0]
      ? item.menuItems[0].path
      : item.path;
  };

  const linkTo = getLinkToTheTargetComponent();

  const handleChevronClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(item.isActive || (item.isMatched && isSearchActive));
  }, [item.isActive, item.isMatched, isSearchActive]);

  return (
    <li
      className={classNames(
        "mt-1 overflow-hidden py-2",
        collapseSidebar && "ml-2 w-12 rounded-full",
      )}
    >
      <div
        className={classNames(
          "flex items-center",
          collapseSidebar ? "" : "justify-between px-3",
        )}
      >
        <Link
          href={"/" + linkTo}
          onClick={(e) => {
            if ("/" + linkTo === window.location.pathname) {
              e.preventDefault();
              setIsOpen(!isOpen);
            }
          }}
          className={classNames(
            "inline-flex items-center text-sm",
            collapseSidebar && "m-auto",
            item.isActive && "font-semibold",
            item.menuItems.length <= 1 && item.isMatched
              ? "text-yellow-500"
              : "",
          )}
        >
          {level === 1 && item.icon ? (
            React.cloneElement(item.icon as React.ReactElement<any>, {
              className: classNames(
                "w-5",
                !collapseSidebar && "mx-2",
                item.isActive ? "text-blue-500" : "text-gray-400",
              ),
              onClick: () => setCollapseSidebar && setCollapseSidebar(false),
            })
          ) : (
            <div className="pl-10"></div>
          )}
          {!collapseSidebar && <span className="truncate">{item.title}</span>}
        </Link>
        {!collapseSidebar &&
          item.menuItems.length > 0 &&
          !isParentToSingleLeaf && (
            <button onClick={handleChevronClick}>
              {isOpen ? (
                <ChevronUpIcon className="w-3 h-3 mr-3 text-gray-400" />
              ) : (
                <ChevronDownIcon className="w-3 h-3 mr-3 text-gray-400" />
              )}
            </button>
          )}
      </div>

      {!collapseSidebar &&
        isOpen &&
        item.menuItems.length > 0 &&
        !isParentToSingleLeaf && (
          <ul className={classNames(level > 1 && "ml-5")}>
            {item.menuItems
              .filter((item) => !isSearchActive || item.isMatched)
              .map((item) => (
                <MenuItem key={item.path} item={item} level={level + 1} />
              ))}
          </ul>
        )}
    </li>
  );
};

export default MenuItem;
