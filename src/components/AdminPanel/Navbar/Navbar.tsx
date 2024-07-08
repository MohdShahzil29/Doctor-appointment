import Link from "next/link";
import React from "react";
import {
  FaCalendarAlt,
  FaComments,
  FaChartPie,
  FaCog,
  FaSignOutAlt,
  FaThLarge,
} from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="h-screen w-16 flex flex-col items-center bg-teal-600 text-white py-4">
      <div className="mb-4">
        <FaThLarge size="24" />
      </div>
      <div className="mb-4 mt-10">
        <FaCalendarAlt size="24" />
      </div>
      <div className="mb-4 mt-10">
        <FaComments size="24" />
      </div>
      <div className="mb-4 mt-10">
        <FaChartPie size="24" />
      </div>
      <div className="mb-4 mt-10">
        <Link href={"/doctor"}>
          <FaUserDoctor size="24" />
        </Link>
      </div>
      <div className="mt-auto">
        <FaSignOutAlt size="24" />
      </div>
    </div>
  );
};

export default Navbar;
