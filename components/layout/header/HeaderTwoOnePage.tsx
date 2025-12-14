"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo/logo-light.svg";
import one from "@/public/images/menu/home1-image.jpg";
import two from "@/public/images/menu/home2-image.jpg";
import three from "@/public/images/menu/home3-image.jpg";
import four from "@/public/images/menu/home4-image.jpg";
import OffCanvasTwoOnePage from "./OffCanvasTwoOnePage";

const HeaderTwoOnePage = () => {
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

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={
          (scrolled ? " aniamted menu-fixed" : " ") +
          " header-area header-two-area"
        }
      >
        <div className="container header__container">
          <div className="header__main">
            <Link href="/" className="logo">
              <Image src={logo} alt="logo" />
            </Link>
            <div className="main-menu d-none d-lg-block">
              <nav>
                <ul>
                  <li className="has-megamenu">
                    <Link href="/">Home</Link>
                    <ul className="sub-menu mega-menu menu-image">
                      <li>
                        <div className="image text-center">
                          <Image src={one} alt="Image" priority />
                          <div className="btn__group">
                            <Link href="/" className="btn-one">
                              Multi Page
                            </Link>
                            <Link
                              href="index-one-page"
                              className="btn-one mt-2"
                            >
                              One Page
                            </Link>
                          </div>
                          <h6 className="text-white">Home Page 01</h6>
                        </div>
                        <div className="image text-center">
                          <Image src={two} alt="Image" priority />
                          <div className="btn__group">
                            <Link href="index-2" className="btn-one">
                              Multi Page
                            </Link>
                            <Link
                              href="index-2-one-page"
                              className="btn-one mt-2"
                            >
                              One Page
                            </Link>
                          </div>
                          <h6 className="text-white">Home Page 02</h6>
                        </div>
                        <div className="image text-center">
                          <Image src={three} alt="Image" priority />
                          <div className="btn__group">
                            <Link href="index-3" className="btn-one">
                              Multi Page
                            </Link>
                            <Link
                              href="index-3-one-page"
                              className="btn-one mt-2"
                            >
                              One Page
                            </Link>
                          </div>
                          <h6 className="text-white">Home Page 03</h6>
                        </div>
                        <div className="image text-center">
                          <Image src={four} alt="Image" priority />
                          <div className="btn__group">
                            <Link href="index-dark" className="btn-one">
                              View Page
                            </Link>
                          </div>
                          <h6 className="text-white">Home Dark</h6>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="#about-two">About</Link>
                  </li>
                  <li>
                    <Link href="#service-two">Services</Link>
                  </li>
                  <li>
                    <Link href="#team-two">Team</Link>
                  </li>
                  <li>
                    <Link href="#faq-two">FAQ</Link>
                  </li>
                  <li>
                    <Link href="#blog-two">Blog</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="d-none d-xl-flex gap-4">
              <Link href="contact" className="btn-one">
                Get A Quote <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
              <div className="about-three__left-item d-flex flex-wrap gap-2 align-items-center">
                <div className="about-call-icon">
                  <span>
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_918_1337)">
                        <path
                          d="M5.41667 4.33337H9.75L11.9167 9.75004L9.20833 11.375C10.3685 13.7275 12.2725 15.6315 14.625 16.7917L16.25 14.0834L21.6667 16.25V20.5834C21.6667 21.158 21.4384 21.7091 21.0321 22.1154C20.6257 22.5218 20.0746 22.75 19.5 22.75C15.2742 22.4932 11.2885 20.6987 8.2949 17.7051C5.3013 14.7115 3.5068 10.7258 3.25 6.50004C3.25 5.9254 3.47827 5.3743 3.8846 4.96798C4.29093 4.56165 4.84203 4.33337 5.41667 4.33337Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M16.25 7.58337C16.8246 7.58337 17.3757 7.81165 17.7821 8.21798C18.1884 8.6243 18.4167 9.1754 18.4167 9.75004"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M16.25 3.25C17.9739 3.25 19.6272 3.93482 20.8462 5.15381C22.0652 6.37279 22.75 8.02609 22.75 9.75"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath>
                          <rect width="26" height="26" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
                <div className="info">
                  <span className="sm-font fw-600 text-white">Call Us Now</span>
                  <h5 className="text-white">+208-555-0112</h5>
                </div>
              </div>
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
      <OffCanvasTwoOnePage
        toggleMenu={toggleMenu}
        handleToggleMenu={handleToggleMenu}
      />
    </>
  );
};

export default HeaderTwoOnePage;
