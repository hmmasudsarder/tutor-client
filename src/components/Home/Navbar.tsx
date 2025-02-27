"use client";
import { useState } from "react";
import { LogOut } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Left Side - Logo */}
                <div className="text-xl font-bold">LOG</div>

                {/* Middle - Menu (Hidden on Mobile) */}
                <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <li className="cursor-pointer hover:text-blue-500">Home</li>
                    <li className="cursor-pointer hover:text-blue-500">Find Tutors</li>
                    <li className="cursor-pointer hover:text-blue-500">About</li>
                    <li className="cursor-pointer hover:text-blue-500">Blog</li>
                    <li className="cursor-pointer hover:text-blue-500">FAQ</li>
                </ul>

                {/* Right Side - Profile Image & Dropdown */}
                <div className="relative">
                    <button onClick={() => setIsOpen(!isOpen)} className="flex items-center">
                        <Image
                            src="https://i.pravatar.cc/40"
                            alt="Profile"
                            className="w-10 h-10 rounded-full border"
                            width={40}
                            height={40}
                        />
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border">
                            <p className="px-4 py-2 text-gray-700 font-semibold">My Account</p>
                            <ul className="text-gray-700">
                                <ul className="flex flex-col md:hidden space-x-6 text-gray-700 font-medium">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Home</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Find Tutors</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">About</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Blog</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">FAQ</li>
                                </ul>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Dashboard</li>
                                <li className="px-4 py-2 text-red-500 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                                    <LogOut size={16} /> Log Out
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

