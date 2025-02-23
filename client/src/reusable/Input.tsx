interface InputProps {
  className?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: () => void;
}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return <input className={className || "rounded-md px-2 py-1 my-2 w-full"} {...props} />;
};

export default Input;
