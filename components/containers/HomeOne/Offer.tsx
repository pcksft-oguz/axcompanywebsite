import Link from "next/link";
import Image from "next/image";
import One from "@/public/images/shape/offer-shadow-shape.png";
import Two from "@/public/images/shape/offer-bg-shape-left.png";
import Three from "@/public/images/shape/offer-bg-shape-right.png";
import Four from "@/public/images/icon/section-title.png";
import Five from "@/public/images/shape/offter-item-shape-top.png";
import Six from "@/public/images/shape/offter-item-shape-bottom.png";
import Seven from "@/public/images/shape/offter-item-shape-top.png";

const Offer = () => {
  return (
    <section className="offer-area secondary-bg pt-120 pb-200">
      <div
        className="offer__shadow "
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        <Image src={One} alt="shadow" />
      </div>
      <div className="offer__shape-left">
        <Image
          data-aos="zoom-in-down"
          data-aos-delay="400"
          data-aos-duration="1500"
          src={Two}
          alt="shape"
          priority
        />
      </div>
      <div className="offer__shape-right">
        <Image
          data-aos="zoom-in-down"
          data-aos-delay="400"
          data-aos-duration="1500"
          src={Three}
          alt="shape"
          priority
        />
      </div>
      <div className="container">
        <div className="d-flex gap-4 flex-wrap align-items-center justify-content-between mb-95">
          <div className="section-header">
            <h5
              data-aos="fade-left"
              data-aos-delay="0"
              data-aos-duration="1500"
            >
              <Image className="me-1" src={Four} alt="icon" priority />
              Our offering
            </h5>
            <h2
              className="text-white "
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              Advanced Technologies for <br /> AI & Data Science
            </h2>
          </div>
          <Link
            href="service"
            className="btn-one "
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            Explore More <i className="fa-regular fa-arrow-right-long"></i>
          </Link>
        </div>
        <div className="row g-4">
          <div
            className="col-lg-2 col-md-4 col-sm-6 "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="0"
            data-aos-duration="1500"
          >
            <div className="offer__item">
              <div className="shape-top">
                <Image src={Five} alt="shape" priority />
              </div>
              <div className="shape-bottom">
                <Image src={Six} alt="shape" priority />
              </div>
              <h4 className="text-white mt-20">Artificial Intelligence</h4>
            </div>
          </div>
          <div
            className="col-lg-2 col-md-4 col-sm-6 "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="100"
            data-aos-duration="1500"
          >
            <div className="offer__item">
              <div className="shape-top">
                <Image src={Seven} alt="shape" priority />
              </div>
              <div className="shape-bottom">
                <Image src={Six} alt="shape" priority />
              </div>
              <h4 className="text-white mt-20">Machine Learning</h4>
            </div>
          </div>
          <div
            className="col-lg-2 col-md-4 col-sm-6 "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <div className="offer__item">
              <div className="shape-top">
                <Image src={Seven} alt="shape" priority />
              </div>
              <div className="shape-bottom">
                <Image src={Six} alt="shape" priority />
              </div>
              <h4 className="text-white mt-20">Big Data Analytics</h4>
            </div>
          </div>
          <div
            className="col-lg-2 col-md-4 col-sm-6 "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="300"
            data-aos-duration="1500"
          >
            <div className="offer__item">
              <div className="shape-top">
                <Image src={Seven} alt="shape" priority />
              </div>
              <div className="shape-bottom">
                <Image src={Six} alt="shape" priority />
              </div>
              <h4 className="text-white mt-20">Deep<br />Learning</h4>
            </div>
          </div>
          <div
            className="col-lg-2 col-md-4 col-sm-6 "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <div className="offer__item">
              <div className="shape-top">
                <Image src={Seven} alt="shape" priority />
              </div>
              <div className="shape-bottom">
                <Image src={Six} alt="shape" priority />
              </div>
              <h4 className="text-white mt-20">Neural Networks</h4>
            </div>
          </div>
          <div
            className="col-lg-2 col-md-4 col-sm-6 "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="500"
            data-aos-duration="1500"
          >
            <div className="offer__item">
              <div className="shape-top">
                <Image src={Seven} alt="shape" priority />
              </div>
              <div className="shape-bottom">
                <Image src={Six} alt="shape" priority />
              </div>
              <h4 className="text-white mt-20">Predictive Analytics</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
