import React, { useState } from "react";

const Test = () => {
  return <ResumeBuilder />;
};

export default Test;

const ResumeBuilder = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Section */}
      <div className="w-full lg:w-1/3 bg-gray-50 p-4 border-r border-gray-200">
        {/* Progress Bar */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Progress</h2>
          <div className="w-full bg-gray-300 h-2 rounded-lg overflow-hidden">
            <div className="bg-blue-500 h-2 w-2/3"></div>
          </div>
        </div>
        {/* Form Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Form Section</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Next
            </button>
          </form>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-2/3 bg-white p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Resume Preview</h2>
        <div className="h-full border border-gray-300 rounded-lg p-4 overflow-y-auto">
          <p className="text-gray-500">Your resume preview will appear here...</p>
        </div>
      </div>
    </div>
  );
};
