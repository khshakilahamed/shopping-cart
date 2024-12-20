/* eslint-disable react/prop-types */
const ProductTypeModel = ({ type, model }) => {
  return (
    <div className="flex gap-10">
      {type && (
        <div>
          <p className="text-secondary text-xs lg:text-sm">Type</p>
          <p
            className="text-sm lg:text-base font-bold text-primary"
            id="product-type"
          >
            {type}
          </p>
        </div>
      )}
      {model && (
        <div>
          <p className="text-secondary text-xs lg:text-sm">Model Number</p>
          <p
            className="text-sm lg:text-base font-bold text-primary"
            id="product-model"
          >
            {model}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductTypeModel;
