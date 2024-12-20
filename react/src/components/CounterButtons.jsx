/* eslint-disable react/prop-types */
const CounterButtons = ({ quantity, setQuantity }) => {
  return (
    <div className="border rounded-[3px] inline-block">
      <div className="flex items-center gap-5">
        {/* <!-- decrement button --> */}
        <button
          className="p-[2px] lg:p-1 text-sm lg:text-[18.2px] font-bold text-secondary border-r-[1px]"
          onClick={() => {
            if (quantity > 1) {
              setQuantity((prev) => prev - 1);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </button>
        {/* <!-- display counter data --> */}
        <span className="text-sm text-primary" id="quantity">
          {quantity}
        </span>
        {/* <!-- increment button --> */}
        <button
          className="p-[2px] lg:p-1 text-sm lg:text-[18.2px] font-bold text-secondary border-l-[1px]"
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CounterButtons;
