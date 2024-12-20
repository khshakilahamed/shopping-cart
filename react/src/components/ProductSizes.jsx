/* eslint-disable react/prop-types */

const ProductSizes = ({
  sizes,
  selectedSize,
  setSelectedSize,
  setTempStoreData,
}) => {
  return (
    <div>
      <h4 className="text-base lg:text-lg font-bold text-primary">
        Wrist Size{" "}
      </h4>
      <div className="flex flex-wrap gap-3 my-1">
        {sizes?.map((size) => (
          <button
            key={size?.id}
            className={`inline-block px-3 lg:px-4 py-[5px] border lg:lg:py-[7px] text-sm rounded-[3px] ${
              selectedSize.id === size.id ? "border-purple" : "border-secondary"
            }`}
            onClick={() => {
              setSelectedSize(size);
              setTempStoreData((prev) => {
                return {
                  ...prev,
                  sizeId: size?.id,
                };
              });
            }}
          >
            <span
              className={`font-bold ${
                selectedSize.id === size.id ? "text-purple" : "text-primary"
              }`}
            >
              {size?.size}
            </span>
            <span className="text-secondary px-1">${size?.price}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductSizes;
