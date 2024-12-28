'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Verification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const router = useRouter(); // Initialize the useRouter hook

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return; // Only allow numeric input
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Automatically move to the next input if the current input is filled
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  return (
    <div className="mx-auto my-10 flex max-w-md flex-col rounded-lg border px-8 py-10 shadow-lg">
      <p className="text-xl font-medium text-black">Please check your email</p>
      <p className="mb-4 text-lg text-gray-500">We've sent a code to +91 97XXXXXX10</p>
      <div className="mb-2 flex space-x-4">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            className="flex h-16 w-16 items-center justify-center rounded-xl border text-black text-center text-4xl font-medium sm:h-20 sm:w-20 sm:text-6xl"
          />
        ))}
      </div>
      <p className="mb-4 text-gray-500">
        Didn't get a code? <button className="font-black hover:text-gray-900">Click to resend</button>
      </p>
      <div className="flex flex-col sm:flex-row">
  <button className="w-full rounded-3xl border px-8 py-2 font-medium hover:bg-gray-100 text-black sm:mr-4">
    Cancel
  </button>
  <Link href="/details">
    <button className="w-full  rounded-3xl border bg-[#143A79] px-8 py-2 font-medium text-white hover:bg-blue-700">
      Verify
    </button>
  </Link>
</div>

    </div>
  );
};

export default Verification;
