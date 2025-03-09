"use client";
import Container from "../ui/Container";
import About from "./About";
import Contact from "./Contact";
import OtherPages from "./OtherPages";
import SocialAccount from "./SocialAccount";

const Footer = () => {


    return (
        <div
            className="bg-[#40282C] text-white">
            <Container>
                <div className=" lg:py-16 py-8 grid md:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-5">
                    <About />
                    <Contact />
                    {/* <Gallery photos={photos} /> */}
                    <div>
                        <SocialAccount />
                        <OtherPages />
                    </div>
                </div>

                <div className="text-center  py-5">
                    <div className="w-full h-[1px] bg-white mb-5"></div>
                    <p className="lg:text-base text-[14px]  text-white  lg:leading-[28px] leading-[24px]">
                        copyright @ 2024 Silicornya Ltd. All right Reserved
                    </p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
