import React from "react";
import Image from "next/image";
import modal2 from "@/assets/modal2.png";
import vector from "@/assets/Vector.png";
import { IoMdPlayCircle } from "react-icons/io";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-5 relative md:pl-[10rem] md:pr-[5rem]">
      <div className="w-full md:max-w-1/2 mb-8 md:mb-0">
        <h1 className="text-3xl md:text-4xl text-gray-800">
          Providing Quality <span className="text-green-600">Healthcare</span>{" "}
          For A <br className="hidden md:block" />
          <span className="text-yellow-500">Brighter</span> And{" "}
          <span className="text-green-600">Healthy</span> Future
        </h1>
        <p className="text-base md:text-lg text-gray-600 mt-4">
          At Our Hospital, We Are Dedicated To Providing Exceptional{" "}
          <br className="hidden md:block" />
          Medical Care To Our Patients And Their Families. Our{" "}
          <br className="hidden md:block" />
          Experienced Team Of Medical Professionals, Cutting-Edge{" "}
          <br className="hidden md:block" />
          Technology, And Compassionate Approach Make Us A Leader{" "}
          <br className="hidden md:block" />
          In The Healthcare Industry.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button className="px-9 py-3 bg-[#007E85] text-white rounded-md h-[3rem]">
            Appointments
          </button>
          <button className="hidden md:flex px-9 py-3 rounded-md items-center gap-2 h-[3rem]">
            <IoMdPlayCircle size={45} color="#007E85" />
            Watch Video
          </button>
        </div>
      </div>
      <div className="relative lg:pr-[4rem] md:max-w-1/2">
        <Image
          src={modal2}
          alt="Doctor"
          className="w-full rounded-lg relative z-10"
        />
        <div className="absolute top-2 right-2 bg-white p-2 rounded-md text-sm font-bold z-20">
          24/7 Service
        </div>
        <div className="absolute bottom-2 left-2 bg-white p-2 rounded-md text-sm flex items-center gap-2 z-20">
          <Image src={vector} alt="Professionals icon" width={20} height={20} />
          Our Professionals
        </div>
      </div>
    </div>
  );
};

export default Banner;
