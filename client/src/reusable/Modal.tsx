import { useState, FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ModalProps {
  type?: string;
  headerTitle?: string;
  className?: string;
  openModal?: boolean;
  closeModal: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ type, headerTitle, className, openModal = true, closeModal, children }) => {
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
          "bg-white px-4 pt-8 pb-10 rounded-md w-10/12 max-w-80 shadow-md mt-10 mb-24 h-fit overflow-y-auto",
          className
        )}
        onClick={(e) => e.stopPropagation()}
        onMouseDown={() => {
          setClickedInsideModal(true);
        }}
        onMouseUp={turnOffClickedInside}
        onDragEnd={turnOffClickedInside}
      >
        {type !== "static" && (
          <div className="flex items-center pb-6 border-b">
            <h2 className="text-2xl font-semibold w-full">{headerTitle}</h2>
            <span className="mx-4 text-gray-500 text-3xl cursor-pointer hover:text-black" onClick={closeModal}>
              &times;
            </span>
          </div>
        )}
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
