"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleContinue = () => {
    let error = "";

    if (!/^\d{10}$/.test(mobileNumber)) {
      error += "Mobile number is not valid. ";
    }

    if (!isChecked) {
      error += "Please authorize the terms.";
    }

    if (error) {
      setErrorMessage(error);
    } else {
      setErrorMessage("");
      window.location.href = "/verification"; // Redirect if valid
    }
  };

  return (
    <div>
      <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        {/* Image Column */}
        <div className="w-full lg:w-1/2 h-96 lg:h-auto hidden sm:block">
          <Image
            className="rounded-lg object-cover"
            alt="hero-img"
            src="/images/hero.png"
            height={990}
            width={550}
          />
        </div>
        {/* Text Column */}
        <div className="max-w-lg bg-white rounded-2xl md:max-w-2xl md:z-10 md:shadow-2xl border border-gray-200 md:absolute md:top-0 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-12 xl:mt-10 xl:ml-12">
          {/* Text Wrapper */}
          <div className="flex flex-col p-12 md:px-16">
            <div className="relative text-blue-600">
              <div className={`flex flex-col`}>
                <p className="text-2xl sm:text-3xl font-semibold text-black">
                  To Schedule a Pick Up
                </p>
                <div className="mt-8 flex flex-col">
                  <input
                    className="mt-2 border bg-gray-200 py-4 px-4 outline-none ring-[#143A79] focus:ring rounded-full"
                    type="text"
                    name="mobile"
                    id="mobile"
                    placeholder="Enter Mobile Number"
                    value={mobileNumber}
                    onChange={(e) =>
                      setMobileNumber(e.target.value.replace(/[^0-9]/g, ""))
                    } // Allow only numbers
                    maxLength={10} // Limit input to 10 characters
                  />
                </div>
                <div className="w-full sm:mt-4 mt-4 flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="mr-2"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                  <label
                    className="font-bold text-sm text-[#143A79]"
                    htmlFor="remember-me"
                  >
                    I hereby authorize to be contacted through call/SMS.
                  </label>
                </div>
              </div>
              {errorMessage && (
                <p className="mt-4 text-sm font-bold text-red-600">
                  {errorMessage}
                </p>
              )}
              <button
                className="mt-10 w-52 bg-[#143A79] hover:bg-blue-700 transition-all duration-200 px-6 py-3 font-bold text-white outline-none ring-blue-300 focus:ring rounded-3xl"
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
          </div>
          {/* Close Text Wrapper */}
        </div>
        {/* Close Text Column */}
      </div>
    </div>
  );
}

export default Hero;
