// "use client";
// import { Transition, Dialog } from "@headlessui/react";
// import { useRef, Fragment } from "react";
// import { GenerateNavMenu } from "./generate-menu";
// import { Bars3Icon } from "@heroicons/react/24/outline";
// import { mobileMenuItems } from "./menu-items";

// export const SlideInMenuBar: React.FC<{
//   children?: React.ReactNode;
//   slideInMenuOpen: boolean;
//   setslideInMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   collapseDesktopMenu: boolean;
//   setCollapseDesktopMenu: React.Dispatch<React.SetStateAction<boolean>>;
// }> = (props) => {
//   const sidebarRef = useRef<HTMLDivElement | null>(null);

//   return (
//     <Transition show={props.slideInMenuOpen} as={Fragment}>
//       <Dialog
//         as="div"
//         className="fixed inset-0 z-40 flex flex-row-reverse lg:hidden"
//         onClose={props.setslideInMenuOpen}
//       >
//         <Transition
//           show={props.slideInMenuOpen}
//           as={Fragment}
//           enter="transition-opacity ease-linear duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="transition-opacity ease-linear duration-300"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
//         </Transition>
//         <Transition
//           show={props.slideInMenuOpen}
//           as={Fragment}
//           enter="transition ease-in-out duration-300 transform"
//           enterFrom="translate-x-full"
//           enterTo="translate-x-0"
//           leave="transition ease-in-out duration-300 transform"
//           leaveFrom="translate-x-0"
//           leaveTo="translate-x-full"
//         >
//           <div className="relative flex flex-col flex-1 w-full max-w-xs menu-bg-color z-2 focus:outline-none">
//             <div className="absolute top-0 right-0 pt-2 -ml-12">
//               <button
//                 type="button"
//                 className="flex items-center justify-center w-10 h-10 mr-1 rounded-full focus:outline-none"
//                 onClick={() => {
//                   props.setslideInMenuOpen(false);
//                   if (sidebarRef?.current) {
//                     sidebarRef.current.style.width = "auto";
//                   }
//                 }}
//               >
//                 <span className="sr-only">Close sidebar</span>
//                 <Bars3Icon className="w-6 h-6" aria-hidden="true" />
//               </button>
//             </div>
//             <div className="flex flex-col flex-1 h-0 pt-5 pb-4 overflow-y-auto">
//               <div className="flex items-center justify-between flex-shrink-0 px-4"></div>
//               <nav aria-label="Sidebar" className="flex-grow mt-5">
//                 <div className="space-y-1">
//                   <GenerateNavMenu
//                     collapseDesktopMenu={props.collapseDesktopMenu}
//                     setCollapseDesktopMenu={props.setCollapseDesktopMenu}
//                     menuItems={mobileMenuItems}
//                   />
//                 </div>
//               </nav>
//             </div>
//           </div>
//         </Transition>
//       </Dialog>
//     </Transition>
//   );
//   };
