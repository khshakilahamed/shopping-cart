/* eslint-disable react/prop-types */
const ProductColors = ({
  colors,
  selectedColor,
  setSelectedColor,
  setTempStoreData,
}) => {
  return (
    <div>
      <h4 className="text-base lg:text-lg font-bold text-primary">
        Band Color
      </h4>
      <p className="flex flex-wrap gap-3 lg:gap-4 my-2">
        {colors?.map((color) => {
          // const bgColor = `bg-[${color.code}]`;

          return (
            <button
              key={color?.id}
              onClick={() => {
                setSelectedColor(color);
                setTempStoreData((prev) => {
                  return { ...prev, colorId: color?.id };
                });
              }}
              className={`h-[16px] w-[16px] inline-block rounded-full ${
                selectedColor?.id === color?.id
                  ? `ring ring-offset-2 ring-[${color?.code}]`
                  : ""
              }`}
              style={{ backgroundColor: `${color.code}` }}
            ></button>
          );
        })}
      </p>
    </div>
  );
};

export default ProductColors;
