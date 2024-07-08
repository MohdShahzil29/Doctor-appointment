"use client";
import React from "react";
import withAuth from "@/utils/withAuth";
import Navbar from "@/components/AdminPanel/Navbar/Navbar";
import Details from "@/components/AdminPanel/Details/Details";

const AdminPanel = () => {
  return (
    <div className="flex">
      <Navbar />
      <Details />
    </div>
  );
};

export default withAuth(AdminPanel, "admin");
