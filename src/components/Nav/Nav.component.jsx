// import { useEffect, useState, createElement } from "react";
// import { Link } from "react-router-dom";

// import {
//   Navbar,
//   Collapse,
//   Typography,
//   Button,
//   IconButton,
//   List,
//   ListItem,
//   Menu,
//   MenuHandler,
//   MenuList,
//   MenuItem,
// } from "@material-tailwind/react";
// import {
//   ChevronDownIcon,
//   Bars3Icon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";
// import {
//   HashtagIcon,
//   LifebuoyIcon,
//   SparklesIcon,
//   ShoppingBagIcon,
//   BoltIcon
// } from "@heroicons/react/24/solid";
// import DarkModeToggler from "../darkModeToggler/DarkModeToggler";
// import "../../assets/styles.css";

// // const navListMenuItems = [
// //   {
// //     title: "Tic Tac Toe",
// //     description: "Vanilla JS game.",
// //     icon: HashtagIcon,
// //   },
// //   {
// //     title: "Mission Control",
// //     description: "`Launch` rockets to habitable planets.",
// //     icon: BoltIcon,
// //   },
// //   {
// //     title: "Gutterballs",
// //     description: "E-commerce app selling bowling products.",
// //     icon: LifebuoyIcon,
// //   },
// //   {
// //     title: "All Star Wars All The Time",
// //     description: "Encyclopedia style app using SWAPI.",
// //     icon: SparklesIcon,
// //   },
// //   {
// //     title: "Handwork Clothing",
// //     description: "E-commerce app selling clothes.",
// //     icon: ShoppingBagIcon,
// //   },
// // ];
 
// // function NavListMenu({openNav, setOpenNav}) {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //   const renderItems = navListMenuItems.map(
// //     ({ icon, title, description }, key) => (
// //       <div key={key}>
// //       {/* <Link to={`${key}`} key={key} onClick={() => { 
// //         setIsMobileMenuOpen(false);
// //         if (isMobileMenuOpen) {
// //           setOpenNav(!openNav);
// //         }
// //         }} /> */}
// //         <MenuItem className="flex items-center gap-3 rounded-lg">
// //           <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">
// //             {" "}
// //             {createElement(icon, {
// //               strokeWidth: 2,
// //               className: "h-6 text-gray-900 w-6",
// //             })}
// //           </div>
// //           <div className="hover:dark:text-black">
// //             <Typography
// //               variant="h6"
// //               color="blue-gray"
// //               className="flex items-center text-sm font-bold dark:text-white"
// //             >
// //               <Link to={`${key}`} 
// //                 onClick={() => {
// //                   setIsMobileMenuOpen(!isMobileMenuOpen)
// //                   setOpenNav(!openNav)
// //                   }}>{title} </Link>
// //             </Typography>
// //             <Typography
// //               variant="text"
// //               className="text-xs !font-medium text-blue-gray-500 dark:text-white"
// //             >
// //               {description}
// //             </Typography>
// //           </div>
// //         </MenuItem>
// //       </div>
// //     ),
// //   );
 
// //   return (
// //     <>
// //       <Menu
// //         open={isMenuOpen}
// //         handler={setIsMenuOpen}
// //         offset={{ mainAxis: 20 }}
// //         placement="bottom"
// //         allowHover={true}
// //       >
// //         <MenuHandler>
// //           <Typography as="div" variant="small" className="font-medium dark:text-white">
// //             <ListItem
// //               className="flex items-center gap-2 py-2 pr-4 font-bold text-gray-900 dark:text-white w-[6.5rem]"
// //               selected={isMenuOpen || isMobileMenuOpen}
// //               onClick={() => setIsMobileMenuOpen((cur) => !cur)}
// //             >
// //               <Link to="/projects"> Projects </Link>
// //               <ChevronDownIcon
// //                 strokeWidth={2.5}
// //                 className={`hidden h-3 w-3 transition-transform lg:block ${
// //                   isMenuOpen ? "rotate-180" : ""
// //                 }`}
// //               />
// //               <ChevronDownIcon
// //                 strokeWidth={2.5}
// //                 className={`block h-3 w-3 transition-transform lg:hidden ${
// //                   isMobileMenuOpen ? "rotate-180" : ""
// //                 }`}
// //               />
// //             </ListItem>
// //           </Typography>
// //         </MenuHandler>
// //         <MenuList className="hidden max-w-screen-xl rounded-xl lg:block dark:bg-black bg-[#9AC4E4]">
// //           <ul className="grid grid-rows-1 gap-y-2 outline-none outline-0">
// //             {renderItems}
// //           </ul>
// //         </MenuList>
// //       </Menu>
// //       <div className="block lg:hidden">
// //         <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
// //       </div>
// //     </>
// //   );
// // }
//  const navListMenuItems = [
//     {
//       title: "JavaScript / React",
//       icon: BoltIcon
//     },
//     {
//       title: "Java",
//       icon: ShoppingBagIcon
//     }
//  ];

