import { Transition, Dialog } from "@headlessui/react";
import { useRef, Fragment } from "react";
import { GenerateNavMenu } from "./generate-menu";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { mobileMenuItems } from "./menu-items";

export const SlideInMenuBar: React.FC<{
  children?: React.ReactNode;
  slideInMenuOpen: boolean;
  setslideInMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  collapseDesktopMenu: boolean;
  setCollapseDesktopMenu: React.Dispatch<React.SetStateAction<boolean>>;
}> = (props) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  return (
    <Transition show={props.slideInMenuOpen} as={Fragment}>
      <Dialog
        as="div"
        className="ui-fixed ui-inset-0 ui-z-40 ui-flex ui-flex-row-reverse ui-lg:hidden"
        onClose={props.setslideInMenuOpen}
      >
        <Transition
          show={props.slideInMenuOpen}
          as={Fragment}
          enter="ui-transition-opacity ui-ease-linear ui-duration-300"
          enterFrom="ui-opacity-0"
          enterTo="ui-opacity-100"
          leave="ui-transition-opacity ui-ease-linear ui-duration-300"
          leaveFrom="ui-opacity-100"
          leaveTo="ui-opacity-0"
        >
          <div className="ui-fixed ui-inset-0 ui-bg-gray-600 ui-bg-opacity-75" />
        </Transition>
        <Transition
          show={props.slideInMenuOpen}
          as={Fragment}
          enter="ui-transition ui-ease-in-out ui-duration-300 ui-transform"
          enterFrom="ui-translate-x-full"
          enterTo="ui-translate-x-0"
          leave="ui-transition ui-ease-in-out ui-duration-300 ui-transform"
          leaveFrom="ui-translate-x-0"
          leaveTo="ui-translate-x-full"
        >
          <div className="ui-relative ui-flex ui-flex-col ui-flex-1 ui-w-full ui-max-w-xs menu-bg-color ui-z-2 ui-focus:outline-none">
            <div className="ui-absolute ui-top-0 ui-right-0 ui-pt-2 ui--ml-12">
              <button
                type="button"
                className="ui-flex ui-items-center ui-justify-center ui-w-10 ui-h-10 ui-mr-1 ui-rounded-full ui-focus:outline-none"
                onClick={() => {
                  props.setslideInMenuOpen(false);
                  if (sidebarRef?.current) {
                    sidebarRef.current.style.width = "ui-auto";
                  }
                }}
              >
                <span className="ui-sr-only">Close sidebar</span>
                <Bars3Icon className="ui-w-6 ui-h-6" aria-hidden="true" />
              </button>
            </div>
            <div className="ui-flex ui-flex-col ui-flex-1 ui-h-0 ui-pt-5 ui-pb-4 ui-overflow-y-auto">
              <div className="ui-flex items-center ui-justify-between ui-flex-shrink-0 ui-px-4"></div>
              <nav aria-label="Sidebar" className="ui-flex-grow ui-mt-5">
                <div className="ui-space-y-1">
                  <GenerateNavMenu
                    collapseDesktopMenu={props.collapseDesktopMenu}
                    setCollapseDesktopMenu={props.setCollapseDesktopMenu}
                    menuItems={mobileMenuItems}
                  />
                </div>
              </nav>
            </div>
          </div>
        </Transition>
      </Dialog>
    </Transition>
  );
};
