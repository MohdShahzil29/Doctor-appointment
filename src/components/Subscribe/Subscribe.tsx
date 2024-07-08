import React from "react";

const Subscribe = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="p-6 rounded-md max-w-[52rem] w-full">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Subscribe to our newsletter
        </h2>
        <form className="flex items-center gap-7">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 flex-1 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg"
          />
          <button
            type="submit"
            className="p-2 bg-teal-500 rounded-md text-center text-white font-semibold rounded-r-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 px-[20px]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
