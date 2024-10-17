"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Basket from "../UI/Basket";
import SearchBtn from "../UI/SearchBtn";
import Logo from "../UI/Logo";
import "./Header.scss";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);

  return (
    <header
      ref={headerRef}
      className="header max-w-screen-xl mx-auto w-full flex justify-between items-center p-6 lg:px-20 xl:px-[100px]"
    >
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
          <ul className="header-nav-list flex flex-col gap-8 cursor-pointer z-10">
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
      <Logo />
      <div className="flex gap-7 z-0">
        <SearchBtn />
        <Basket />
      </div>
    </header>
  );
};

export default Header;
