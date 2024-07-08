"use client";
import React, { useState } from "react";
import axios from "axios";
import {
  FaUserMd,
  FaEnvelope,
  FaCalendarAlt,
  FaCamera,
  FaHospital,
} from "react-icons/fa";
import Image from "next/image";

type Doctor = {
  photo: File | null;
  name: string;
  department: string;
  gender: string;
  email: string;
  dob: string;
};

const CreateDoctor: React.FC = () => {
  const [doctor, setDoctor] = useState<Doctor>({
    photo: null,
    name: "",
    department: "",
    gender: "",
    email: "",
    dob: "",
  });

  const [error, setError] = useState<string>("");

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    if (name === "photo" && files) {
      setDoctor({ ...doctor, [name]: files[0] });
    } else {
      setDoctor({ ...doctor, [name]: value });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (
      !doctor.name ||
      !doctor.department ||
      !doctor.gender ||
      !doctor.email ||
      !doctor.dob ||
      !doctor.photo
    ) {
      setError("Please fill all the details.");
      return;
    }

    const formData = new FormData();
    formData.append("name", doctor.name);
    formData.append("department", doctor.department);
    formData.append("gender", doctor.gender);
    formData.append("email", doctor.email);
    formData.append("dob", doctor.dob);
    if (doctor.photo) {
      formData.append("photo", doctor.photo);
    }

    try {
      const response = await axios.post("/api/createDoctor", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        console.log("Doctor created successfully", response.data);
        setError(""); // Clear error message
      }
    } catch (error) {
      console.error("There was an error creating the doctor!", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-6 text-teal-600">Create Doctor</h1>
      {error && (
        <div className="mb-4 p-2 bg-red-200 text-red-700 rounded">{error}</div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label
              htmlFor="photo"
              className="mb-2 text-sm font-semibold text-gray-600 flex items-center"
            >
              <FaCamera className="mr-2" /> Doctor Photo
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              onChange={handleChange}
              className="border p-2 rounded-md"
            />
            {doctor.photo && (
              <div className="mt-4">
                <Image
                  src={URL.createObjectURL(doctor.photo)}
                  alt="Doctor Photo"
                  width={200}
                  height={200}
                  className="rounded-md"
                />
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="mb-2 text-sm font-semibold text-gray-600 flex items-center"
            >
              <FaUserMd className="mr-2" /> Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={doctor.name}
              onChange={handleChange}
              className="border p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="department"
              className="mb-2 text-sm font-semibold text-gray-600 flex items-center"
            >
              <FaHospital className="mr-2" /> Department
            </label>
            <input
              type="text"
              id="department"
              name="department"
              value={doctor.department}
              onChange={handleChange}
              className="border p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="gender"
              className="mb-2 text-sm font-semibold text-gray-600 flex items-center"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={doctor.gender}
              onChange={handleChange}
              className="border p-2 rounded-md"
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="mb-2 text-sm font-semibold text-gray-600 flex items-center"
            >
              <FaEnvelope className="mr-2" /> Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={doctor.email}
              onChange={handleChange}
              className="border p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="dob"
              className="mb-2 text-sm font-semibold text-gray-600 flex items-center"
            >
              <FaCalendarAlt className="mr-2" /> Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={doctor.dob}
              onChange={handleChange}
              className="border p-2 rounded-md"
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="bg-teal-600 text-white px-4 py-2 rounded-md"
          >
            Create Doctor
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateDoctor;
