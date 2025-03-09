import React from "react";
import { twMerge } from "tailwind-merge";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "lg:text-base text-[14px]  text-gray-500  lg:leading-[28px] leading-[24px] ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Paragraph;
