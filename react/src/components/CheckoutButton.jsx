const CheckoutButton = () => {
  return (
    <button
      className="flex items-center gap-2 fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-[#FFBB5A] py-3 px-6 text-sm font-bold text-primary rounded-full shadow-md hover:bg-[#FFBB5A]/80"
      // onclick="openModal()"
    >
      <span>Checkout</span>
      <span className="bg-white px-1 rounded-md" id="cart-quantity-display-id">
        0
      </span>
    </button>
  );
};

export default CheckoutButton;
