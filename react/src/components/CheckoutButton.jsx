/* eslint-disable react/prop-types */
const CheckoutButton = ({ cartDataSize, setOpenModal }) => {
  return (
    <button
      className="flex items-center gap-2 fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-[#FFBB5A] py-3 px-6 text-sm font-bold text-primary rounded-full shadow-md hover:bg-[#FFBB5A]/80"
      onClick={() => setOpenModal(true)}
    >
      <span>Checkout</span>
      <span className="bg-white px-1 rounded-md" id="cart-quantity-display-id">
        {cartDataSize}
      </span>
    </button>
  );
};

export default CheckoutButton;
