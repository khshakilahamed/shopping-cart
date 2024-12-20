/* eslint-disable react/prop-types */
const ProductPrice = ({ previousPrice, currentPrice }) => {
  return (
    <h3 className="space-x-1">
      {previousPrice && (
        <span
          className="text-lg lg:text-xl text-secondary line-through"
          id="previous-price"
        >
          ${parseFloat(previousPrice).toFixed(2)}
        </span>
      )}

      {currentPrice && (
        <span
          className="text-xl lg:text-2xl font-bold text-purple"
          id="current-price"
        >
          ${parseFloat(currentPrice).toFixed(2)}
        </span>
      )}
    </h3>
  );
};

export default ProductPrice;
