


import React from "react";

import { Poppins } from "next/font/google"; // Correct import path for fonts in Next.js 13+

// Load Poppins font with subsets
const poppinsFont = Poppins({
    weight: ["400", "600", "700"], // Specify weights
    subsets: ["latin"], // Specify subsets
});

function AssistanceCta() {


    return (
        <section className={`relative bg-blue-50 py-10 text-blue-900 sm:py-16 lg:py-24 ${poppinsFont.className}`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-3xl">
                        Need Assistance ?
                    </h2>
                    <p className="mt-4 sm:mt-4 px-4 sm:px-40 text-black text- text-left font-light">
                        Tailorsin.com believes in revolutionizing bespoke fashion where
                        customers don’t have to wait for weeks and spend time visiting the
                        tailor-shop. We pick-stitch-deliver outfits to your doorstep within
                        timeframes as low as 24 working hours.
                    </p>
                    <div className="sm mt-8 flex flex-col items-center justify-center sm:flex-row sm:space-x-4 sm:px-0 lg:mt-8">
                        <button className="mt-2 rounded-full border-2 font-semibold text-blue-900 bg-yellow-500 px-8 py-4 transition text-sm hover:translate-y-1">
                            Contact Us
                        </button>
                    </div>
                    {/* <p class="mt-6 text-base ">Already have an account? <a href="#" title="" class="text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700">Log in</a></p> */}
                </div>
            </div>
        </section>


    );
}

export default AssistanceCta;