// function NavList() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const renderItems = navListMenuItems.map(
//     ({ icon, title }, key) => (
//       <a href="#" key={key}>
//         <MenuItem className="flex items-center gap-3 rounded-lg">
//           <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
//             {" "}
//             {createElement(icon, {
//               strokeWidth: 2,
//               className: "h-6 text-gray-900 w-6",
//             })}
//           </div>
//           <div>
//             <Typography
//               variant="h6"
//               color="blue-gray"
//               className="flex items-center text-sm font-bold"
//             >
//               {title}
//             </Typography>
//           </div>
//         </MenuItem>
//       </a>
//     ),
//   );
//   return (
//     <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
//       {/* <Typography
//         variant="small"
//         color="blue-gray"
//         className="font-bold dark:text-white hidden lg:block"
//       >
//         <ListItem className="flex items-center gap-2 py-2 pr-4" >
//           Projects
//           <ListItem> JavaScript & React </ListItem>
//           <ListItem> Java </ListItem>
//         </ListItem>
//       </Typography> */}
//       <Menu
//         open={isMenuOpen}
//         handler={setIsMenuOpen}
//         offset={{ mainAxis: 20 }}
//         placement="bottom"
//         allowHover={true}
//       >
//         <MenuHandler>
//           <Typography as="div" variant="small" className="font-medium">
//             <ListItem
//               className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
//               selected={isMenuOpen || isMobileMenuOpen}
//               onClick={() => setIsMobileMenuOpen((cur) => !cur)}
//             >
//               Resources
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`hidden h-3 w-3 transition-transform lg:block ${
//                   isMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`block h-3 w-3 transition-transform lg:hidden ${
//                   isMobileMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </ListItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
//           <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
//             {renderItems}
//           </ul>
//         </MenuList>
//       </Menu>
//       <div className="block lg:hidden">
//         <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
//       </div>
//       <Typography
//         variant="small"
//         color="blue-gray"
//         className="font-bold dark:text-white hidden lg:block"
//       >
//         <ListItem className="flex items-center gap-2 py-2 pr-4" >
//           <Link to="/"> Home </Link>
//         </ListItem>
//       </Typography>
//       <Typography
//         variant="small"
//         color="blue-gray"
//         className="font-bold dark:text-white hidden lg:block"
//       >
//         <ListItem className="flex items-center gap-2 py-2 pr-4" >
//           <Link to="/contact"> Contact Me </Link>
//         </ListItem>
//       </Typography>
//     </List>
//   );
// }
 
// const Nav = () => {
//   const [openNav, setOpenNav] = useState(false);
 
 
//   return (
//     <Navbar fullWidth className="mx-auto max-w-screen-xl sticky px-4 py-2 z-10 dark:bg-[#f3c69e] bg-[#9AC4E4] top-0 dark:bg-transparent rounded-md">
//       <div className="flex items-center justify-between text-blue-gray-900 dark:text-white">
//         <Typography
//           variant="h6"
//           className="mr-4 cursor-pointer py-1.5 lg:ml-2 rounded-md transition-colors"
//         >
//           Bryan Runnels' Portfolio
//         </Typography>
//         <DarkModeToggler />
//         <div className="hidden lg:block">
//           <NavList />
//         </div>
//         <IconButton
//           variant="text"
//           color="blue-gray"
//           className={`lg:hidden dark:text-white`}
//           onClick={() => setOpenNav(!openNav)}
//         >
//           {openNav ? (
//             <XMarkIcon className="h-6 w-6 text-black dark:text-white animate-ping1" strokeWidth={2} />
//           ) : (
//             <Bars3Icon className="h-6 w-6 text-black dark:text-white animate-ping1" strokeWidth={2} />
//           )}
//         </IconButton>
//       </div>
//       <Collapse open={openNav}>
//           {/* <NavList openNav={openNav} setOpenNav={setOpenNav}/> */}
//           <div className="gap-2 lg:hidden">
//             <List className="flex w-full flex-row justify-center">
//               <Link to="/projects" className="w-fit">
//                 <Button variant="filled" size="sm" color="white" className="hover:dark:bg-light-blue-300 hover:dark:text-white dark:border-2 dark:bg-black dark:text-white hover:bg-light-blue-700 hover:text-white text-black" ripple  onClick={() => setOpenNav(!openNav)}> 
//                   Projects 
//                 </Button>
//               </Link>
//               <Link to="/" className="w-fit">
//                 <Button variant="filled" size="sm" color="white" className="hover:dark:bg-light-blue-300 hover:dark:text-white dark:border-2 dark:bg-black dark:text-white hover:bg-light-blue-700 hover:text-white text-black" ripple  onClick={() => setOpenNav(!openNav)}>
//                   Home 
//                 </Button>
//               </Link>  
//               <Link to="/contact" className="w-fit">
//                 <Button variant="filled" size="sm" color="white" className="hover:dark:bg-light-blue-300 hover:dark:text-white dark:border-2 dark:bg-black dark:text-white hover:bg-light-blue-700 hover:text-white text-black" ripple  onClick={() => setOpenNav(!openNav)}>
//                   Contact Me
//                 </Button>
//               </Link>
//             </List>
            
//           </div>  
//       </Collapse>
//     </Navbar>
//   );
// };

// export default Nav;

import { useState, createElement } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ArrowRightCircleIcon,
  BoltIcon,
  ShoppingBagIcon,
  
} from "@heroicons/react/24/solid";
import DarkModeToggler from "../darkModeToggler/DarkModeToggler";
import "../../assets/styles.css";

