"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo/logo.png";
import OffCanvasMenu from "./OffCanvasMenu";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const handleResizeHeader = (): void => {
      setToggleMenu(false);
    };

    window.addEventListener("resize", handleResizeHeader);

    return () => {
      window.removeEventListener("resize", handleResizeHeader);
    };
  }, []);

  // keep header sticky/visible
  const scrolled = true;

  return (
    <>
      <header className="aniamted menu-fixed header-area">
        <div className="container header__container">
          <div className="header__main">
            <Link href="/" className="logo">
              <Image src={logo} alt="AX Company - AI & Data Science Solutions" style={{ height: '42px', width: 'auto' }} />
            </Link>
            <div className="main-menu d-none d-lg-block">
              <nav>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="about">About</Link>
                  </li>
                  <li>
                    <Link href="/service">Services</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="d-none d-lg-inline-block">
              <Link href="contact" className="btn-one">
                Contact <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
            <div className="bars d-block d-lg-none">
              <i
                id="openButton"
                className="fa-solid fa-bars"
                onClick={handleToggleMenu}
              ></i>
            </div>
          </div>
        </div>
      </header>
      <OffCanvasMenu
        toggleMenu={toggleMenu}
        handleToggleMenu={handleToggleMenu}
      />
    </>
  );
};

export default Header;
