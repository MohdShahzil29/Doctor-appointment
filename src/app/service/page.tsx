import React from "react";
import FindDoctor from "@/components/FindDoctor/FindDoctor";
import ServiceBanner from "@/components/ServiceBanner/ServiceBanner";
import ServiceProvide from "@/components/Service/Service";
const Service = () => {
  return (
    <div>
      <ServiceBanner />
      <FindDoctor />
      <ServiceProvide />
    </div>
  );
};

export default Service;
