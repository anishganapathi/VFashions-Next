'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link for routing

import { Poppins } from "next/font/google"; // Correct import path for fonts in Next.js 13+

// Load Poppins font with subsets
const poppinsFont = Poppins({
    weight: ["400", "600", "700"], // Specify weights
    subsets: ["latin"], // Specify subsets
});

function Navbar() {
    return (
        <div className="bg-white">
            <header
                className={`relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 text-blue-900 md:mx-auto md:flex-row md:items-center ${poppinsFont.className}`}
            >
                <Link
                    href="/"
                    className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-semibold"
                >
                    <Image
                        className="mr-3"
                        alt="logo"
                        src="/images/logo.png"
                        height={40}
                        width={40}
                    />
                    VFashions
                </Link>
                <input type="checkbox" className="peer hidden" id="navbar-open" />
                <label
                    className="absolute top-5 right-7 cursor-pointer md:hidden"
                    htmlFor="navbar-open"
                >
                    <span className="sr-only">Toggle Navigation</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </label>
                <nav
                    aria-label="Header Navigation"
                    className="flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all peer-checked:mt-8 peer-checked:max-h-56 md:ml-24 md:max-h-full md:flex-row md:items-start"
                >
                    <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
                        <li className="font-bold md:mr-12">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="md:mr-12">
                            Services
                        </li>
                        <li className="md:mr-12">
                           Investors
                        </li>
                        <li className="md:mr-12">
                            Media
                        </li>
                        <li className="md:mr-12">
                            <Link href="/contact">Contact</Link>
                        </li>
                        <li className="md:mr-12">
                            <Link href="/tracking">
                                <button className="rounded-full border-2 border-blue-900 px-6 py-1 text-blue-900 transition-colors hover:bg-blue-900 hover:text-white">
                                    Track Order
                                </button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
