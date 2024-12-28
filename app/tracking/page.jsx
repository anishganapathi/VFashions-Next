'use client';

import React from "react";

function Tracking() {
    return (
        <div className="m-20">
        <div className="relative my-10 flex h-full flex-col overflow-hidden rounded-2xl bg-white text-gray-600 shadow-lg ring-1 ring-gray-200">
            <div className="border-b p-6">
                <h6 className="mb-2 text-base font-semibold">Shipped with Vanitha Fashions</h6>
                <p className="mb-4 text-sm font-light">
                    <i
                        className="inline-block font-black not-italic text-green-600"
                        aria-hidden="true"
                    ></i>
                    <span className="font-semibold">Tracking ID:</span> 151427799586
                </p>
            </div>
            <div className="flex-auto p-6">
                <div className="relative flex flex-col justify-center">
                    <div className="absolute left-4 h-full border-r-2"></div>
                    <div className="relative mb-4">
                        <span className="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-center text-base font-semibold text-white shadow">
                            A
                        </span>
                        <div className="ml-12 w-auto pt-1">
                            <h6 className="text-sm font-semibold text-blue-900">
                                Package arrived at final delivery station
                            </h6>
                            <p className="mt-1 text-xs text-gray-500">22 DEC 7:20 PM (MUMBAI, IN)</p>
                        </div>
                    </div>
                    <div className="relative mb-4">
                        <span className="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-center text-base font-semibold text-white shadow">
                            B
                        </span>
                        <div className="ml-12 w-auto pt-1">
                            <h6 className="text-sm font-semibold text-blue-900">
                                Package has left Facility
                            </h6>
                            <p className="mt-1 text-xs text-gray-500">21 DEC 11 PM (MUMBAI, IN)</p>
                        </div>
                    </div>
                    <div className="relative mb-4">
                        <span className="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-center text-base font-semibold text-white shadow">
                            C
                        </span>
                        <div className="ml-12 w-auto pt-1">
                            <h6 className="text-sm font-semibold text-blue-900">
                                Package arrived at facility
                            </h6>
                            <p className="mt-1 text-xs text-gray-500">21 DEC 9:34 PM (Andheri, MUMBAI, IN)</p>
                        </div>
                    </div>
                    <div className="relative mb-4">
                        <span className="absolute inline-flex h-6 w-6 items-center justify-center text-center text-base font-semibold">
                            <span className="text-xl text-orange-600"></span>
                        </span>
                        <div className="ml-12 w-auto pt-1">
                            <h6 className="text-sm font-semibold text-blue-900">
                              Package has been picked up by Courier
                            </h6>
                            <p className="mt-1 text-xs text-gray-500">20 DEC 2:20 AM (MUMBAI, IN)</p>
                        </div>
                    </div>
                    <div className="relative mb-4">
                        <span className="absolute inline-flex h-6 w-6 items-center justify-center text-center text-base font-semibold">
                            <span className="text-xl text-red-600"></span>
                        </span>
                        <div className="ml-12 w-auto pt-1">
                            <h6 className="text-sm font-semibold text-blue-900">
                                Package has shipped
                            </h6>
                            <p className="mt-1 text-xs text-gray-500">18 DEC 4:54 AM (MUMBAI, IN)</p>
                        </div>
                    </div>
                    <div className="relative">
                        <span className="absolute inline-flex h-6 w-6 items-center justify-center text-center text-base font-semibold">
                            <span className="text-xl text-blue-900"></span>
                        </span>
                        <div className="ml-12 w-auto pt-1">
                            <h6 className="text-sm font-semibold text-blue-900">
                                Ordered Saturday
                            </h6>
                            <p className="mt-1 text-xs text-gray-500">17 DEC 4:54 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Tracking;
