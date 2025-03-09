"use client";
import Image from "next/image";
import CountUp from "react-countup";
import { useRef } from "react";
import { motion } from "framer-motion";
import teacherImage from "@/assets/teacher.svg";
import { useInViewport } from "react-in-viewport";
import './States.css';

const States = () => {
    const targetRef = useRef(null);
    const { inViewport } = useInViewport(targetRef);

    const parentVariant = {
        hidden: { opacity: 0, y: -50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.7 },
        },
    };

    return (
        // <Container>
            <motion.div ref={targetRef}
                variants={parentVariant}
                initial="hidden"
                animate={inViewport ? "visible" : "hidden"}
            >
                <div className="statesBanner container mx-auto my-10 h-[500px] flex items-center justify-center rounded-md">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-36 p-5">
                        {[{ end: 50, label: "Teachers" }, { end: 1500, label: "Students" }, { end: 94, label: "Success %" }, { end: 2024, label: "The Year Founded" }].map((item, index) => (
                            <div key={index} className="flex flex-col items-center justify-center text-center text-white">
                                <div className="border-2 border-[#999] p-5 rounded-full mb-3">
                                    <Image priority src={teacherImage} alt="" className="imageHover lg:w-[60px] lg:h-[60px] w-[30px] h-[30px]" />
                                </div>
                                <div>
                                    <h2 className="lg:text-[32px] text-[24px] font-[400]">
                                        {inViewport && <CountUp duration={2} start={0} end={item.end} />} +
                                    </h2>
                                    <p className="lg:text-base text-[14px]">{item.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        // </Container>
    );
};

export default States;
