import { useState, FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ModalProps {
  headerTitle: string;
  className?: string;
  openModal?: boolean;
  closeModal: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ headerTitle, className, openModal = true, closeModal, children }) => {
  const [clickedInsideModal, setClickedInsideModal] = useState(false);
  const turnOffClickedInside = () => setClickedInsideModal(false);

  return openModal ? (
    <div
      className="flex justify-center fixed inset-0 bg-black bg-opacity-70 z-10 overflow-auto"
      onClick={() => {
        if (!clickedInsideModal) closeModal();
        else turnOffClickedInside();
      }}
    >
      <div
        className={twMerge(
          "bg-white rounded-md w-10/12 max-w-80 shadow-md mt-10 mb-24 min-h-10 overflow-y-auto",
          className
        )}
        onClick={(e) => e.stopPropagation()}
        onMouseDown={() => {
          setClickedInsideModal(true);
        }}
        onMouseUp={turnOffClickedInside}
        onDragEnd={turnOffClickedInside}
      >
        <div className="flex items-center p-5 border-b">
          <h2 className="text-xl font-semibold">Info {headerTitle}</h2>
          <span className="ml-auto text-gray-500 text-3xl cursor-pointer hover:text-black" onClick={closeModal}>
            &times;
          </span>
        </div>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
