import Navbar from "@/components/AdminPanel/Navbar/Navbar";
import DoctorCreate from "@/components/AdminPanel/Doctor/Doctor";

import React from "react";

const Doctor = () => {
  return (
    <div className="flex">
      <Navbar />
      <DoctorCreate />
    </div>
  );
};

export default Doctor;
