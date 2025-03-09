import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={twMerge("lg:w-10/12 mx-auto px-4 lg:px-8", className)}>
      {children}
    </div>
  );
};

export default Container;