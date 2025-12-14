"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo/logo.png";
import OffCanvasMenu from "./OffCanvasMenu";

const Header = () => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const handleResizeHeader = (): void => {
      setToggleMenu(false);
      setOpenSubMenu(null);
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
              <Image src={logo} alt="logo" style={{ height: '42px', width: 'auto' }} />
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
                  <li>
                    <Link href="/case">Pages</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link href="case">Case Study 01</Link>
                      </li>
                      <li>
                        <Link href="case-2">Case Study 02</Link>
                      </li>
                      <li>
                        <Link href="case-details">Case Study Details</Link>
                      </li>
                      <li>
                        <Link href="team">Our Team</Link>
                      </li>
                      <li>
                        <Link href="team-details">Team Details</Link>
                      </li>
                      <li>
                        <Link href="pricing">Pricing</Link>
                      </li>
                      <li>
                        <Link href="faq">FAQ&apos;s</Link>
                      </li>
                      <li>
                        <Link href="error">404 Error</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="d-none d-lg-inline-block">
              <Link href="contact" className="btn-one">
                Get A Quote <i className="fa-regular fa-arrow-right-long"></i>
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
