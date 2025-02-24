import { twMerge } from "tailwind-merge";

interface DugmeProps {
  text: string;
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  onClick?: () => void;
}

const Dugme: React.FC<DugmeProps> = ({ text, className, ...props }) => {
  return (
    <button
      className={twMerge(
        "px-8 border-2 border-black duration-200 bg-gray-100 hover:bg-stone-200 active:bg-gray-100 rounded-lg shadow-md transition-all",
        className
      )}
      {...props}
    >
      {text}
    </button>
  );
};

export default Dugme;
