"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo/logo-light.svg";
import one from "@/public/images/menu/home1-image.jpg";
import two from "@/public/images/menu/home2-image.jpg";
import three from "@/public/images/menu/home3-image.jpg";
import four from "@/public/images/menu/home4-image.jpg";
import OffCanvasMenu from "./OffCanvasMenu";

const HeaderThree = () => {
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
          " header-area header-three-area"
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
                    <Link href="/blog">Blog</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link href="blog">Blog Grid</Link>
                      </li>
                      <li>
                        <Link href="blog-standard">Blog Standard</Link>
                      </li>
                      <li>
                        <Link href="blog-details">Blog Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
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

export default HeaderThree;
