"use client";
import Image from "next/image";
import Link from "next/link";
import svgLogo from "@/public/images/logo/logo.png";

const OffCanvasMenu = ({ toggleMenu, handleToggleMenu }: any) => {

  return (
    <div
      id="targetElement"
      className={(toggleMenu ? " " : " sidebar__hide") + " sidebar-area"}
    >
      <div className="sidebar__overlay"></div>
      <Link href="/" className="logo mb-40">
        <Image src={svgLogo} alt="logo" style={{ height: '42px', width: 'auto' }} />
      </Link>
      <div className="mobile-menu overflow-hidden">
        <nav className="mean-nav">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="about">About</Link>
            </li>
            <li>
              <Link href="service">Services</Link>
            </li>
          </ul>
        </nav>
      </div>
      <ul className="info pt-40">
        <li>
          <i className="fa-solid primary-color fa-location-dot"></i>{" "}
          <Link href="/">
            Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United
            Arab Emirates
          </Link>
        </li>
        <li className="py-2">
          <i className="fa-solid primary-color fa-phone-volume"></i>{" "}
          <Link href="tel:+208-6666-0112">+208-6666-0112</Link>
        </li>
        <li>
          <i className="fa-solid primary-color fa-paper-plane"></i>{" "}
          <Link href="/">info@axionvate.com</Link>
        </li>
      </ul>
      <button
        id="closeButton"
        className="text-white"
        onClick={() => handleToggleMenu(false)}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};

export default OffCanvasMenu;
