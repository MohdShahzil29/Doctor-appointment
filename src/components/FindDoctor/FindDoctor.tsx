import React from "react";

const FindDoctor = () => {
  return (
    <div className="bg-white shadow-sm p-4 border-2 rounded-lg w-full max-w-[1306px] mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-4">Find A Doctor</h1>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white">
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-300 p-3 rounded-md w-full md:flex-grow"
        />
        <input
          type="text"
          placeholder="Speciality"
          className="border border-gray-300 p-3 rounded-md w-full md:flex-grow"
        />
        <button className="px-6 py-3 bg-[#007E85] text-white text-center font-bold rounded-md w-full md:w-auto">
          Search
        </button>
      </div>
    </div>
  );
};

export default FindDoctor;
