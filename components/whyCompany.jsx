import React from "react";
import { Poppins } from "next/font/google"; // Correct import path for fonts in Next.js 13+

// Load Poppins font with subsets
const poppinsFont = Poppins({
    weight: ["400", "600", "700"], // Specify weights
    subsets: ["latin"], // Specify subsets
});

function WhyCompany() {
    return (
        <div className={`max-w-7xl mx-auto px-4 py-12 ${poppinsFont.className}`}>
            <h2 className="text-3xl font-bold text-black text-center mb-4">Why choose Tailorsin?</h2>
            <p className="text-center text-gray-600 mb-8">Masters of Bespoke Fashion</p>
            <div className="grid sm:px-24 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Bridal Wear */}
                <div className="relative group">
                    <img
                        src="/images/1.png"
                        alt="Bridal wear"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition rounded-sm" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                        <h3 className="text-xl font-semibold">Bridal wear</h3>
                    </div>
                </div>
                {/* Western Wear */}
                <div className="relative group lg:col-span-2">
                    <img
                        src="/images/Placeholder.png"
                        alt="Western wear"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition" />
                    <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-2.5 sm:px-0">
                        <h3 className="text-base sm:text-2xl font-bold m-2 sm:m-6 ">Western wear</h3>
                        <p className="text-sm sm:text-md font-normal m-2 sm:m-6 text-gray-200/80">
                            For your busy Monday to casual Sundays, you need a range of western wear in your closet. We have expertise in every kind of western wear from pants, tops, and dresses to jackets and blazers. You want it? We got it...!!
                        </p>
                        <button className="mt-4 px-4 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition m-2 sm:m-6">
                            Learn More
                        </button>
                    </div>

                </div>
                {/* Men's Wear */}
                <div className="relative group">
                    <img
                        src="/images/2.png"
                        alt="Men's wear"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                        <h3 className="text-xl font-semibold">Men's wear</h3>
                    </div>
                </div>
                {/* Alterations */}
                <div className="relative group">
                    <img
                        src="/images/3.png"
                        alt="Alterations"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                        <h3 className="text-xl font-semibold">Alterations</h3>
                    </div>
                </div>
                {/* Upcycling */}
                <div className="relative group">
                    <img
                        src="/images/4.png"
                        alt="Upcycling"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                        <h3 className="text-xl font-semibold">Upcycling</h3>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default WhyCompany;
