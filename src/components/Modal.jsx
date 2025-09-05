import { FaTimes } from "react-icons/fa";

export default function Modal({ isOpen, closeModal, children }) {
  if (!isOpen) return;
  return (
    <div
      onClick={() => closeModal()}
      className="absolute top-0 left-0 w-screen h-screen bg-black/50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute top-1/2 left-1/2 bg-white rounded p-4 border shadow -translate-x-1/2 -translate-y-1/2"
      >
        <button
          onClick={() => {
            closeModal();
          }}
          className="absolute bg-red-400 p-1 rounded top-0 right-0"
        >
          <FaTimes />
        </button>
        <div className="mt-2 flex flex-col gap-2">{children}</div>
      </div>
    </div>
  );
}
