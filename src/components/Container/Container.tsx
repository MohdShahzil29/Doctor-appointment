import React from "react";
import ContainerImage from "@/assets/Container.png";
import Image from "next/image";

const Container = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 md:pl-[8rem] md:pr-[5rem] mt-5">
      <div className="flex-1 mb-6 md:mb-0">
        <h2 className="text-3xl font-bold text-teal-700 mb-6 md:mb-[54px]">
          You have lots of reasons <br className="hidden md:inline-block" /> to
          choose us
        </h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit{" "}
          <br className="hidden md:inline-block" />
          phasellus mollis sit aliquam sit nullam.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-teal-600 text-white px-6 py-2 rounded-lg shadow hover:bg-teal-700">
            Get started
          </button>
          <button className="bg-white text-teal-600 px-6 py-2 rounded-lg shadow border border-teal-600 hover:bg-gray-100">
            Talk to sales
          </button>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src={ContainerImage}
          alt="Medical team in surgery"
          className="rounded-lg"
          height={500}
          width={500}
        />
      </div>
    </div>
  );
};

export default Container;
