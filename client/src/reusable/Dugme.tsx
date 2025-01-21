interface DugmeProps {
  text: string;
  onClick?: () => void;
}

const Dugme: React.FC<DugmeProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-8 border-2 border-black duration-200 bg-gray-100 hover:bg-stone-200 active:bg-gray-100 rounded-lg shadow-md transition-all"
    >
      {text}
    </button>
  );
};

export default Dugme;
