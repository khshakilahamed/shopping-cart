import { useEffect, useState } from "react";
import { products as productStore } from "./contents/products";
// import purpleImg from "./assets/purple.png";
import Rating from "./components/Rating";
import ProductPrice from "./components/ProductPrice";
import ProductTypeModel from "./components/ProductTypeModel";
import ProductColors from "./components/ProductColors";
import ProductSizes from "./components/ProductSizes";
import CounterButtons from "./components/CounterButtons";
import AddToCartButton from "./components/AddToCartButton";
import WishlistButton from "./components/WishlistButton";
import CheckoutButton from "./components/CheckoutButton";

const App = () => {
  const [product, setProduct] = useState({});
  const [selectedColor, setSelectedColor] = useState({});
  const [selectedSize, setSelectedSize] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [cartData, setCartItem] = useState([]);
  const [tempStoreData, setTempStoreData] = useState({
    colorId: 0,
    sizeId: 0,
    productId: 1,
  });

  useEffect(() => {
    setProduct(productStore[0]);
    setSelectedColor(productStore[0]?.colors[0]);
    setSelectedSize(productStore[0]?.sizes[0]);
    setTempStoreData((prev) => ({ ...prev, productId: productStore[0]?.id }));
  }, []);

  const handleAddToCard = () => {
    const isExistData = cartData.find(
      (item) =>
        item.colorId === tempStoreData.colorId &&
        item.sizeId === tempStoreData.sizeId
    );

    if (isExistData) {
      const filteredCartData = cartData.filter(
        (item) => item.cartId !== isExistData.cartId
      );
      setCartItem(filteredCartData);
      cartData.push({
        ...isExistData,
        quantity: isExistData.quantity + tempStoreData.quantity,
      });
    } else {
      cartData.push({ ...tempStoreData, cartId: cartData.length + 1 });
    }
  };

  console.log(selectedColor);

  return (
    <div className="md:h-[100vh] max-w-screen-2xl mx-auto flex items-center px-2 sm:px-5 2xl:px-0 py-2 pb-20 sm:py-5 2xl:py-0 ">
      <div className="h-full flex items-center">
        <div className="flex flex-col md:flex-row items-center gap-5 lg:gap-10">
          <div className="md:w-1/2">
            {selectedColor?.image && (
              <img
                src={selectedColor.image}
                className="w-full h-full"
                alt="product"
              />
            )}
          </div>
          <div className="md:w-1/2 flex flex-col gap-3 lg:gap-5">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-primary">
              {product?.title}
            </h2>

            {/* <!-- Rating --> */}
            <Rating />

            {/* <!-- Price --> */}
            <ProductPrice
              previousPrice={product?.previousPrice}
              currentPrice={product?.currentPrice}
            />
            {/* <!-- Description --> */}
            <p
              className="text-base lg:text-lg text-secondary"
              id="product-description"
            >
              {product?.description}
            </p>

            {/* <!-- Type & Model --> */}
            <ProductTypeModel type={product?.type} model={product?.model} />

            {/* <!-- colors --> */}
            <ProductColors
              colors={product?.colors}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              setTempStoreData={setTempStoreData}
            />

            {/* <!-- Size wise price --> */}
            <ProductSizes
              sizes={product?.sizes}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              setTempStoreData={setTempStoreData}
            />

            {/* <!-- Buttons --> */}
            <div className="flex items-center flex-wrap gap-3">
              {/* <!-- counter buttons --> */}
              <CounterButtons quantity={quantity} setQuantity={setQuantity} />
              {/* <!-- Add to cart Button --> */}
              <AddToCartButton onAddToCart={handleAddToCard} />

              {/* <!-- Wishlist button --> */}
              <WishlistButton />
            </div>
          </div>
        </div>
      </div>
      <CheckoutButton />

      {/* <Modal /> */}
    </div>
  );
};

export default App;