const navListMenuItems = [
  {
    title: "React",
    icon: ArrowRightCircleIcon,
    link: "/react"
  },
  {
    title: "Java",
    icon: ArrowRightCircleIcon,
    link: "/java"
  },
  {
    title: "Python",
    icon: ArrowRightCircleIcon,
    link: "/python"
  }
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderItems = navListMenuItems.map(({ icon, title, link }, key) => (
    <Link to={link}>
      <MenuItem key={key} className="flex items-center rounded-lg text-black dark:text-white h-8">
        <div className="rounded-lg">
          {createElement(icon, {
            strokeWidth: 2,
            className: "h-5 dark:bg-black dark:rounded-xl",
          })}
        </div>
        <span className="ml-2 text-sm font-bold dark:text-white hover:dark:text-black"> {title} </span>
        {/* <Typography variant="h6" color="blue-gray" className="ml-2 text-sm font-bold dark:text-white hover:dark:text-black">
          <Link to={link}>{title}</Link>
        </Typography> */}
      </MenuItem>
    </Link>  
  ));

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
            <Button 
              variant="text" 
              size="sm" 
              className=" flex items-center justify-between hover:dark:bg-light-blue-300 hover:dark:text-white dark:bg-black dark:text-white hover:bg-white text-black"

              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} >
                Projects
                <ChevronDownIcon
                  strokeWidth={3}
                  className={`hidden h-3 w-3 ml-1 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""}`}
                />
                <ChevronDownIcon
                  strokeWidth={3}
                  className={`block h-3 w-3 ml-1 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""}`}
                />
              
            </Button>  
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block dark:bg-black ml-20 bg-[#9AC4E4]">
          <ul className="">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden rounded-lg dark:bg-black ml-20 bg-[#9AC4E4] border-2">
        <Collapse open={true}>{renderItems}</Collapse>
      </div>
    </>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <NavListMenu />
      <Typography
        variant="small"
        color="blue-gray"
        className="font-bold hidden lg:block dark:text-white"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 hover:dark:bg-light-blue-300 hover:dark:text-white dark:bg-black dark:text-white hover:bg-white text-black">
          <Link to="/">HOME</Link>
        </ListItem>
      </Typography>
      <Typography
        variant="small"
        color="blue-gray"
        className="font-bold hidden lg:block dark:text-white"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 hover:dark:bg-light-blue-300 hover:dark:text-white dark:bg-black dark:text-white hover:bg-white text-black">
          <Link to="/contact">CONTACT</Link>
        </ListItem>
      </Typography>
    </List>
  );
}

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <Navbar fullWidth className="mx-auto max-w-screen-xl sticky px-4 py-2 z-10 dark:bg-[#f3c69e] dark:bg-transparent bg-[#9AC4E4] top-0 rounded-md">
      <div className="flex items-center justify-between text-blue-gray-900 dark:text-white">
        <Typography variant="h6" className="mr-4 cursor-pointer py-1.5 lg:ml-2 rounded-md transition-colors">
          Bryan Runnels' Portfolio
        </Typography>
        <DarkModeToggler />
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className={`lg:hidden dark:text-white`}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6 text-black dark:text-white animate-ping1" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6 text-black dark:text-white animate-ping1" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="gap-2 lg:hidden">
          <List className="flex w-full flex-col items-start">
            <Link to="/" className="w-fit">
              <Button variant="text" size="sm" className="mb-1 hover:dark:bg-light-blue-300 hover:dark:text-white  dark:bg-black dark:text-white hover:bg-white text-black" onClick={() => setOpenNav(!openNav)}>
                Home
              </Button>
            </Link>
            <NavListMenu />
            <Link to="/contact" className="w-fit">
              <Button variant="text" size="sm" className="hover:dark:bg-light-blue-300 hover:dark:text-white  dark:bg-black dark:text-white hover:bg-white text-black" onClick={() => setOpenNav(!openNav)}>
                Contact Me
              </Button>
            </Link>
          </List>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default Nav;
