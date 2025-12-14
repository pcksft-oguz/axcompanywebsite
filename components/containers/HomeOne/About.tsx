"use client";
import Image from "next/image";
import Link from "next/link";
import Line from "@/public/images/shape/about-line.png";
import One from "@/public/images/about/about-image1.jpg";
import Two from "@/public/images/about/about-image2.jpg";
import Circle from "@/public/images/shape/about-circle.png";
import Three from "@/public/images/icon/section-title.png";
import Four from "@/public/images/icon/about-icon1.png";
import Five from "@/public/images/icon/about-icon2.png";
import Six from "@/public/images/about/about-info.png";

const About = () => {
  return (
    <>
      <section className="about-area sub-bg pt-120" id="about-section">
        <div
          className="about__shape "
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="1500"
        >
          <Image src={Line} alt="shape" priority />
        </div>
        <div className="container">
          <div className="row g-4">
            <div
              className="col-xl-6 "
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="about__left-item">
                <div className="image big-image">
                  <Image src={One} alt="Image" priority />
                </div>
                <div className="image sm-image">
                  <Image src={Two} alt="Image" priority />
                </div>
                <div className="circle-shape">
                  <Image src={Circle} alt="shape" priority />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="section-header mb-40">
                <h5
                  className=""
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="1500"
                >
                  <Image className="me-1" src={Three} alt="icon" priority />
                  ABOUT AX COMPANY
                </h5>
                <h2
                  className=""
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                  Leading the Future of AI & Data Science Innovation
                </h2>
                <p
                  className=""
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="1500"
                >
                  We are a premier Data Science and Artificial Intelligence company, specializing in advanced Machine Learning, 
                  sophisticated predictive analytics, and intelligent automation systems. Our world-class team of data scientists 
                  and AI engineers transforms complex data ecosystems into strategic competitive advantages, empowering businesses 
                  to make data-driven decisions that drive unprecedented growth and innovation.
                </p>
              </div>
              <div
                className="row g-4 "
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <div className="col-md-6">
                  <div className="about__right-item">
                    <div className="icon">
                      <Image src={Four} alt="icon" priority />
                    </div>
                    <div className="content">
                      <h4 className="mb-1">World-Class Experts</h4>
                      <p>Elite data scientists and AI engineers with industry-leading expertise</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about__right-item">
                    <div className="icon">
                      <Image src={Five} alt="icon" priority />
                    </div>
                    <div className="content">
                      <h4 className="mb-1">Enterprise Solutions</h4>
                      <p>Bespoke AI and ML models engineered for your unique business challenges</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="about__info mt-50 "
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-duration="1500"
              >
                <Link href="about" className="btn-one">
                  Explore More{" "}
                  <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
