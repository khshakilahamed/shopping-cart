import purpleImg from "./../assets/purple.png";
import blueImg from "./../assets/blue.png";
import cyanImg from "./../assets/cyan.png";
import blackImg from "./../assets/black.png";

export const products = [
  {
    id: 1,
    title: "Classy Modern Smart Watch",
    description:
      "I must explain to you how all this mistaken idea of denoun cing ple praising pain was born and I will give you a complete account of the system, and expound the actual teaching.",
    previousPrice: 99.0,
    currentPrice: 79.0,
    type: "watch",
    model: "Forerunner 290XT",
    colors: [
      {
        id: 1,
        name: "purple",
        code: "#816BFF",
        image: purpleImg,
      },
      {
        id: 2,
        name: "blue",
        code: "#1FCEC9",
        image: blueImg,
      },
      {
        id: 3,
        name: "cyan",
        code: "#4B97D3",
        image: cyanImg,
      },
      {
        id: 4,
        name: "black",
        code: "#3B4747",
        image: blackImg,
      },
    ],
    sizes: [
      { id: 1, size: "S", price: 69 },
      { id: 2, size: "M", price: 79 },
      { id: 3, size: "L", price: 89 },
      { id: 4, size: "XL", price: 99 },
    ],
  },
];