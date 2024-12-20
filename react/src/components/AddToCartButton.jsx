/* eslint-disable react/prop-types */
const AddToCartButton = ({ onAddToCart }) => {
  return (
    <button
      className="text-white text-[13px] py-1 lg:py-2 px-4 rounded-[3px] bg-purple hover:bg-purple/80"
      onClick={() => onAddToCart()}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
