import React from "react";

const BtnReadMyBlock = () => {
  return (
    <button className="flex items-center justify-between rounded-btn text-blue bg-[#3DDEED1A] py-4 px-6 gap-4 max-w-48">
      Read my blog{" "}
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.99992 0.333336L5.82492 1.50834L10.4749 6.16667H0.333252V7.83334H10.4749L5.82492 12.4917L6.99992 13.6667L13.6666 7L6.99992 0.333336Z"
          fill="#3DDEED"
        />
      </svg>
    </button>
  );
};

export default BtnReadMyBlock;
