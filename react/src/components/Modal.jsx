/* eslint-disable react/prop-types */
const Modal = ({ children, setOpenModal }) => {
  return (
    <div
      id="modalId"
      className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 block"
      onClick={() => setOpenModal(false)}
    >
      <div
        className="relative top-40 mx-auto shadow-xl rounded-[20px] bg-white max-w-[651px]"
        // onclick="event.stopPropagation()"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 sm:p-10" id="display-cart-item-id">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
