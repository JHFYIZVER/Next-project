"use client";
import React, { useState } from "react";
import Link from "next/link";

import Basket from "../UI/Basket";
import "./Header.scss";
import SearchBtn from "../UI/SearchBtn";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header max-w-screen-sm w-full flex justify-between items-center p-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={isOpen ? "burger active" : "burger"}
      >
        <i></i>
        <i></i>
        <i></i>
      </button>
      <nav className={isOpen ? "header-nav active" : "header-nav"}>
        <div>
          <ul className="header-nav-list flex flex-col gap-8 cursor-pointer">
            <Link className="nav-list-item" href="/">
              Home
            </Link>
            <Link className="nav-list-item" href="/Catalog">
              Catalog
            </Link>
            <Link className="nav-list-item" href="/Contact">
              Contact
            </Link>
            <Link className="nav-list-item" href="/Features">
              Features
            </Link>
          </ul>
        </div>
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
