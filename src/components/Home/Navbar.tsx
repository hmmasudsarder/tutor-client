"use client";
import { useState } from "react";
import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { logout } from "@/services/AuthService";
import { protectedRoutes } from "@/contants";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { user, setIsLoading } = useUser();
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const isActiveLink = (href: string) => {
        return href === pathname;
    };
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = () => {
        logout();
        setIsLoading(true);
        if (protectedRoutes.some((route) => pathname.match(route))) {
            router.push("/");
        }
    };

    const toggleMegaMenu = (state: boolean) => setIsMegaMenuOpen(state);

    const url = user?.role === "student" ? "/student/dashboard"
        : user?.role === "tutor"
            ? "/teacher/dashboard"
            : "/dashboard";
    const profileurl =
        user?.role === "student"
            ? "/student/dashboard"
            : user?.role === "tutor"
                ? "/teacher/profile"
                : "/dashboard";

    return (
        <nav className="bg-[#40282C] shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Left Side - Logo */}
                <Link href="/">
                    <svg
                        width="100%"
                        height="61"
                        viewBox="0 0 91 61"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[61px] lg:w-[96px]"
                    >
                        <path
                            d="M67.9047 46.6867C67.5154 46.6867 67.1893 46.5657 66.9263 46.3237C66.6738 46.0712 66.5475 45.7609 66.5475 45.3926C66.5475 45.0244 66.6738 44.7193 66.9263 44.4773C67.1893 44.2248 67.5154 44.0986 67.9047 44.0986C68.294 44.0986 68.6149 44.2248 68.8674 44.4773C69.1304 44.7193 69.2619 45.0244 69.2619 45.3926C69.2619 45.7609 69.1304 46.0712 68.8674 46.3237C68.6149 46.5657 68.294 46.6867 67.9047 46.6867ZM68.9936 47.7283V56.4712H66.7842V47.7283H68.9936ZM76.0948 47.602C77.1364 47.602 77.9781 47.9334 78.6198 48.5963C79.2616 49.2486 79.5825 50.1639 79.5825 51.3422V56.4712H77.3731V51.6421C77.3731 50.9477 77.1995 50.4164 76.8523 50.0482C76.5051 49.6694 76.0317 49.48 75.432 49.48C74.8218 49.48 74.3378 49.6694 73.9801 50.0482C73.6329 50.4164 73.4593 50.9477 73.4593 51.6421V56.4712H71.2499V47.7283H73.4593V48.8172C73.7539 48.4385 74.1274 48.1439 74.5798 47.9334C75.0427 47.7125 75.5477 47.602 76.0948 47.602ZM85.1815 47.5863C85.8338 47.5863 86.4072 47.7178 86.9017 47.9808C87.3961 48.2333 87.7854 48.5647 88.0695 48.975V47.7283H90.2947V56.5343C90.2947 57.3444 90.1316 58.0651 89.8054 58.6964C89.4793 59.3381 88.9901 59.8432 88.3378 60.2114C87.6855 60.5901 86.8964 60.7795 85.9706 60.7795C84.7291 60.7795 83.7086 60.4902 82.909 59.9115C82.1199 59.3329 81.6728 58.5438 81.5675 57.5443H83.7612C83.8769 57.9441 84.1241 58.2598 84.5029 58.4912C84.8922 58.7332 85.3603 58.8542 85.9074 58.8542C86.5492 58.8542 87.07 58.6595 87.4698 58.2703C87.8696 57.8915 88.0695 57.3129 88.0695 56.5343V55.1771C87.7854 55.5874 87.3909 55.9294 86.8859 56.2029C86.3914 56.4765 85.8233 56.6132 85.1815 56.6132C84.445 56.6132 83.7717 56.4238 83.1615 56.0451C82.5513 55.6663 82.0673 55.135 81.7096 54.4512C81.3624 53.7568 81.1888 52.9625 81.1888 52.0682C81.1888 51.1844 81.3624 50.4006 81.7096 49.7167C82.0673 49.0329 82.546 48.5068 83.1457 48.1386C83.7559 47.7704 84.4345 47.5863 85.1815 47.5863ZM88.0695 52.0997C88.0695 51.5632 87.9643 51.1055 87.7539 50.7268C87.5434 50.3375 87.2594 50.0429 86.9017 49.843C86.544 49.6326 86.1599 49.5274 85.7496 49.5274C85.3393 49.5274 84.9606 49.6273 84.6134 49.8272C84.2662 50.0271 83.9821 50.3217 83.7612 50.711C83.5507 51.0897 83.4455 51.5421 83.4455 52.0682C83.4455 52.5942 83.5507 53.0571 83.7612 53.4569C83.9821 53.8462 84.2662 54.1461 84.6134 54.3565C84.9711 54.5669 85.3498 54.6721 85.7496 54.6721C86.1599 54.6721 86.544 54.5722 86.9017 54.3723C87.2594 54.1618 87.5434 53.8673 87.7539 53.4885C87.9643 53.0992 88.0695 52.6363 88.0695 52.0997Z"
                            fill="white"
                        />
                        <path
                            d="M24.5172 47.4805C25.2013 47.4805 25.8094 47.6271 26.3415 47.9203C26.8845 48.2135 27.308 48.6478 27.612 49.2234C27.9269 49.7989 28.0844 50.4939 28.0844 51.3083V56.602H26.2438V51.5852C26.2438 50.7816 26.0429 50.1681 25.6411 49.7446C25.2393 49.3102 24.691 49.0931 23.996 49.0931C23.301 49.0931 22.7472 49.3102 22.3346 49.7446C21.9328 50.1681 21.7319 50.7816 21.7319 51.5852V56.602H19.875V44.5486H21.7319V48.6696C22.0468 48.2895 22.4431 47.9963 22.9209 47.79C23.4096 47.5837 23.9417 47.4805 24.5172 47.4805Z"
                            fill="white"
                        />
                        <path
                            d="M9.48438 52.1071C9.48438 51.1841 9.66898 50.3751 10.0382 49.6801C10.4182 48.9743 10.9395 48.4314 11.6019 48.0513C12.2643 47.6712 13.0244 47.4812 13.8823 47.4812C14.9682 47.4812 15.864 47.7418 16.5699 48.263C17.2865 48.7734 17.7698 49.5064 18.0195 50.462H16.016C15.8532 50.0168 15.5925 49.6693 15.2342 49.4195C14.8759 49.1698 14.4252 49.0449 13.8823 49.0449C13.1221 49.0449 12.514 49.3164 12.058 49.8593C11.6127 50.3914 11.3901 51.1407 11.3901 52.1071C11.3901 53.0736 11.6127 53.8283 12.058 54.3712C12.514 54.9142 13.1221 55.1856 13.8823 55.1856C14.9573 55.1856 15.6686 54.7133 16.016 53.7685H18.0195C17.7589 54.6807 17.2703 55.4083 16.5536 55.9512C15.8369 56.4833 14.9464 56.7493 13.8823 56.7493C13.0244 56.7493 12.2643 56.5593 11.6019 56.1792C10.9395 55.7883 10.4182 55.2454 10.0382 54.5504C9.66898 53.8446 9.48438 53.0301 9.48438 52.1071Z"
                            fill="white"
                        />
                        <path
                            d="M4.00696 56.7161C3.24683 56.7161 2.56272 56.5858 1.95461 56.3252C1.34651 56.0537 0.868718 55.6736 0.521231 55.185C0.173744 54.6963 0 54.1262 0 53.4747H1.98719C2.03063 53.9634 2.22066 54.3651 2.55729 54.68C2.90478 54.995 3.388 55.1524 4.00696 55.1524C4.64764 55.1524 5.14715 55.0004 5.5055 54.6963C5.86385 54.3814 6.04302 53.9796 6.04302 53.491C6.04302 53.1109 5.929 52.8014 5.70096 52.5625C5.48378 52.3237 5.20688 52.139 4.87025 52.0087C4.54448 51.8784 4.0884 51.7373 3.50202 51.5852C2.76361 51.3898 2.16094 51.1943 1.694 50.9989C1.23792 50.7925 0.847 50.4776 0.521231 50.0541C0.195461 49.6306 0.0325769 49.066 0.0325769 48.3601C0.0325769 47.7086 0.195461 47.1385 0.521231 46.6498C0.847 46.1612 1.30308 45.7865 1.88946 45.5259C2.47585 45.2653 3.15453 45.135 3.92552 45.135C5.02227 45.135 5.91814 45.4119 6.61311 45.9657C7.31895 46.5087 7.70987 47.2579 7.78588 48.2135H5.73354C5.70096 47.8009 5.5055 47.448 5.14715 47.1548C4.78881 46.8616 4.31644 46.715 3.73006 46.715C3.19797 46.715 2.76361 46.8507 2.42698 47.1222C2.09035 47.3937 1.92204 47.7846 1.92204 48.295C1.92204 48.6425 2.0252 48.9302 2.23152 49.1583C2.4487 49.3754 2.72017 49.5492 3.04594 49.6795C3.37171 49.8098 3.81693 49.951 4.3816 50.103C5.13086 50.3093 5.73897 50.5156 6.2059 50.722C6.6837 50.9283 7.08548 51.2486 7.41125 51.683C7.74788 52.1065 7.91619 52.6766 7.91619 53.3933C7.91619 53.9688 7.75874 54.5117 7.44383 55.0221C7.13977 55.5325 6.68913 55.9451 6.09188 56.26C5.5055 56.5641 4.81052 56.7161 4.00696 56.7161Z"
                            fill="white"
                        />
                        <path
                            d="M30.1211 48.3081H31.0036"
                            stroke="white"
                            strokeWidth="0.706036"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M42.0142 48.3081C42.0142 45.2677 39.5495 42.803 36.509 42.803C33.4686 42.803 31.0039 45.2677 31.0039 48.3081"
                            stroke="white"
                            strokeWidth="0.706036"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M42.0156 48.3081C42.0156 48.3081 42.1921 47.249 43.8248 47.249C45.4576 47.249 45.6341 48.3081 45.6341 48.3081"
                            stroke="white"
                            strokeWidth="0.706036"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M56.6431 48.3081C56.6431 45.2677 54.1784 42.803 51.138 42.803C48.0975 42.803 45.6328 45.2677 45.6328 48.3081"
                            stroke="white"
                            strokeWidth="0.706036"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M56.6445 48.3081H57.5271"
                            stroke="white"
                            strokeWidth="0.706036"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <circle
                            cx="36.8489"
                            cy="51.2442"
                            r="4.61208"
                            stroke="#F5F5F5"
                            strokeWidth="1.78621"
                        />
                        <circle cx="38.0034" cy="51.0405" r="1.10104" fill="white" />
                        <circle
                            cx="50.7942"
                            cy="51.2442"
                            r="4.61208"
                            stroke="#F5F5F5"
                            strokeWidth="1.78621"
                        />
                        <circle cx="51.9213" cy="50.9365" r="1.10104" fill="white" />
                        <path
                            d="M4.44288 16.0513C3.16597 15.5778 3.16598 13.7718 4.44288 13.2983L34.7061 2.07747C35.3647 1.83329 36.089 1.83329 36.7475 2.07747L67.0107 13.2983C68.2876 13.7717 68.2876 15.5778 67.0107 16.0512L36.7475 27.2721C36.0889 27.5163 35.3646 27.5163 34.7061 27.2721L4.44288 16.0513Z"
                            fill="#F5F5F5"
                        />
                        <path
                            d="M15.8633 22.5972L33.8937 29.7413C34.5885 30.0166 35.3621 30.0166 36.0568 29.7413L54.0873 22.5972V31.2136C54.0873 33.6293 52.6075 35.7948 50.2873 36.467C46.6911 37.5089 40.9648 38.8243 34.9753 38.8243C28.9858 38.8243 23.2595 37.5089 19.6633 36.467C17.3431 35.7948 15.8633 33.6292 15.8633 31.2136V22.5972Z"
                            fill="#F5F5F5"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M63.1225 23.6625C63.1225 22.844 62.2612 22.3117 61.5291 22.6777L60.7951 23.0447C60.4221 23.2312 60.1865 23.6125 60.1865 24.0295V35.4875C60.1865 35.9055 59.9393 36.2755 59.6111 36.5343C58.844 37.1391 58.3516 38.0768 58.3516 39.1295C58.3516 40.1821 58.844 41.1198 59.6111 41.7247C59.9393 41.9835 60.1865 42.3534 60.1865 42.7714V55.2789C60.1865 56.0896 60.8437 56.7469 61.6545 56.7469C62.4653 56.7469 63.1225 56.0896 63.1225 55.2789V42.7717C63.1225 42.3536 63.3698 41.9836 63.698 41.7248C64.4652 41.12 64.9577 40.1822 64.9577 39.1295C64.9577 38.0767 64.4652 37.139 63.698 36.5341C63.3698 36.2753 63.1225 35.9053 63.1225 35.4873V23.6625Z"
                            fill="#F5F5F5"
                        />
                        <path
                            d="M60.1875 21.5928L63.1236 20.4146V55.2805C63.1236 56.0912 62.4663 56.7485 61.6555 56.7485C60.8448 56.7485 60.1875 56.0912 60.1875 55.2805V21.5928Z"
                            fill="#F5F5F5"
                        />
                    </svg>
                </Link>

                {/* Middle - Menu (Hidden on Mobile) */}
                <ul className="hidden md:flex space-x-10 text-white px-8 lg:px-0 py-10 lg:py-5">
                    <li className="pt-2"> <Link
                        href="/"
                        className={
                            isActiveLink("/")
                                ? "bg-white text-[#40282C] px-4 py-2 rounded-md"
                                : ""
                        }
                    >
                        Home
                    </Link></li>
                    <li className="pt-2"> <Link
                        href="/findTutors"
                        className={
                            isActiveLink("/findTutors")
                                ? "bg-white text-[#40282C] px-4 py-2 rounded-md"
                                : ""
                        }
                    >
                        Find Tutors
                    </Link></li>
                    <li className="pt-2"> <Link
                        href="/about"
                        className={
                            isActiveLink("/about")
                                ? "bg-white text-[#40282C] px-4 py-2 rounded-md"
                                : ""
                        }
                    >
                        About
                    </Link></li>
                    <li className="pt-2"> <Link
                        href="/blog"
                        className={
                            isActiveLink("/blog")
                                ? "bg-white text-[#40282C] px-4 py-2 rounded-md"
                                : ""
                        }
                    >
                        Blog
                    </Link>
                    </li>
                    <li
                        className="pt-2 relative"
                        onMouseEnter={() => toggleMegaMenu(true)}
                        onMouseLeave={() => toggleMegaMenu(false)}
                    >
                        <Link
                            href="/subject"
                            className={
                                isActiveLink("/subject")
                                    ? "bg-white text-[#40282C] px-4 py-2 rounded-md"
                                    : "px-4 py-2 rounded-md"
                            }
                        >
                            Subject
                        </Link>
                        {isMegaMenuOpen && (
                            <div className="absolute -left-96 mt-2 w-[800px] bg-[#40282C] shadow-lg p-4 border border-gray-300 z-20">
                                <div className="grid grid-cols-3 gap-6 text-white">
                                    <div>
                                        <h3 className="font-bold mb-2">শ্রেণি</h3>
                                        <ul className="space-y-2">
                                            <li className="hover:text-secondary">
                                                <Link href="/">ষষ্ঠ শ্রেণি</Link>
                                            </li>
                                            <li className="hover:text-secondary">
                                                <Link href="/">সপ্তম শ্রেণি</Link>
                                            </li>
                                            <li className="hover:text-secondary">
                                                <Link href="/">অষ্টম শ্রেণি</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-2">নবম ও দশম</h3>
                                        <ul className="space-y-2">
                                            <li className="hover:text-secondary">
                                                <Link href="/">জীববিজ্ঞান পাঠ সহায়িকা</Link>
                                            </li>
                                            <li className="hover:text-secondary">
                                                <Link href="/">রসায়ন পাঠ সহায়িকা</Link>
                                            </li>
                                            <li className="hover:text-secondary">
                                                <Link href="/">গণিত পাঠ সহায়িকা</Link>
                                            </li>
                                            <li className="hover:text-secondary">
                                                <Link href="/">ইংরেজি পাঠ সহায়িকা</Link>
                                            </li>
                                            <li className="hover:text-secondary">
                                                <Link href="/">উচ্চতর গণিত পাঠ সহায়িকা</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-2">এইচএসসি</h3>
                                        <ul className="space-y-2">
                                            <li className="hover:text-secondary">
                                                <Link href="/">উচ্চতর গণিত</Link>
                                            </li>
                                            <li className="hover:text-secondary">
                                                <Link href="/">জীববিজ্ঞান পাঠ সহায়িকা</Link>
                                            </li>
                                            <li className="hover:text-secondary">
                                                <Link href="/">পদার্থবিজ্ঞান পাঠ সহায়িকা</Link>
                                            </li>
                                            <li className="hover:text-secondary">
                                                <Link href="/">রসায়ন পাঠ সহায়িকা</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </li>
                    <li className="pt-2"> <Link
                        href="/faq"
                        className={
                            isActiveLink("/faq")
                                ? "bg-white text-[#40282C] px-4 py-2 rounded-md"
                                : ""
                        }
                    >
                        Faq
                    </Link>
                    </li>
                </ul>

                {/* Right Side - Profile Image & Dropdown */}
                {!user ? (<Link href={`/login?redirect=${pathname}`} className="bg-white text-[#40282C] px-4 py-2 rounded-md">Login</Link>) : (<div className="relative">
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
                        <div className="absolute right-0 mt-1 w-48 bg-white shadow-lg rounded-lg border z-50 duration-500 ease-in-out">
                            <ul className="text-gray-700">
                                <ul className="flex flex-col md:hidden space-x-6 text-gray-700 font-medium">
                                    <Link href="/">
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Home</li>
                                    </Link>
                                    <Link href="/findTutors">
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Find Tutors</li>
                                    </Link>
                                    <Link href="/about">
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">About</li>
                                    </Link>
                                    <Link href={"/blog"}>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Blog</li>
                                    </Link>
                                    <Link href={"/subject"}>
                                        <div className="relative" onMouseEnter={() => toggleMegaMenu(true)} >
                                            <button className="hover:bg-blue-600 py-2 px-4 rounded-tr-xl rounded-tl-xl">Subject</button>
                                            {isMegaMenuOpen && (
                                                <div className="absolute -left-96 mt-2 w-[800px] bg-white shadow-lg p-4 border border-gray-300 z-20" onMouseLeave={() => toggleMegaMenu(false)}>
                                                    <div className="grid grid-cols-3 gap-6 text-black">
                                                        <div>
                                                            <h3 className="font-bold mb-2">শ্রেণি</h3>
                                                            <ul className="space-y-2">
                                                                <li className="hover:text-secondary"><Link href="/">ষষ্ঠ শ্রেণি</Link></li>
                                                                <li className="hover:text-secondary"><Link href="/">সপ্তম শ্রেণি</Link></li>
                                                                <li className="hover:text-secondary"><Link href="/">অষ্টম শ্রেণি</Link></li>
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <h3 className="font-bold mb-2">নবম ও দশম</h3>
                                                            <ul className="space-y-2">
                                                                <li className="hover:text-secondary"><Link href="/">জীববিজ্ঞান পাঠ সহায়িকা</Link></li>
                                                                <li className="hover:text-secondary"><Link href="/">রসায়ন পাঠ সহায়িকা</Link></li>
                                                                <li className="hover:text-secondary"><Link href="/">গণিত পাঠ সহায়িকা</Link></li>
                                                                <li className="hover:text-secondary"><Link href="/">ইংরেজি পাঠ সহায়িকা</Link></li>
                                                                <li className="hover:text-secondary"><Link href="/">উচ্চতর গণিত পাঠ সহায়িকা</Link></li>
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <h3 className="font-bold mb-2">এইচএসসি</h3>
                                                            <ul className="space-y-2">
                                                                <li className="hover:text-secondary"><Link href="/">উচ্চতর গণিত</Link></li>
                                                                <li className="hover:text-secondary"><Link href="/">জীববিজ্ঞান পাঠ</Link> সহায়িকা</li>
                                                                <li className="hover:text-secondary"><Link href="/">পদার্থবিজ্ঞান পাঠ</Link> সহায়িকা</li>
                                                                <li className="hover:text-secondary"><Link href="/">রসায়ন পাঠ</Link> সহায়িকা</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                    <Link href={"/faq"}>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">FAQ</li>
                                    </Link>
                                </ul>
                                <Link href={profileurl}>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                                </Link>
                                <Link href={url}>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Dashboard</li>
                                </Link>
                                <li onClick={handleLogout} className="px-4 py-2 text-red-500 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                                    <LogOut size={16} /> Log Out
                                </li>
                            </ul>
                        </div>
                    )}
                </div>)}
            </div>
        </nav>
    );
}

