interface DugmeProps {
  text: string;
  onClick: () => void;
}

const Dugme: React.FC<DugmeProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-base px-4 py-2 border-2 border-black bg-gray-200 hover:bg-gray-300 active:bg-gray-100 rounded-lg shadow-md transition-all "
    >
      {text}
    </button>
  );
};

export default Dugme;
