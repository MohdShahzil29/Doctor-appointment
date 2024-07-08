"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import serviceBackground from "@/assets/Service.png";
import Image from "next/image";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ServiceBanner: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    department: "",
    time: "",
  });

  const router = useRouter();
  const { user, token } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!user) {
      router.push("/login"); // Redirect to login if not authenticated
    }
  }, [user, router]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) {
      toast.error("You must be logged in to book an appointment.");
      router.push("/login");
      return;
    }
    try {
      const res = await axios.post("/api/auth/appointment", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 201) {
        toast.success("Appointment booked successfully");
        setForm({
          name: "",
          email: "",
          dateOfBirth: "",
          gender: "",
          department: "",
          time: "",
        });
      } else {
        toast.error("Error booking appointment");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error booking appointment");
    }
  };

  return (
    <div className="relative flex flex-col lg:flex-row h-screen">
      <ToastContainer />
      <div className="relative w-full lg:w-2/3 h-1/2 lg:h-full">
        <Image
          src={serviceBackground}
          alt="Service image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 bg-black bg-opacity-50">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Meet the Best Hospital
          </h1>
          <p className="mb-6">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex justify-center mb-6">
            <button className="bg-teal-500 text-white px-4 py-2 rounded-md mr-4">
              Get Quote Now
            </button>
            <button className="bg-teal-500 text-white px-4 py-2 rounded-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3 bg-white p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Book Appointment
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700">Email address</label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              placeholder="example@gmail.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              value={form.dateOfBirth}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700">Gender</label>
            <select
              name="gender"
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              value={form.gender}
              onChange={handleChange}
            >
              <option value="">Please Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Department</label>
            <select
              name="department"
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              value={form.department}
              onChange={handleChange}
            >
              <option value="">Please Select</option>
              <option value="Eye Checkup">Eye Checkup</option>
              <option value="Mouth Checkup">Mouth Checkup</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Orthopedics">Orthopedics</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Time</label>
            <select
              name="time"
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              value={form.time}
              onChange={handleChange}
            >
              <option value="">Please Select</option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-teal-500 text-white px-4 py-2 rounded-md w-full"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceBanner;
