"use client";
import React from "react";
import Logo from "../UI/Logo";
import SocialMedia from "../UI/SocialMedia";
import BtnSubscribe from "../UI/Buttons/BtnSubscribe";
import line from "@/Components/UI/Img/line.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer w-full flex flex-col p-6 bg-[#1C1128] rounded-t-lg lg:px-20 xl:px-[100px]">
      <div className="footer-wrapper max-w-screen-xl w-full mx-auto gap-8 md:flex md:flex-wrap md:justify-between md:flex-row">
        <div className="flex flex-wrap gap-9 justify-between w-full max-w-[550px]">
          <div className="flex flex-col gap-3">
            <Logo />
            <SocialMedia />
            <h3>(+994) 199-28-786</h3>
          </div>
          <div className="flex mt-4 gap-14 text-sm">
            <ul className="flex flex-col gap-6 cursor-pointer">
              <li className="font-bold text-lg">Menu</li>
              <li>Home</li>
              <li>Catalog</li>
              <li>Features</li>
              <li>Contact</li>
            </ul>
            <ul className="flex flex-col gap-6 cursor-pointer">
              <li className="font-bold text-lg">Company</li>
              <li>Login</li>
              <li>Sign Up</li>
              <li>Privacy</li>
              <li>Products</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-4 max-w-md">
          <h3 className="font-bold text-lg">Subscribe Our News Letter</h3>
          <p>
            Sure, please provide your email address to subscribe to newsletter
          </p>
          <div className="relative flex flex-col gap-6 max-w-md w-full">
            <input
              className="w-full rounded-btn py-5 px-3 bg-transparent border border-[#fff]/20 outline-none"
              placeholder="Enter your mail..."
              type="text"
            />
            <BtnSubscribe />
          </div>
        </div>
        <Image className="line h-1 min-w-full my-3" src={line} alt="line" />
      </div>
      <span className="text-center pt-5 text-white/80">
        © 2023 Your Company Name. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
