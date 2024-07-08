import React from "react";
import Image from "next/image";

// Images for service
import service1 from "@/assets/Feed/1.png";
import service2 from "@/assets/Feed/2.png";
import service3 from "@/assets/Feed/3.png";
import service4 from "@/assets/Feed/4.png";
import service5 from "@/assets/Feed/5.png";
import service6 from "@/assets/Feed/6.png";

// Type for imported images
import { StaticImageData } from "next/image";

type ServiceType = {
  image: StaticImageData;
  title: string;
  description: string;
};

const services: ServiceType[] = [
  {
    image: service1,
    title: "Dental treatments",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
  },
  {
    image: service2,
    title: "Bones treatments",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
  },
  {
    image: service3,
    title: "Diagnosis",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
  },
  {
    image: service4,
    title: "Cardiology",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
  },
  {
    image: service5,
    title: "Surgery",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
  },
  {
    image: service6,
    title: "Eye care",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
  },
];

const Service: React.FC = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-12">
      <div className="text-center mb-8">
        <h1 className="text-teal-700 text-3xl font-bold">
          Services we provide
        </h1>
        <p className="text-[#555555] mt-2">
          Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
          <br className="hidden md:block" />
          elementum tempus hac tellus libero accumsan.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-[#FAFAFA] p-4 rounded-lg text-center">
            <Image
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover rounded-t-lg"
              width={343}
              height={220}
            />
            <h2 className="text-lg font-semibold text-teal-700 mt-4">
              {service.title}
            </h2>
            <p className="text-[#555555] mt-2">{service.description}</p>
            <a href="#" className="text-teal-700 mt-4 inline-block">
              Learn more →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
