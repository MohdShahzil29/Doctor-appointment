import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
// team image import
import member1 from "@/assets/Team/1.png";
import member2 from "@/assets/Team/2.png";
import member3 from "@/assets/Team/3.png";
import member4 from "@/assets/Team/4.png";
import member5 from "@/assets/Team/5.png";
import member6 from "@/assets/Team/6.png";

import Image from "next/image";
import { StaticImageData } from "next/image";

// Define a type for the team member
interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: StaticImageData;
}

const teamMembers: TeamMember[] = [
  {
    name: "John Carter",
    role: "CEO & Co-Founder",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi.",
    image: member1,
  },
  {
    name: "Sophie Moore",
    role: "Dental Specialist",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi.",
    image: member2,
  },
  {
    name: "Matt Cannon",
    role: "Orthopedic",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi.",
    image: member3,
  },
  {
    name: "Andy Smith",
    role: "Brain Surgeon",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi.",
    image: member4,
  },
  {
    name: "Lily Woods",
    role: "Heart Specialist",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi.",
    image: member5,
  },
  {
    name: "Patrick Meyer",
    role: "Eye Specialist",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi.",
    image: member6,
  },
];

const Team: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-8">
        <h1 className="text-teal-700 text-3xl font-bold">
          Meet our team members
        </h1>
        <p className="text-[#555555] mt-2">
          Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
          <br />
          elementum tempus hac tellus libero accumsan.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="p-4 shadow-lg rounded-lg text-center bg-white"
          >
            <Image
              src={member.image}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h2 className="text-xl font-bold mt-4">{member.name}</h2>
            <h3 className="text-teal-700 mt-2">{member.role}</h3>
            <p className="text-[#555555] mt-2">{member.description}</p>
            <div className="flex justify-center mt-4">
              <a href="#" className="mx-2 text-teal-700">
                <FaFacebookF />
              </a>
              <a href="#" className="mx-2 text-teal-700">
                <FaTwitter />
              </a>
              <a href="#" className="mx-2 text-teal-700">
                <FaInstagram />
              </a>
              <a href="#" className="mx-2 text-teal-700">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
