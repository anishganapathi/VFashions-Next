'use client';

import React from 'react';
import Image from 'next/image';

const Details = () => {
  return (
    <div className="flex flex-wrap text-slate-800">
      {/* Left Section */}
      <div className="relative hidden h-screen select-none flex-col justify-center bg-slate-600 text-center md:flex md:w-1/3">
        <Image
          className="mx-auto w-56 max-w-lg rounded-lg object-cover"
          alt="hero-img"
          src="/images/hoodie.jpg"
          height={500}
          width={500}
        />
      </div>

      {/* Right Section */}
      <div className="flex w-full flex-col md:w-2/3">
        <div className="flex justify-center pt-12 md:justify-start md:pl-12">
          <a href="#" className="text-2xl font-bold bg-[#143A79] text-white  px-2 py-1">
            vanithafashions.com
          </a>
        </div>
        <div className="my-auto flex max-w-screen-md flex-col justify-center px-6 pt-8 sm:pt-0 md:pl-12 md:justify-start">
          <p className="text-left text-3xl font-bold md:text-left">Enter your details</p>

          <form className="flex flex-col items-stretch pt-3 pb-8 md:pt-8">
            <div className="grid gap-x-4 gap-y-3 sm:grid-cols-2">
              <label className="block" htmlFor="name">
                <p className="mb-1 mt-2 text-sm text-gray-600">Name</p>
                <input
                  className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-500 focus:ring-2"
                  type="text"
                  placeholder="Enter your name"
                />
              </label>
              <label className="block" htmlFor="phone">
                <p className="mb-1 mt-2 text-sm text-gray-600">E-Mail</p>
                <input
                  className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-500 focus:ring-2"
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </label>
              <label className="block" htmlFor="men">
                <p className="mb-1 mt-2 text-sm text-gray-600">Schedule a Call</p>
                <select
                  className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-500 focus:ring-2"
                >
                  <option value="2">9:00am to 10:00am</option>
                  <option value="5">
                  2:00pm to 3:00pm
                  </option>
                  <option value="10">4:00pm to 5:00pm</option>
                </select>
              </label>
              <label className="block" htmlFor="address">
                <p className="mb-1 mt-2 text-sm text-gray-600">Postal Code</p>
                <input
                  className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-500 focus:ring-2"
                  type="text"
                  placeholder="Enter your PIN Code"
                />
              </label>
              <label className="block sm:col-span-2" htmlFor="message">
                <p className="mb-1 mt-2 text-sm text-gray-600">Address</p>
                <textarea
                  className="h-32 w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-500 focus:ring-2"
                  placeholder="Please enter your details"
                />
              </label>
            </div>
            <div className="block mt-4">
              <label className="inline-block text-sm text-gray-500">
                By clicking submit you agree to the{' '}
                <a className="underline" href="#">
                  Terms and Conditions
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 rounded-full bg-blue-800 px-4 py-2 text-white text-center text-base font-semibold shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-600 focus:ring-2 md:w-40"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Details;
