'use client'
import { useState } from 'react';
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import Image from "next/image";

export const metdata = {
  title: "AgriChat",
  openGraph: {
    title: "AgriChat",
    description: "AgriChat is a chatbot that helps farmers with their problems.",
  },
};

export default function RootLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <html>
      <head>
        <title>AgriChat</title>
        <link rel="icon" href="/static/images/favicon.ico" type="image/x-icon"></link>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <header>
          <div className="relative bg-white">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="https://agritechly.tech">
                  <span className="sr-only">Agritechly</span>
                  <Image src="https://agritechly.tech/static/images/agritechname.png" alt="Agritechly" width={200} height={30} />
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={toggleMobileMenu}
                >
                  <span className="sr-only">Open menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              <nav className="hidden md:flex space-x-10">
                <a href="https://agritechly.tech" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Home
                </a>
                <a href="https://agritechly.tech/models" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Models
                </a>
                <a href="https://chat.agritechly.tech" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  AgriChat
                </a>
              </nav>
            </div>
            <div
              className={`absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden ${isMobileMenuOpen ? '' : 'hidden'}`}
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <Image src="/static/images/agritechname.png" alt="Agritechly" width={200} height={50} />
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                        onClick={toggleMobileMenu}
                      >
                        <span className="sr-only">Close menu</span>
                        <svg className="h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid grid-cols-1 gap-7">
                      <a href="index" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-green-600 text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                          </svg>
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">
                          Home
                        </div>
                      </a>
                      <a href="chat" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-green-600 text-white">
                          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                          </svg>
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">
                          AgriChat
                        </div>
                      </a>
                      <a href="models" className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-green-600 text-white">
                          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">
                          Models
                        </div>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {children}
        <Analytics />
      </body>
    </html>
  );
}