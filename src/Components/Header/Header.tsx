"use client";
import React, { useState } from "react";
import Link from "next/link";

import Basket from "../UI/Basket";
import "./Header.scss";
import Input from "../UI/Input";
import SearchBtn from "../UI/SearchBtn";

const Header = () => {
  const clazz: string =
    "header max-w-screen-sm flex justify-between items-center p-5";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={isOpen ? clazz + " active" : clazz}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={isOpen ? "burger active" : "burger"}
      >
        <i></i>
        <i></i>
        <i></i>
      </button>
      <nav className={isOpen ? "header-nav active" : "header-nav"}>
        <ul className="header-nav-list menu flex flex-col gap-8 cursor-pointer">
          <Link className="menu-item" href="/">
            Home
          </Link>
          <Link className="menu-item" href="/Catalog">
            Catalog
          </Link>
          <Link className="menu-item" href="/Contact">
            Contact
          </Link>
          <Link className="menu-item" href="/Features">
            Features
          </Link>
        </ul>
      </nav>

      <div className="logo font-bold text-xl">
        <span className="text-blue">Holo</span>Gaze.
      </div>
      <div className="flex gap-7">
        <SearchBtn />
        <Basket />
      </div>
    </header>
  );
};

export default Header;
