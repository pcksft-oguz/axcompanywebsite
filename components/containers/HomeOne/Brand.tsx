"use client";
import Link from "next/link";

const Brand = () => {
  return (
    <div className="brand-area">
      <div className="container">
        <div className="brand__wrp text-center py-80">
          <h3 className="text-white mb-20">Looking for references?</h3>
          <p className="text-white opacity-75 mb-30">
            Contact us to learn more about our references.
          </p>
          <Link href="/contact" className="btn-one">
            Contact Us <i className="fa-regular fa-arrow-right-long"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Brand;
