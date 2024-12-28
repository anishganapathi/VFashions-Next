


import React from "react";


function Footer() {


    return (
        <footer className="bg-gray-50 border-t border-gray-300">
            <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
                <div className="max-w-sm">
                    <div className="mb-6 flex h-12 items-center space-x-2">
                        <span className="text-2xl font-bold">
                            <span className="text-[#143A79]">Vanitha Fashions</span>.
                        </span>
                    </div>
                    <div className="text-gray-500 font-normal">
                        Vanitha fashions believes in revolutionising bespoke fashion where customers don’t have to wait for weeks and spend time visiting the tailor-shop. We pick-stitch-deliver outfits to your doorstep within timeframes as low as 24 working hours.

                    </div>
                </div>
                <div className="">
                    <div className="mt-4 mb-2 xl:mb-4 font-semibold text-[#143A79]">Address</div>
                    <div className="text-gray-500">
                        +91-1245061188., <br />
                        D. No. 8-2-293/82/A/16       <br />
                        3rd floor, Jubilee Hills road no.5
                    </div>
                </div>
                <div className="">
                    <div className="mt-4 mb-2 xl:mb-4 font-semibold text-[#143A79]">Links</div>
                    <nav aria-label="Footer Navigation" className="text-gray-500">
                        <ul className="space-y-3">
                            <li>
                                <a className="hover:text-blue-600 hover:underline" href="#">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-blue-600 hover:underline" href="#">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-blue-600 hover:underline" href="#">
                                    Investors
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-blue-600 hover:underline" href="#">
                                    How it Works
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-blue-600 hover:underline" href="#">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="">
                    <div className="mt-4 mb-2 xl:mb-4 font-semibold text-[#143A79]">
                        Subscribe to our Newsletter
                    </div>
                    <div className="flex flex-col">
                        <div className="mb-4">
                            <input
                                type="email"
                                className="focus:outline mb-2 block h-14 w-full rounded-xl bg-gray-200 px-4 text-gray-950 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                placeholder="Enter your email"
                            />
                            <button className="block rounded-xl bg-[#143A79] px-6 py-3 font-medium text-white">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
                    <div className="">© 2024 Vanitha fashions | All Rights Reserved</div>
                    <div className="">
                        <a className="" href="#">
                            Privacy Policy
                        </a>
                        <span>|</span>
                        <a className="" href="#">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>





    );
}

export default Footer;

