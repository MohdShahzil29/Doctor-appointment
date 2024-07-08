import React from "react";

const Results = () => {
  return (
    <div className="py-10 mt-3">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-teal-700">
          Our results in numbers
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-teal-700">99%</h3>
          <p className="text-gray-700">Customer satisfaction</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-teal-700">15k</h3>
          <p className="text-gray-700">Online Patients</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-teal-700">12k</h3>
          <p className="text-gray-700">Patients Recovered</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-teal-700">240%</h3>
          <p className="text-gray-700">Company growth</p>
        </div>
      </div>
    </div>
  );
};

export default Results;
