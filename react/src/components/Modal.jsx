const Modal = () => {
  return (
    <div
      id="modalId"
      className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 block"
      //   onclick="handleModalBackgroundClick(event)"
    >
      <div
        className="relative top-40 mx-auto shadow-xl rounded-[20px] bg-white max-w-[651px]"
        // onclick="event.stopPropagation()"
      >
        <div className="p-5 sm:p-10" id="display-cart-item-id"></div>
      </div>
    </div>
  );
};

export default Modal;
