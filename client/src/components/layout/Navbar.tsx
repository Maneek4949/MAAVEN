import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { HiOutlineHeart } from "react-icons/hi2";
import Logo from "/images/logo.png";

const MenuLinks = [
  {
    id: 1,
    name: "HOME",
    link: "/#",
  },
  {
    id: 2,
    name: "SHOP",
    link: "/#shop",
  },
  {
    id: 3,
    name: "MEN",
    link: "/#about",
  },
  {
    id: 4,
    name: "WOMEN",
    link: "/#blog",
  },
  {
    id: 5,
    name: "KIDS",
    link: "/#blog",
  },
];

const Navbar = ({}) => {
  return (
      <nav className="bg-white duration-200 relative z-40 border border-black-600 px-2 md:px-10">
        <div className="py-2">
          <div className="container flex justify-between items-center">
            {/* Logo and Links section */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
              ><p className="font-inter font-bold text-xl">MAAVEN</p>
              </a>
              {/* Menu Items */}
              <div className="hidden lg:block">
                <ul className="flex items-center gap-4">
                  {MenuLinks.map((data, index) => (
                    <li key={index}>
                      <a
                        href={data.link}
                        className="inline-block px-4 text-sm text-gray-700 hover:text-gray-800 font-medium transition-colors duration-200 ease-out  focus:outline-none "
                      >
                        {" "}
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Navbar Right section */}
            <div className="flex justify-between items-center gap-4">
              {/* Search Bar section */}
              <div className="w-72 relative group hidden sm:block">
                <IoMdSearch className="text-xl text-gray-700 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
              </div>
              {/* User Button*/}
              <button className="p-3">
                <div className="flex justify-center relative">
                <HiOutlineUserCircle className="text-xl text-gray-700 text-center" />
                </div>
                <p className="font-semibold text-xs">SignIn</p>
              </button>
             
              {/* Order-button section */}
              <button className="p-3">
                <div className="flex justify-center relative">
                <HiOutlineHeart className="text-xl text-gray-700 text-center" />
                <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute bottom-4 right-0 flex items-center justify-center text-xs">
                  4
                </div>
                </div>
                <p className="font-semibold text-xs">Whislist</p>
              </button>
              <button className="relative p-3">
              <div className="flex justify-center relative"></div>
                <HiOutlineShoppingBag className="text-xl text-gray-700 " />
                <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                  4
                </div>
                <p className="font-semibold text-xs">Bag</p>
              </button>

            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
