import React from "react";
import Image from "next/image";
import logo from "@/assets/healthcare.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-700 text-white py-8 mt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Image src={logo} alt="Healthcare Logo" className="mb-4" />
            <p>
              Copyright © 2022 Mohd Shahzil <br />| All Rights Reserved
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-2">Product</h5>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Case studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Updates
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">Company</h5>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Culture
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">Support</h5>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Getting started
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Server status
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Report a bug
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Chat support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
