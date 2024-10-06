"use client";
import React from "react";
import Logo from "../UI/Logo";
import SocialMedia from "../UI/SocialMedia";
import BtnVisitStore from "../UI/Buttons/BtnVisitStore";

const Footer = () => {
  return (
    <footer className="footer max-w-screen-sm w-full flex flex-col p-6 bg-[#1C1128] rounded-t-lg">
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
      <div className="flex flex-col gap-6 mt-4">
        <h3 className="font-bold text-lg">Subscribe Our News Letter</h3>
        <p>
          Sure, please provide your email address to subscribe to newsletter
        </p>
        <input type="text" />
        <BtnVisitStore />
      </div>
      <span className="text-center pt-5 text-white/80">© 2023 Your Company Name. All rights reserved.</span>
    </footer>
  );
};

export default Footer;
