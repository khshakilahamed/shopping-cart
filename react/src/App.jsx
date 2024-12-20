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
import Modal from "./components/Modal";

const App = () => {
  const [product, setProduct] = useState({});
  const [selectedColor, setSelectedColor] = useState({});
  const [selectedSize, setSelectedSize] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [cartData, setCartData] = useState([]);
  const [tempStoreData, setTempStoreData] = useState({
    colorId: 0,
    sizeId: 0,
    quantity: quantity,
    productId: 1,
  });
  const [openModal, setOpenModal] = useState(false);
  const [resetData, setReset] = useState(true);

  let totalPrice = 0;
  let totalQuantity = 0;

  useEffect(() => {
    if (resetData) {
      setProduct(productStore[0]);
      setSelectedColor(productStore[0]?.colors[0]);
      setSelectedSize(productStore[0]?.sizes[0]);
      setTempStoreData((prev) => ({
        ...prev,
        colorId: productStore[0]?.colors[0]?.id,
        sizeId: productStore[0]?.sizes[0]?.id,
        productId: productStore[0]?.id
      }));
      setCartData([]);

      setReset(false);
    }
  }, [resetData]);

  const handleAddToCard = () => {
    const isExistData = cartData?.length && cartData.find(
      (item) =>
        item.colorId === tempStoreData.colorId &&
        item.sizeId === tempStoreData.sizeId
    );

    if (isExistData) {
      const filteredCartData = cartData.filter(
        (item) => item.cartId !== isExistData.cartId
      );
      setCartData(filteredCartData);

      setCartData((prev) => {
        return [
          ...prev,
          {
            ...isExistData,
            quantity: isExistData.quantity + tempStoreData.quantity,
          }
        ]
      });

    } else {
      setCartData((prev) => {
        return [
          ...prev,
          { ...tempStoreData, cartId: cartData.length + 1 }
        ]
      });
    }
  };


  const getProductTitle = () => {
    return product;
  }

  const getProductColor = (colorId) => {
    return product?.colors?.find(colorItem => colorItem.id === colorId);
  }

  const getProductSize = (sizeId) => {
    return product?.sizes?.find(sizeItem => sizeItem.id === sizeId);
  }

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
              <CounterButtons quantity={quantity} setQuantity={setQuantity} setTempStoreData={setTempStoreData} />
              {/* <!-- Add to cart Button --> */}
              <AddToCartButton onAddToCart={handleAddToCard} />

              {/* <!-- Wishlist button --> */}
              <WishlistButton />
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <CheckoutButton cartDataSize={cartData?.length} setOpenModal={setOpenModal} />

      {/* Modal */}
      {openModal && <Modal setOpenModal={setOpenModal}>
        {
          !cartData.length ? <p className="text-center text-primary font-bold">Cart is empty</p> : <>
            <h3 className="text-[22px] text-primary font-bold">Your Cart</h3>
            <table className="w-full text-secondary text-sm font-normal my-5 overflow-x-scroll" id="data-table">
              <thead>
                <tr className="text-left border-b border-[#DBDFEA]">
                  <th className="font-normal">Item</th>
                  <th className="font-normal text-center">Color</th>
                  <th className="font-normal text-center">Size</th>
                  <th className="font-normal text-center">Qnt</th>
                  <th className="font-normal text-right">Price</th>
                </tr>
              </thead>

              <tbody>
                {
                  cartData.map((item, i) => {
                    const product = getProductTitle(item.productId);
                    const color = getProductColor(item?.colorId);
                    const size = getProductSize(item?.sizeId);
                    const price = size.price * item.quantity;
                    totalPrice += price;
                    const quantity = item.quantity;
                    totalQuantity += quantity;

                    if (product && color && size) {
                      return <tr key={i} className="text-primary border-b border-[#DBDFEA]">
                        <td className="flex flex-col sm:flex-row sm:items-center gap-2 py-2">
                          <img className="rounded-[3px]" width="36" height="36" src={color?.image} />
                          {product.title}
                        </td>
                        <td className="text-center capitalize">{color.name}</td>
                        <td className="font-bold text-center">{size.size}</td>
                        <td className="font-bold text-center">{quantity}</td>
                        <td className="font-bold text-right">${price.toFixed(2)}</td>
                      </tr>
                    }
                  })
                }
                <tr className="text-primary">
                  <td className="text-black font-bold py-5">
                    Total
                  </td>
                  <td className="font-bold text-center"></td>
                  <td className="font-bold text-center"></td>
                  <td className="font-bold text-center">{totalQuantity}</td>
                  <td className="font-bold text-right text-[18px]">${totalPrice.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>

            <div className="flex justify-end gap-5">
              <button
                className="text-primary text-[13px] rounded-[3px] py-1 sm:py-2 px-4 border border-[#DBDFEA] font-bold"
                onClick={() => setOpenModal(false)}
              >Continue Shopping</button>
              <button
                className="text-white text-[13px] py-1smg:py-2 px-4 rounded-[3px] border border-purple bg-purple hover:bg-purple/80 font-bold"
                onClick={() => setReset(true)}
              >Checkout</button>
            </div>
          </>
        }
      </Modal>}
    </div>
  );
};

export default App;
