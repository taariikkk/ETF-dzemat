import { twMerge } from "tailwind-merge";

interface InputProps {
  className?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return <input className={twMerge("rounded-md px-2 py-3 my-2 w-full", className)} {...props} />;
};

export default Input;
