import { BsInfoCircle } from "react-icons/bs";

const Info = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick} className="absolute top-3 right-6 cursor-pointer">
      <BsInfoCircle size={25} />
    </button>
  );
};

export default Info;
