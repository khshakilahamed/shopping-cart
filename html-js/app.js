const products = [
      {
            id: 1,
            title: "Classy Modern Smart watch",
            description: "I must explain to you how all this mistaken idea of denoun cing ple praising pain was born and I will give you a complete account of the system, and expound the actual teaching.",
            previousPrice: 99.00,
            currentPrice: 79.00,
            type: "watch",
            model: "Forerunner 290XT",
            colors: [
                  {
                        id: 1,
                        name: "purple",
                        code: "#816BFF",
                        image: "./assets/purple.png"
                  },
                  {
                        id: 2,
                        name: "blue",
                        code: "#1FCEC9",
                        image: "./assets/blue.png"
                  },
                  {
                        id: 3,
                        name: "cyan",
                        code: "#4B97D3",
                        image: "./assets/cyan.png"
                  },
                  {
                        id: 4,
                        name: "black",
                        code: "#3B4747",
                        image: "./assets/black.png"
                  },
            ],
            sizes: [
                  {
                        id: 1,
                        size: 'S',
                        price: 69,
                  },
                  {
                        id: 2,
                        size: 'M',
                        price: 79,
                  },
                  {
                        id: 3,
                        size: 'L',
                        price: 89,
                  },
                  {
                        id: 4,
                        size: 'XL',
                        price: 99,
                  },
            ]
      }
];

const productTitle = document.getElementById('product-title');
const productImageId = document.getElementById('product-image-id');
const previousTitle = document.getElementById('previous-price');
const currentTitle = document.getElementById('current-price');
const productDescription = document.getElementById('product-description');
const productType = document.getElementById('product-type');
const productModel = document.getElementById('product-model');
const productColors = document.getElementById('product-colors');
const productSizes = document.getElementById('product-sizes');
const quantityId = document.getElementById('quantity');
const cartQuantityDisplayId = document.getElementById('cart-quantity-display-id');
const displayCartItemId = document.getElementById('display-cart-item-id');


let cartData = [];

const tempStoreData = {
      colorId: 0,
      sizeId: 0,
      quantity: 0,
      productId: 0,
}

const quantityObj = {
      value: 1,
      increment() {
            this.value = this.value + 1;
      },
      decrement() {
            if (this.value > 1) {
                  this.value = this.value - 1;
            }
      }
}

const handleAddToCard = () => {
      const isExistData = cartData.find(item => item.colorId === tempStoreData.colorId && item.sizeId === tempStoreData.sizeId);

      if (isExistData) {
            const filteredCartData = cartData.filter(item => item.cartId !== isExistData.cartId);
            cartData = filteredCartData;
            cartData.push({ ...isExistData, quantity: isExistData.quantity + tempStoreData.quantity })
      } else {
            cartData.push({ ...tempStoreData, cartId: cartData.length + 1 });
      }

      displayCartQuantity();
}

// Quantity utility functions
const displayCartQuantity = () => {
      cartQuantityDisplayId.innerText = cartData.length;
}

const handleDecrementQuantity = () => {
      quantityObj.decrement();
      displayQuantity();
}

const handleIncrementQuantity = () => {
      quantityObj.increment();
      displayQuantity();
}

const displayQuantity = () => {
      tempStoreData.quantity = quantityObj.value;
      quantityId.innerText = quantityObj.value;
}

// Color utility functions
const handleRemoveColor = () => {
      for (const color of products[0].colors) {
            document.getElementById(`color-${color?.id}`).classList.remove('ring-2', 'ring-offset-2', `ring-[${color.code}]`);
      }
}

const handleSelectColor = (id) => {
      handleRemoveColor();
      tempStoreData.colorId = id;

      const colorItem = document.getElementById(`color-${id}`);
      const color = products[0].colors.find(color => color.id === id);
      colorItem.classList.add('ring-2', 'ring-offset-2', `ring-[${color.code}]`);
      productImageId.src = color?.image;
}

// Size utility functions
const handleRemoveSize = () => {
      for (const size of products[0].sizes) {
            document.getElementById(`size-btn-${size?.id}`).classList.remove('border-purple');
            document.getElementById(`size-text-${size?.id}`).classList.remove('text-purple');
      }
}

const handleSelectSize = (id) => {
      handleRemoveSize();
      tempStoreData.sizeId = id;

      const sizeBtn = document.getElementById(`size-btn-${id}`);
      const sizeText = document.getElementById(`size-text-${id}`);

      sizeBtn.classList.add('border-purple');
      sizeText.classList.add('text-purple');
}


