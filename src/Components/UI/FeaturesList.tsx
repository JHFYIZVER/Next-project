import React from "react";
import star from "@/Components/UI/Img/star.svg";
import Image from "next/image";
const FeaturesList = ({ isDesktop }: { isDesktop: boolean }) => {
  return isDesktop ? (
    <div className="flex flex-wrap gap-2 justify-between">
      <ul className="flex flex-col gap-4 max-w-[242px]">
        <li className="flex gap-3 items-start">
          <Image className="fill-black" src={star} alt="star" />
          High-resolution OLED or LCD screens: Provide sharp and clear visuals.
        </li>
        <li className="flex gap-3 items-start">
          <Image className="fill-black" src={star} alt="star" />
          Inside-out tracking: Built-in sensors (cameras or other sensors).
        </li>
        <li className="flex gap-3 items-start">
          <Image className="fill-black" src={star} alt="star" />
          High-resolution OLED or LCD screens: Provide sharp and clear visuals.
        </li>
      </ul>
      <ul className="flex flex-col gap-4 max-w-[242px]">
        <li className="flex gap-3 items-start">
          <Image className="fill-black" src={star} alt="star" />
          High-resolution OLED or LCD screens: Provide sharp and clear visuals.
        </li>
        <li className="flex gap-3 items-start">
          <Image className="fill-black" src={star} alt="star" />
          Inside-out tracking: Built-in sensors (cameras or other sensors).
        </li>
        <li className="flex gap-3 items-start">
          <Image className="fill-black" src={star} alt="star" />
          High-resolution OLED or LCD screens: Provide sharp and clear visuals.
        </li>
      </ul>
    </div>
  ) : (
    <ul className="flex flex-col gap-4">
      <li className="flex gap-3 items-start">
        <Image className="fill-black" src={star} alt="star" />
        High-resolution OLED or LCD screens: Provide sharp and clear visuals.
      </li>
      <li className="flex gap-3 items-start">
        <Image className="fill-black" src={star} alt="star" />
        Inside-out tracking: Built-in sensors (cameras or other sensors).
      </li>
      <li className="flex gap-3 items-start">
        <Image className="fill-black" src={star} alt="star" />
        High-resolution OLED or LCD screens: Provide sharp and clear visuals.
      </li>
    </ul>
  );
};

export default FeaturesList;
