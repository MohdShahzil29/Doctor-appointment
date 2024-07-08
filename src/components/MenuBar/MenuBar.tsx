"use client";
import React, { useState } from "react";
import longsideicon from "@/assets/logo2.png";
import logo from "@/assets/healthcare.png";
import Image from "next/image";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setToken, setUser } from "@/store/authSlice";
import { useRouter } from "next/navigation";

type MenuType = {
  id: number;
  name: string;
  link: string;
};

const menuData: MenuType[] = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Service",
    link: "/service",
  },
  {
    id: 3,
    name: "Contact us",
    link: "/",
  },
  {
    id: 4,
    name: "Help",
    link: "/",
  },
  {
    id: 5,
    name: "Blog",
    link: "/",
  },
];

const authMenu: MenuType[] = [
  {
    id: 6,
    name: "Sign Up",
    link: "/signup",
  },
  {
    id: 7,
    name: "Log In",
    link: "/login",
  },
];

const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const user = useSelector((state: RootState) => state.auth.user);

  const handelLogout = () => {
    dispatch(setUser(null));
    dispatch(setToken(null));
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/");
  };

  return (
    <div>
      <div className="flex justify-between items-center p-4 md:px-8 lg:px-20">
        <div className="flex items-center space-x-2">
          <Image src={longsideicon} alt="LogoIcon" width={40} height={40} />
          <Image src={logo} alt="Main Logo" width={120} height={40} />
        </div>
        <div className="hidden md:flex space-x-4 gap-[54px]">
          {menuData.map((menu) => (
            <Link key={menu.id} href={menu.link}>
              <div className="text-gray-600 hover:text-teal-600 transition duration-300">
                {menu.name}
              </div>
            </Link>
          ))}
        </div>
        <div className="hidden md:flex space-x-4">
          {user ? (
            <div
              className="text-white bg-red-600 hover:bg-red-700 transition duration-300 px-4 py-2 rounded cursor-pointer"
              onClick={handelLogout}
            >
              Log Out
            </div>
          ) : (
            authMenu.map((auth) => (
              <Link key={auth.id} href={auth.link}>
                <div className="text-white bg-teal-600 hover:bg-teal-700 transition duration-300 px-4 py-2 rounded">
                  {auth.name}
                </div>
              </Link>
            ))
          )}
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <MdClose size={28} /> : <CiMenuBurger size={28} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 p-4">
            {menuData.map((menu) => (
              <Link key={menu.id} href={menu.link}>
                <div className="text-gray-600 hover:text-teal-600 transition duration-300">
                  {menu.name}
                </div>
              </Link>
            ))}
            {user ? (
              <div
                className="text-white bg-red-600 hover:bg-red-700 transition duration-300 px-4 py-2 rounded cursor-pointer"
                onClick={handelLogout}
              >
                Log Out
              </div>
            ) : (
              authMenu.map((auth) => (
                <Link key={auth.id} href={auth.link}>
                  <div className="text-white bg-teal-600 hover:bg-teal-700 transition duration-300 px-4 py-2 rounded">
                    {auth.name}
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuBar;
