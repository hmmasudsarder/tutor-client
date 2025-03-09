/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const SocialAccount = () => {
    return (
        <div>
            <div>
                <h2 className="text-[18px] font-[600] mb-3 text-center lg:flex ">
                    Social info
                </h2>
                < div className=" flex items-center justify-center md:justify-start gap-3">

                    <Link
                        href="/"
                    >
                        <div className="overflow-hidden group rounded-md">
                            <FaFacebookF className="imageHover object-cover w-[30px] h-[30px]" />
                        </div>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/hmmasudsarder/"
                    >
                        <div className="overflow-hidden group rounded-md">
                            <FaLinkedinIn className="imageHover object-cover w-[30px] h-[30px]" />
                        </div>
                    </Link>
                    <Link
                        href="https://x.com/hmmasudsardar/likes"
                    >
                        <div className="overflow-hidden group rounded-md">
                            <FaTwitter className="imageHover object-cover w-[30px] h-[30px]" />
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default SocialAccount
