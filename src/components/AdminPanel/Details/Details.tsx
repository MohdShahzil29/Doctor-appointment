import React from "react";
import { FaBell, FaComments, FaUserMd } from "react-icons/fa";
import DoctorImage from "@/assets/doctor.png";
import Image from "next/image";

const Details = () => {
  return (
    <div className="flex-1 p-6 bg-gray-100">
      <header className="flex justify-between items-center mb-6">
        <div className="text-xl font-semibold">
          Good Morning <span className="text-teal-600">Dr. Kim!</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaComments size="24" className="text-gray-600" />
          <FaBell size="24" className="text-gray-600" />
          <div className="h-10 w-10 rounded-full overflow-hidden">
            <Image src={DoctorImage} alt="Doctor" />
          </div>
        </div>
      </header>
      <section className="grid grid-cols-12 gap-6">
        <div className="col-span-8 bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="text-lg font-bold">Visits for Today</div>
              <div className="text-4xl font-bold">104</div>
            </div>
            <Image src={DoctorImage} alt="Doctor" className="h-24 w-24" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
              <div>New Patients</div>
              <div className="text-green-500 font-bold">40</div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
              <div>Old Patients</div>
              <div className="text-red-500 font-bold">64</div>
            </div>
          </div>
        </div>
        <div className="col-span-4 bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <div className="text-lg font-bold">Calendar</div>
            <div>September 2022</div>
          </div>
          <div className="mb-4">
            <div className="text-sm font-bold">Upcoming</div>
            <div className="text-gray-600">Monthly doctor's meet</div>
            <div>8 April, 2021 | 04:00 PM</div>
          </div>
          <div>
            <div className="text-sm font-bold">Daily Read</div>
            <div className="text-gray-600">
              Equitable medical education with efforts toward real change
            </div>
          </div>
        </div>
      </section>
      <section className="mt-6 bg-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-6">
            <div className="text-lg font-bold">Patient List</div>
            <ul>
              {["Stacy Mitchell", "Amy Dunham", "Demi Joan", "Susan Myers"].map(
                (patient, index) => (
                  <li
                    key={index}
                    className="py-2 flex justify-between items-center"
                  >
                    <div className="flex items-center">
                      <select className="mr-4 bg-gray-200 p-2 rounded">
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="visited">Visited</option>
                        <option value="canceled">Canceled</option>
                      </select>
                      <span>{patient}</span>
                    </div>
                    <span className="bg-gray-200 px-2 py-1 rounded-full">
                      {["8:15 AM", "8:30 AM", "9:50 AM", "10:15 AM"][index]}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="col-span-6">
            <div className="text-lg font-bold">Consultation</div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center mr-4">
                  <span>DW</span>
                </div>
                <div>
                  <div className="font-bold">Denzel White</div>
                  <div>Male - 28 Years 3 Months</div>
                </div>
              </div>
              <div className="mb-4">
                <div className="text-sm font-bold">Last Checked</div>
                <div className="text-gray-600">
                  Dr. Everly on 21 April 2021 Prescription #ZX83671Q
                </div>
              </div>
              <div className="mb-4">
                <div className="text-sm font-bold">Observation</div>
                <div className="text-gray-600">
                  High fever and cough at normal hemoglobin levels.
                </div>
              </div>
              <div>
                <div className="text-sm font-bold">Prescription</div>
                <div className="text-gray-600">
                  Paracetamol - 2 times a day Diclompan - Day and Night before
                  meal Vikoryl
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