// initialize function
const init = () => {
      productTitle.innerText = products[0].title;
      previousTitle.innerText = '$' + parseFloat(products[0].previousPrice).toFixed(2);
      currentTitle.innerText = '$' + parseFloat(products[0].currentPrice).toFixed(2);
      productDescription.innerText = products[0].description;
      productType.innerText = products[0].type;
      productModel.innerText = products[0].model;

      productColors.innerHTML = '';
      productSizes.innerHTML = '';

      // Color buttons
      for (const color of products[0].colors) {
            const button = `
            <button 
                class="h-[16px] w-[16px] inline-block rounded-full bg-[${color.code}]"
                id="color-${color?.id}"
                onclick={handleSelectColor(${color?.id})}
            ></button>
            `;
            productColors.innerHTML += button;
      }

      // Size buttons
      for (const size of products[0].sizes) {
            const button = `
                  <button
                        class="inline-block px-3 lg:px-4 py-[5px] lg:lg:py-[7px] text-sm border border-[#DBDFEA] rounded-[3px]"
                        id="size-btn-${size?.id}"
                        onclick={handleSelectSize(${size?.id})}
                  >
                        <span
                               class="font-bold text-primary" 
                              id="size-text-${size.id}"
                        >
                              ${size.size}
                        </span>
                        <span class="text-secondary px-1">
                              $${size.price}
                        </span>
                  </button> 
                  `;
            // text-purple
            // border-purple
            productSizes.innerHTML += button;
      }

      handleSelectColor(products[0]?.colors[0]?.id);
      tempStoreData.colorId = products[0]?.colors[0]?.id;
      productImageId.src = products[0]?.colors[0]?.image;

      handleSelectSize(products[0]?.sizes[0]?.id);
      tempStoreData.colorId = products[0]?.sizes[0]?.id;

      quantityObj.value = 1;
      tempStoreData.quantity = quantityObj.value;
      displayQuantity();

      tempStoreData.productId = products[0]?.id;

      // console.log(tempStoreData);
      displayCartQuantity();
}

init();


const getProductTitle = (id) => {
      return products.find(item => item.id === id);
}

const getProductColor = (productId, colorId) => {
      return products.find(item => item.id === productId).colors.find(colorItem => colorItem.id === colorId);
}

const getProductSize = (productId, colorId) => {
      return products.find(item => item.id === productId).sizes.find(sizeItem => sizeItem.id === colorId);
}

const displayCartItems = () => {
      displayCartItemId.innerHTML = "";

      if (!cartData.length) {
            displayCartItemId.innerHTML = `<p class="text-center text-primary font-bold">Cart is empty</p>`;
            return;
      }

      const h3 = `<h3 class="text-[22px] text-primary font-bold">Your Cart</h3>`
      displayCartItemId.innerHTML += h3;

      const table = `<table class="w-full text-secondary text-sm font-normal my-5 overflow-x-scroll" id="data-table">
            <tr class="text-left border-b border-[#DBDFEA]">
              <th class="font-normal">Item</th>
              <th class="font-normal text-center">Color</th>
              <th class="font-normal text-center">Size</th>
              <th class="font-normal text-center">Qnt</th>
              <th class="font-normal text-right">Price</th>
            </tr>
          </table>`;

      displayCartItemId.innerHTML += table;
      // const mergeCartData = cartData.map(item => )

      const dataTable = document.getElementById("data-table");

      let totalPrice = 0;
      let totalQuantity = 0;
      cartData.forEach((item, i) => {
            const product = getProductTitle(item.productId);
            const color = getProductColor(item.productId, item?.colorId);
            const size = getProductSize(item.productId, item?.sizeId);
            const price = size.price * item.quantity;
            totalPrice += price;
            const quantity = item.quantity;
            totalQuantity += quantity;

            if (product && color && size) {
                  const rowHTML = `
                      <tr class="text-primary border-b border-[#DBDFEA]">
                        <td class="flex flex-col sm:flex-row sm:items-center gap-2 py-2">
                              <img class="rounded-[3px]" width="36" height="36" src="${color?.image}"/>
                              ${product.title}
                        </td>
                        <td class="text-center capitalize">${color.name}</td>
                        <td class="font-bold text-center">${size.size}</td>
                        <td class="font-bold text-center">${quantity}</td>
                        <td class="font-bold text-right">$${price.toFixed(2)}</td>
                      </tr>`;
                  dataTable.insertAdjacentHTML("beforeend", rowHTML);
            }

            if (product && color && size && i === cartData.length - 1) {
                  const rowHTML = `
                      <tr class="text-primary">
                        <td class="text-black font-bold py-5">
                              Total
                        </td>
                        <td class="font-bold text-center"></td>
                        <td class="font-bold text-center"></td>
                        <td class="font-bold text-center">${totalQuantity}</td>
                        <td class="font-bold text-right text-[18px]">$${totalPrice.toFixed(2)}</td>
                      </tr>`;
                  dataTable.insertAdjacentHTML("beforeend", rowHTML);
            }
      });

      const buttons = `<div class="flex justify-end gap-5">
            <button 
                  class="text-primary text-[13px] rounded-[3px] py-1 sm:py-2 px-4 border border-[#DBDFEA] font-bold"
                  onclick="closeModal()"
            >Continue Shopping</button>
            <button 
                  class="text-white text-[13px] py-1smg:py-2 px-4 rounded-[3px] border border-purple bg-purple hover:bg-purple/80 font-bold"
                  onclick="handleCheckout()"
            >Checkout</button>
      </div>`

      displayCartItemId.innerHTML += buttons
}

const handleCheckout = () => {
      closeModal();
      cartData = [];
      init();
      console.log(tempStoreData)
}


// Modal
function openModal() {
      document.getElementById('modalId').style.display = 'block';
      document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden');

      // Display cart items when the modal is open
      displayCartItems()
}

function closeModal() {
      document.getElementById('modalId').style.display = 'none'
      document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
}

// Function to handle clicks on the modal background
function handleModalBackgroundClick(event) {
      if (event.target.id === 'modalId') {
            closeModal();
      }
}